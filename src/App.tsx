import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <p>User session:</p>
          <pre>{JSON.stringify(user.getSignInUserSession(), null, 2)}</pre>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  )}
