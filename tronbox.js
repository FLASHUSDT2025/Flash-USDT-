require('dotenv').config();

/**
 * TronBox configuration
 * - Install: npm i -g tronbox
 * - Compile: tronbox compile
 * - Deploy:  tronbox migrate --network shasta
 */
module.exports = {
  networks: {
    shasta: {
      privateKey: process.env.PRIVATE_KEY_SHASTA,
      consume_user_resource_percent: 30,
      fullHost: process.env.FULLHOST_SHASTA || "https://api.shasta.trongrid.io",
      feeLimit: 1_000_000_000,
      network_id: "2"
    },
    nile: {
      privateKey: process.env.PRIVATE_KEY_NILE,
      consume_user_resource_percent: 30,
      fullHost: process.env.FULLHOST_NILE || "https://nile.trongrid.io",
      feeLimit: 1_000_000_000,
      network_id: "3"
    },
    mainnet: {
      privateKey: process.env.PRIVATE_KEY_MAINNET,
      consume_user_resource_percent: 30,
      fullHost: process.env.FULLHOST_MAINNET || "https://api.trongrid.io",
      feeLimit: 1_000_000_000,
      network_id: "1"
    }
  },
  // solc settings
  compilers: {
    solc: {
      version: "0.8.20"
    }
  }
};
