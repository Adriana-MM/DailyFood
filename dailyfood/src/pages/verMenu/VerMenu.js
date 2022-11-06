import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Header from "../../componets/header/Header";
import Footer from "../../componets/footer/Footer";
import './verMenu.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function VerMenu(){
    return(
        <div className="verMenu">
            <Header/>
            <div className="menu">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="precio">
                                <p>Precio 12.000</p>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="resumen">
                                <p>Sopa</p>
                                <table>
                                    <thead>--</thead>
                                    <tbody>
                                        <tr>
                                            <td>Arroz</td>
                                        </tr>
                                        <tr>
                                            <td>Pastas</td>
                                        </tr>
                                        <tr>
                                            <td>Cuchuco</td>
                                        </tr>
                                        <tr>
                                            <td>Ajiaco</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="resumen">
                                <p>Principio</p>
                                <table>
                                    <thead>--</thead>
                                    <tbody>
                                        <tr>
                                            <td>Lentejas</td>
                                        </tr>
                                        <tr>
                                            <td>Frijol</td>
                                        </tr>
                                        <tr>
                                            <td>Alberja</td>
                                        </tr>
                                        <tr>
                                            <td>Pastas</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="resumen">
                                <p>Carnes</p>
                                <table>
                                    <thead>--</thead>
                                    <tbody>
                                        <tr>
                                            <td>Pechuga</td>
                                        </tr>
                                        <tr>
                                            <td>Higado</td>
                                        </tr>
                                        <tr>
                                            <td>Pescado</td>
                                        </tr>
                                        <tr>
                                            <td>Lomo</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="resumen">
                            <p>Jugos</p>
                                <table>
                                    <thead>--</thead>
                                    <tbody>
                                        <tr>
                                            <td>Mora</td>
                                        </tr>
                                        <tr>
                                            <td>Limonada</td>
                                        </tr>
                                        <tr>
                                            <td>Mango</td>
                                        </tr>
                                        <tr>
                                            <td>Fresa</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer/>
        </div>
    );
}

export default VerMenu;