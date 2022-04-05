import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let body;
  let firstname;
  let lastname;

  return uploadPhoto().then((data) => {
    body = data.body;
    createUser().then((data) => {
      firstname = data.firstName;
      lastname = data.lastName;
      console.log(`${body} ${firstname} ${lastname}`);
    }).catch(() => console.log('Signup system offline'));
  }).catch(() => console.log('Signup system offline'));
}
