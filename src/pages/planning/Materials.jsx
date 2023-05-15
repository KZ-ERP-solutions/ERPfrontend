import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import api from '../../utils/api';
import MaterialsTable from '../../components/planning/materials/MaterialsTable';
import SearchWrapper from '../../components/planning/materials/SearchWrapper';

function Products() {
  const [materials, setMaterials] = useState({ results: [], count: 0 });
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    setLoading(true);
    api.planning.material
      .list(page + 1)
      .then((res) => {
        console.log(res);
        setMaterials(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [page]);

  const handleSetFilter = (key) => setFilter(key);
  const handlePageChange = (newPage) => setPage(newPage);

  return (
    <Box sx={{ p: 3, bgcolor: '#f9f7f7', height: '100vh' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h4" fontWeight={600}>
          All Materials
        </Typography>
        <SearchWrapper filter={(value) => handleSetFilter(value)} />
      </Box>
      <MaterialsTable
        rows={materials.results}
        page={page}
        rowsPerPage={materials.results.length}
        count={materials.count}
        loading={loading}
        changePage={(event, newPage) => handlePageChange(newPage)}
        filter={filter}
      />
    </Box>
  );
}

export default Products;
