import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import {FormattedMessage} from 'react-intl'

function Space(props) {
    const imageUrl = "https://static7.depositphotos.com/1024768/698/v/950/depositphotos_6988905-stock-illustration-cartoon-house.jpg"
  return (
      <Card style={{ width: '18rem' }}>
        <Card.Img style={{width: "180px"}} variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title style={{fontWeight: "bold"}}>{props.space.name}</Card.Title>
          <Card.Text>{props.space.address}</Card.Text>
          <Link to={"/spaces/" + props.space.id}> 
            <Button variant="primary"><FormattedMessage id='Rooms'/></Button>
          </Link>
         </Card.Body>
      </Card>
  );
}

export default Space;