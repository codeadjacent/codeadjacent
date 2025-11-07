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
    ANGULAR: <Image src={angularLogo} alt="Angular" width={50} height={30}/>,
    NEST: <Image src={nestLogo} alt="NestJs" width={50} height={30}/>,
    GRAPHQL: <Image src={graphqlLogo} alt="GraphQL" width={50} height={30}/>,
    POSTGRES: <Image src={postgresLogo} alt="Postgres" width={50} height={30}/>,
    REACT: <Image src={reactLogo} alt="React" width={50} height={30}/>,
    DOCKER: <Image src={dockerLogo} alt="Docker" width={50} height={30}/>,
    KUBERNETES: <Image src={kubernetesLogo} alt="Kubernetes" width={50} height={30}/>,
    IONIC: <Image src={ionicLogo} alt="Ionic" width={50} height={30}/>,
    AWS: <Image src={awsLogo} alt="AWS" width={25} height={30}/>,
    DYNAMODB: <Image src={dynamodbLogo} alt="DynamoDB" width={70} height={30}/>,
    REST: <Image src={restLogo} alt="REST" width={30} height={30}/>,
}

export const PORTFOLIO_LIST: PortfolioItemProps[] = [
    // {
    //     title: 'Validation Engine',
    // },
    {
        title: 'Cut 30+ mins from part approval process for series production.',
        role: 'Tech Lead',
        startDate: '2024-05-01',
        endDate: '2025-08-31',
        description: "@XL2, I lead a team that launched the first version of an application for a major German car manufacturer within six months. This application reduced the approval and sign-off process in meetings for car parts before series production by at least 30 minutes.",
        youtubeURl: "https://www.youtube.com/embed/yLmEUbDdqOM",
        teckStack: [
            {name: 'Angular 19', nextImage: LOGOS.ANGULAR},
            {name: 'NestJs', nextImage: LOGOS.NEST},
            {name: 'GraphQL', nextImage: LOGOS.GRAPHQL},
            {name: 'Postgres', nextImage: LOGOS.POSTGRES},
            {name: 'Docker', nextImage: LOGOS.DOCKER},
        ]
    }, {
        title: 'Mange battery components for batch tracking and legal hold.',
        description: "@XL2, I lead 2 junior devs to refactor a react app into angular application for managing battery component data. The resulting angular project went on to become the standard setup for at least 5 other XL2 projects.",
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
        title: 'Selfbits Manufacturing Suite',
        description: "Designed, implemented, and operated a SaaS MES Solution (web, mobile and TV) for 200+ users across 5 European factories.",
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