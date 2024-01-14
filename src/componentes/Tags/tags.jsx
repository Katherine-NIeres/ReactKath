import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const tags = (props) => {

    return (
        <Card><Button variant="dark">{props.boton}</Button></Card>
        
    )

}

export default tags