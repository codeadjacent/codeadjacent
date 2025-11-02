import {AcceptedDateType, createDateTime,} from "@/lib/utils/date/convert-date-to-iso";

export function getTimeRange({startDate, endDate, format}: {
    startDate?: AcceptedDateType,
    endDate?: AcceptedDateType,
    format?: string
}): string | null {
    const appliedFormat = format || 'dd.LL.yyyy'
    const startDatetime = createDateTime(startDate)
    const endDatetime = createDateTime(endDate)
    if (startDatetime && endDatetime) {
        return `${startDatetime.toFormat(appliedFormat)} - ${endDatetime.toFormat(appliedFormat)}`
    }
    if (startDatetime) {
        return `Since ${startDatetime.toFormat(appliedFormat)}`
    }
    if (endDatetime) {
        return `Until ${endDatetime.toFormat(appliedFormat)}`
    }
    return null
}

export function getDuration({startDate, endDate}: {
    startDate?: AcceptedDateType,
    endDate?: AcceptedDateType,
}): string | null {
    const startDatetime = createDateTime(startDate)
    const endDatetime = createDateTime(endDate)
    if (startDatetime && endDatetime) {
        const duration = endDatetime.diff(startDatetime, [
            "years",
            "months",
        ]);
        const {years, months} = duration.toObject();
        const yearsStr = Number(years) > 0 ? `${years}yr${Number(years) > 1 ? 's' : ''}` : '';
        const monthsStr = Number(months) > 0 ? `${Math.ceil(Number(months))}mo${Number(months) > 1 ? 's' : ''}` : '';
        return [yearsStr, monthsStr].filter(Boolean).join(' ')
    }
    return null
}