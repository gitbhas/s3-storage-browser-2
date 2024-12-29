import { defineStorage } from '@aws-amplify/backend';
import {
  createManagedAuthAdapter,
  createStorageBrowser,
} from '@aws-amplify/ui-react-storage/browser';
import '@aws-amplify/ui-react-storage/styles.css';

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