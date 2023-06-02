import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { FaSitemap } from 'react-icons/fa';
import api from '../../utils/api';
import ProductsTable from '../../components/planning/products/ProductsTable';
import SearchWrapper from '../../components/planning/products/SearchWrapper';

function Products() {
  const [products, setProducts] = useState({ results: [], count: 0 });
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    setLoading(true);
    api.planning.product
      .list(page + 1)
      .then((res) => {
        console.log(res);
        setProducts(res);
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
        <ProductsTable
          rows={products.results}
          page={page}
          rowsPerPage={products.results.length}
          count={products.count}
          loading={loading}
          changePage={(event, newPage) => handlePageChange(newPage)}
          filter={filter}
        />
      </Box>
    </Box>
  );
}

export default Products;
