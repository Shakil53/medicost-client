import { useQuery } from '@tanstack/react-query';
import React from 'react';
import GynecologicalComponent from './categoryComponent/GynecologicalComponent';

const Gynecological = () => {
    const getGynecological = async() => {
        return await fetch('/medicine.json').then(res => res.json());
    }


    const {data, isLoading, isError} = useQuery({
        queryKey: ["gynecological"],
        queryFn: getGynecological,

    })

    if (isLoading) {
        return <p>Loading..</p>
    }

    return (
        <div className="flex flex-wrap space-x-5 justify-around">
            {
                data?.map(item => <GynecologicalComponent key={item.id} item={item}></GynecologicalComponent>)
            }
        </div>
    );
};

export default Gynecological;