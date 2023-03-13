import React, { useEffect, useState } from 'react'
import { getCollectionDatas } from '../utils/firebase.utils';

function useCollection(path: string) {
    const [data, setData] = useState<any>([]);
    useEffect(() => {
       async function getData() {
       try {
        const res = await getCollectionDatas(path);
        setData(res);
       } catch (error) {}
       }
       getData();
    }, []);
    return data;
}

export default useCollection