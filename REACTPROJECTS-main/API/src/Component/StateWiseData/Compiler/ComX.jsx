import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ComX() {
    const [num, setNum] = useState(1);     
    const [name, setName] = useState('');
    const [moves, setMoves] = useState(0);
    const [imageUrl, setImageUrl] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
                setName(res.data.name);
                setMoves(res.data.moves.length);  
                setImageUrl(res.data.sprites.front_default);   
                setError(null);
            } catch (err) {
                setError('Failed to fetch data');
                setName('');
                setMoves(0);
                setImageUrl('');  
            }
        }

        getData();
    }, [num]); 

    return (
        <div>
            <h1>You choose Num <span style={{ color: "red" }}>{num}</span> value</h1>
            <h1>My name is <span style={{ color: "red" }}>{name || '...'}</span> value</h1>
            <h1>I have <span style={{ color: "red" }}>{moves || '...'} moves</span></h1>

            <select value={num} onChange={(event) => setNum(event.target.value)}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="3">3</option>
            </select>

            {imageUrl && <img src={imageUrl} alt={name} height={200} />}
            {error && <p>{error}</p>}
        </div>
    );
}

export default ComX;
