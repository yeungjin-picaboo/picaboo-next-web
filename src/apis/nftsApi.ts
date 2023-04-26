export const fetchNftsFn = async (contractInstance: any) => {
  const listOfUrl = await contractInstance.getAllNFT();
  return listOfUrl;
};
