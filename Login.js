
import React from 'react';
import { auth, googleAuthProvider } from '.Components/firebase';

function Login() {
  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleAuthProvider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}

export default Login;

