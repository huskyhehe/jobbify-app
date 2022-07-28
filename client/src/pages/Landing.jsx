import { Link } from 'react-router-dom';
import Wrapper from '../assets/styles/PageLanding';
import logo from '../assets/images/logo.svg';
import hero from '../assets/images/hero.svg';

function Landing() {
    return (
        <Wrapper>
            <nav>
                <img src={logo} alt="jobbify" className="logo" />
            </nav>

            <div className='container page'>
                <div className='info'>
                    <h1>Job Tracking App</h1>
                    <p>
                        Jobbify is a web application that gives you everything you need to build a professional employment-focused website. Loaded with features for recruiters as well as job seekers, Jobbify offers a complete solution to your talent management needs.
                    </p>
                    <Link to='/register' className='btn btn-hero'>
                        Login / Register
                    </Link>
                </div>
                <img src={hero} alt='hero vector' className='img hero-img' />
            </div>
        </Wrapper>
    );
};

export default Landing;