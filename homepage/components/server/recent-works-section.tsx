import {useTranslations} from "next-intl";
import PortfolioItem from "@/components/server/portfolio-item";
import {PortfolioItemProps} from "@/types/portfolio";
import angularLogo from "@/public/logos/angular.png"
import nestLogo from "@/public/logos/nest.png"
import graphqlLogo from "@/public/logos/graphql.png"
import postgresLogo from "@/public/logos/postgres.png"
import reactLogo from "@/public/logos/react.png"
import awsLogo from "@/public/logos/aws.png"
import restLogo from "@/public/logos/rest.png"
import dynamodbLogo from "@/public/logos/dynamodb.png"
import dockerLogo from "@/public/logos/docker.png"
import kubernetesLogo from "@/public/logos/kubernetes.png"
import ionicLogo from "@/public/logos/ionic.png"
import Image from "next/image";

const LOGOS = {
    ANGULAR: <Image key="Angular" src={angularLogo} alt="Angular" width={50} height={30}/>,
    NEST: <Image key="NestJs" src={nestLogo} alt="NestJs" width={50} height={30}/>,
    GRAPHQL: <Image key="GraphQL" src={graphqlLogo} alt="GraphQL" width={50} height={30}/>,
    POSTGRES: <Image key="Postgres" src={postgresLogo} alt="Postgres" width={50} height={30}/>,
    REACT: <Image key="React" src={reactLogo} alt="React" width={50} height={30}/>,
    DOCKER: <Image key="Docker" src={dockerLogo} alt="Docker" width={50} height={30}/>,
    KUBERNETES: <Image key="Kubernetes" src={kubernetesLogo} alt="Kubernetes" width={50} height={30}/>,
    IONIC: <Image key="Ionic" src={ionicLogo} alt="Ionic" width={50} height={30}/>,
    AWS: <Image key="AWS" src={awsLogo} alt="AWS" width={25} height={30}/>,
    DYNAMODB: <Image key="DynamoDB" src={dynamodbLogo} alt="DynamoDB" width={70} height={30}/>,
    REST: <Image key="REST" src={restLogo} alt="REST" width={30} height={30}/>,
}

export const PORTFOLIO_LIST: PortfolioItemProps[] = [
    {
        title: 'PORTFOLIO.APPTRACK.TITLE',
        description: "PORTFOLIO.APPTRACK.DESCRIPTION",
        role: 'Tech Lead',
        startDate: '2024-05-01',
        endDate: '2025-08-31',
        youtubeURl: "https://www.youtube.com/embed/yLmEUbDdqOM",
        teckStack: [
            {name: 'Angular 19', nextImage: LOGOS.ANGULAR},
            {name: 'NestJs', nextImage: LOGOS.NEST},
            {name: 'GraphQL', nextImage: LOGOS.GRAPHQL},
            {name: 'Postgres', nextImage: LOGOS.POSTGRES},
            {name: 'Docker', nextImage: LOGOS.DOCKER},
        ]
    }, {
        title: 'PORTFOLIO.CTR.TITLE',
        description: "PORTFOLIO.CTR.DESCRIPTION",
        role: 'UX/Frontend Lead',
        startDate: '2023-10-01',
        endDate: '2024-06-30',
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
        ],
        teckStack: [
            {name: 'Angular 19', nextImage: LOGOS.ANGULAR},
            {name: 'React', nextImage: LOGOS.REACT},
            {name: 'REST', nextImage: LOGOS.REST},
            {name: 'DynamoDB', nextImage: LOGOS.DYNAMODB},
            {name: 'AWS', nextImage: LOGOS.AWS},
        ]
    }, {
        title: 'PORTFOLIO.SMS.TITLE',
        description: "PORTFOLIO.SMS.DESCRIPTION",
        role: 'UX/Frontend Lead',
        startDate: '2020-08-01',
        endDate: '2023-09-30',
        images: [
            {url: "https://code-adjacent.s3.eu-central-1.amazonaws.com/portfolio/selfbits/sms.png", alt: ""},
            {url: "https://code-adjacent.s3.eu-central-1.amazonaws.com/portfolio/selfbits/dashboard2.png", alt: ""},
            {
                url: "https://code-adjacent.s3.eu-central-1.amazonaws.com/portfolio/selfbits/tablets.png",
                alt: ""
            },
        ],
        teckStack: [
            {name: 'Angular 19', nextImage: LOGOS.ANGULAR},
            {name: 'Ionic', nextImage: LOGOS.IONIC},
            {name: 'NestJs', nextImage: LOGOS.NEST},
            {name: 'GraphQL', nextImage: LOGOS.GRAPHQL},
            {name: 'Postgres', nextImage: LOGOS.POSTGRES},
        ]
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