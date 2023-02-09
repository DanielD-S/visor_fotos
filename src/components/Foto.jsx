import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import { FaHeart } from 'react-icons/fa';
import MiContexto from '../assets/Contexts/MiContexto';

const Foto = ({fav,foto}) => {
    const {fotos,setFotos} = useContext(MiContexto);

    const setFavorito = (id) =>{
    const FotoClickeada = fotos.findIndex((f) => f.id === id);
    fotos[FotoClickeada].liked = !fotos[FotoClickeada].liked;
    setFotos([...fotos]);
    }

  return (
    <Card  style={{ position: "relative", width: '25vw', margin:'10px'}}>
    <Card.Img variant="top" src={foto.src.small} style={{ height: "250px", width: "100%" }}/>
    {!fav && <FaHeart onClick={() => setFavorito(foto.id)} style={{ position: "absolute", bottom: "220px", left: "335px",fontSize: "20px", color: foto.liked ? "red" : "white" }}/>}
    <Card.Body style={{ position: "absolute", bottom: "35px", left: "20px", padding: "10px" ,color:'white'}} >
      {foto.alt}
    </Card.Body>
    
  </Card>
  )
}

export default Foto