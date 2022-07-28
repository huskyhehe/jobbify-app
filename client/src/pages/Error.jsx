import { Link } from 'react-router-dom';
import notFound from '../assets/images/not-found.svg';
import Wrapper from '../assets/styles/PageError';

function Error() {
    return (
        <Wrapper className='full-page'>
        <div>
                <img src={notFound} alt='not found' />
                <h3>Ohh! page not found</h3>
                <p>We can't seem to find the page you're looking for</p>
                <Link to='/'>back home</Link>
        </div>
        </Wrapper>
    );
};

export default Error;