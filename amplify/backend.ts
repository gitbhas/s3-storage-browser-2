import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { defineStorage } from '@aws-amplify/backend';
import { storage } from './storage/resource';
//import { myFirstFunction } from './my-first-function/resource'
//reload
defineBackend({
  auth,
  data,
  storage
  //myFirstFunction,
});
// const backend = defineBackend({
//   auth,
//   data 
// });

// backend.addOutput({
//   storage: {
//     aws_region: "us-east-1",
//     bucket_name: "ddps-test2-edl-tap",
//     buckets: [
//       {
//         name: "tst2tap",
//         bucket_name: "ddps-test2-edl-tap",
//         aws_region: "us-east-1",
//         paths: {
//            "{entity_id}/*": {
//             guest: ["get", "list"],
//             authenticated: ["get", "list", "write"],
//           },
//         },
//       }
//     ],
//   },
// });
