import React, { useEffect, useState } from 'react';
import { SkynetClient } from 'skynet-js';

import TodoList from "./components/TodoList";
import Login from './components/Login';


const portal =
  window.location.hostname === 'localhost' ? 'https://siasky.net' : undefined;

const client = new SkynetClient(portal);

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

    function addItem(event) {
        setItems(prevData => {
            return [...prevData, input];
        });
        
        setInput("");
    }

    function removeItem(id) {
        setItems(prevData => {
            return prevData.filter((item, index) => {
                return index !== id;
            })
        });
    }

    useEffect(() => {
        setFilePath(dataDomain + '/' + dataKey);
    }, [dataKey]);

    useEffect(() => {
        async function initMySky() {
            try {
              const mySky = await client.loadMySky(dataDomain);
      
              setMySky(mySky);

              if (loggedIn) {
                setUserID(await mySky.userID());
              }
            } catch (e) {
              console.error(e);
            }
          }

          initMySky();
    },  []);

    const submitForm = async (event) => {
        event.preventDefault();
        console.log('form submitted');
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
      };

      const handleMySkyLogin = async () => {
        const status = await mySky.requestLoginAccess();
    
        setLoggedIn(status);
    
        if (status) {
          setUserID(await mySky.userID());
        }
    
      };

      const handleMySkyLogout = async () => {
        await mySky.logout();
    
        setLoggedIn(false);
        setUserID('');

        console.log("Logout succsesfull");
        window.location.reload();
      };

  const loadData = async (event) => {
    event.preventDefault();
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
    submitForm,
    loadData,
    handleMySkyLogout,
  };

    return (
         <div>
             {(loggedIn !== true) ? <Login handleMySkyLogin={handleMySkyLogin}/> : <TodoList {...todoListProps}/>}
         </div>
    );
}

export default App;
