import React from 'react';
import './reset.css';
import './App.css';
import StarWarProvider from './context/StarWarProvider';
import Table from './components/Table';

function App() {
  return (
    <StarWarProvider>
      <Table />
    </StarWarProvider>
  );
}

export default App;
