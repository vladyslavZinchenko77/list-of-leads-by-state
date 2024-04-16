import React from 'react'
import { Box, Typography, LinearProgress } from '@mui/material'

const LeadsProgressBar = ({ leads, totalLeads }) => {
  const progress = (leads / totalLeads) * 100

  return (
    <Box display="flex" alignItems="center">
      <Typography variant="body2" color="textSecondary">
        {leads}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        /{`${totalLeads}`}
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
