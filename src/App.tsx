import React from 'react';

import GlobalStyle from './styles/global';

import SignIn from './pages/SignIn';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import SignUp from './pages/SignUp';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <GlobalStyle />
  </>
);

export default App;
