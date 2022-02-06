/**
 * function to fetch movie data based on the url
 * @param url
 * @returns
 */
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