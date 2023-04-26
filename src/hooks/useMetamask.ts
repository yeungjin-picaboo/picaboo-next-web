import { useEffect, useState } from 'react';

export default function useMetamask(handleClose: () => void) {
  const [ethereum, setEthereum] = useState<any>(window.ethereum);

  useEffect(() => {
    const handleEthereumUpdate = () => {
      setEthereum(window.ethereum);
    };

    window.ethereum?.on('initialized', handleEthereumUpdate);
    window.ethereum?.on('networkChanged', handleEthereumUpdate);
    window.ethereum?.on('accountsChanged', handleEthereumUpdate);

    return () => {
      window.ethereum?.removeListener(
        'ethereum#initialized',
        handleEthereumUpdate
      );
      window.ethereum?.removeListener(
        'ethereum#networkChanged',
        handleEthereumUpdate
      );
      window.ethereum?.removeListener(
        'ethereum#accountsChanged',
        handleEthereumUpdate
      );
    };
  }, []);

  const connectWallet = async () => {
    if (typeof ethereum !== 'undefined') {
      try {
        await ethereum.request({
          method: 'eth_requestAccounts',
        });
        alert(`You've connected your wallet.`);
        handleClose();
      } catch (error) {
        console.error(error);
      }
    } else {
      handleClose();
      const isChrome =
        /Chrome/.test(navigator.userAgent) &&
        /Google Inc/.test(navigator.vendor);
      if (isChrome) {
        window.open('https://metamask.io/download/');
      } else {
        console.error('Metamask not detected.');
      }
    }
  };

  return { ethereum, connectWallet };
}
