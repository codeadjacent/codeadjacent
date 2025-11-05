'use client'

import Image from "next/image";
import kitLogo from "@/public/logos/kit.png";
import Link from "next/link";
import {usePdfViewModal} from "@/hooks/use-pdf-view-modal";
import {useTranslations} from "next-intl";

const FILES: Record<string, string> = {
    KIT_BACHELOR: "https://code-adjacent.s3.eu-central-1.amazonaws.com/files/KIT_Bachelor_Han_Che.pdf",
    KIT_MASTER: "https://code-adjacent.s3.eu-central-1.amazonaws.com/files/KIT_Master_Han_Che.pdf"
}

export default function EducationSection() {
    const translate = useTranslations('ABOUT.EDUCATION');
    const {open} = usePdfViewModal()
    return (
        <section>
            <h2 className="mb-3 font-medium">
                {translate('HEADING#EDUCATION')}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="card bg-base-100 shadow-sm" onClick={() => open(FILES.KIT_MASTER)}>
                    <div className="card-body">
                        <Image src={kitLogo} className="w-18" alt="KIT"/>
                        <div>
                            <p>2015 - 2018</p>
                            <h3 className="font-bold">M.Sc. {translate('LABEL#INFORMATION_ENGINEERING')}</h3>
                            <p><Link className="link link-hover" href="https://www.kit.edu/" target="_blank">Karlsruhe
                                Institute of
                                Technology</Link></p>
                            <p>{translate('LABEL#GRADE')} 2.1</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-sm" onClick={() => open(FILES.KIT_BACHELOR)}>
                    <div className="card-body">
                        <Image src={kitLogo} className="w-18" alt="KIT"/>
                        <div>
                            <p>2015 - 2018</p>
                            <h3 className="font-bold">B.Sc. {translate('LABEL#INDUSTRIAL_ENGINEERING')}</h3>
                            <p><Link className="link link-hover" href="https://www.kit.edu/" target="_blank">Karlsruhe
                                Institute of
                                Technology</Link></p>
                            <p>{translate('LABEL#GRADE')} 1.8</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}