import { useAppContext } from '../context/appContext';
import NavLinks from './NavLinks';
import logo from '../assets/images/logo.svg';
import Wrapper from '../assets/styles/SidebarBig';

function SideBarBig() {
    const { showSidebar } = useAppContext();
    return (
        <Wrapper>
            <div className={showSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar'}>
                <div className='content'>
                    <header>
                        <img src={logo} alt="jobbify" className="logo" />
                    </header>
                    <NavLinks />
                </div>
            </div>
        </Wrapper>
    );
}

export default SideBarBig;