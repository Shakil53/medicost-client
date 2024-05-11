
import { useQuery } from '@tanstack/react-query';
import DiarrheaComponent from './categoryComponent/DiarrheaComponent';
import { Key } from 'react';

const Diarrhea = () => {
    const getDiarrheaItem = async () => {
        return await fetch('/medicine.json')
            .then(res => res.json());
    }


    const { data, isLoading } = useQuery({
        queryKey: ["diarrheaItem"],
        queryFn: getDiarrheaItem,
    })

    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
        <div className="flex flex-wrap space-x-5 justify-around">
            {
                data?.map((item: { id: Key | null | undefined; }) => <DiarrheaComponent key={item.id} item={item}></DiarrheaComponent>)
            }
        </div>
    );
};

export default Diarrhea;