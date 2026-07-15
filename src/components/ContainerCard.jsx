import {
  Paper,
  Grid,
  TextField,
  Typography,
  IconButton,
  MenuItem
} from "@mui/material";
 
import DeleteIcon from "@mui/icons-material/Delete";
 
function ContainerCard({
 
  index,
  container,
  shipmentLines,
  updateContainer,
  removeContainer,
  totalContainers
 
}) {
 
  const selectedShipmentLine =
    shipmentLines[Number(container.shipmentLineNo) - 1];
 
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
        Container {index + 1}
      </Typography>
 
      <Grid
        container
        spacing={2}
        alignItems="center"
      >
 
        {/* Container Number */}
 
        <Grid item xs={12} md={3}>
 
          <TextField
            fullWidth
            label="Container Number"
            value={container.containerNo}
            onChange={(e)=>
              updateContainer(
                index,
                "containerNo",
                e.target.value
              )
            }
          />
 
        </Grid>
 
        {/* Gross Weight */}
 
        <Grid item xs={12} md={2}>
 
          <TextField
            fullWidth
            type="number"
            label="Gross Weight"
            value={container.grossWeight}
            onChange={(e)=>
              updateContainer(
                index,
                "grossWeight",
                e.target.value
              )
            }
          />
 
        </Grid>
 
        {/* Shipment Line */}
 
        <Grid item xs={12} md={2}>
 
          <TextField
            select
            fullWidth
            label="Shipment Line"
            value={container.shipmentLineNo}
            onChange={(e)=>
              updateContainer(
                index,
                "shipmentLineNo",
                e.target.value
              )
            }
          >
 
            {
 
              shipmentLines.map((line,i)=>(
 
                <MenuItem
                  key={i}
                  value={String(i+1)}
                >
 
                  {i+1}
 
                </MenuItem>
 
              ))
 
            }
 
          </TextField>
 
        </Grid>
 
        {/* Item ID */}
 
        <Grid item xs={12} md={3}>
 
          <TextField
            fullWidth
            label="Item ID"
            value={selectedShipmentLine?.itemId || ""}
            InputProps={{
              readOnly:true
            }}
          />
 
        </Grid>
 
        {/* Quantity */}
 
        <Grid item xs={12} md={1}>
 
          <TextField
            fullWidth
            type="number"
            label="Qty"
            value={container.quantity}
            onChange={(e)=>
              updateContainer(
                index,
                "quantity",
                e.target.value
              )
            }
          />
 
        </Grid>
 
        {/* Delete */}
 
        <Grid
          item
          xs={12}
          md={1}
          textAlign="center"
        >
 
          {
 
            totalContainers > 1 && (
 
              <IconButton
                color="error"
                onClick={()=>
                  removeContainer(index)
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
 
export default ContainerCard;
 