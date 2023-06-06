import React, { useEffect, useState } from 'react';
import SearchBox from '../../common/SearchBox';
import api from '../../../utils/api';

function SearchWrapper({ filter }) {
  const [productIds, setProductIds] = useState([]);

  useEffect(() => {
    api.planning.pi.list()
      .then((res) => {
        console.log(res);
        setProductIds(res?.PR_list?.map((prod) => prod.srlno));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearch = (key) => {
    filter(key);
  };

  return (
    <SearchBox
      suggestions={productIds}
      setKey={(key) => handleSearch(key)}
      label="Search by product id"
      notFoundLabel="Invalid product id!"
    />
  );
}

export default SearchWrapper;
