import { useQuery } from '@tanstack/react-query';
import ConstipationComponent from './categoryComponent/ConstipationComponent';

const Constipation = () => {
    const getConstipation = async() => {
        return await fetch('/medicine.json').then(res => res.json());
    }


    const {data, isLoading, isError} = useQuery({
        queryKey: ["constipationItem"],
        queryFn: getConstipation,

    })

    if (isLoading) {
        return <p>Loading..</p>
    }

    return (
        <div className="flex flex-wrap space-x-5 justify-around">
            {
                data?.map(item => <ConstipationComponent key={item.id} item={item}></ConstipationComponent>)
           }
        </div>
    );
};

export default Constipation;