import {DateTime} from "luxon";

export type AcceptedDateType = Date | DateTime | string | number;

export function convertDateToISO(date: AcceptedDateType): string | null {
    if (!date) {
        return null;
    }
    if (date instanceof Date) {
        return DateTime.fromJSDate(date).toISO()
    }
    if (date instanceof DateTime) {
        return date.toISO()
    }
    if (typeof date === 'string') {
        return DateTime.fromISO(date).toISO()
    }
    if (typeof date === 'number') {
        return DateTime.fromMillis(date).toISO()
    }
    return null
}

export function createDateTime(date?: AcceptedDateType): DateTime | null {
    if (!date) {
        return DateTime.now()
    }
    const iso = convertDateToISO(date)
    if (iso) {
        return DateTime.fromISO(iso)
    }
    return null
}