import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FormRow from '../components/FormRow';
import Alert from '../components/Alert';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/styles/PageRegister';

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true
};

function Register() {

    const navigate = useNavigate();
    const [values, setValues] = useState(initialState);
    const { user, isLoading, showAlert, displayAlert, setupUser } = useAppContext();

    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember })
    };

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, isMember } = values
        if (!email || !password || (!isMember && !name)) {
            displayAlert();
            return;
        };
        const currentUser = { name, email, password };
        if (isMember) {
            setupUser({
                currentUser,
                endPoint: 'login',
                alertText: 'Login Successful! Redirecting...',
            });
        } else {
            setupUser({
                currentUser,
                endPoint: 'register',
                alertText: 'User Created! Redirecting...',
            });
        }
    };

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                navigate('/');
            }, 3000);
        }
    }, [user, navigate]);


    return (
        <Wrapper className='full-page'>
            <form className='form' onSubmit={onSubmit}>
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

            <div className="test-account">
                <p className="account-title">Test Account</p>
                <div className="account-entry">
                    <div className="account-label">
                        <p>Email:</p>
                        <p>Password:</p>
                    </div>
                    <div className="account-content">
                        <p>test@gmail.com</p>
                        <p>secret</p>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Register;