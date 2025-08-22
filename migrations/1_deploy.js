const DemoTRC20 = artifacts.require("DemoTRC20");

/**
 * Deploy with constructor args:
 *   name: "Demo Token"
 *   symbol: "DEMO"
 *   decimals: 6
 *   initialSupply: 1_000_000 (will be scaled by decimals)
 */
module.exports = async function (deployer, network, accounts) {
  const name = process.env.TOKEN_NAME || "Demo Token";
  const symbol = process.env.TOKEN_SYMBOL || "DEMO";
  const decimals = parseInt(process.env.TOKEN_DECIMALS || "6", 10);
  const initialSupply = BigInt(process.env.TOKEN_INITIAL_SUPPLY || "1000000"); // 1,000,000

  await deployer.deploy(DemoTRC20, name, symbol, decimals, initialSupply.toString());
  const instance = await DemoTRC20.deployed();
  console.log("DemoTRC20 deployed at:", instance.address);
};
