import BarChart from "assets/components/Barchart";
import DataTable from "assets/components/Datatable/DataTable";
import DonutChart from "assets/components/Donutchart";
import Footer from "assets/components/Footer";
import NavBar from "assets/components/Navbar";
function App() {
  return (
    <>
    <NavBar />
    <div className="container">
      <h1 className="text-primary py-3">Dashboard de vendas</h1>
      <div className="row px-3">

        <div className="col-sm-6 text-center text-secondary">
          <h5>Taxa de sucesso</h5>
          <BarChart />
        </div>
        <div className="col-sm-6 text-center text-secondary">
          <h5>Todas as vendas</h5>
          <DonutChart />
        </div>

      </div>

      <div className="py-3">
        <h2 className="text-primary">Tabela de vendas</h2>
      </div>
      <DataTable />
    </div>
    <Footer />
    </>
  );
}

export default App;
