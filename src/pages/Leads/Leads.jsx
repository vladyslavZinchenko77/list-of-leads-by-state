import React, { useState, useEffect } from 'react'
import { Container, Typography, Grid, Box } from '@mui/material'
import { getStates, addState } from '../../services/apiService'
import LeadsProgressBar from '../../components/common/LeadsProgressBar/LeadsProgressBar'
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

  const totalLeads = states.reduce((total, state) => {
    const stateLeads = state.zones.reduce((stateTotal, zone) => {
      return stateTotal + zone.leads.length
    }, 0)
    return total + stateLeads
  }, 0)

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Lead Management
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CreateState onAddState={handleAddState} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <LeadsProgressBar leads={totalLeads} totalLeads={395} />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <StateList states={states} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Leads
