import { useQuery } from '@tanstack/react-query';

import ZincDeficiencyComponent from './categoryComponent/ZincDeficiencyComponent';
import { Key } from 'react';

const ZincDeficiency = () => {

    const getZincDeficiency = async () => {
        return await fetch('/medicine.json')
            .then(res => res.json());
    }



    const { data, isLoading} = useQuery({
        queryKey: ["zincDeficiency"],
        queryFn: getZincDeficiency,
    })
    if (isLoading) {
        return <p>Loading..</p>
    }

    return (
        <div className="flex flex-wrap space-x-5 justify-around">
            {
                data?.map((item: { id: Key | null | undefined; }) => <ZincDeficiencyComponent key={item.id} item={item}></ZincDeficiencyComponent>)
            }
        </div>
    );
};

export default ZincDeficiency;