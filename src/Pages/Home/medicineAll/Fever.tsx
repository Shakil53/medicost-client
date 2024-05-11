import { useQuery } from '@tanstack/react-query';
import React from 'react';
import FeverComponent from './categoryComponent/FeverComponent';

const Fever = () => {

    const getFever = async() => {
        return await fetch('/medicine.json').then(res => res.json());
    }


    const {data, isLoading, isError} = useQuery({
        queryKey: ["fever"],
        queryFn: getFever,

    })

    if (isLoading) {
        return <p>Loading..</p>
    }
    return (
        <div className="flex flex-wrap space-x-5 justify-around">
            {
                data?.map(item => <FeverComponent key={item.id} item={item}></FeverComponent>)
          }
        </div>
    );
};

export default Fever;