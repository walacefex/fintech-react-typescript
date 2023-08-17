import React from 'react';
import { UserContextProvider } from './Context/UserContext';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <UserContextProvider>
      <Header />
      <Content />
    </UserContextProvider>
  );
}

export default App;