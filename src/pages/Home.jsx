import { Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) navigate('/planning');
    else navigate('/login');
  }, []);

  return (
    <Container>
      <Typography>KEL ERP</Typography>
      <Link to="/marketing">Marketing Department</Link>
      <br />
      <Link to="/planning">Planning Department</Link>
    </Container>
  );
}

export default Home;
