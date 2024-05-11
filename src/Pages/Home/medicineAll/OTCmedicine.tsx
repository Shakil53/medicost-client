import { useQuery } from "@tanstack/react-query";
import OTCmedicineComponent from "./categoryComponent/OTCmedicineComponent";


const OTCmedicine = () => {

    const getOtcMedicine = async () => {
        return await fetch('/medicine.json').then(res => res.json());
    }


 

    const {data, isLoading, isError} = useQuery({
        queryKey: ["OTCmedicine"],
        queryFn: getOtcMedicine,

    })

    //loading state
    if (isLoading) {
        return <p>Loading..</p>
    }



    return (
        <div className="flex flex-wrap space-x-5 justify-around">
            
                {
                    data.map(item => <OTCmedicineComponent key={item.id} item={item}></OTCmedicineComponent>)
                }
            
        </div>
    );
};

export default OTCmedicine;
