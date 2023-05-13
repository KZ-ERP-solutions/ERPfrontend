import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import api from '../../utils/api';
import ProductsTable from '../../components/planning/ProductsTable';

function Products() {
  const [products, setProducts] = useState({ results: [], count: 0 });
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

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

  const handlePageChange = (newPage) => setPage(newPage);

  return (
    <Box sx={{ p: 3, bgcolor: '#f9f7f7', height: '100vh' }}>
      <ProductsTable
        rows={products.results}
        page={page}
        rowsPerPage={products.results.length}
        count={products.count}
        loading={loading}
        changePage={(event, newPage) => handlePageChange(newPage)}
      />
    </Box>
  );
}

export default Products;
