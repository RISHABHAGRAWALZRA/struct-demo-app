import web3 from "../web3";

//Check wallet available
const checkWalletAvailable = () => {
    if (typeof window.ethereum !== "undefined") {
        if (window.ethereum && window.ethereum.isMetaMask) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

//Connect with MetaMask Wallet
const connectWalletHandler = async () => {
    try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log("Found an account Address: ", accounts[0]);
        return accounts[0];
    } catch (err) {
        console.log(err);
    }
    return null;
}


//Set wallet operations
export const connectWithWallet = async () => {
    /*
    const { ethereum } = window;
    if (!ethereum) {
        console.log("Make sure you have MetaMask Wallet extension installed");
    } else console.log("Wallet exist! , We are ready to go ."); 
    */
    if (checkWalletAvailable) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length !== 0) {
            console.log("Found an authorized account: ", accounts[0]);
            return accounts[0];
        } else connectWalletHandler();
    } else console.log("Make sure you have MetaMask Wallet extension installed");
    return null;
}


//Check correct network Id
export const checkCorrectNetwork = async () => {
    let chainID;
    chainID = await web3.eth.getChainId();
    return chainID;
};

// GET Main Token Balance
export const getMainBalance = async (address) => {
    let balance = await web3.eth.getBalance(address);
    let mainBalance = web3.utils.fromWei(balance);
    return mainBalance;
};