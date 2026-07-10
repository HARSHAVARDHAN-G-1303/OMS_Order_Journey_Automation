import {
  Paper,
  Grid,
  TextField,
  IconButton
} from "@mui/material";
 
import DeleteIcon from "@mui/icons-material/Delete";
 
function HeaderCharge({
  index,
  charge,
  updateHeaderCharge,
  removeHeaderCharge,
  totalCharges
}) {
 
  return (
 
    <Paper
      elevation={1}
      sx={{
        p: 2,
        mb: 2,
        borderRadius: 2
      }}
    >
 
      <Grid
        container
        spacing={2}
        alignItems="center"
      >
 
        <Grid item xs={12} md={5}>
 
          <TextField
            fullWidth
            label="Charge Name"
            value={charge.chargeName}
            onChange={(e) =>
              updateHeaderCharge(
                index,
                "chargeName",
                e.target.value
              )
            }
          />
 
        </Grid>
 
        <Grid item xs={12} md={5}>
 
          <TextField
            fullWidth
            type="number"
            label="Charge Amount"
            value={charge.chargeAmount}
            onChange={(e) =>
              updateHeaderCharge(
                index,
                "chargeAmount",
                e.target.value
              )
            }
          />
 
        </Grid>
 
        <Grid
          item
          xs={12}
          md={2}
          textAlign="center"
        >
 
          {
            totalCharges > 1 && (
 
              <IconButton
                color="error"
                onClick={() =>
                  removeHeaderCharge(index)
                }
              >
 
                <DeleteIcon />
 
              </IconButton>
 
            )
          }
 
        </Grid>
 
      </Grid>
 
    </Paper>
 
  );
 
}
 
export default HeaderCharge;
 