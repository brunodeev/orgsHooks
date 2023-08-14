import { useState, useEffect } from 'react';

import { loadProducers } from '../services/loadData';

export default function useProducers(){

    const [title, setTitle] = useState('');
    const [list, setList] = useState([]);

    useEffect(() => {
        const response = loadProducers();
        setTitle(response.title);
        setList(response.list);
    }, []);

    return [title, list];
}