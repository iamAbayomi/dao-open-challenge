export interface IHeaderLink {
    id: number,
    name: string,
    link: string
}

export interface ICategory{
    id: number
    image: string
    title: string
    subtitle: string
}

export interface IBadge {
    id?:number
    image?: string
    text: string
}

export interface IDaoContainer {
    id: number;
    appLogo: string;
    title: string;
    description: string;
    tags: string[];
}

export interface IInfoContainer {
    id: number
    image: string
    title: string
    description: string
}

export interface ICard {
    image: string
    title: string
    description: string
}

export interface IItem{
    id: number,
    name: string
}
export interface IAboutUs{
    id: number
    title: string
    firstText: string
    secondText: string
}

export interface ICategories {
    id: number
    title: string
    subtitle: string
    background: string
}

export interface IGlossaryData {
    id?: number
    title: string
    tags: string
    description: string
}

export interface IGlossaryIndex {
    index: string
    data: IGlossaryData[]    
}

export interface ICallback {
    onClick: () => void
}