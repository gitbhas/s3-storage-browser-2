import React from 'react';
// import { createAmplifyAuthAdapter, createStorageBrowser } from '@aws-amplify/ui-react-storage/browser';
// import '@aws-amplify/ui-react-storage/styles.css';
import { Amplify } from 'aws-amplify';
import config from '../amplify_outputs.json';

// // Configure Amplify using the imported configuration
// Amplify.configure(config);

// // Create the StorageBrowser component with Amplify authentication
// export const { StorageBrowser } = createStorageBrowser({
//   config: createAmplifyAuthAdapter(),
// });
import {
  createManagedAuthAdapter,
  createStorageBrowser,
} from '@aws-amplify/ui-react-storage/browser';
import '@aws-amplify/ui-react-storage/styles.css';
Amplify.configure(config);
export const { StorageBrowser } = createStorageBrowser({
 config: createManagedAuthAdapter({
  credentialsProvider: async (options?: { forceRefresh?: boolean }) => {
    // return your credentials object
    return {
      credentials: {
        accessKeyId: 'my-access-key-id',
        secretAccessKey: 'my-secret-access-key',
        sessionToken: 'my-session-token',
        expiration: new Date(),
      },
    }
  },
  // AWS `region` and `accountId` of the S3 Access Grants Instance.
  region: 'us-east-1',
  accountId: '012693954776',
  // call `onAuthStateChange` when end user auth state changes 
  // to clear sensitive data from the `StorageBrowser` state
  registerAuthListener: (onAuthStateChange) => {},
})
});
