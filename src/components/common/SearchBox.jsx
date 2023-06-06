import {
  Autocomplete, Box, InputAdornment, TextField,
} from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

function SearchBox({
  suggestions = [],
  setKey,
  label = '',
  notFoundLabel = '',
}) {
  const [searchKey, setSearchKey] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [notFound, setNotFound] = useState(false);

  const handleSearchClick = (e, newValue) => {
    setSearchKey(newValue);
    console.log(newValue);

    if (suggestions.includes(newValue) || newValue === null) {
      setKey(newValue);
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
        options={suggestions}
        renderInput={(params) => (
          <TextField
            {...params}
            InputLabelProps={{ sx: { pl: 5 }, shrink: false }}
            label={inputValue === '' ? label : ''}
            InputProps={{
              ...params.InputProps,
              sx: { borderRadius: 5 },
              type: 'search',
              startAdornment: (
                <>
                  <InputAdornment position="start" sx={{ ml: 1 }}>
                    <SearchIcon />
                  </InputAdornment>
                  {params.InputProps.startAdornment}
                </>
              ),
            }}
            helperText={notFound ? notFoundLabel : undefined}
          />
        )}
      />
    </Box>
  );
}

export default SearchBox;
