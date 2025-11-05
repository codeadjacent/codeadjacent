import {useTranslations} from "next-intl";
import PortfolioItem from "@/components/server/portfolio-item";
import {PortfolioItemProps} from "@/types/portfolio";

export const PORTFOLIO_LIST: PortfolioItemProps[] = [
    // {
    //     title: 'Validation Engine',
    // },
    {
        title: 'Audi NewTON Apptrack',
        description: "WiP :)"
        // description: '@XL2, I led a team to launch the first version of a critical application within 6 months, enabling stakeholders to approve and sign off car parts in meetings for serial production completely digitally.'
    }, {
        title: 'Audi Component Repository',
        description: "WiP :)",
        images: [
            {url: "https://code-adjacent.s3.eu-central-1.amazonaws.com/portfolio/ctr/CTR_1_Home.png", alt: ""},
            {url: "https://code-adjacent.s3.eu-central-1.amazonaws.com/portfolio/ctr/CTR_20_Contracts.png", alt: ""},
            {
                url: "https://code-adjacent.s3.eu-central-1.amazonaws.com/portfolio/ctr/CTR_25_Contract_Detail.png",
                alt: ""
            },
            {
                url: "https://code-adjacent.s3.eu-central-1.amazonaws.com/portfolio/ctr/CTR_50_Product_Pass_Template_Detail.png",
                alt: ""
            },
            {url: "https://code-adjacent.s3.eu-central-1.amazonaws.com/portfolio/ctr/CTR_60_Product_Pass.png", alt: ""},
            {
                url: "https://code-adjacent.s3.eu-central-1.amazonaws.com/portfolio/ctr/CTR_65_Product_Pass_Detail.png",
                alt: ""
            },
        ]
    }, {
        title: 'Selfbits Manufacturing Suite',
        description: "WiP :)"
    },
]

export default function RecentWorksSection() {
    const translate = useTranslations('ABOUT.RECENT_WORKS');
    return (
        <section>
            <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
                {translate('HEADING#RECENT_WORKS')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {PORTFOLIO_LIST.map((item, idx) => (
                    <PortfolioItem key={idx} props={item}></PortfolioItem>

                ))}
            </div>
        </section>
    )
}