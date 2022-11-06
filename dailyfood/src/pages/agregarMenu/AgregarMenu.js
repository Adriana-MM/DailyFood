import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Header from "../../componets/header/Header";
import Footer from "../../componets/footer/Footer";
import './agregarMenu.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AgregarMenu(){
    return(
        <div className="agregarMenu">
            <Header/>
            <Container>
                <Row>
                    <Col lg={12} className="formulario">
                       
                            <center>
                                <form>
                                    <label>Precio</label> <input type="number" name="precio" id="precio"/> <br/>
                                    <select name="dia" id="dia">
                                        <option>Lunes</option>
                                        <option>Martes</option>
                                        <option>Miercoles</option>
                                        <option>Jueves</option>
                                        <option>Viernes</option>
                                        <option>Sábado</option>
                                        <option>Domingo</option>
                                    </select> <br/>
                                    <input type="submit" name="envioPrecio"/>
                                </form>
                            </center>
                       
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} className="formulario">
                        <center>
                        <p>Sopas</p>
                        <form>
                            <label>Descripción</label> 
                            <input type="text" name="sopa" id="sopa"/><br/>
                            <select name="dia" id="dia">
                                <option>Lunes</option>
                                <option>Martes</option>
                                <option>Miercoles</option>
                                <option>Jueves</option>
                                <option>Viernes</option>
                                <option>Sábado</option>
                                <option>Domingo</option>
                            </select>
                            <br/>
                            <input type="submit" name="envioSopa" id="envioSopa"/>
                        </form>
                        </center>
                    </Col>
                    <Col lg={6} className="formulario">
                        <center>
                    <p>Principio</p>
                        <form>
                            <label>Descripción</label> 
                            <input type="text" name="principio" id="principio"/><br/>
                            <select name="dia" id="dia">
                                <option>Lunes</option>
                                <option>Martes</option>
                                <option>Miercoles</option>
                                <option>Jueves</option>
                                <option>Viernes</option>
                                <option>Sábado</option>
                                <option>Domingo</option>
                            </select>
                            <br/>
                            <input type="submit" name="envioPrincipio" id="envioPrincipio"/>
                        </form>
                        </center>
                    </Col>
                    <Col lg={6} className="formulario">
                        <center>
                        <p>Carne</p>
                        <form>
                            <label>Descripción</label> 
                            <input type="text" name="carne" id="carne"/><br/>
                            <select name="dia" id="dia">
                                <option>Lunes</option>
                                <option>Martes</option>
                                <option>Miercoles</option>
                                <option>Jueves</option>
                                <option>Viernes</option>
                                <option>Sábado</option>
                                <option>Domingo</option>
                            </select>
                            <br/>
                            <input type="submit" name="envioCarne" id="envioCarne"/>
                        </form>
                        </center>
                    </Col>
                    <Col lg={6} className="formulario">
                        <center>
                        <p>Jugos</p>
                        <form>
                            <label>Descripción</label> 
                            <input type="text" name="jugos" id="jugos"/><br/>
                            <select name="dia" id="dia">
                                <option>Lunes</option>
                                <option>Martes</option>
                                <option>Miercoles</option>
                                <option>Jueves</option>
                                <option>Viernes</option>
                                <option>Sábado</option>
                                <option>Domingo</option>
                            </select>
                            <br/>
                            <input type="submit" name="envioJugo" id="envioJugo"/>
                        </form>
                        </center>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
}

export default AgregarMenu;