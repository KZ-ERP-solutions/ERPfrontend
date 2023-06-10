import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import api from '../../utils/api';
import MaterialsTable from '../../components/planning/materials/MaterialsTable';
import SearchWrapper from '../../components/planning/materials/SearchWrapper';
import Add from '../../components/planning/materials/Add';
import Edit from '../../components/planning/materials/Edit';

function Products() {
  const [materials, setMaterials] = useState({ results: [], count: 0 });
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(null);
  console.log(filter);
  useEffect(() => {
    if (filter) {
      setLoading(true);
      api.planning.material
        .getById(filter)
        .then((res) => {
          console.log(res);
          setLoading(false);

          setMaterials({ results: [res], count: 1 });
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
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
    }
  }, [page, filter]);

  const handleSetFilter = (key) => setFilter(key);
  const handlePageChange = (newPage) => setPage(newPage);

  console.log(page);

  return (
    <Box
      sx={{ height: '100vh', p: 4, bgcolor: (theme) => theme.palette.grey[50] }}
    >
      <Box sx={{ p: 3, bgcolor: '#fff' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h4" fontWeight={600}>
            All Materials
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <SearchWrapper filter={(value) => handleSetFilter(value)} />
            <Add />
            <Edit />
          </Box>
        </Box>
        <MaterialsTable
          rows={materials.results}
          page={page}
          rowsPerPage={materials.results.length}
          count={materials.count}
          loading={loading}
          changePage={(event, newPage) => handlePageChange(newPage)}
          // filter={filter}
        />
      </Box>
    </Box>
  );
}

export default Products;
