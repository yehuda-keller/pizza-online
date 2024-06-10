import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

const dataFetchReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_INIT':
            return { ...state, isLoading: true, isError: false };
        case 'FETCH_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload,
            };
        case 'FETCH_FAILURE':
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        default:
            throw new Error();
    }
};

const useDataApi = (initialUrl, initialData) => {
    const [requestConfig, setRequestConfig] = useState({
        url: initialUrl,
        method: 'GET',
        data: null,
    });

    const [state, dispatch] = useReducer(dataFetchReducer, {
        isLoading: false,
        isError: false,
        data: initialData,
    });

    useEffect(() => {
        if (!requestConfig.url) return;

        let didCancel = false;

        const fetchData = async () => {
            dispatch({ type: 'FETCH_INIT' });

            try {
                const result = await axios({
                    method: requestConfig.method,
                    url: requestConfig.url,
                    data: requestConfig.data,
                });

                if (!didCancel) {
                    dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
                }
            } catch (error) {
                if (!didCancel) {
                    dispatch({ type: 'FETCH_FAILURE' });
                }
            }
        };

        fetchData();

        return () => {
            didCancel = true;
        };
    }, [requestConfig]);

    return [state, setRequestConfig];
};

export default useDataApi;
