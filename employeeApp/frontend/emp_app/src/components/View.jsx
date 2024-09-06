import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

const View = () => {
  var [empy, setEmpy] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3004/view")
      .then((res) => setEmpy(res.data))
      .catch((err) => console.log(err));
  }, []);

  const delEmpy = (id) => {
    axios.delete("http://localhost:3004/delete/" + id).then(( res) => {
      alert(res.data.message);
      window.location.reload();
    });
  };

  return (
    <>
      <TableContainer sx={{ my: "75px" }}>
        <Typography variant="h3" component="p" align="center">
          View
        </Typography>
        <Table sx={{ my: "45px" }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <b>Name</b>
              </TableCell>
              <TableCell align="center">
                <b>Age</b>
              </TableCell>
              <TableCell align="center">
                <b>Department</b>
              </TableCell>
              <TableCell align="center">
                <b>Salary</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {empy.map((emp) => {
              return (
                <TableRow key={emp._id}>
                  <TableCell align="center">{emp.Name}</TableCell>
                  <TableCell align="center">{emp.Age}</TableCell>
                  <TableCell align="center">{emp.Dept}</TableCell>
                  <TableCell align="center">{emp.Sal}</TableCell>
                  <TableCell align="center">
                    <Button variant="contained" color="primary">
                      EDIT
                    </Button>
                    &nbsp;
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        delEmpy(emp._id);
                      }}
                    >
                      DELETE
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default View;
