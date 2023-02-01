import { Outlet } from 'react-router-dom';
import Wrapper from '../../assets/styles/SharedLayout';
import Navbar from '../../components/Navbar';
import SidebarBig from '../../components/SidebarBig';
import SidebarSmall from '../../components/SidebarSmall';


function SharedLayout() {
    return (
        <Wrapper>
            <main className='dashboard'>
                <SidebarSmall />
                <SidebarBig />
                <div>
                    <Navbar />
                    <div className='dashboard-page'>
                        <Outlet />
                    </div>
                </div>
            </main>
        </Wrapper>
    );
};

export default SharedLayout;