import React from "react";

export interface PortfolioItemLabel {
    text: string;
    url?: string;
}

export interface PortfolioItemImage {
    alt: string;
    url: string;
}

export interface PortfolioItemTech {
    name: string;
    nextImage: React.JSX.Element;
}

export interface PortfolioItemProps {
    title: string;
    role: string;
    startDate?: string;
    endDate?: string;
    description?: string;
    images?: PortfolioItemImage[];
    link?: string;
    youtubeURl?: string;
    labels?: PortfolioItemLabel[];
    teckStack?: PortfolioItemTech[];
}