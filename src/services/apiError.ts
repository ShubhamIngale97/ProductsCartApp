import axios from "axios";


export const getApiErrorMessage = (error: unknown): string => {
    if (axios.isAxiosError(error)) {
        if (error.response) {
            return `Server error: ${error.response.status}`;
        }
        if (error.request) {
            return 'Unable to reach the server. Check your internet connection.';
        }
        return error.message;
    }

    if (error instanceof Error) {
        return error.message;
    }

    return 'Something went wrong';
}