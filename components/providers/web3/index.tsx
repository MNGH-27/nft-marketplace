import { createContext, FunctionComponent, useContext, useState , useEffect } from "react"
import { loadContract, Web3State } from "./utils";
import { ethers } from "ethers"
type Props = {
    children:React.ReactNode,
}


const Web3Context = createContext<Web3State>({
    ethereum : null,
    provider : null,
    contract : null,
    isLoading : true,              
});

const Web3Provider: FunctionComponent<Props> = ({children}) => {
  
  const [web3Api, setWeb3Api] = useState<Web3State>({
      ethereum : null,
      provider : null,
      contract : null,
      isLoading : true,              
  })

  useEffect(()=>{
    async function initWeb3(){
      const provider = new ethers.providers.Web3Provider(window.ethereum as any);
      const contract =  await loadContract("NftMarket", provider);

      setWeb3Api({
        ethereum:window.ethereum,
        provider,
        contract,
        isLoading:true,
      })
    }

    initWeb3();
  },[])

  return (
    <Web3Context.Provider value={web3Api}>
      {children}
    </Web3Context.Provider>
  )
}

export function useWeb3() {
  return useContext(Web3Context);
}

export default Web3Provider;








