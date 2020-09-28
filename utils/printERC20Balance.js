// Print balance of ERC20 contract {token} of {wallet}
const printERC20Balance = async (wallet, token) => {
    ([balance, symbol, decimals] = await Promise.all([
        token.methods
            .balanceOf(wallet)
            .call(),
        token.methods
            .symbol()
            .call(),
        token.methods
            .decimals()
            .call()
    ]))

    const unitConversion = 10 ** decimals
    console.log(`Balance ${wallet}: ${balance / unitConversion} ${symbol}`)
}

module.exports = printERC20Balance