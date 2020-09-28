// Get a good wallet to steal from given token.
function findSender(tokenName) {
    const { rich } = require('./tokenInfo.js')[tokenName.toUpperCase()]
    return rich;
}

module.exports = findSender