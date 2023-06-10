import React, { useState, useEffect } from 'react';
import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
  styled,
} from '@mui/material';
import fileDownload from 'js-file-download';
import api from '../../utils/api';

const Dialog = styled(MuiDialog)(() => ({
  '& .MuiDialog-paper': {
    borderRadius: 16,
    overflowX: 'hidden',
  },
}));

function BOM() {
  const [open, setOpen] = React.useState(false);
  const [searchKey, setSearchKey] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [notFound, setNotFound] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearchClick = (e, newValue) => {
    setSearchKey(newValue);
    const key = suggestions.find((prod) => prod.combined === newValue);
    if (newValue !== null && key) {
      setLoading(true);
      api.planning.product
        .getById(key.id)
        .then((response) => {
          console.log(response);
          setProduct(response);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else if (newValue !== null) {
      setNotFound(true);
      setProduct(null);
    } else setProduct(null);
  };

  const onGenerateClick = () => {
    if (product) {
      setLoading(true);
      api.planning.bom
        .getById(product.productid)
        .then((response) => {
          const today = new Date();
          fileDownload(
            response,
            `${product.productid}-${product.productname}-BOM-${String(
              today.toLocaleDateString('en-US'),
            )}.xlsx`,
          );
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    api.planning.product.suggestions().then((res) => {
      console.log(res);
      setSuggestions(() => (res.Product_ids.length
        ? [
          ...res.Product_ids.map((item) => ({
            id: item.productid,
            name: item.productname,
            combined: `${item.productid} - ${item.productname}`,
          })),
        ]
        : []));
    });
  }, []);

  return (
    <>
      <Button
        variant="contained"
        sx={{ height: 'auto' }}
        onClick={handleClickOpen}
      >
        Generate BOM
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="sm">
        <DialogTitle>Generate BOM</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Generate BOM as spreadsheet file for selected product.
            <br />
            File name format:
            {' '}
            <code>id-name-date.xlsx</code>
          </DialogContentText>

          <Autocomplete
            sx={{ flexGrow: 1, mt: 1.5 }}
            freeSolo
            size="small"
            value={searchKey}
            onChange={handleSearchClick}
            inputValue={inputValue}
            onInputChange={(e, newValue) => {
              setNotFound(false);
              setInputValue(newValue);
            }}
            options={
              suggestions.length > 0
                ? suggestions.map((item) => item.combined)
                : []
            }
            renderInput={(params) => (
              <TextField
                label={inputValue === '' ? 'Search by product' : ''}
                autoFocus
                {...params}
                InputProps={{
                  ...params.InputProps,
                }}
                helperText={notFound ? 'Invalid product' : undefined}
              />
            )}
          />

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              mx: 1,
              mt: 2,
              color: product ? 'text.primary' : 'text.secondary',
            }}
          >
            <Typography variant="body1" color="inherit">
              Product id :
              {' '}
              {product ? product.productid : <i>- choose a product -</i>}
            </Typography>
            <Typography variant="body1" color="inherit">
              Product name :
              {' '}
              {product ? product.productname : <i>- choose a product -</i>}
            </Typography>
            <Typography variant="body1" color="inherit">
              Standard product :
              {' '}
              {product ? (
                product.standard ? (
                  'Yes'
                ) : (
                  'No'
                )
              ) : (
                <i>- choose a product -</i>
              )}
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions sx={{ m: 1 }}>
          <Button variant="outlined" onClick={handleClose} fullWidth>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={onGenerateClick}
            fullWidth
            disabled={product === null || loading}
            endIcon={loading ? <CircularProgress size="small" /> : undefined}
          >
            Generate
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default BOM;
