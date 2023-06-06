import {
  Box, Button, Container, Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import OrderPayment from './componenets/order/OrderPayment';
import OrderCustomerTable from './componenets/order/OrderCustomerTable';
import OrderOverview from './componenets/order/OrderOverview';
import OrderStatusTable from './componenets/order/OrderStatusTable';
import api from '../../../utils/api';
import OrderItems from './componenets/order/OrderItems';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 2,
            height: '85vh',
            overflowY: 'auto',
            bgcolor: 'white',
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

const lastWordOfRoute = (route) => {
  const words = route.split('/');
  return words[words.length - 1];
};

function Order() {
  const params = useParams();
  const { pathname } = useLocation();
  const [order, setOrder] = useState({});
  const [currentTab, setCurrentTab] = React.useState(0);
  const [isEdit, setIsEdit] = useState(lastWordOfRoute(pathname) === 'edit');
  const navigate = useNavigate();
  const orderId = params.id;

  useEffect(() => {
    api.marketing.order
      .getById(orderId)
      .then((res) => {
        setOrder(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [orderId]);

  const handleCancelClick = () => {
    navigate(pathname.includes('/edit') ? pathname.replace('/edit', '') : '', {
      state: { order: order.order },
    });
    setIsEdit(false);
  };

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
    handleCancelClick();
    // toast: changes are not saved
  };

  function a11yProps(index) {
    return {
      id: `tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
      // added props
      sx: {
        bgcolor: 'white',
        mr: 1,
        boxShadow:
          currentTab === index
            ? '0px 4px 11px rgba(0, 0, 0, 0.11)'
            : '0px -4px 3px rgba(0, 0, 0, 0.11) inset',
      },
    };
  }

  const handleEditClick = () => {
    navigate('edit', { state: { order: order.order } });
    setIsEdit(true);
  };

  const handleSaveClick = () => {
    navigate(pathname.includes('/edit') ? pathname.replace('/edit', '') : '', {
      state: { order: order.order },
    });
    setIsEdit(false);
  };

  return (
    <Container
      maxWidth="100%"
      sx={{
        p: 2,
        maxHeight: '100vh',
        overflowY: 'auto',
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <div>
          <Typography
            variant="h5"
            fontWeight={600}
            sx={{ my: 2, display: 'inline' }}
          >
            {'Order - '}
          </Typography>
          <Typography
            variant="h6"
            fontWeight={600}
            sx={{ my: 2, display: 'inline' }}
          >
            {'wo/so no: '}
          </Typography>
          <Typography
            variant="h6"
            fontWeight={600}
            sx={{ my: 2, display: 'inline' }}
          >
            {orderId}
          </Typography>
        </div>
      </Box>

      <Box sx={{ width: '100%', mt: 2 }}>
        {/* <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        > */}
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          aria-label="order-tabs"
        >
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Status" {...a11yProps(1)} />
          <Tab label="Payment & Tax" {...a11yProps(2)} />
          <Tab label="Items" {...a11yProps(3)} />
          <Tab label="Customer Info" {...a11yProps(4)} />
        </Tabs>
        {/* {![0, 1].some((value) => value === currentTab) ? (
            isEdit ? (
              <Box display="flex" alignItems="center" gap={1}>
                <Typography
                  variant="body2"
                  color={(theme) => theme.palette.text.primary}
                >
                  Double click on value of specific paramter to edit it
                </Typography>
                <Box>
                  <Button variant="outlined" onClick={handleCancelClick}>
                    Cancel
                  </Button>
                </Box>
                <Box>
                  <Button variant="contained" onClick={handleSaveClick}>
                    Save changes
                  </Button>
                </Box>
              </Box>
            ) : (
              <Box>
                <Button variant="contained" onClick={handleEditClick}>
                  Edit
                </Button>
              </Box>
            )
          ) : null}
        </Box> */}
        <TabPanel value={currentTab} index={0}>
          <OrderOverview order={order} />
        </TabPanel>
        <TabPanel value={currentTab} index={1}>
          <OrderStatusTable orderNo={order.no} />
        </TabPanel>
        <TabPanel value={currentTab} index={2}>
          <OrderPayment order={order} />
        </TabPanel>
        <TabPanel value={currentTab} index={3}>
          <OrderItems items={order?.items} />
        </TabPanel>
        {/* <TabPanel value={currentTab} index={4}>
          <OrderCustomerTable
            buyer={order.buyer_addr.length > 0 ? order.buyer_addr[0] : []}
            consignee={
              order.consign_addr.length > 0 ? order.consign_addr[0] : []
            }
            editable={isEdit}
          />
        </TabPanel> */}
      </Box>
    </Container>
  );
}

export default Order;
