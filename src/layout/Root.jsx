
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import TargetAudienceSection from '../components/TargetAudienceSection';
import Nav from '../components/Nav';

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            
            <Footer></Footer>
        </div>
    );
};

export default Root;