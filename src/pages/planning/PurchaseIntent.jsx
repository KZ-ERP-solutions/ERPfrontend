import React, { useEffect, useState } from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';
import api from '../../utils/api';
import PiTable from '../../components/planning/pi/PiTable';
import SearchWrapper from '../../components/planning/pi/SearchWrapper';

function PurchaseIntent() {
  const [list, setList] = useState([]);
  const [products, setProducts] = useState({ PR_list: [], count: 0 });
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    setLoading(true);
    api.planning.pi
      .list()
      .then((res) => {
        console.log(res);
        setTimeout(() => {
          setList(res);
          setLoading(false);
        }, 900);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleSetFilter = (key) => setFilter(key);
  const handlePageChange = (newPage) => setPage(newPage);

  return (
    <Box
      sx={{ height: '100vh', p: 4, bgcolor: (theme) => theme.palette.grey[50] }}
    >
      <Box sx={{ p: 3, bgcolor: '#fff' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h4" fontWeight={600}>
            All Products
          </Typography>
          <SearchWrapper filter={(value) => handleSetFilter(value)} />
        </Box>
        <PiTable
          rows={list.PR_list}
          page={page}
          count={list.count}
          loading={loading}
          changePage={(event, newPage) => handlePageChange(newPage)}
          filter={filter}
        />
        {loading && <LinearProgress sx={{ height: '1px' }} />}
      </Box>
    </Box>
  );
}

export default PurchaseIntent;
