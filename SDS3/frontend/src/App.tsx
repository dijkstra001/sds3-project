import DataTable from "assets/components/Datatable/DataTable";
import Footer from "assets/components/Footer";
import NavBar from "assets/components/Navbar";
function App() {
  return (
    <>
    <NavBar />
    <div className="container">
      <h1 className="text-primary">Hello world.</h1>
      <DataTable />
    </div>
    <Footer />
    </>
  );
}

export default App;
