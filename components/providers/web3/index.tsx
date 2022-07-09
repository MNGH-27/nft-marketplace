import { createContext, FunctionComponent, useContext, useState , useEffect } from "react"
import { Web3State } from "./utils";

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
    function initWeb3(){
      setWeb3Api({
        ethereum:window.ethereum,
        provider:null,
        contract:null,
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








