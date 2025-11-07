import {PortfolioItemProps} from "@/types/portfolio";
import Image from "next/image";
import React from "react";


export default function PortfolioItem({props}: { props: PortfolioItemProps }) {
    const {title, description, labels, images, youtubeURl} = props;
    let visuals: React.JSX.Element | null = null;
    if (youtubeURl) {
        visuals = <iframe
                          height="300" src={youtubeURl} allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
    } else if (images && images.length > 0) {
        visuals = <figure className="hover-gallery">
            {
                images?.map((image, idx) => (
                    <Image key={idx} src={image.url} alt={image.alt} width={1000} height={1000}/>
                ))
            }
        </figure>
    }

    return (
        <div className="card bg-base-100 shadow-sm">
            {visuals}
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