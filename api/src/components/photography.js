
import { useEffect, useState } from 'react';

function Photography(){
    function loadPhotography(){
        fetch('https://www.jordanurbanyphotography.com')
        .then(response => response.json())
        .then(data => setPhotography(data));
    }


const [photography, setPhotography] = useState([]);
useEffect(() => {loadPhotography()});

return <h1>Photography</h1>

}

export default Photography;

