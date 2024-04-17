import React from 'react'
import { Box, Typography, LinearProgress } from '@mui/material'

const LeadsProgressBar = ({ leads, totalLeads }) => {
  const progress = (leads / totalLeads) * 100

  return (
    <Box display="flex" alignItems="center" style={{marginRight: 20}}>
      <Typography variant="body2" color="textSecondary"  style={{marginRight: 4}}>
        {leads}
      </Typography>
      <Typography style={{marginRight: 4}}>/</Typography>
      <Typography variant="body2" color="textSecondary"style={{marginRight: 20}}>
        {`${totalLeads}`}
      </Typography>
      <Box
        minWidth={'80%'}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box width="100%" mr={1}>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
        <Typography
          variant="body2"
          color="textSecondary"
         
        >{`${Math.round(progress)}%`}</Typography>
      </Box>
    </Box>
  )
}

export default LeadsProgressBar
