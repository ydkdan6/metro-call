import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 
const HomePage = () => {
    const [roomCode, setRoomCode] = useState('');
    const navigate =useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        
        navigate(`/room/${roomCode}`);
    }
    return (
        <div className='home-page'>
            <form className='form' onSubmit={handleSubmit}>
                <div>
                    <label>Enter Room Code: </label>
                    <input type='text'
                     placeholder='Enter Room Code'
                     required 
                     value={roomCode}
                     onChange={e => setRoomCode(e.target.value)}
                    />
                </div>
                <button type='submit'>Enter Room</button>
            </form>
        </div>
    )
}

export default HomePage;