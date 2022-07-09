
export type NftAttribute = {
    trait_type:"name"|"health"|"speed",
    value:string,
}

export type NftMeta = {
    name:string,
    description:string,
    image:string,
    attributes: NftAttribute[],
}