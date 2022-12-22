import { useAppContext } from '../context/appContext';
import { Navigate } from 'react-router-dom';
import Loading from '../components/Loading';

function ProtectedRoute({ children }) {
    const { user, userLoading } = useAppContext();
    if (userLoading) return <Loading />;
    if (!user) {       
        return <Navigate to='/register' />
    }
    return children;
}

export default ProtectedRoute;