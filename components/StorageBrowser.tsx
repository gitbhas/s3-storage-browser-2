import React from 'react';
// import { createAmplifyAuthAdapter, createStorageBrowser } from '@aws-amplify/ui-react-storage/browser';
import '@aws-amplify/ui-react-storage/styles.css';
import { Amplify } from 'aws-amplify';
//import * as Auth from "aws-amplify/auth";
import config from '../amplify_outputs.json';
//import { CognitoIdentity } from '@aws-sdk/client-cognito-identity';
import {
  createStorageBrowser,
  createAmplifyAuthAdapter,
  elementsDefault,
} from "@aws-amplify/ui-react-storage/browser";

// Configure Amplify using the imported configuration
Amplify.configure(config);

const defaultPrefixes = [
  'dags/',
  (identityId: string) => `protected/${identityId}/`,
  (identityId: string) => `private/${identityId}/`,
];
// Create the StorageBrowser component with Amplify authentication
// export const { StorageBrowser } = createStorageBrowser(
//   {
//   config: createAmplifyAuthAdapter(),
//   options: {
//     defaultPrefixes
//   },
//     });
export const { StorageBrowser } = createStorageBrowser({
      elements: elementsDefault, // replace to customize your UI
      config: createAmplifyAuthAdapter({
      options: {
      defaultPrefixes
        },
      }),
    });
 

 
