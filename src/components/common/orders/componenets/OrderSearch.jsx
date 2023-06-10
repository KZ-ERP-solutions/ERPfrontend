import {
  Autocomplete, Box, InputAdornment, TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

function OrderSearch({ orders }) {
  const [searchKey, setSearchKey] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();

  const orderIds = orders.length > 0 ? orders.map((order) => order?.no) : [];

  const handleSearchClick = (e, newValue) => {
    setSearchKey(newValue);
    console.log(newValue);

    if (newValue !== null && orderIds.find((orderId) => orderId === newValue)) {
      console.log(orderIds.find((orderId) => orderId === newValue));

      navigate(`/marketing/orders/order/${newValue}`);
    } else if (newValue !== null) setNotFound(true);
  };

  return (
    <Box sx={{ width: '25rem', display: 'flex', alignItems: 'stretch' }}>
      <Autocomplete
        sx={{ flexGrow: 1 }}
        freeSolo
        size="small"
        value={searchKey}
        onChange={handleSearchClick}
        inputValue={inputValue}
        onInputChange={(e, newValue) => {
          setNotFound(false);
          setInputValue(newValue);
        }}
        options={orderIds}
        renderInput={(params) => (
          <TextField
            {...params}
            InputLabelProps={{ sx: { pl: 3 }, shrink: false }}
            label={inputValue === '' ? 'Search by wo/so no' : ''}
            InputProps={{
              ...params.InputProps,
              type: 'search',
              startAdornment: (
                <>
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                  {params.InputProps.startAdornment}
                </>
              ),
            }}
            helperText={notFound ? 'Invalid wo/so no' : undefined}
          />
        )}
      />
    </Box>
  );
}

export default OrderSearch;
