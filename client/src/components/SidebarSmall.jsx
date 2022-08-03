import { useAppContext } from '../context/appContext';
import NavLinks from './NavLinks';
import logo from '../assets/images/logo.svg';
import { FaTimes } from 'react-icons/fa';
import Wrapper from '../assets/styles/SidebarSmall';

function SidebarSmall() {
    const { showSidebar, toggleSidebar } = useAppContext()
    return (
        <Wrapper>
            <div
                className={
                showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
                }
            >
                <div className='content'>
                    <button type='button' className='close-btn' onClick={toggleSidebar}>
                        <FaTimes />
                    </button>
                    
                    <header>
                        <img src={logo} alt="jobbify" className="logo" />
                    </header>
                    
                    <NavLinks toggleSidebar={toggleSidebar} />
                </div>
            </div>
        </Wrapper>
    )
}

export default SidebarSmall;