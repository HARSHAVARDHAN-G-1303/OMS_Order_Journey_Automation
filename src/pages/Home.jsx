import {
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent
} from "@mui/material";
 
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StorageIcon from "@mui/icons-material/Storage";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import OutboxIcon from "@mui/icons-material/Outbox";
import CancelIcon from "@mui/icons-material/Cancel";
 
function Home({ openCreateOrder, openPackShipment }) {
 
  const cardStyle = {
    height: 170,
    borderRadius: 3,
    transition: "0.3s",
    "&:hover": {
      transform: "scale(1.03)",
      boxShadow: 8
    }
  };
 
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f4f6f8",
        p: 5
      }}
    >
 
      <Typography
        variant="h3"
        fontWeight="bold"
        align="center"
        gutterBottom
      >
        OMS Internal Tool
      </Typography>
 
      <Typography
        align="center"
        color="text.secondary"
        mb={5}
      >
        Select an operation
      </Typography>
 
      <Grid container spacing={4}>
 
        {/* Create Order */}
 
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={cardStyle}>
            <CardActionArea
              sx={{ height: "100%" }}
              onClick={openCreateOrder}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%"
                }}
              >
                <AddShoppingCartIcon
                  color="primary"
                  sx={{ fontSize: 60 }}
                />
 
                <Typography
                  variant="h6"
                  mt={2}
                >
                  Create Order
                </Typography>
 
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
 
        {/* Server List */}
 
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={cardStyle}>
            <CardActionArea>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%"
                }}
              >
                <StorageIcon
                  color="success"
                  sx={{ fontSize: 60 }}
                />
 
                <Typography
                  variant="h6"
                  mt={2}
                >
                  Server Status
                </Typography>
 
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
 
        {/* Pack Shipment */}
 
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={cardStyle}>
            <CardActionArea
            sx={{ height: "100%" }}
              onClick={openPackShipment}
              >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%"
                }}
              >
                <OutboxIcon
                  color="warning"
                  sx={{ fontSize: 60 }}
                />
 
                <Typography
                  variant="h6"
                  mt={2}
                >
                  Pack Shipment
                </Typography>
 
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
 
        {/* Cancel Order */}
 
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={cardStyle}>
            <CardActionArea>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%"
                }}
              >
                <CancelIcon
                  color="error"
                  sx={{ fontSize: 60 }}
                />
 
                <Typography
                  variant="h6"
                  mt={2}
                >
                  Cancel Order
                </Typography>
 
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
 
      </Grid>
 
    </Box>
  );
}
 
export default Home;
 