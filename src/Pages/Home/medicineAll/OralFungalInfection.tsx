import { useQuery } from '@tanstack/react-query';
import OralFungalInfectionComponent from './categoryComponent/OralFungalInfectionComponent';
import { Key } from 'react';

const OralFungalInfection = () => {
    const getOralFungalInfection = async() => {
        return await fetch('/medicine.json').then(res => res.json());
    }


    const {data, isLoading} = useQuery({
        queryKey: ["oralFungalInfection"],
        queryFn: getOralFungalInfection,

    })

    if (isLoading) {
        return <p>Loading..</p>
    }

    return (
        <div className="flex flex-wrap space-x-5 justify-around">
            {
                data?.map((item: { id: Key | null | undefined; })=> <OralFungalInfectionComponent key={item.id} item={item}></OralFungalInfectionComponent>)
            }
        </div>
    );
};

export default OralFungalInfection;