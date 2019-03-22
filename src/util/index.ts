import { isNullOrUndefined } from 'util';

export const getStr = (str: string | undefined): string => isNullOrUndefined(str) ? '' : str;

export const guid = () => {
    // tslint:disable-next-line:no-bitwise
    const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);

    return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());

};

const getDate = (dateStr: string): Date => {
    const timeArr = dateStr.split('-');
    const date = new Date(Number(timeArr[0]), (Number(timeArr[1]) - 1), Number(timeArr[2]));

    return date;
};

const addDay = (date: Date, num: number): Date => {
    date.setDate(date.getDate() + num);

    return date;
};

export const dateUtil = {
    getDate,
    addDay
};
