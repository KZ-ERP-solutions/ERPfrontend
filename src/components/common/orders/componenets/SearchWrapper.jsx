import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBox from '../../SearchBox';

function SearchWrapper({ orders = [] }) {
  const navigate = useNavigate();

  const orderIds = orders.length > 0 ? orders.map((order) => order?.no) : [];

  const handleSearch = (key) => {
    navigate(`/marketing/orders/order/${key}`);
  };

  return (
    <SearchBox
      suggestions={orderIds}
      setKey={(key) => handleSearch(key)}
      label="Search by wo/so no"
      notFoundLabel="Invalid wo/so no!"
    />
  );
}

export default SearchWrapper;
