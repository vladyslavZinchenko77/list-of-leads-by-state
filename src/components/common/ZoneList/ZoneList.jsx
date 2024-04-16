import React from 'react'
import { Typography, List, ListItem, ListItemText } from '@mui/material'
import LeadList from '../LeadList/LeadList'

const ZoneList = ({ zones }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Zones
      </Typography>
      <List>
        {zones.map((zone) => (
          <ListItem key={zone.id}>
            <ListItemText
              primary={zone.name}
              secondary={<LeadList leads={zone.leads} />}
            />
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default ZoneList
