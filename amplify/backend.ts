import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { defineStorage } from '@aws-amplify/backend';
import { Amplify} from 'aws-amplify';
//import { storage } from './storage/resource';
//import { myFirstFunction } from './my-first-function/resource'
// //reload
// defineBackend({
//   auth,
//   data,
//   storage,
//   myFirstFunction,
// });
// First define your storage
const storage = defineStorage({
  name: 'storage', // Give your storage stack a name
  bucket: {
    name: 'ddps-test2-edl-tap' // Your bucket name
  }
});
const backend = defineBackend({
  auth,
  data ,
  storage
});
backend.addOutput({
  storage: {
    aws_region: "us-east-1",
    bucket_name: "ddps-test2-edl-tap",
    buckets: [
      {
        name: "340b",
        bucket_name: "ddps-340b-upload",
        aws_region: "us-east-1",
        paths: { 
          "landing/${cognito-identity.amazonaws.com:sub}/*": {
            guest: ["get", "list"],
            authenticated: ["get", "list", "write"],
          },
        },
      }
    ],
  },
});
