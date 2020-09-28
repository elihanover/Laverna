# Laverna
### Ethereum toolkit for preloading wallets with ERC20 tokens (ERC721 coming soon).
### 1. Start Fork of Mainnet
```bash
ganache-cli -f https://mainnet.infura.io/v3/{YOUR_KEY} -u {ADDRESS TO STEAL FROM}
```
This forks the current state of mainnet with all contracts and account balances and unlocks the account we will steal tokens from.

**Note: refer to the tokenInfo.js file for the wallet to steal from.**

*(This will be automated in future versions.)*


### 2. Run Scripts
```js
import { loadWallets } from 'loadERC20.js'

loadWallets('dai', 1000)
loadWallets('uni', 400)
```