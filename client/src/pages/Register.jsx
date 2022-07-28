import { useState } from 'react';
import logo from '../assets/images/logo.svg';
import FormRow from '../components/FormRow';
import Alert from '../components/Alert';
import Wrapper from '../assets/styles/PageRegister';

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
    showAlert: true
}

function Register() {

    const [values, setValues] = useState(initialState);

    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember })
    };

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    };

    return(
        <Wrapper className='full-page'>
            <form className='form' onSubmit={onSubmit}>
                <img src={logo} alt="jobbify" className="logo" />
                <h3>{values.isMember ? 'Login' : 'Register'}</h3>
                {values.showAlert && <Alert />}

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