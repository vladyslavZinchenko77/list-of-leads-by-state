import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import "./NotFound.scss"

const NotFound = () => {
  return (
    <Container  className='not-found'>
      <Typography variant="h4" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Button variant="contained" component={Link} to="/" color="primary">
        Go to Home
      </Button>
    </Container>
  );
};

export default NotFound;
