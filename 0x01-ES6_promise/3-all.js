import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((res) => `${res[0].body} ${res[1].firstName} ${res[1].lastName}`)
    .catch(() => console.log('Signup system offline'));
}
