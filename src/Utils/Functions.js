import { v4 as uuidv4 } from "uuid";

export const GenerateID=(length=8)=>{
    const id = uuidv4().replace(/-/g, "");

    return  id.slice(0,length)
}

export const UploadImage = async (file) => {
  const formData = new FormData();
  formData.append('file', file); // directly append the file object
  
  try {
    const response = await fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', {
      method: 'POST',
      headers: {
        'pinata_api_key': import.meta.env.VITE_PINATA_API_KEY,
        'pinata_secret_api_key': import.meta.env.VITE_PINATA_API_SECRET,
      },
      body: formData,
    });

    const data = await response.json();

    if (data.IpfsHash) {
      console.log('Uploaded to IPFS:', data.IpfsHash);
      return data.IpfsHash; // Return the IPFS hash
    } else {
      throw new Error('Error uploading file');
    }
  } catch (error) {
    console.error('Error uploading to Pinata:', error);
    throw error; // Throw the error so it can be caught in the calling code
  }
};

