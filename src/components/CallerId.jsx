// src/CallerId.js
import React, { useState } from 'react';
import axios from 'axios';

const CallerId = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchCallerId = async () => {
        const url = `https://caller-id4.p.rapidapi.com/search-mobile?q=${phoneNumber}&countryCode=SG&type=4&encoding=json`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '3557ccf150msh52a05552dd8a263p100aeejsn92a745277da1',
                'x-rapidapi-host': 'caller-id4.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.get(url, options);
            setData(response.data);
            setError(null);
        } catch (err) {
            setError('Failed to fetch data');
            setData(null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchCallerId();
    };

    return (
        <div>
            <h1>Caller ID Lookup</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter phone number"
                    required
                />
                <button type="submit">Search</button>
            </form>
            {error && <p>{error}</p>}
            {data && (
                <div>
                    <h2>Results:</h2>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default CallerId;
