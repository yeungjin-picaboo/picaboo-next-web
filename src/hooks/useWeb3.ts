const contract = require('@truffle/contract');
import { useEffect, useState } from 'react';
import MyContractJson from '../../public/MyNFT.json';
import Web3 from 'web3';

export default function useWeb3() {
  const [web3, setWeb3] = useState<any>(undefined);
  const [myContract, setMyContract] = useState<any>(null);
  const [account, setAccount] = useState('');

  const getWeb3 = () => {
    let { web3 } = window as any;
    const alreadyInjected = typeof web3 !== 'undefined'; // i.e. Mist/Metamask
    const localProvider = process.env.NEXT_PUBLIC_LOCAL_PROVIDER_URL;
    if (alreadyInjected) {
      // Injected web3 detected.
      web3 = new Web3(web3.currentProvider);
    } else {
      // No web3 instance injected, using Local web3.
      const provider = new Web3.providers.HttpProvider(localProvider);
      web3 = new Web3(provider);
    }
    return web3;
  };

  const getMyContract = async (web3: any) => {
    let myContract = contract(MyContractJson);
    myContract.setProvider(web3.currentProvider);
    const instance = await myContract.deployed();
    setMyContract(instance);
  };

  const getAccount = async (web3: any) => {
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
  };

  const handleAccountChange = (accounts: any) => {
    if (accounts[0] != account) {
      setAccount(accounts[0]);
    }
  };

  useEffect(() => {
    if (!web3) {
      setWeb3(getWeb3());
    } else {
      getMyContract(web3);
      getAccount(web3);
    }

    window.ethereum?.on('accountsChanged', handleAccountChange);
    return () => {
      window.ethereum?.removeListener('accountsChanged', handleAccountChange);
    };
  }, [web3]);

  return { web3, myContract, account };
}
