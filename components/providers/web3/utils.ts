import { MetaMaskInpageProvider } from "@metamask/providers";
import { Contract, providers } from "ethers";

export type Web3Prams = {
  ethereum : MetaMaskInpageProvider | null;
  provider : providers.Web3Provider | null;
  contract : Contract | null;
}

export type Web3State = {
    isLoading:true,
} & Web3Prams;
