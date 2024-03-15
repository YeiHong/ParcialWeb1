import Card from 'react-bootstrap/Card';
import TablaDinamica from './TablaDinamica';


function Room(props) {
    const imageUrl = "https://static7.depositphotos.com/1024768/698/v/950/depositphotos_6988905-stock-illustration-cartoon-house.jpg"
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img style={{width: "180px"}} variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title style={{fontWeight: "bold"}}>{props.room.name}</Card.Title>
          <TablaDinamica datos={props.room.devices}/>
         </Card.Body>
      </Card>
    </>
  );
}


export default Room;