import {JSX} from "react";

export interface WorkPosition {
    jobTitle?: string;
    startDate: string;
    endDate?: string;
    location?: string;
    isRemote?: boolean;
}

export interface WorkExperience extends WorkPosition{
    company: {
        logo: JSX.Element;
        name: string;
        homepageUrl: string;
        location?: string;
        googleMapsUrl?: string;
    };
    positions?: Array<WorkPosition>
}