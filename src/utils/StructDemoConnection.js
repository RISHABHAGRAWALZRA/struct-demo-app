import Web3 from "web3";

let StructDemo;
StructDemo = {
  contractAddress: "0x8e88743E55E916c549c8E5FE99A8D6B60EADb429",
  abi: [{ "inputs": [{ "internalType": "uint256", "name": "empid", "type": "uint256" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "department", "type": "string" }, { "internalType": "string", "name": "designation", "type": "string" }], "name": "addEmployee", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "empid", "type": "uint256" }], "name": "getEmployee", "outputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "department", "type": "string" }, { "internalType": "string", "name": "designation", "type": "string" }], "stateMutability": "view", "type": "function" }],
};

var web3 = new Web3(window.ethereum);

var StructDemoContract = new web3.eth.Contract(
  StructDemo.abi,
  StructDemo.contractAddress
);

export default StructDemoContract;
