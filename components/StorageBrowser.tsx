import React from 'react';
import { createAmplifyAuthAdapter, createStorageBrowser } from '@aws-amplify/ui-react-storage/browser';
import '@aws-amplify/ui-react-storage/styles.css';
import { Amplify } from 'aws-amplify';
import * as Auth from "aws-amplify/auth";
import config from '../amplify_outputs.json';
import { CognitoIdentity } from '@aws-sdk/client-cognito-identity';

// Configure Amplify using the imported configuration
Amplify.configure(config);

 const cognitoIdentity = new CognitoIdentity({ region: 'us-east-1' });
 class CustomCredentialsProvider {
    async getCredentials() {
        // Fetch identity ID and credentials
        const identityId = await cognitoIdentity.getId({ IdentityPoolId: 'us-east-1:02b72394-bb5f-498c-b639-907cc843c926' });
        const credentials = await cognitoIdentity.getCredentialsForIdentity({ IdentityId: identityId.IdentityId });
        return credentials;
    }
 }
 const customCredentialsProvider = new CustomCredentialsProvider();
// Create the StorageBrowser component with Amplify authentication
export const { StorageBrowser } = createStorageBrowser(
  {
  config: createAmplifyAuthAdapter(),
  region: 'us-east-1',
  accountId: '012693954776',
  registerAuthListener: () => {} ,
  CustomCredentialsProvider: async () => {
    customCredentialsProvider; 
                                   }
  });
 
