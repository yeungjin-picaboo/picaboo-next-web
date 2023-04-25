export const fetchNftsFn = async (
  contractInstance: any,
  start: number,
  numOfPictures: number
) => {
  const listOfUrl = await contractInstance.getListShortNFT(
    start,
    start + numOfPictures - 1
  );
  return listOfUrl;
};

export const fetchNumOfToken = async (contractInstance: any) => {
  const numOfToken = (await contractInstance.getNFTId()).words[0];
  return numOfToken;
};
