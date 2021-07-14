const hre = require('hardhat');

/**
 * Opensea address to whitelist
 */
const openseaProxy = '0x58807baD0B376efc12F5AD86aAc70E78ed67deaE';
async function main() {
  // We get the contract to deploy
  const Creature2 = await hre.ethers.getContractFactory('Creature2');
  const creature2 = await Creature2.deploy();

  await creature2.deployed();

  console.log('Sample ERC712 token deployed to:', creature2.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
