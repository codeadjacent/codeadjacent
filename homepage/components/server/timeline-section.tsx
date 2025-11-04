import React, {ReactNode} from "react";
import {WorkExperience} from "@/types/work-experience";
import {getDuration, getTimeRange} from "@/lib/utils/date/timerange";
import Link from "next/link";


export default function TimelineItem({experience, children}: { experience: WorkExperience, children?: ReactNode }) {
    const {startDate, endDate, company, positions, jobTitle} = experience;
    const dateFormat = 'LL.yyyy';
    return (
        <>
            <div className="group relative flex gap-x-5">
                <div
                    className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                    <div className="relative z-10 size-10 flex justify-center items-center">
                        {company.logo}
                    </div>
                </div>

                <div className="grow pb-8 group-last:pb-0">
                    <p className="text-xs">
                        {getTimeRange({startDate, endDate, format: dateFormat})} ({getDuration({startDate, endDate})})
                    </p>
                    {positions && positions.length > 0 ?
                        <>
                            <h3 className="text-lg font-bold ">
                                <Link className="link link-hover" target="_blank"
                                      href={company.homepageUrl}>{company.name}</Link>
                            </h3>
                            {
                                positions.map((position, index) => (
                                    <div className="mt-3" key={index}>
                                        <p  className="font-bold">{position.jobTitle}</p>
                                        <p className="text-xs"> {getTimeRange({
                                            startDate: position.startDate,
                                            endDate: position.endDate,
                                            format: dateFormat
                                        })} ({getDuration({
                                            startDate: position.startDate,
                                            endDate: position.endDate,
                                        })})</p>
                                    </div>
                                ))
                            }
                        </>

                        :
                        <>
                            <h3 className="text-lg font-semibold">
                                {jobTitle}&nbsp;@<Link className="link link-hover" target="_blank"
                                                       href={company.homepageUrl}>{company.name}</Link>
                            </h3>
                            {children}
                        </>

                    }
                </div>
            </div>
        </>
    )
}