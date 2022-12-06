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
    id:number
    image: string
    text: string
}

export interface IDaoContainer {
    appLogo: string;
    title: string;
    description: string;
    tags: string;
}