import {PortfolioItemProps} from "@/types/portfolio";
import Image from "next/image";
import React from "react";


export default function PortfolioItem({props}: { props: PortfolioItemProps }) {
    const {title, description, labels, images} = props;
    let imageElement: React.JSX.Element | null = null;
    if (images && images.length > 0) {
        imageElement = <figure className="hover-gallery">
            {
                images?.map((image, idx) => (
                    <Image key={idx} src={image.url} alt={image.alt} width={1000} height={1000}/>
                ))
            }
        </figure>
    }

    return (
        <div className="card bg-base-100 shadow-sm">
            {imageElement}
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    {labels?.map((label, idx) => (
                        <div key={idx} className="badge badge-outline">{label.text}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}