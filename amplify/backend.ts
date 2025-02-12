import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { defineStorage } from '@aws-amplify/backend';
import { Amplify} from 'aws-amplify';
// import { storage } from './storage/resource';
//import { myFirstFunction } from './my-first-function/resource'
//reload
// defineBackend({
//   auth,
//   data,
//   storage,
//   myFirstFunction,
// });
// First define your storage

const backend = defineBackend({
  auth,
  data 
});
backend.addOutput({
  storage: {
    aws_region: "us-east-1",
    bucket_name: "ddps-test-v4-mtf",
    buckets: [
      {
        name: "340b",
        bucket_name: "ddps-test-v4-mtf",
        aws_region: "us-east-1",
        paths: { 
          "landing/*": {
            guest: ["get", "list"],
            authenticated: ["get", "list", "write"],
          },
          "archive/*": {
            guest: ["get", "list"],
            authenticated: ["get", "list", "write"],
          },
        },
      }
    ],
  },
});
