<<<<<<< HEAD
import React from 'react';
import { createAmplifyAuthAdapter, createStorageBrowser } from '@aws-amplify/ui-react-storage/browser';
import '@aws-amplify/ui-react-storage/styles.css';
import { Amplify } from 'aws-amplify';
import config from '../amplify_outputs.json';

// Configure Amplify using the imported configuration
Amplify.configure(config);

// Create the StorageBrowser component with Amplify authentication
export const { StorageBrowser } = createStorageBrowser({
  config: createAmplifyAuthAdapter(),
});
=======
import {
  createManagedAuthAdapter,
  createStorageBrowser,
  AWSTemporaryCredentials,
} from '@aws-amplify/ui-react-storage/browser';
import "@aws-amplify/ui-react-storage/styles.css";
import { defineAuth, secret } from '@aws-amplify/backend';

export const { StorageBrowser } = createStorageBrowser({
  config: createManagedAuthAdapter({
    credentialsProvider: async (options?: { forceRefresh?: boolean }) => {
      // return your credentials object
      return {
        credentials: {
          accessKeyId: secret('accessKeyId'),
          secretAccessKey: secret('secretAccessKey'),
          sessionToken: secret('sessionToken'),
          expiration: new Date(),
        },
      }
    },
    // AWS `region` and `accountId`
    region: 'us-east-1',
    accountId: '012693954776',
    // call `onAuthStateChange` when end user auth state changes 
    // to clear sensitive data from the `StorageBrowser` state
    registerAuthListener: (onAuthStateChange) => {},
  })
});
>>>>>>> fced94ab9694c3cd4d81b734d051819d8aeba29c
