import {
  Paper,
  Typography,
  Button,
  Stack,
  Box
} from "@mui/material";
 
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
 
function ResponseViewer({ response }) {
 
  const copyResponse = () => {
 
    navigator.clipboard.writeText(response);
 
  };
 
  return (
 
    <Paper
      elevation={3}
      sx={{
        mt:4,
        p:3,
        borderRadius:3
      }}
    >
 
      <Stack
 
        direction="row"
 
        justifyContent="space-between"
 
        alignItems="center"
 
        mb={2}
 
      >
 
        <Typography
          variant="h6"
          fontWeight="bold"
        >
          OMS Response
        </Typography>
 
        <Stack direction="row" spacing={2}>
 
          <Button
            variant="outlined"
            startIcon={<ContentCopyIcon />}
            onClick={copyResponse}
          >
            Copy
          </Button>
 
        </Stack>
 
      </Stack>
 
      <Box
 
        sx={{
 
          background:"#1E1E1E",
 
          color:"#00FF66",
 
          p:2,
 
          borderRadius:2,
 
          minHeight:250,
 
          maxHeight:500,
 
          overflow:"auto",
 
          fontFamily:"Consolas",
 
          fontSize:14,
 
          whiteSpace:"pre-wrap"
 
        }}
 
      >
 
        {
 
          response ||
 
          "OMS Response will appear here..."
 
        }
 
      </Box>
 
    </Paper>
 
  );
 
}
 
export default ResponseViewer;
 