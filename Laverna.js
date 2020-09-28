const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545')

// helper functions
const getContractERC20 = require('./utils/getContractERC20')
const printERC20Balance = require('./utils/printERC20Balance')
const findSender = require('./utils/findSender')

// Load provider wallets with {amount} of {tokenName}.
async function loadWallets(tokenName, amount) {
    const accounts = await web3.eth.getAccounts();
    const sender = findSender(tokenName);
    accounts.map(account => loadWallet(account, sender, tokenName, amount));
}

// Load wallets with balances specified it {accounts}
async function setupAccounts(accounts) {
    const wallets = await web3.eth.getAccounts();
    let tokens = {} // store live token contracts so don't need to reload for each account

    accounts.map((account, i) => {
        const assets = Object.keys(account);
        assets.map(asset => {
            if (!tokens[asset]) tokens[asset] = getContractERC20(asset, web3); // get token contract for this symbol and save for use later in function
            const sender = findSender(asset); // (assuming has at least amount)
            const amount = account[asset]
            loadWallet(wallets[i], sender, asset, amount)
        })
    })
}

// Load {wallet} with {amount} from ERC20 contract {token}.
const loadWallet = async (to, from, tokenName, amount) => {
    const token = getContractERC20(tokenName, web3);

    await token.methods
        .transfer(to, amount)
        .send({from: from});

    await printERC20Balance(to, token)
}

module.exports = [loadWallets, setupAccounts]