import {
  Paper,
  Typography,
  Grid,
  TextField,
  MenuItem
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
            select
            fullWidth
            label="Currency"
            value={currency}
            onChange={(e)=>setCurrency(e.target.value)}
            >
              <MenuItem value="AED">
              AED
            </MenuItem>
 
            <MenuItem value="BHD">
              BHD
            </MenuItem>
            
            <MenuItem value="JOD">
              JOD
            </MenuItem>
            <MenuItem value="KWD">
              KWD
            </MenuItem>
            <MenuItem value="EGP">
              EGP
            </MenuItem>
            <MenuItem value="QAR">
              QAR
            </MenuItem>
            <MenuItem value="SAR">
              SAR
            </MenuItem>
            
            </TextField>

        </Grid>
 
        <Grid item xs={6}>
          <TextField
            select
            fullWidth
            label="Country"
            value={country}
            onChange={(e)=>setCountry(e.target.value)}
            >
              <MenuItem value="AE">
              AE
            </MenuItem>
 
            <MenuItem value="BH">
              BH
            </MenuItem>
            
            <MenuItem value="JO">
              JO
            </MenuItem>
            <MenuItem value="KW">
              KW
            </MenuItem>
            <MenuItem value="EG">
              EG
            </MenuItem>
            <MenuItem value="QA">
              QA
            </MenuItem>
            <MenuItem value="SA">
              SA
            </MenuItem>
            </TextField>
          
          
        </Grid>
 
      </Grid>
 
    </Paper>
 
  );
 
}
 
export default OrderInfo;
 