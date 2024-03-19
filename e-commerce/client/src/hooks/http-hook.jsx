import { useEffect, useReducer, useRef, useCallback } from "react";

const initialState = {
    data: null,
    status: null,
    error: null
}

const httpReducer = (state, action) => {
    if (action.type === "sent") {
        return { data: null, error: null, status: 'pending' }
    }
    else if (action.type === "success") {
        return { data: action.data, error: null, status: 'completed' };
    }
    else if (action.type === "failure") {
        return { data: null, error: action.error, status: 'completed' };
    }

    return initialState;
}

const useHttp = (httpRequest) => {

    const [httpdata, dispatch] = useReducer(httpReducer, initialState);

    const activeHttpRequests = useRef([]);

    const sendRequest = useCallback(async (body = null, userId = null, token = null) => {
        dispatch({ type: "sent" });

        const httpAbortController = new AbortController();
        activeHttpRequests.current.push(httpAbortController);

        try {
            const data = await httpRequest(body, httpAbortController, userId, token);
            // console.log(data);
            dispatch({ type: "success", data });

            activeHttpRequests.current = activeHttpRequests.current.filter(reqCtrl => reqCtrl !== httpAbortController);
        }
        catch (err) {
            console.error(err);
            dispatch({ type: "failure", error: err.message || "Something went wrong, try again later!" });
        }

    }, []);

    useEffect(() => {
        return () => {
            activeHttpRequests.current.forEach((abortCtrl => abortCtrl.abort()));
        }
    }, [])

    return {
        sendRequest,
        ...httpdata
    }
};

export default useHttp;