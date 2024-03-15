import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Room from "./Room";
import { FormattedMessage } from 'react-intl';


function Rooms(){
    const [rooms, setRooms] = useState([]);
    const params = useParams();
    useEffect(() => {
        const url = "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json"
        fetch(url)
        .then(data => data.json())
        .then(data => {
            const dataRooms = data.filter(room => room.homeId === params.roomsId)
            setRooms(dataRooms);
        });
    }, []);

    return(
        <div>
            <h2><FormattedMessage id='My Rooms'/></h2>
            <div style={{ display: "flex" }}>
                {rooms.map((room) => (
                    <Room key={room.name} room={room}></Room>
                    ))}
            </div>
        </div>
    );
}

export default Rooms;