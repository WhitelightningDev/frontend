import React, { useState } from 'react';
import axios from 'axios';

const AddCredentialForm = ({ divisionId }) => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
  });

  const { name, username, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/api/credentials/divisions/${divisionId}/credentials`, formData);
      // Refresh credentials list or perform any other action upon successful addition
      setFormData({ name: '', username: '', password: '' });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2>Add Credential</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={name} onChange={onChange} required />
        </div>
        <div>
          <label>Username</label>
          <input type="text" name="username" value={username} onChange={onChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={onChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddCredentialForm;
