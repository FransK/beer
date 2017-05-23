// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCaxKxkhRt9NDlR4fBMrfbg-VPPBheh8ws',
    authDomain: 'brew-review.firebaseapp.com',
    databaseURL: 'https://brew-review.firebaseio.com',
    projectId: 'brew-review',
    storageBucket: 'brew-review.appspot.com',
    messagingSenderId: '233919008511'
  }
};
