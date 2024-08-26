import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  })
  const [account,setAccount]=useState('Not connected');
  useEffect(()=>{
    const template=async()=>{
   
      const contractAddres="";
      const contractABI="";
    try{
      const {ethereum}=window;
      const account = await ethereum.request({
        method:"eth_requestAccounts"
      })
      setAccount(account);
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        contractAddres,
        contractABI,
        signer
      )
      setState({provider,signer,contract});
    }catch(error){
      console.log(error);
      alert(error);
    }
    }
    template();
  },[])

  return (
    <>
      
    </>
  )
}

export default App
