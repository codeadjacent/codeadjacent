import {useTranslations} from "next-intl";
import {WorkExperience} from "@/types/work-experience";
import Image from "next/image";
import selfbitsLogo from "@/public/logos/selfbits.png";
import Xl2Logo from "@/components/server/logos/xl2-logo";
import infobipLogo from "@/public/logos/infobip.png";
import TimelineItem from "@/components/server/timeline-section";

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


export default function WorkExperienceSection() {
    const translate = useTranslations('ABOUT.WORK_EXPERIENCE');
    return (
        <section>
            <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
                {translate('HEADING#WORK_EXPERIENCE')}
            </h2>

            <div>
                {workExperiences.map((experience, idx) => (
                    <TimelineItem key={idx} experience={experience}></TimelineItem>))}
            </div>
        </section>
    )
}