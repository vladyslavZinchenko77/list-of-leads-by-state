import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const EditStateForm = ({ state, onEditState, onCancel }) => {
  const [stateNameInput, setStateNameInput] = useState(state.name);

  const handleSubmit = () => {
    onEditState(state.id, stateNameInput);
  };

  return (
    <div>
      <TextField
        label="State Name"
        variant="outlined"
        value={stateNameInput}
        onChange={(e) => setStateNameInput(e.target.value)}
        fullWidth
      />
      <div style={{ marginTop: 8 }}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Save
        </Button>
        <Button variant="outlined" onClick={onCancel} style={{ marginLeft: 8 }}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default EditStateForm 