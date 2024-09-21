import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [roomCode, setRoomCode] = useState('');
    const navigate = useNavigate();

    // Function to generate a random room code
    const generateRoomCode = () => {
        const generatedCode = Math.random().toString(36).substring(2, 10).toUpperCase(); // Generates a random string
        setRoomCode(generatedCode);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/room/${roomCode}`);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form
                className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm"
                onSubmit={handleSubmit}
            >
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Enter Room Code:
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Room Code"
                        required
                        value={roomCode}
                        onChange={(e) => setRoomCode(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                
                {/* Button to generate room code */}
                <button
                    type="button"
                    onClick={generateRoomCode}
                    className="w-full mb-4 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
                >
                    Generate Room Code
                </button>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Enter Room
                </button>
            </form>
        </div>
    );
};

export default HomePage;
