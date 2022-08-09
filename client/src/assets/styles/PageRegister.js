import styled from 'styled-components';

const Wrapper = styled.section`
    display: grid;
    align-items: center;
    .form {
        max-width: 400px;
        border-top: 5px solid var(--primary-500);
    }
    h3 {
        text-align: center;
    }
    p {
        margin: 0;
        margin-top: 1rem;
        text-align: center;
    }
    .btn {
        margin-top: 1rem;
    }
    .member-btn {
        background: transparent;
        border: transparent;
        color: var(--primary-500);
        cursor: pointer;
        letter-spacing: var(--letterSpacing);
    }
    .test-account {
        margin: auto;
        margin-top: 0;
        line-height: 1rem;
    }
    .account-entry {
        display: flex;
        gap: .5rem;
    }
    .account-title,
    .account-label {
        font-weight: bold;
    }
    .account-label,
    .account-content {
        display: flex;
        flex-direction: column;
    }
    .account-label {
        align-items: end;
    }
    .account-content {
        align-items: start;
    }

`
export default Wrapper;