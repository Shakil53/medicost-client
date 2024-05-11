import { useQuery } from '@tanstack/react-query';
import React from 'react';
import VitaminsComponent from './categoryComponent/VitaminsComponent';

const Vitamins = () => {
    const getVitamins = async() => {
        return await fetch('/medicine.json').then(res => res.json());
    }


    const {data, isLoading, isError} = useQuery({
        queryKey: ["vitamins"],
        queryFn: getVitamins,

    })

    if (isLoading) {
        return <p>Loading..</p>
    }
    return (
        <div className="flex flex-wrap space-x-5 justify-around">
            {
                data?.map(item => <VitaminsComponent key={item.id} item={item}></VitaminsComponent>)
           }
        </div>
    );
};

export default Vitamins;