import { useQuery } from '@tanstack/react-query';
import SpasmComponent from './categoryComponent/SpasmComponent';
import { Key } from 'react';

const Spasm = () => {


    const getSpasmItem = async () => {
        return await fetch('/medicine.json')
            .then(res => res.json());
    }

    const { data, isLoading} = useQuery({
        queryKey: ['spasmItem'],
        queryFn: getSpasmItem,
    })

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div className="flex flex-wrap space-x-5 justify-around">
            {
                data?.map((item: { id: Key | null | undefined; }) => <SpasmComponent key={item.id} item={item}></SpasmComponent>)
            }
        </div>
    );
};

export default Spasm;