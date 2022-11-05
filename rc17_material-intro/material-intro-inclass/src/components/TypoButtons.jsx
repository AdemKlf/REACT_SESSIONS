import Typography from "@mui/material/Typography";
import { Box, Button, Container } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const TypoButtons = () => {
  return (
    <>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h6"
          align="center"
          mt={4}
          color="primary"
        >
          MUI Typography
        </Typography>
        <Typography
          variant="body2"
          component="h6"
          align="justify"
          mt={4}
          color="secondary"
          sx={{ background: "lightgreen", color: "#eee", fontSize: "1.5rem" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ut
          non velit harum quae deleniti eveniet at magni impedit voluptates?
        </Typography>
        <Typography
          variant="button"
          sx={{ display: "inline-block", marginTop: "2rem" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ab
          beatae iste est veniam doloremque repudiandae debitis fuga inventore
          amet facere saepe voluptate expedita placeat consequuntur, molestiae
          libero. Soluta, provident?
        </Typography>
      </Container>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            // width: "50%",
            // justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" color="secondary" endIcon={<SendIcon />}>
            Send
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default TypoButtons;
