import React, { useState } from 'react';

import firebase from '../firebase';

const AuthComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); 

  const handleSignIn = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // Успешная аутентификация, нужно добавить необходимые действия (переход на главную страницу)
    } catch (error) {
      console.error('Sign in error:', error.message);
      setError('Invalid password or email'); 
    }
  };

  return (
    <div>
        {/* example */}
        <h2>Вход</h2>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Пароль:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSignIn}>Войти</button>

        {error && <p style={{ color: 'red' }}>{error}</p>} 
    </div>
  );
};

export default AuthComponent;
