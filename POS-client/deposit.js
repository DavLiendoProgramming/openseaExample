const config = require('./config');
const utils = require('./utils');
const maticPOSClient = utils.getMaticPOSClient();

const execute = async () => {
  try {
    const tx = await maticPOSClient.depositEtherForUser(
      config.user.address,
      config.user.amount,
      {
        from: config.user.address,
        gasPrice: '10000000000',
      }
    );
    console.log(tx.transactionHash); // eslint-disable-line
  } catch (e) {
    console.error(e); // eslint-disable-line
  }
};

execute().then(() => process.exit(0));
