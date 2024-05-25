// frontend/src/DivisionCredentials.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DivisionCredentials = ({ divisionId }) => {
  const [credentials, setCredentials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/credentials/divisions/${divisionId}/credentials`);
        setCredentials(res.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [divisionId]);

  return (
    <div>
      <h2>Division Credentials</h2>
      <ul>
        {credentials.map((credential) => (
          <li key={credential._id}>
            Name: {credential.name}, Username: {credential.username}, Password: {credential.password}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DivisionCredentials;
