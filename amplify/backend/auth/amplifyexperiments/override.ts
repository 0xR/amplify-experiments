import { AmplifyAuthCognitoStackTemplate } from '@aws-amplify/cli-extensibility-helper';

export function override(resources: AmplifyAuthCognitoStackTemplate) {
  resources.userPoolClientWeb.explicitAuthFlows = [
    'ALLOW_USER_PASSWORD_AUTH',
    'ALLOW_REFRESH_TOKEN_AUTH',
  ]
}
