//import React from 'react'; -- a partir da versão 17 do react não precisa do import
//import logo from './logo.svg';
//import './App.css';

import NavBar from 'assets/components/NavBar';
import Footer from 'assets/components/Footer';
import DataTable from 'assets/components/DataTable';
import BarChart from 'assets/components/BarChart';
import DonutChart from 'assets/components/DonutChart';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 text-center text-secondary>
              Taxa de Sucesso (%)
            </h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 text-center text-secondary>
              Todas as Vendas (%)
            </h5>
            <DonutChart />
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary">Todas as Vendas</h2>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
