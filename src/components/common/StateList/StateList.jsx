import React from 'react'

import { Card, CardContent, Typography, Grid  } from '@mui/material'
import ZoneList from '../ZoneList/ZoneList'
const StateList = ({ states }) => {
  return (
    <Grid container spacing={3}>
      {states.map((state) => (
        <Grid item xs={12} sm={6} md={4} key={state.id}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {state.name}
              </Typography>
              <ZoneList zones={state.zones} />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default StateList
