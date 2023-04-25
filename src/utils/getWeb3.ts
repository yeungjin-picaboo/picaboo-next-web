import Web3 from 'web3';

const getWeb3 = () => {
  let { web3 } = window as any;
  const alreadyInjected = typeof web3 !== 'undefined'; // i.e. Mist/Metamask
  const localProvider = process.env.PUBLIC_NEXT_LOCAL_PROVIDER_URL;

  if (alreadyInjected) {
    console.log(`Injected web3 detected.`);
    web3 = new Web3(web3.currentProvider);
  } else {
    console.log(`No web3 instance injected, using Local web3.`);
    const provider = new Web3.providers.HttpProvider(localProvider);
    web3 = new Web3(provider);
  }
  return web3;
};

export default getWeb3;
