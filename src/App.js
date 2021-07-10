import React, { useEffect, useState } from 'react';
import { SkynetClient } from 'skynet-js';
import { ContentRecordDAC } from '@skynetlabs/content-record-library';

import TodoList from "./components/TodoList";
import Login from './components/Login';


const portal =
  window.location.hostname === 'localhost' ? 'https://siasky.net' : undefined;

const client = new SkynetClient(portal);

const contentRecord = new ContentRecordDAC();

function App() {
    const dataDomain = 'localhost';

    const [loading, setLoading] = useState(false);

    const [filePath, setFilePath] = useState();
    const [dataKey, setDataKey] = useState('');
    const [mySky, setMySky] = useState();
    const [loggedIn, setLoggedIn] = useState(null);
    const [userID, setUserID] = useState();

    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems(prevData => {
            return [...prevData, input];
        });
        
        setInput("");
    }

    const removeItem = (id) => {
        setItems(prevData => {
            return prevData.filter((item, index) => {
                return index !== id;
            })
        });
    }


    const saveData = async () => {
        console.log('data Send to MySky');
        setLoading(true);
    
        const jsonData = {
            items: items,
        };

        console.log(jsonData);

        await handleMySkyWrite(jsonData);
    
        setLoading(false);
      };

      const handleMySkyWrite = async (jsonData) => {
        try {
          console.log('userID', userID);
          console.log('filePath', filePath);
          await mySky.setJSON(filePath, jsonData);
        } catch (error) {
          console.log(`error with setJSON: ${error.message}`);
        }

        try {
            await contentRecord.recordNewContent({
              items: jsonData.items,
            });
          } catch (error) {
            console.log(`error with CR DAC: ${error.message}`);
          }
      };

      const handleMySkyLogin = async () => {
        const status = await mySky.requestLoginAccess();
    
        setLoggedIn(status);
    
        if (status) {
          setUserID(await mySky.userID());
          await loadData();
        }
    
      };

      const handleMySkyLogout = async () => {
        await mySky.logout();
    
        setLoggedIn(false);
        setUserID('');

        console.log("Logout succsesfull");
      };

  const loadData = async () => {
    setLoading(true);
    console.log('Loading user data from SkyDB');

    const { data } = await mySky.getJSON(filePath);

    if (data) {
      setItems(data.items);
      console.log('User data loaded from SkyDB!');
    } else {
      console.error('There was a problem with getJSON');
    }

    setLoading(false);
  };

  const todoListProps = {
    input,
    setInput,
    items,
    addItem,
    removeItem,
    handleMySkyLogout,
    saveData,
    loading,
  };

  useEffect(() => {
        setFilePath(dataDomain + '/' + dataKey);
    }, [dataKey]);

    useEffect(() => {
        async function initMySky() {
            try {
                const mySky = await client.loadMySky(dataDomain);

                await mySky.loadDacs(contentRecord);
        
                const loggedIn = await mySky.checkLogin();
        
                setMySky(mySky);
                setLoggedIn(loggedIn);
                if (loggedIn) {
                  setUserID(await mySky.userID());
                }
              } catch (e) {
                console.error(e);
              }
          }

          initMySky();
    },  []);

    return (
         <div>
             {(loggedIn !== true) ? <Login handleMySkyLogin={handleMySkyLogin}/> : <TodoList {...todoListProps}/>}
         </div>
    );
}

export default App;
