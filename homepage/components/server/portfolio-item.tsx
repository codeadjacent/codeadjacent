import {PortfolioItemProps} from "@/types/portfolio";
import Image from "next/image";
import React from "react";
import {getTimeRange} from "@/lib/utils/date/timerange";


export default function PortfolioItem({props}: { props: PortfolioItemProps }) {
    const {title, description, labels, images, youtubeURl, teckStack, role, startDate, endDate} = props;
    const dateFormat = 'LL.yyyy';
    let visuals: React.JSX.Element | null = null;
    if (youtubeURl) {
        visuals = <div className="overflow-hidden relative aspect-video">
            <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={youtubeURl} allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
        </div>
    } else if (images && images.length > 0) {
        visuals =
            <div className="overflow-hidden relative aspect-video">
                <figure className="hover-gallery absolute top-0 left-0 w-full h-full">
                    {
                        images?.map((image, idx) => (
                            <Image key={idx} src={image.url} alt={image.alt} width={1000} height={1000}/>
                        ))
                    }
                </figure>
            </div>
    }
    let teckStackElements: React.JSX.Element | null = null;
    if (teckStack && teckStack.length > 0) {
        teckStackElements = <div className="flex items-center gap-2 flex-wrap justify-between  dark:h-10  dark:bg-white dark:px-1 dark:rounded-sm">
            {teckStack.map((item, idx) => (
                item.nextImage
            ))}
        </div>
    }

    return (
        <div className="card bg-base-100 shadow-sm">
            {visuals}
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <p>
                    Role: {role} ({getTimeRange({startDate, endDate, format: dateFormat})})
                </p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    {labels?.map((label, idx) => (
                        <div key={idx} className="badge badge-outline">{label.text}</div>
                    ))}
                </div>
                {teckStackElements}
            </div>
        </div>
    )
}