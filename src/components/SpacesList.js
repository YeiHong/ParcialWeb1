import { useEffect, useState } from "react";
import Space from "./Space";
import { FormattedMessage } from 'react-intl';

function SpaceList(){
    const [spaces, setSpaces] = useState([]);
    useEffect(() => {
        const url = "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json"
        fetch(url)
        .then(data => data.json())
        .then(data => {
            setSpaces(data);
        });
    }, []);

    return(
        <div>
            <h2><FormattedMessage id='My Spaces'/></h2>
            <div style={{ display: "flex" }}>
            {spaces.map((space) => (
                <Space key={space.id} space={space}></Space>
            ))}
            </div>
        </div>
    );
}

export default SpaceList;