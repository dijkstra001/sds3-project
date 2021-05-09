import Footer from "assets/components/Footer";
import NavBar from "assets/components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">Dashboard de vendas</h1>
                    <p className="lead">Analise o desempenho das suas vendas por diferentes perspectivas</p>
                    <hr />
                    <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
                    <Link className="btn btn-primary btn-large" to="/dashboard">Acessar o dashboard</Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;