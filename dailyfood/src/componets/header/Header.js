import './header.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import gorro from "../../img/gorro.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Header() {
    return(
        <Container fluid>
            <Row className='header-menu'>
                <Col lg={12} className="bar">
                    
                </Col>
                <Col lg={2} className="title">
                    <Link to={"/"}>DailyFood 
                    <img
                    className=""
                    src={gorro}
                    alt="Imagen"
                    />
                    </Link>
                </Col>
                <Col lg={7} className="weeks">
                    <Link to={"/verMenu?dia=lunes"}>Lunes</Link>
                    <Link to={"/verMenu?dia=martes"}>Martes</Link>
                    <Link to={"/verMenu?dia=miercoles"}>Miercoles</Link>
                    <Link to={"/verMenu?dia=jueves"}>Jueves</Link>
                    <Link to={"/verMenu?dia=viernes"}>Viernes</Link>
                    <Link to={"/verMenu?dia=sabado"}>Sábado</Link>
                    <Link to={"/verMenu?dia=domingo"}>Domingo</Link>
                </Col>
                <Col lg={3} className="login">
                    <Link to={"/login"}>Iniciar sesión</Link>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;