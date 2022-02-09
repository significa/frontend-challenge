import { ErrorResponse } from "../interfaces/resultAsError";

export default async function fetchApiData<T>(url: string) {
    let tempData;
    let error = '';

    try {
        const res = await fetch(url);
        const responseData = await res.json();
        if (responseData.Search) {
            tempData = responseData.Search;
        } else tempData = responseData;
    } catch (err: any) {
        if (err instanceof ErrorEvent) {
            error = err.message;
        } else {
            error = 'failed to fetch';
        }
    }

    const data: T = tempData;
    
    return {data, error};
}


export const resultIsError = (data: any): data is ErrorResponse => {
    return 'Error' in data;
}