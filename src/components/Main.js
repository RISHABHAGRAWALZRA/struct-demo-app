import { Box, Typography, TextField, Button } from "@mui/material";
import { useContext, useState } from "react";

import { DataContext } from "../context/DataContext";
import { addEmployee, getEmployee } from "../actions/SmartActions";

const Main = () => {
  const { data } = useContext(DataContext);

  const [employeeId, setemployeeId] = useState("");
  const [emp, setEmp] = useState(null);

  const [empId, setEmpId] = useState("");
  const [empName, setEmpName] = useState("");
  const [empDepartment, setEmpDepartment] = useState("");
  const [empDesignation, setEmpDesignation] = useState("");
  const [succ, setSucc] = useState(false);

  const getEmp = async () => {
    const emp = await getEmployee(employeeId);
    setEmp(emp);
    setSucc(!succ);
    console.log(emp);
  };

  const addEmp = async () => {
    const conf = await addEmployee(
      empId,
      empName,
      empDepartment,
      empDesignation,
      data.address
    );
    console.log(conf.status);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          p: "10px",
          borderRadius: "20px",
          flexDirection: "column",
          backgroundColor: "#a1beff",
          color: "#ffffff",
          mb: "20px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            p: "5px",
            fontWeight: "bold",
            color: "#00256e",
          }}
        >
          Struct Demo App
        </Typography>
        <Typography>Address : {data.address}</Typography>
        <Typography>Chain Id : {data.chainId}</Typography>
        <Typography>Balance: {data.balance}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          mb: "10px",
          p: "10px",
          borderRadius: "20px",
          flexDirection: "column",
          backgroundColor: "#a1beff",
          color: "#ffffff",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            p: "5px",
            fontWeight: "bold",
            color: "#00256e",
          }}
        >
          Get Employee Details
        </Typography>
        <TextField
          sx={{ m: "5px" }}
          value={employeeId}
          onChange={(e) => setemployeeId(e.target.value)}
          id="outlined-basic"
          label="Employee Id"
          variant="outlined"
        />
        <Button onClick={getEmp} variant="contained">
          Get Employee
        </Button>
        {emp != null ? (
          <Box color="red">
            <Typography>Name : {emp.name}</Typography>
            <Typography>Department : {emp.department}</Typography>
            <Typography>Designamtion: {emp.designation}</Typography>
          </Box>
        ) : (
          <></>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          p: "10px",
          borderRadius: "20px",
          flexDirection: "column",
          backgroundColor: "#a1beff",
          color: "#ffffff",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            p: "5px",
            fontWeight: "bold",
            color: "#00256e",
          }}
        >
          Add Employee Details
        </Typography>
        <TextField
          sx={{ m: "5px" }}
          value={empId}
          onChange={(e) => setEmpId(e.target.value)}
          id="outlined-basic"
          label="Employee Id"
          variant="outlined"
        />
        <TextField
          sx={{ m: "5px" }}
          value={empName}
          onChange={(e) => setEmpName(e.target.value)}
          id="outlined-basic"
          label="Employee Name"
          variant="outlined"
        />
        <TextField
          sx={{ m: "5px" }}
          value={empDepartment}
          onChange={(e) => setEmpDepartment(e.target.value)}
          id="outlined-basic"
          label="Employee Department"
          variant="outlined"
        />
        <TextField
          sx={{ m: "5px" }}
          value={empDesignation}
          onChange={(e) => setEmpDesignation(e.target.value)}
          id="outlined-basic"
          label="Employee Designation"
          variant="outlined"
        />
        <Button onClick={addEmp} variant="contained">
          Add Employee
        </Button>
        {succ}
      </Box>
    </Box>
  );
};

export default Main;
