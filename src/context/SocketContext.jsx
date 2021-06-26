import React, { createContext } from 'react';
import socketIOClient from 'socket.io-client';

const SocketContext = createContext({ socket: null });

const socketUrl = process.env.NODE_ENV == 'development' ? 'http://localhost:3001' : `${window.location.protocol}//${window.location.host}`;

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`Socket: ${socketUrl}`);

const SocketProvider = ({ children }) => {
  const socket = socketIOClient(socketUrl);
  return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>;
};

export { SocketContext, SocketProvider };
