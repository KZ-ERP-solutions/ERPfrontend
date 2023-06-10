import React, { useEffect, useState } from 'react';
import SearchBox from '../../common/SearchBox';
import api from '../../../utils/api';

function SearchWrapper({ filter }) {
  const [materialCodes, setMaterialCodes] = useState([]);

  useEffect(() => {
    api.planning.material
      .suggestions()
      .then((res) => {
        console.log(res?.Material_ids);
        setMaterialCodes(res?.Material_ids?.map((mat) => mat.matcode));
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
      suggestions={materialCodes}
      setKey={(key) => handleSearch(key)}
      label="Search by material code"
      notFoundLabel="Invalid material code!"
    />
  );
}

export default SearchWrapper;
