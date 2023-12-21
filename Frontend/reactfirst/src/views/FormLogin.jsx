import React, { useState } from 'react';
import { useAuthStore } from '../store/auth';

function FormLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // State for error message

  const authStore = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = { username, password };
      const data = await authStore.login(payload);
      console.log(data);

      // If login is successful, redirect to home page
      // (assuming you have a routing mechanism in place)
      // navigate to '/'
    } catch (error) {
      console.error(error);
      setError('Tài khoản hoặc mật khẩu chưa chính xác!');
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: '#9a616d' }}>
      {/* ... rest of the JSX structure ... */}

      <form onSubmit={handleSubmit}>
        {/* ... input fields for username and password ... */}

        <button className="btn btn-dark btn-lg btn-block" type="submit">
          Login
        </button>

        {error && <div className="alert alert-danger" role="alert">{error}</div>}

        {/* ... other links and content ... */}
      </form>
    </section>
  );
}

export default FormLogin;