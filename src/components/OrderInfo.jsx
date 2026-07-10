import {
  Paper,
  Typography,
  Grid,
  TextField
} from "@mui/material";
 
function OrderInfo({
 
  orderNo,
  setOrderNo,
 
  sellerOrg,
  setSellerOrg,
 
  currency,
  setCurrency,
 
  country,
  setCountry
 
}) {
 
  return (
 
    <Paper
      elevation={3}
      sx={{
        p:3,
        borderRadius:3,
        height:"100%"
      }}
    >
 
      <Typography
        variant="h6"
        fontWeight="bold"
        mb={3}
      >
        Order Information
      </Typography>
 
      <Grid container spacing={2}>
 
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Order Number"
            value={orderNo}
            onChange={(e)=>setOrderNo(e.target.value)}
          />
        </Grid>
 
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Seller Organization"
            value={sellerOrg}
            onChange={(e)=>setSellerOrg(e.target.value)}
          />
        </Grid>
 
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Currency"
            value={currency}
            onChange={(e)=>setCurrency(e.target.value)}
          />
        </Grid>
 
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Country"
            value={country}
            onChange={(e)=>setCountry(e.target.value)}
          />
        </Grid>
 
      </Grid>
 
    </Paper>
 
  );
 
}
 
export default OrderInfo;
 