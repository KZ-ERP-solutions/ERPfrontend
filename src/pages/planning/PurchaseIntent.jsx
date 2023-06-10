import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import api from '../../utils/api';
import PIsTable from '../../components/planning/PIs/PIsTable';
import SearchWrapper from '../../components/planning/PIs/SearchWrapper';

function PurchaseIntent() {
  const [pis, setPIs] = useState([]);
  // const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    setLoading(true);
    api.planning.pi
      .list()
      .then((res) => {
        console.log(res);
        setPIs(res.PR_list);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleSetFilter = (key) => setFilter(key);
  // const handlePageChange = (newPage) => setPage(newPage);

  return (
    <Box
      sx={{ height: '100vh', p: 4, bgcolor: (theme) => theme.palette.grey[50] }}
    >
      <Box sx={{ p: 3, bgcolor: '#fff' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h4" fontWeight={600}>
            All Purchase Intents
          </Typography>
          <SearchWrapper filter={(value) => handleSetFilter(value)} />
        </Box>
        <PIsTable
          rows={pis}
          // page={page}
          // rowsPerPage={pis.results.length}
          // count={pis.count}
          loading={loading}
          // changePage={(event, newPage) => handlePageChange(newPage)}
          filter={filter}
        />
      </Box>
    </Box>
  );
}

export default PurchaseIntent;
