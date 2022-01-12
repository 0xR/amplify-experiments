import { Amplify, Auth } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import { useState } from 'react';
import { CognitoUserSession } from 'amazon-cognito-identity-js';

Amplify.configure(awsExports);
Auth.configure({
  authenticationFlowType: 'USER_PASSWORD_AUTH'
})

export default function App() {
  const [session, setSession] = useState<null | CognitoUserSession>(null)
  return (
    <>
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <p>User session:</p>
            <pre>{JSON.stringify(session ?? user.getSignInUserSession(), null, 2)}</pre>
            <button onClick={signOut}>Sign out</button>
            <button onClick={() => {
              let refreshToken = user.getSignInUserSession()?.getRefreshToken();
              if (refreshToken) {
                user.refreshSession(refreshToken, (err, newSession) => {
                  if (err) {
                    console.error(err);
                  }
                  setSession(newSession);
                })
              }
            }}>refresh tokens
            </button>
          </main>
        )}
      </Authenticator>
    </>
  )
}
