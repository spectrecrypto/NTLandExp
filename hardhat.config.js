require("@nomiclabs/hardhat-ethers");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.0",
    settings: {
      "optimizer": {
        "enabled": true,
        "runs": 200,
      }
    }
  },
  networks: {
    hardhat: {
      forking: {
        live: false,
        url: "https://eth-mainnet.alchemyapi.io/v2/qG1bV1eq8fy0k6EuvqHPwEuXxXkoh4oR"
      }
    },
  },
};
