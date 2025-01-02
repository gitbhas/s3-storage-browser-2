import React from 'react';
import { createAmplifyAuthAdapter, createStorageBrowser } from '@aws-amplify/ui-react-storage/browser';
import '@aws-amplify/ui-react-storage/styles.css';
import { Amplify } from 'aws-amplify';
//import * as Auth from "aws-amplify/auth";
import config from '../amplify_outputs.json';
//import { CognitoIdentity } from '@aws-sdk/client-cognito-identity';

// Configure Amplify using the imported configuration
Amplify.configure(config);

const defaultPrefixes = [
  'dags/' 
];
// Create the StorageBrowser component with Amplify authentication
export const { StorageBrowser } = createStorageBrowser(
  {
  config: createAmplifyAuthAdapter(),
  options: {
    defaultPrefixes
  },
    });
 
