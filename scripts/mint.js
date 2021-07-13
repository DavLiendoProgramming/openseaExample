const hre = require('hardhat');
async function main() {
  const NFT = await hre.ethers.getContractFactory(
    'ERC721MetaTransactionMaticSample'
  );
  const URI = 'something';
  const WALLET_ADDRESS = '0x7e693A3E0132Fa9D24B883979d4e405A64D67361';
  const CONTRACT_ADDRESS = '0x83d0b4F2d75E9ad55640378Fb7D86EFe38BA3F9c';
  const contract = NFT.attach(CONTRACT_ADDRESS);
  const newId = await contract.mint(WALLET_ADDRESS, URI);
  console.log('NFT minted:', newId.value.toString());
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
