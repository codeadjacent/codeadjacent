export interface PortfolioItemLabel {
    text: string;
    url?: string;
}

export interface PortfolioItemImage {
    alt: string;
    url: string;
}

export interface PortfolioItemProps {
    title: string;
    description?: string;
    images?: PortfolioItemImage[];
    link?: string;
    youtubeURl?:string;
    labels?: PortfolioItemLabel[]
}