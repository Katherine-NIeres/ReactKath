import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


const MyCard = (props) =>{
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        <Card.Text>
          {props.descripcion}
        </Card.Text>
        <Button variant="dark">{props.boton}</Button>
      </Card.Body>
    </Card>
  )
}

export default MyCard