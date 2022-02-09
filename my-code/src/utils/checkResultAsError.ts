import { ErrorResponse } from "../interfaces/resultAsError";

export const resultIsError = (data: any): data is ErrorResponse => {
    return 'Error' in data;
}