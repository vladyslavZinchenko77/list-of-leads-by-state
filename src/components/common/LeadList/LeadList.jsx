import React from 'react'

import { Typography, List, ListItem, ListItemText } from '@mui/material'

const LeadList = ({ leads }) => {
  return (
    <>
      <Typography variant="subtitle2" gutterBottom>
        Leads
      </Typography>
      <List dense>
        {leads.map((lead) => (
          <ListItem key={lead.id}>
            <ListItemText primary={lead.name} />
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default LeadList
