import { useState } from "react";
 
import {
  Box,
  Paper,
  Typography,
  Button,
  Grid
} from "@mui/material";
 
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
 
import { createOrder } from "../services/createOrderService";
 
import OrderInfo from "../components/OrderInfo";
import PaymentInfo from "../components/PaymentInfo";
import HeaderCharge from "../components/HeaderCharge";
import OrderLine from "../components/OrderLine";
import ResponseViewer from "../components/ResponseViewer";
 
function CreateOrder({ goBack }) {
 
  // Order Info
  const [orderNo, setOrderNo] = useState("");
  const [sellerOrg, setSellerOrg] = useState("AME_QA");
  const [currency, setCurrency] = useState("QAR");
  const [country, setCountry] = useState("QA");
 
  // Payment
  const [paymentType, setPaymentType] = useState("CREDITCARD");
  const [isPaymentSettled, setIsPaymentSettled] = useState("Y");
 
  // Header Charges
  const [headerCharges, setHeaderCharges] = useState([
    {
      chargeName: "SHIPPING",
      chargeAmount: "5"
    }
  ]);
 
  // Order Lines
  const [orderLines, setOrderLines] = useState([
    {
      itemId: "",
      orderedQty: "1",
      unitPrice: "50"
    }
  ]);
 
  // OMS Response
  const [response, setResponse] = useState("");
 
  //----------------------------
  // Header Charges
  //----------------------------
 
  const addHeaderCharge = () => {
 
    setHeaderCharges([
      ...headerCharges,
      {
        chargeName: "",
        chargeAmount: ""
      }
    ]);
 
  };
 
  const updateHeaderCharge = (index, field, value) => {
 
    const temp = [...headerCharges];
 
    temp[index][field] = value;
 
    setHeaderCharges(temp);
 
  };

  const removeHeaderCharge = (index) => {

    const temp = [...headerCharges];   

    temp.splice(index, 1);

    setHeaderCharges(temp); 
  }
 
  //----------------------------
  // Order Lines
  //----------------------------
 
  const addOrderLine = () => {
 
    setOrderLines([
      ...orderLines,
      {
        itemId: "",
        orderedQty: "1",
        unitPrice: "50"
      }
    ]);
 
  };
 
  const updateOrderLine = (index, field, value) => {
 
    const temp = [...orderLines];
 
    temp[index][field] = value;
 
    setOrderLines(temp);
 
  };
  
  const removeOrderLine = (index) => {

    const temp = [...orderLines]; 
    temp.splice(index, 1);
    setOrderLines(temp); 

  }
  //----------------------------
  // Create Order
  //----------------------------
 
  const handleCreateOrder = async () => {
 
    try {
 
      const data = await createOrder({
 
        orderNo,
        sellerOrg,
        currency,
        country,
 
        paymentType,
        isPaymentSettled,
 
        headerCharges,
        orderLines
 
      });
 
      setResponse(data);
 
    } catch (e) {
 
      setResponse(e.message);
 
    }
 
  };
 
  return (
 
    <Box sx={{ p:4, bgcolor:"#f5f7fa", minHeight:"100vh" }}>
 
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={goBack}
        sx={{ mb:3 }}
      >
        Back
      </Button>
 
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        Create Order
      </Typography>
 
      <Grid container spacing={3}>
 
        <Grid item xs={12} md={6}>
          <OrderInfo
 
            orderNo={orderNo}
            setOrderNo={setOrderNo}
 
            sellerOrg={sellerOrg}
            setSellerOrg={setSellerOrg}
 
            currency={currency}
            setCurrency={setCurrency}
 
            country={country}
            setCountry={setCountry}
 
          />
        </Grid>
 
        <Grid item xs={12} md={6}>
          <PaymentInfo
 
            paymentType={paymentType}
            setPaymentType={setPaymentType}
 
            isPaymentSettled={isPaymentSettled}
            setIsPaymentSettled={setIsPaymentSettled}
 
          />
        </Grid>
 
      </Grid>
 
      <Paper sx={{ p:3, mt:4 }}>
 
        <Typography variant="h6">
 
          Header Charges
 
        </Typography>
 
        {
 
          headerCharges.map((charge,index)=>(
 
            <HeaderCharge
 
              key={index}
 
              index={index}
 
              charge={charge}
 
              updateHeaderCharge={updateHeaderCharge}

              removeHeaderCharge={removeHeaderCharge}
              totalCharges={headerCharges.length}
 
            />
 
          ))
 
        }
 
        <Button
          startIcon={<AddIcon />}
          onClick={addHeaderCharge}
        >
          Add Header Charge
        </Button>
 
      </Paper>
 
      <Paper sx={{ p:3, mt:4 }}>
 
        <Typography variant="h6">
 
          Order Lines
 
        </Typography>
 
        {
 
          orderLines.map((line,index)=>(
 
            <OrderLine
 
              key={index}
 
              index={index}
 
              line={line}
 
              updateOrderLine={updateOrderLine}
              removeOrderLine={removeOrderLine}
              totalOrderLines={orderLines.length}
 
            />
 
          ))
 
        }
 
        <Button
 
          startIcon={<AddIcon />}
 
          onClick={addOrderLine}
 
        >
 
          Add Order Line
 
        </Button>
 
      </Paper>
 
      <Box textAlign="center" mt={4}>
 
        <Button
 
          variant="contained"
 
          size="large"
 
          onClick={handleCreateOrder}
 
        >
 
          Create Order
 
        </Button>
 
      </Box>
 
      <ResponseViewer
 
        response={response}
 
      />
 
    </Box>
 
  );
 
}
 
export default CreateOrder;
 