
import { useQuery } from "@tanstack/react-query";
import GasticComponent from './categoryComponent/GasticComponent';
import { Key } from "react";

const Gastric = () => {

    const getGasticItem = async () => {
        return await fetch('/medicine.json').then(res => res.json());
    }

    const {data,isLoading} = useQuery({
        queryKey: ["gasticItem"],
        queryFn: getGasticItem,
    })

    if (isLoading) {
        return <p>Loading..</p>
    }

    return (
        <div className="flex flex-wrap space-x-5 justify-around">
            {
                data?.map((item: { id: Key | null | undefined; })=> <GasticComponent key={item.id} item={item}></GasticComponent>)
            }
        </div>
    );
};

export default Gastric;