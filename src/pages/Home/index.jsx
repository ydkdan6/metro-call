import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './homePage.css'; // Import the CSS file

const HomePage = () => {
    const [roomCode, setRoomCode] = useState('');
    const navigate = useNavigate();

    // Function to generate a random room code
    const generateRoomCode = () => {
        const generatedCode = Math.random().toString(36).substring(2, 10).toUpperCase();
        setRoomCode(generatedCode);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/room/${roomCode}`);
    };

    return (
        <div className="home-page">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Enter Room Code:</label>
                    <input
                        type="text"
                        placeholder="Enter Room Code"
                        required
                        value={roomCode}
                        onChange={(e) => setRoomCode(e.target.value)}
                        className="input-field"
                    />
                </div>
                
                <button
                    type="button"
                    onClick={generateRoomCode}
                    className="generate-button"
                >
                    Generate Room Code
                </button>

                <button
                    type="submit"
                    className="submit-button"
                >
                    Enter Room
                </button>
            </form>
        </div>
    );
};

export default HomePage;
