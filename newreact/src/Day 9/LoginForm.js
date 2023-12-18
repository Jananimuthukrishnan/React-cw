import React, { useRef } from 'react';
const LoginForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    console.log(formData);
    emailInputRef.current.value = '';
    passwordInputRef.current.value = '';
    emailInputRef.current.focus();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" ref={emailInputRef} required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" ref={passwordInputRef} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default LoginForm;