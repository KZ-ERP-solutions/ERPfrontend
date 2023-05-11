import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import api from '../../utils/api';

function Materials() {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    api.planning.material
      .list()
      .then((res) => {
        console.log(res);
        setMaterials(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container maxWidth="100%">
      <h1>hi</h1>
    </Container>
  );
}

export default Materials;
