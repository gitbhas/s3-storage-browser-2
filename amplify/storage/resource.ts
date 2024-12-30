import { defineStorage } from '@aws-amplify/backend';

export const tapbucket = defineStorage({
  name: 'ddps-dev-edl-tap',
  isDefault: true, // identify your default storage bucket (required)
  access: (allow) => ({
    'ACATAP/*': [
      allow.entity('identity').to(['read', 'write', 'delete'])
    ]
  })
});
export const storage = defineStorage({
  name: 'myS3Bucket',
  access: (allow) => ({
    'public/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read', 'write', 'delete']),
    ],
    'protected/{entity_id}/*': [
      allow.authenticated.to(['read']),
      allow.entity('identity').to(['read', 'write', 'delete'])
    ],
    'private/{entity_id}/*': [
      allow.entity('identity').to(['read', 'write', 'delete'])
    ]
  })
});