import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const EditZoneForm = ({ zone, onEditZone, onCancel }) => {
  const [zoneNameInput, setZoneNameInput] = useState(zone.name);

  const handleSubmit = () => {
    onEditZone(zone.id, zoneNameInput);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <TextField
        label="Zone Name"
        variant="outlined"
        value={zoneNameInput}
        onChange={(e) => setZoneNameInput(e.target.value)}
        size="small"
        style={{ marginRight: 8 }}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit} size="small">
        Save
      </Button>
      <Button variant="outlined" onClick={onCancel} size="small" style={{ marginLeft: 8 }}>
        Cancel
      </Button>
    </div>
  );
};

export default EditZoneForm