/**
 * function to fetch movie data based on the url
 * @param url
 * @returns
 */
export default async function fetchApiData<T>(url: string) {
    let data: any;
    let error = '';

    try {
        const res = await fetch(url);
        data = await res.json();
        data = data.Search;
        // console.log(data);
    } catch (err: any) {
        if (err instanceof ErrorEvent) {
            error = err.message;
        } else {
            error = 'failed to fetch';
        }
    }
    
    return {data, error};
}