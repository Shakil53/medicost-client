import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CoughFluComponent from './categoryComponent/CoughFluComponent';

const CoughFlu = () => {

    
    const getCoughFlu = async() => {
        return await fetch('/medicine.json').then(res => res.json());
    }
    const {data, isLoading, isError} = useQuery({
        queryKey: ["coughAndFlu"],
        queryFn: getCoughFlu,

    })

    if (isLoading) {
        return <p>Loading..</p>
    }
    return (
        <div className="flex flex-wrap space-x-5 justify-around">
            {
                data?.map(item=> <CoughFluComponent key={item.id} item={item}></CoughFluComponent>)
            }
        </div>
    );
};

export default CoughFlu;