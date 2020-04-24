import React from 'react';

import GlobalStyle from './styles/global';

import SignIn from './pages/SignIn';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import SignUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyle />
  </>
);

export default App;
