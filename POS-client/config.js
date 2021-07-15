require('dotenv').config();

module.exports = {
  root: {
    /**RPC url */
    RPC: 'https://rpc.slock.it/goerli',
    POSRootChainManager: '0xBbD7cBFA79faee899Eaf900F13C9065bF03B1A74',
    DERC20: '0x655F2166b0709cd575202630952D71E2bB0d61Af',
    DERC721: '0x084297B12F204Adb74c689be08302FA3f12dB8A7',
    DERC1155: '0x2e3Ef7931F2d0e4a7da3dea950FF3F19269d9063',
    posERC20Predicate: '0xdD6596F2029e6233DEFfaCa316e6A95217d4Dc34',
    posERC721Predicate: '0x74D83801586E9D3C4dc45FfCD30B54eA9C88cf9b',
    posERC1155Predicate: '0xB19a86ba1b50f0A395BfdC3557608789ee184dC8',
    posEtherPredicate: '0xe2B01f3978c03D6DdA5aE36b2f3Ac0d66C54a6D5',
  },
  child: {
    RPC: 'https://rpc-mumbai.matic.today',
    DERC20: '0xfe4F5145f6e09952a5ba9e956ED0C25e3Fa4c7F1',
    DERC721: '0x757b1BD7C12B81b52650463e7753d7f5D0565C0e',
    DERC1155: '0xA07e45A987F19E25176c877d98388878622623FA',
    MaticWETH: '0x714550C2C1Ea08688607D86ed8EeF4f5E4F22323',
  },
  user: {
    privateKey: process.env.PRIVATE_KEY,
    address: process.env.MAIN_ADDRESS,
    amount: '500000000000000000', // 0.5
    amount2: '7000000000000000', // 0.007
    tokenId: '1234',
    tokenId2: '6789',
  },
};
