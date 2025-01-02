import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'ddps-dev-airflow',
  isDefault: true, // identify your default storage bucket (required)
  access: (allow) => ({
    'dags/*': [
      allow.entity('identity').to(['read'])
    ]
  })
});
// export const storage = defineStorage({
//   name: 'myS3Bucket',
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