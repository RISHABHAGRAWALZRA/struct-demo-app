import StructDemoContract from "../utils/StructDemoConnection";

// Call Method - Get Employee Details through their ids
export const getEmployee = async (empid) => {
  let response = await StructDemoContract.methods.getEmployee(empid).call();
  return response;
};

// Send Method - Add Employee
export const addEmployee = async (empid, name, department, designation, fromAddress) => {
  console.log(empid,name,department,designation,fromAddress);
  let response = await StructDemoContract.methods.addEmployee(empid, name, department, designation).send({from: fromAddress});
  console.log(response);
  return response;
  //return true;
}

/*
// Send Method - Transfer PWAR to some other account
export const transferPwar = async (fromAddress, toAddress, amount) => {
  let weiAmount = web3.utils.toWei(amount.toString(), "ether");

  let response = await pwrContract.methods
    .transfer(toAddress, weiAmount)
    .send({ from: fromAddress });
  return response;
};
*/
