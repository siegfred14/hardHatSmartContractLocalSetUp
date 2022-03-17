require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task("balance", "Get ETH balance of an address")
  .addParam("address", "Address which balance is to be fetched")
  .setAction(async ({ address }) => {
    // console.log(address)
    const balance = await web3.eth.getBalance(address);
    console.log(`Balance is ${web3.utils.fromWei(balance)} ETH`);
  });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/",
      accounts: [
        "1a00cc3ea46b5c4069f3814c20a38506869ba4f8b5214a8b1cd1c59f147f8846",
      ],
    },
  },
};
