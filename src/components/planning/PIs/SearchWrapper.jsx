import React, { useEffect, useState } from 'react';
import SearchBox from '../../common/SearchBox';
import api from '../../../utils/api';

function SearchWrapper({ filter }) {
  const [piIds, setPiIds] = useState([]);

  useEffect(() => {
    api.planning.pi
      .list()
      .then((res) => {
        console.log(res);
        setPiIds(
          res?.PR_list && res.PR_list.length > 0
            ? res.PR_list.map((pi) => pi.pono)
            : [],
        );
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
      suggestions={piIds}
      setKey={(key) => handleSearch(key)}
      label="Search by PI/PO No"
      notFoundLabel="Invalid PI/PO No!"
    />
  );
}

export default SearchWrapper;
