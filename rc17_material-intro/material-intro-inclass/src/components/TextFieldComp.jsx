import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const TextFieldComp = () => {
  return (
    <div>
      <Container>
        <Typography variant="h4" color="error" align="center" mt={4}>
          TEXT FIELD
        </Typography>
        <Box>
          <TextField />
        </Box>
      </Container>
    </div>
  );
};

export default TextFieldComp;
