import { useState } from "react";
import {
  Box,
  Button,
  Paper,
  Typography
} from "@mui/material";
 
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import ShipmentLine from "../components/ShipmentLine";
import ContainerCard from "../components/ContainerCard";
import ResponseViewer from "../components/ResponseViewer";
 
import { packShipment } from "../services/createOrderService";
 
function PackShipment({ goBack }) {
 
  const [shipmentNo, setShipmentNo] = useState("");
 
  const [shipmentLines, setShipmentLines] = useState([
    {
      itemId: "",
      quantity: "1",
      shortageQty: "0",
      shortageReason: ""
    }
  ]);
 
  const [containers, setContainers] = useState([
    {
      containerNo: "",
      grossWeight: "1",
      shipmentLineNo: "1",
      quantity: "1"
    }
  ]);
 
  const [response, setResponse] = useState("");
 
  //-----------------------------
  // Shipment Lines
  //-----------------------------
 
  const addShipmentLine = () => {
 
    setShipmentLines([
      ...shipmentLines,
      {
        itemId: "",
        quantity: "1",
        shortageQty: "0",
        shortageReason: ""
      }
    ]);
 
  };
 
  const updateShipmentLine = (index, field, value) => {
 
    const temp = [...shipmentLines];
 
    temp[index][field] = value;
 
    setShipmentLines(temp);
 
  };
 
  const removeShipmentLine = (index) => {
 
    const temp = [...shipmentLines];
 
    temp.splice(index, 1);
 
    setShipmentLines(temp);
 
  };
 
  //-----------------------------
  // Containers
  //-----------------------------
 
  const addContainer = () => {
 
    setContainers([
      ...containers,
      {
        containerNo: "",
        grossWeight: "1",
        shipmentLineNo: "1",
        quantity: "1"
      }
    ]);
 
  };
 
  const updateContainer = (index, field, value) => {
 
    const temp = [...containers];
 
    temp[index][field] = value;
 
    setContainers(temp);
 
  };
 
  const removeContainer = (index) => {
 
    const temp = [...containers];
 
    temp.splice(index, 1);
 
    setContainers(temp);
 
  };
 
  //-----------------------------
  // API
  //-----------------------------
 
  const handlePackShipment = async () => {
 
    try {
 
      const data = await packShipment({
 
        shipmentNo,
 
        shipmentLines,
 
        containers
 
      });
 
      setResponse(data);
 
    }
 
    catch(e){
 
      setResponse(e.message);
 
    }
 
  };
 
  return (
 
    <Box sx={{p:4}}>
 
      <Button
 
        startIcon={<ArrowBackIcon/>}
 
        onClick={goBack}
 
      >
 
        Back
 
      </Button>
 
      <Typography
 
        variant="h4"
 
        fontWeight="bold"
 
        mb={3}
 
      >
 
        Pack Shipment
 
      </Typography>
 
      <Paper sx={{p:3}}>
 
        <Typography
 
          variant="h6"
 
          mb={2}
 
        >
 
          Shipment Information
 
        </Typography>
 
        <input
 
          style={{
 
            width:"100%",
 
            padding:"12px",
 
            fontSize:"16px"
 
          }}
 
          placeholder="Shipment Number"
 
          value={shipmentNo}
 
          onChange={(e)=>setShipmentNo(e.target.value)}
 
        />
 
      </Paper>
 
      <Paper sx={{p:3,mt:3}}>
 
        <Typography variant="h6">
 
          Shipment Lines
 
        </Typography>
 
        {
 
          shipmentLines.map((line,index)=>(
 
            <ShipmentLine
 
              key={index}
 
              index={index}
 
              line={line}
 
              updateShipmentLine={updateShipmentLine}
 
              removeShipmentLine={removeShipmentLine}
 
              totalShipmentLines={shipmentLines.length}
 
            />
 
          ))
 
        }
 
        <Button
 
          startIcon={<AddIcon/>}
 
          onClick={addShipmentLine}
 
        >
 
          Add Shipment Line
 
        </Button>
 
      </Paper>
 
      <Paper sx={{p:3,mt:3}}>
 
        <Typography variant="h6">
 
          Containers
 
        </Typography>
 
        {
 
          containers.map((container,index)=>(
 
            <ContainerCard
 
              key={index}
 
              index={index}
 
              container={container}
 
              shipmentLines={shipmentLines}
 
              updateContainer={updateContainer}
 
              removeContainer={removeContainer}
 
              totalContainers={containers.length}
 
            />
 
          ))
 
        }
 
        <Button
 
          startIcon={<AddIcon/>}
 
          onClick={addContainer}
 
        >
 
          Add Container
 
        </Button>
 
      </Paper>
 
      <Box
 
        textAlign="center"
 
        mt={4}
 
      >
 
        <Button
 
          variant="contained"
 
          size="large"
 
          onClick={handlePackShipment}
 
        >
 
          Pack Shipment
 
        </Button>
 
      </Box>
 
      <ResponseViewer
 
        response={response}
 
      />
 
    </Box>
 
  );
 
}
 
export default PackShipment;
 