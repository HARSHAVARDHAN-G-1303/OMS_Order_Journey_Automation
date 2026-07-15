import {
  Paper,
  Grid,
  TextField,
  Typography,
  IconButton
} from "@mui/material";
 
import DeleteIcon from "@mui/icons-material/Delete";
 
function ShipmentLine({
 
  index,
  line,
  updateShipmentLine,
  removeShipmentLine,
  totalShipmentLines
 
}) {
 
  return (
 
    <Paper
      elevation={1}
      sx={{
        p:2,
        mb:2,
        borderRadius:2
      }}
    >
 
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        mb={2}
      >
        Shipment Line {index + 1}
      </Typography>
 
      <Grid
        container
        spacing={2}
        alignItems="center"
      >
 
        <Grid item xs={12} md={3}>
 
          <TextField
            fullWidth
            label="Item ID"
            value={line.itemId}
            onChange={(e)=>
              updateShipmentLine(
                index,
                "itemId",
                e.target.value
              )
            }
          />
 
        </Grid>
 
        <Grid item xs={12} md={2}>
 
          <TextField
            fullWidth
            type="number"
            label="Quantity"
            value={line.quantity}
            onChange={(e)=>
              updateShipmentLine(
                index,
                "quantity",
                e.target.value
              )
            }
          />
 
        </Grid>
 
        <Grid item xs={12} md={2}>
 
          <TextField
            fullWidth
            type="number"
            label="Shortage Qty"
            value={line.shortageQty}
            onChange={(e)=>
              updateShipmentLine(
                index,
                "shortageQty",
                e.target.value
              )
            }
          />
 
        </Grid>
 
        <Grid item xs={12} md={3}>
 
          <TextField
            fullWidth
            label="Shortage Reason"
            value={line.shortageReason}
            onChange={(e)=>
              updateShipmentLine(
                index,
                "shortageReason",
                e.target.value
              )
            }
          />
 
        </Grid>
 
        <Grid item xs={12} md={1}>
 
          <TextField
            fullWidth
            label="Line No"
            value={index + 1}
            InputProps={{
              readOnly:true
            }}
          />
 
        </Grid>
 
        <Grid
          item
          xs={12}
          md={1}
          textAlign="center"
        >
 
          {
 
            totalShipmentLines > 1 && (
 
              <IconButton
                color="error"
                onClick={()=>
                  removeShipmentLine(index)
                }
              >
 
                <DeleteIcon/>
 
              </IconButton>
 
            )
 
          }
 
        </Grid>
 
      </Grid>
 
    </Paper>
 
  );
 
}
 
export default ShipmentLine;
 