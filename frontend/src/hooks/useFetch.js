// import { useEffect, useState } from "react";

// export function useFetch(fetchFn, initialValue) {
//     const [isFetching, setIsFetching] = useState();
//     const [error, setError] = useState();
//     const [fetchedData, setFetchedData] = useState(initialValue);

//     useEffect(() => {
//         async function fetchData() {
//             setIsFetching(true);
//             try {
//                 const obj = await fetchFn();
//                 setFetchedData(obj.data);
//             } catch (error) {
//                 setError({ Message: error.message || 'Failed to fetch data' });
//             }
//             setIsFetching(false);
//         }
//         fetchData();
//     }, [fetchFn]);

//     return {
//         isFetching,
//         fetchedData,
//         setFetchedData,
//         error
//     }
// }

import { useState } from "react";

export const useFetch = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = async (url, options = {}) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(url, options);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Request failed");
            }
            return data;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }

    };

    const get = (url) => request(url);
    const post = (url, body) =>
        request(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

    const put = (url, body) =>
        request(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
    const del = (url) =>
        request(url, {
            method: "DELETE"
        });

    return { get, post, put, del, loading, error };

}