import React from 'react';
import { Container, Typography, Link, Box } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{marginTop: "24px"}}>
      <Box bgcolor="primary.main" color="white" py={4}>
        <Container maxWidth="lg">
          <Typography variant="subtitle1" align="center" component="p">
            © {new Date().getFullYear()} Test task
          </Typography>
          <Typography variant="subtitle1" align="center" component="p">
            Made with ❤️ by <p>Vlad Zinchenko</p>
          </Typography>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
