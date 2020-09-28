// Given array of token names, return contract object
function getContractERC20(tokenName, web3) {
    const {abi, address} = require('./tokenInfo.js')[tokenName.toUpperCase()] // load token abi + address
    const abiJSON = require(abi)
    const tokenContract = new web3.eth.Contract(abiJSON, address);
    return tokenContract;
}

module.exports = getContractERC20