import React, { useEffect, useState, useContext } from 'react';

import { Switch, Route, NavLink } from 'react-router-dom';

import { SocketContext } from './context';
import { Stamina, Icons, Form } from './components'

const REFRESH_INTERVAL = 1e3;
function App() {
  const { socket } = useContext(SocketContext);
  const [data, setData] = useState({
    "elements": {
    "icons":
    {
      "Water": {
        "key":"Water",
        "level": 1,
        "up": 1,
        "down": 0
      },
      "Food": {
        "key":"Food",
        "level": 1,
        "up": 1,
        "down": 0
      },
      "Temp": {
        "key":"Temp",
        "level": 2,
        "up": 1,
        "down": 0
      },
      "Blood": {
        "key":"Blood",
        "level": 1,
        "up": 1,
        "down": 0
      },
      "Health": {
        "key": "Health",
        "level": 1,
        "up": 1,
        "down": 0
      }
    },
    "stamina": {
      "level": 90
    }
    }
  });

  useEffect(() => {
    setInterval(() => {
      socket.emit('refresh');
    }, REFRESH_INTERVAL);
    socket.on('refresh', (data) => {
      console.log(data);
      setData(data);
    });
  }, [socket]);

  return (
    <Switch>
      <Route exact path="/">
        <NavLink to="form" >Form </NavLink>
        <Stamina
          data={data.elements['stamina']}
        />
        <Icons
          icons={data.elements['icons']}
        />
      </Route>
      <Route exact path="/form">
        <NavLink to="/" style={{ marginBottom: 30, color: '#fff000' }}>Icons </NavLink>
        <Form
          data={data.elements}
        />
      </Route>
    </Switch>
  );
}

export default App;
