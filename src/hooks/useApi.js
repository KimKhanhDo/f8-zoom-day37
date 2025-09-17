import { useState, useEffect } from 'react';

function useApi(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [reloadCount, setReloadCount] = useState(0);

    const refetch = () => {
        setReloadCount((prev) => prev + 1);
    };

    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch');
                return res.json();
            })
            .then((data) => {
                setTimeout(() => {
                    setData(data);
                    setLoading(false);
                }, 1000);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, [url, reloadCount]);

    return { data, loading, error, refetch };
}

export default useApi;
