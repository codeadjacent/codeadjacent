import Image from "next/image";
import {Mail} from "lucide-react";
import profileImage from "@/public/profile.png";
import TimelineItem from "@/components/server/timeline-section";
import EducationSection from "@/components/client/edutation-section";
import {useTranslations} from "next-intl";
import {WorkExperience} from "@/types/work-experience";
import selfbitsLogo from "@/public/logos/selfbits.png";
import Xl2Logo from "@/components/server/logos/xl2-logo";
import infobipLogo from "@/public/logos/infobip.png";

const SELFBITS_COMPANY: WorkExperience['company'] = {
    name: 'Selfbits',
    logo: <Image className="h-full object-contain" src={selfbitsLogo} alt="Selfbits"/>,
    homepageUrl: 'https://selfbits.de/',
    location: 'Haid-und-Neu-Straße 7, 76131 Karlsruhe',
    googleMapsUrl: 'https://www.google.com/maps/place/Selfbits+GmbH/@49.013215,8.4227384,17z/data=!3m2!4b1!5s0x47970f6f49881725:0x862fc89eb7e8a563!4m6!3m5!1s0x47970638299b6bd7:0x2244758ddb78e906!8m2!3d49.0132115!4d8.4253133!16s%2Fg%2F11cs25dlt0?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D'
}
const workExperiences: WorkExperience[] = [
    {
        jobTitle: 'Senior Software Engineer',
        startDate: '2023-10-01',
        endDate: '2025-08-31',
        company: {
            name: 'Xl2 by Audi & Capgemini',
            logo: <Xl2Logo/>,
            homepageUrl: 'https://www.xl2.de/',
            location: 'Edisonstr. 25, 74076 Heilbronn',
            googleMapsUrl: 'google.com/maps/place/XL2+by+Audi+%26+Capgemini/@49.1502219,9.2107733,16z/data=!3m1!5s0x47982f50220b6031:0x215bdf5d05fedab2!4m6!3m5!1s0x47982fa59a82ea9d:0xf56477e276d4239d!8m2!3d49.1502252!4d9.2107742!16s%2Fg%2F11lk0r1v0b?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D'
        },
        isRemote: true,
    },
    {
        startDate: '2017-05-01',
        endDate: '2023-09-30',
        company: SELFBITS_COMPANY,
        positions: [
            {
                jobTitle: 'Senior Software Engineer',
                startDate: '2020-05-01',
                endDate: '2023-09-30',
                isRemote: false,
            },
            {
                jobTitle: 'Senior Sales Engineer',
                startDate: '2018-04-01',
                endDate: '2020-04-30',
                isRemote: false,
            },
            {
                jobTitle: 'Working student',
                startDate: '2017-05-01',
                endDate: '2018-03-31',
                isRemote: false,
            },
        ]
    },
    {
        startDate: '2012-12-01',
        endDate: '2015-09-30',
        company: {
            name: 'Infobip',
            logo: <Image className="h-full object-contain" src={infobipLogo} alt="Infobip"/>,
            homepageUrl: 'https://www.infobip.com/',
            location: 'Suite 27-03, Level 27, Integra Tower, The Intermark, 348, Jln Tun Razak, Kampung Datuk Keramat, 50400 Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia',
            googleMapsUrl: 'https://www.google.com/maps/place/Infobip+Asia+Pacific/@3.161479,101.7207597,12z/data=!4m6!3m5!1s0x31cdb6fabd7429e1:0x23e4264df27d060e!8m2!3d3.1614909!4d101.7205313!16s%2Fg%2F11b720xf60?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D'
        },
        positions: [
            {
                jobTitle: 'Business Development Director Greater China',
                startDate: '2014-04-01',
                endDate: '2015-09-30',
                isRemote: false,
            },
            {
                jobTitle: 'Business Development Manager APAC',
                startDate: '2012-12-01',
                endDate: '2014-03-31',
                isRemote: false,
            },
        ]
    },

]

export default function Home() {
    const introductionTranslate = useTranslations('ABOUT.INTRODUCTION');
    const workExperienceTranslate = useTranslations('ABOUT.WORK_EXPERIENCE');
    return (
        <main className="content-container flex flex-col gap-10 pb-10" id="content">
            <section>
                <div className="flex items-center gap-x-3">
                    <div className="shrink-0">
                        <Image className="shrink-0 size-24 rounded-full"
                               src={profileImage}
                               alt="Han Che"/>
                    </div>

                    <div className="grow">
                        <h1 className="text-xl font-medium">
                            Han Che
                        </h1>
                        <p>
                            Tech lead & Founding engineer (Frontend & UI/UX focus)
                        </p>
                    </div>
                </div>

                <div className="mt-3">
                    <p>
                        {introductionTranslate('TEXT#SUMMARY')}
                    </p>

                    <ul className="mt-5 flex flex-col gap-y-3">
                        <li className="flex items-center gap-x-2.5">
                            <Mail size={16}/>
                            <a className="link link-hover"
                               href="mailto:code.adjacent@gmail.com">
                                code.adjacent@gmail.com
                            </a>
                        </li>

                        <li className="flex items-center gap-x-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin">
                                <path
                                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                                <rect width="4" height="12" x="2" y="9"/>
                                <circle cx="4" cy="4" r="2"/>
                            </svg>
                            <a className="link link-hover"
                               href="https://www.linkedin.com/in/han-che/">
                                han-che
                            </a>
                        </li>

                        <li className="flex items-center gap-x-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="lucide lucide-github-icon lucide-github">
                                <path
                                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                                <path d="M9 18c-4.51 2-5-2-7-2"/>
                            </svg>
                            <a className="link link-hover"
                               href="https://github.com/codeadjacent">
                                CodeAdjacent
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            {/*Work experience*/}
            <section>
                <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
                    {workExperienceTranslate('HEADING#WORK_EXPERIENCE')}
                </h2>

                <div>
                    {workExperiences.map((experience, idx) => (
                        <TimelineItem key={idx} experience={experience}></TimelineItem>))}
                </div>
            </section>

            <EducationSection></EducationSection>
        </main>
    );
}
