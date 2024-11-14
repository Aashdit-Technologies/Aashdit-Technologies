import useAuthStore from '../../store/Store';
import { useNavigate } from 'react-router-dom';

const useLogout = () => {
  const clearAuth = useAuthStore((state) => state.clearAuth); // Access the clearAuth function
  const navigate = useNavigate();

  const logout = () => {
    clearAuth();            // Clear token and authenticated state
    navigate("/");          // Redirect to homepage or login page
  };

  return logout;
};

export default useLogout;
