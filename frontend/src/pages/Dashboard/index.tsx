import NavBar from 'components/NavBar';
import DataTable from 'components/DataTable';
import Footer from 'components/Footer';
import DonutChart from 'components/DonutChart';
import BarChart from 'components/BarChart';

const Dashboard = () => {
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
};

export default Dashboard;
