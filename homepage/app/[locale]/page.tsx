import EducationSection from "@/components/client/edutation-section";
import WorkExperienceSection from "@/components/server/work-experience-section";
import IntroSection from "@/components/server/intro-section";
import RecentWorksSection from "@/components/server/recent-works-section";


export default function Home() {
    return (
        <main className="content-container flex flex-col gap-10 pb-10" id="content">
            <IntroSection></IntroSection>
            <RecentWorksSection></RecentWorksSection>
            <WorkExperienceSection></WorkExperienceSection>
            <EducationSection></EducationSection>
        </main>
    );
}
