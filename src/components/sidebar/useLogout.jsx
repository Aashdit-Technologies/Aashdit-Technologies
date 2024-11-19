import {  useNavigate } from 'react-router-dom';
import  useAuthStore  from '../../store/Store';

const useLogout = () => {
  const navigate = useNavigate();
  const clearAuth = useAuthStore((state) => state.clearAuth);

  const logout = () => {
    clearAuth(); 
    navigate("/"); 
  };

  return logout;
};
export default useLogout;