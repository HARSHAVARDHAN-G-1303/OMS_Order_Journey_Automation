import {
  Paper,
  Typography,
  Grid,
  TextField,
  MenuItem
} from "@mui/material";
 
function PaymentInfo({
 
  paymentType,
  setPaymentType,
 
  isPaymentSettled,
  setIsPaymentSettled
 
}) {
 
  return (
 
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 3,
        height: "100%"
      }}
    >
 
      <Typography
        variant="h6"
        fontWeight="bold"
        mb={3}
      >
        Payment Information
      </Typography>
 
      <Grid container spacing={2}>
 
        <Grid item xs={12}>
 
          <TextField
            select
            fullWidth
            label="Payment Type"
            value={paymentType}
            onChange={(e) =>
              setPaymentType(e.target.value)
            }
          >
 
            <MenuItem value="CREDITCARD">
              CREDITCARD
            </MenuItem>
 
            <MenuItem value="COD">
              COD
            </MenuItem>
 
            <MenuItem value="CASH">
              CASH
            </MenuItem>
 
            <MenuItem value="PAYPAL">
              PAYPAL
            </MenuItem>
 
          </TextField>
 
        </Grid>
 
        <Grid item xs={12}>
 
          <TextField
            select
            fullWidth
            label="Payment Settled"
            value={isPaymentSettled}
            onChange={(e) =>
              setIsPaymentSettled(e.target.value)
            }
          >
 
            <MenuItem value="Y">
 
              Yes
 
            </MenuItem>
 
            <MenuItem value="N">
 
              No
 
            </MenuItem>
 
          </TextField>
 
        </Grid>
 
      </Grid>
 
    </Paper>
 
  );
 
}
 
export default PaymentInfo;
 