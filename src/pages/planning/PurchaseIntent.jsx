import React, { useEffect, useState } from 'react';
import api from '../../utils/api';

function PurchaseIntent() {
  const [list, setList] = useState([]);

  useEffect(() => {
    api.planning.pi.list().then((res) => {
      console.log(res);
      setList(res.PR_list);
    });
  }, []);
  return <div>hi</div>;
}

export default PurchaseIntent;
