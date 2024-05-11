import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ZincDeficiencyComponent from './categoryComponent/ZincDeficiencyComponent';

const ZincDeficiency = () => {

    const getZincDeficiency = async () => {
        return await fetch('/medicine.json')
            .then(res => res.json());
    }



    const { data, isLoading, isError } = useQuery({
        queryKey: ["zincDeficiency"],
        queryFn: getZincDeficiency,
    })
    if (isLoading) {
        return <p>Loading..</p>
    }

    return (
        <div className="flex flex-wrap space-x-5 justify-around">
            {
                data?.map(item => <ZincDeficiencyComponent key={item.id} item={item}></ZincDeficiencyComponent>)
            }
        </div>
    );
};

export default ZincDeficiency;