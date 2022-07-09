import React, { useContext , createContext , FunctionComponent , useState } from "react";

type Props = {
    children:React.ReactNode,
}

const Web3Context = createContext<any>(null);

const Web3Provider:FunctionComponent<Props> = ({children}) => {
    
    const [web3Api , setWeb3Api] =useState({
        test:"hello World",
    })

    return(
        <Web3Context.Provider value={web3Api}>
            {
                children
            }
        </Web3Context.Provider>
    )
}

export function useWeb3() {
    return useContext(Web3Context)
}

export default Web3Provider;