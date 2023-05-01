import React, { useState, useEffect } from 'react';
import api from '../../utils/api';

function BOM() {
  const [boms, setBoms] = useState([]);

  useEffect(() => {
    api.planning.product.list().then((res) => console.log(res));
  }, []);

  return <div>BOM</div>;
}

export default BOM;
