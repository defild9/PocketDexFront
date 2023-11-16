import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function GoogleAuthCallback() {
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tokenFromURL = params.get('token');
    if (tokenFromURL !== null && tokenFromURL !== '') {
      localStorage.setItem('token', tokenFromURL);
      navigate('/account');
    } else {
      navigate('/account');
    }
  }, []);
}

export default GoogleAuthCallback;
