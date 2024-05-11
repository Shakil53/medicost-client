import { useQuery } from '@tanstack/react-query';
import UlcerComponent from './categoryComponent/UlcerComponent';
import { Key } from 'react';

const Ulcer = () => {
    const getUlcer = async() => {
        return await fetch('/medicine.json').then(res => res.json());
    }


    const {data, isLoading} = useQuery({
        queryKey: ["ulcerItem"],
        queryFn: getUlcer,

    })

    if (isLoading) {
        return <p>Loading..</p>
    }

    return (
        <div className="flex flex-wrap space-x-5 justify-around">
            {
                data?.map((item: { id: Key | null | undefined; })=> <UlcerComponent key={item.id} item={item}></UlcerComponent>)
            }
        </div>
    );
};

export default Ulcer;