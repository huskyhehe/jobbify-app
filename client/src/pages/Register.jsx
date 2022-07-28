import { useState } from 'react';
import { useAppContext } from '../context/appContext';
import logo from '../assets/images/logo.svg';
import FormRow from '../components/FormRow';
import Alert from '../components/Alert';
import Wrapper from '../assets/styles/PageRegister';

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
}

function Register() {

    const [values, setValues] = useState(initialState);
    const { isLoading, showAlert, displayAlert } = useAppContext();

    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember })
    };

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, isMember } = values;
        if (!email || !password || (!isMember && !name)) {
            displayAlert();
            return;
        }
    };

    return(
        <Wrapper className='full-page'>
            <form className='form' onSubmit={onSubmit}>
                <img src={logo} alt="jobbify" className="logo" />
                <h3>{values.isMember ? 'Login' : 'Register'}</h3>
                {showAlert && <Alert />}

                {!values.isMember && (
                    <FormRow
                        type='text'
                        name='name'
                        value={values.name}
                        handleChange={handleChange}
                    />
                )}
        
                <FormRow
                    type='email'
                    name='email'
                    value={values.email}
                    handleChange={handleChange}
                />

                <FormRow
                    type='password'
                    name='password'
                    value={values.password}
                    handleChange={handleChange}
                />

                <button 
                    type='submit' 
                    className='btn btn-block' 
                    disabled={isLoading}
                >
                    Submit
                </button>
        
                <p>
                    {values.isMember ? 'Not a member yet? ' : 'Already a member? '}
                    <button 
                        type='button' 
                        onClick={toggleMember} 
                        className='member-btn'
                    >
                        {values.isMember ? 'Register' : 'Login'}
                    </button>
                </p>
            </form>
        </Wrapper>
    );
};

export default Register;