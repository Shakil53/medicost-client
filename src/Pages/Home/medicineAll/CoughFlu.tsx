import { useQuery } from '@tanstack/react-query';

import CoughFluComponent from './categoryComponent/CoughFluComponent';
import { Key } from 'react';

const CoughFlu = () => {

    
    const getCoughFlu = async() => {
        return await fetch('/medicine.json').then(res => res.json());
    }
    const {data, isLoading} = useQuery({
        queryKey: ["coughAndFlu"],
        queryFn: getCoughFlu,

    })

    if (isLoading) {
        return <p>Loading..</p>
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-16 gap-4">
            {
                data?.map((item: { id: Key | null | undefined; })=> <CoughFluComponent key={item.id} item={item}></CoughFluComponent>)
            }
        </div>
    );
};

export default CoughFlu;