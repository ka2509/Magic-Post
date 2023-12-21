import React, { useState } from 'react';

function FormRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState(null); // State for error message

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate input fields (e.g., check for empty fields, password match)
      // If validation passes, proceed with registration logic
      // (e.g., call an API to create a new user account)
      const payload = { name, email, password };
      // const response = await AuthService.register(payload);
      console.log('Registration successful!');
      // Redirect to a success page or dashboard
      // navigate('/success')
    } catch (error) {
      console.error(error);
      setError('Registration failed. Please check your details and try again.');
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      {/* ... rest of the JSX structure ... */}

      <form onSubmit={handleSubmit}>
        {/* ... input fields for name, email, password, repeat password ... */}

        {error && <div className="alert alert-danger" role="alert">{error}</div>}

        <button type="submit" className="btn btn-primary btn-lg">
          Register
        </button>
      </form>
    </section>
  );
}

export default FormRegister;