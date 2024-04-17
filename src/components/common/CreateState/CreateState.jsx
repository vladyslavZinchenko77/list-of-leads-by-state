import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const CreateState = ({ onAddState }) => {
  const [stateName, setStateName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAddState && stateName.trim() !== '') { 
      onAddState({ name: stateName });
      setStateName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
      <Typography>Create State</Typography>
      <Box flexGrow={1} mx={2}> 
        <TextField
          label="State Name"
          variant="outlined"
          value={stateName}
          onChange={(e) => setStateName(e.target.value)}
          fullWidth
        />
      </Box>
      <Button variant="contained" color="primary" type="submit">
        Add State
      </Button>
    </form>
  );
};

export default CreateState;
