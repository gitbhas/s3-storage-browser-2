import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';
import { data } from './data/resource.js';
// import { storage } from './storage/resource';
// defineBackend({
//   auth,
//   data,
//   storage
// });
const backend = defineBackend({
  auth,
  data,
});
backend.addOutput({
  storage: {
    aws_region: "us-east-1",
    bucket_name: "ddps-dev-edl-tap"
  },
});