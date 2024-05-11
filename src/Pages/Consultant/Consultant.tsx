import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { NavLink, Outlet } from 'react-router-dom';
import img1 from '../../assets/consultation/banner.jpg';


const Consultation = () => {
   
    return (
        <>
           <div className='max-w-full mx-auto'>
            
            {/* header part */}
            <div className=''>
                <div className='absolute p-2 md:p-4 lg:p-5 mt-2 md:mt-24 lg:mt-56 ml-5 md:ml-32 lg:ml-72'>
                    
                    <div className='max-w-md'>
                        <h1 className='text-2xl md:text-5xl font-bold'>Find Your Doctor!</h1>
                        <p className='mt-4 text-sm'>Get Telemedicine and Doctor Video Consultation service with thousands of Doctors and Hospitals in Bangladesh.</p>
                    </div>
                  
                    <div className="flex w-full max-w-sm md:max-w-lg items-center space-x-2 mt-2 md:mt-8">
                        <Input type="email" placeholder="Take Doctor Appointments" />
                        <Button type="submit">Subscribe</Button>
                        {/* trandig */}
                    </div>
                        <div>
                        <nav className='flex gap-2'>
                            <h1 className='text-md'>Trending:</h1>
                                <NavLink to='/consultant/dentist' className='no-underline hover:underline'>Dentist</NavLink>    
                                <NavLink to='/consultant/dermatologist-T' className='no-underline hover:underline'>Dermatologist</NavLink>    
                                <NavLink to='/consultant/immunodermatologist' className='no-underline hover:underline'>Immunodermatologist</NavLink>    
                                <NavLink to='/consultant/gynaecologist' className='no-underline hover:underline'>Gynaecologist</NavLink>    
                            </nav>
                        </div>
                </div>
            
                <div className=''>
                     <img src={img1}></img>   
                </div>
                </div>
            </div>
            <Outlet></Outlet>
        </>
    );
};

export default Consultation;