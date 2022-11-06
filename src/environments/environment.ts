// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appVersion: require('../../package.json').version + '--dev',
  firebaseConfig: {
    apiKey: 'AIzaSyDYBz74b_nfQYQEg0kOQwAyfcHtPKkwhgo',
    authDomain: 'angular-expo.firebaseapp.com',
    databaseURL: 'https://angular-expo.firebaseio.com',
    projectId: 'angular-expo',
    storageBucket: 'angular-expo.appspot.com'
    // messagingSenderId: '197890464790',
    // appId: '1:197890464790:web:b672a510c3a1e3da44e937',
    // measurementId: 'G-JRR3YMLGBT'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
