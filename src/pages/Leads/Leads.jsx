import {useState, useEffect } from 'react'
import { Container, Typography, Grid } from '@mui/material'
import { getStates, addState  } from '../../services/apiService'

import CreateState from '../../components/common/CreateState/CreateState'
import StateList from '../../components/common/StateList/StateList'

const Leads = () => {
  const [states, setStates] = useState([])

  useEffect(() => {
    fetchStates()
  }, [])

  const fetchStates = async () => {
    const states = await getStates()
    setStates(states)
  }

  const handleAddState = async (newState) => {
    const addedState = await addState(newState)
    setStates([...states, addedState])
  }

  return (
    <div>
      <Container>
        <Typography variant="h4" gutterBottom>
          Lead Management
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <CreateState onAddState={handleAddState} />
          </Grid>
          <Grid item xs={12}>
            <StateList states={states} />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Leads
