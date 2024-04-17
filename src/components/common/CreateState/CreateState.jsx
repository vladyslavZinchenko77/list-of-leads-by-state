import { useState } from 'react'

import { TextField, Button, Box, Typography } from '@mui/material'
const CreateState = () => {
  const [stateName, setStateName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddState({ name: stateName })
    setStateName('')
  }
  return (
    <>
      <Typography style={{marginBottom: 24}}>Create State</Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        display="flex"
        alignItems="center"
      >
        <TextField
          label="State Name"
          variant="outlined"
          value={stateName}
          onChange={(e) => setStateName(e.target.value)}
          style={{ marginRight: '16px' }}
        />
        <Button variant="contained" color="primary" type="submit">
          Add State
        </Button>
      </Box>
    </>
  )
}

export default CreateState
