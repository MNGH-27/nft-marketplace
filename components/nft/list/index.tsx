import { FunctionComponent } from "react";
import { NftMeta } from "../../../types/nft";
import NftItem from "../item";

type NftListProps = {
    nfts: NftMeta[],
}

const NftList:FunctionComponent<NftListProps> = ({nfts}) => {
    return(
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        {
            nfts.map(item => (
                <div key={item.image} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <NftItem nftItem={item}/>
                </div>
            ))
        }
    </div>
    )
}
export default NftList;