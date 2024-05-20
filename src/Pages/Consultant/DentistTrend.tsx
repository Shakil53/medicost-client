import { useQuery } from '@tanstack/react-query';
import img from '../../assets/logo/logo.png';

const DentistTrend = () => {
    

    const getDentistData = async () => {
        return await fetch('/doctorsData.json').then(res => res.json())
    }

    const {data, isLoading} = useQuery({
        queryKey: ['dentistTrendData'],
        queryFn: getDentistData
    })
    console.log({isLoading, data});

    if (isLoading) {
        return <p>Loading..</p>
    }




    return (
        <div className='mt-40 ml-14'>
            <h1>Dentist Trend Doctor here</h1>
            <img src={img}></img>
            
                {
                    data.cancer_doctor.map(ski => <h1 key={ski.id}>{ski.name}</h1>)
                }
            
        </div>
    );
};

export default DentistTrend;