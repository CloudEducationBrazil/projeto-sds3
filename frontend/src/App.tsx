//import React from 'react'; -- a partir da versão 17 do react não precisa do import
//import logo from './logo.svg';
//import './App.css';

import NavBar from 'assets/components/NavBar';
import Footer from 'assets/components/Footer';
import DataTable from 'assets/components/DataTable';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá mundo!!!</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
