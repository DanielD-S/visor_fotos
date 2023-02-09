import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Foto from './Foto';
import MiContexto from '../assets/Contexts/MiContexto';

const Galeria = ({fav = false}) => {
    const {fotos} = useContext(MiContexto);

    return (
        <Container>
            <Row>
                {fotos.filter((f) => {
                    if(fav){
                        return f.liked?f:null;
                    }else {
                        return f;
                    }
                }).map ((f)=>{
                   return <Col key={f.id}><Foto fav={fav} foto={f}></Foto></Col>
                })}
            </Row>
        </Container>
    )
}

export default Galeria