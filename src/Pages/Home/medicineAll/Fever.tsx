import { useQuery } from '@tanstack/react-query';

import FeverComponent from './categoryComponent/FeverComponent';
import { Key } from 'react';

const Fever = () => {

    const getFever = async() => {
        return await fetch('/medicine.json').then(res => res.json());
    }


    const {data, isLoading} = useQuery({
        queryKey: ["fever"],
        queryFn: getFever,

    })

    if (isLoading) {
        return <p>Loading..</p>
    }
    return (
        <div className="flex flex-wrap space-x-5 justify-around">
            {
                data?.map((item: { id: Key | null | undefined; }) => <FeverComponent key={item.id} item={item}></FeverComponent>)
          }
        </div>
    );
};

export default Fever;