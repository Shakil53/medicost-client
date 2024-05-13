
import Footer from '@/Pages/Home/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const Main = () => {

  const location = useLocation()
  const noFooter = location.pathname.includes('login');

    return (
        <div>
        <Outlet></Outlet>
        { noFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;