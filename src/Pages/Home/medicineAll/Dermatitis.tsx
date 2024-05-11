import { useQuery } from '@tanstack/react-query';
import React from 'react';
import DermatitisComponent from './categoryComponent/DermatitisComponent';

const Dermatitis = () => {
    const getDermatitis = async() => {
        return await fetch('/medicine.json').then(res => res.json());
    }


    const {data, isLoading, isError} = useQuery({
        queryKey: ["dermatitis"],
        queryFn: getDermatitis,

    })

    if (isLoading) {
        return <p>Loading..</p>
    }
    return (
        <div className="flex flex-wrap space-x-5 justify-around">
            {
                data?.map(item => <DermatitisComponent key={item.id} item={item}></DermatitisComponent>)
           }
        </div>
    );
};

export default Dermatitis;