import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal})
        .then(res => {
            if(!res.ok) {
                throw Error("Unable to fetch the data due to some error")
            }
            return res.json()
        })
        .then((data) => {
            setIsLoading(false);
            setData(data);
            setError(null);
        })
        .catch(err => {
            if (err.name === "AbortError") {
                // console.log("fetch aborted");
            } else {
                setIsLoading(false)
                setError(err.message)
            }
        })
        }, 1000);

        return () => abortCont.abort();

    }, [url])

    return { data, error, isLoading}
}

export default useFetch;