import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const Add = () => {
  return (
    <>
      <Box component="form" sx={{ my: "80px" }}>
        <Typography variant="h3">Enter Data</Typography>
        <Stack
          direction="column"
          spacing={2}
          alignItems="center"
          sx={{ m: "1rem" }}
        >
          <TextField required size="small" label="Name" defaultValue="" />
          <TextField required size="small" label="Age" defaultValue="" />
          <TextField required size="small" label="Department" defaultValue="" />
          <TextField required size="small" label="Salary" defaultValue="" />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Add;
