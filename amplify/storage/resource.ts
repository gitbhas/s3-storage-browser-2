import { defineStorage } from '@aws-amplify/backend';
// const storage = defineStorage({
//   name: 'storage', // Give your storage stack a name
//   bucket: {
//     name: 'ddps-test2-edl-tap' // Your bucket name
//   }
// });
// export const storage = defineStorage({
//   name: 'ddps-dev-ui',
//   access: (allow) => ({
//     'public/*': [
//       allow.guest.to(['read']),
//       allow.authenticated.to(['read', 'write', 'delete']),
//     ],
//     'protected/{entity_id}/*': [
//       allow.authenticated.to(['read']),
//       allow.entity('identity').to(['read', 'write', 'delete'])
//     ],
//     'private/{entity_id}/*': [
//       allow.entity('identity').to(['read', 'write', 'delete'])
//     ]
//   })
// });
import { defineStorage } from '@aws-amplify/backend';
export const storage = defineStorage({
  name: 'ddps-dev-upload',
  access: (allow) => ({
     'upload/{entity_id}/*': [
      allow.authenticated.to(['read']),
      allow.entity('identity').to(['read', 'write', 'delete'])
    ]
  })
});
