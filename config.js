// credit to Alex Martinez & Peter Piekarczyk for Environment configuration inspiration
// https://medium.com/@peterpme/environment-variables-in-expo-using-release-channels-4934594c5307
// https://alxmrtnz.com/thoughts/2019/03/12/environment-variables-and-workflow-in-expo.html
import Constants from 'expo-constants';

// get the localhost ip address at runtime using the Expo manifest
// this enables both simulator and physical device debugging with our local api
let localhost;
if (Constants.manifest.debuggerHost) {
  localhost = Constants.manifest.debuggerHost.split(':').shift();
}

const ENV = {
  "dev": {
    "API_URL": `http://${localhost}:4000/api`,
  },
  "prod": {
    "API_URL": "",
  },
};

export default (env = Constants.manifest.releaseChannel) => {
  if (__DEV__) {
    // __DEV__ is set to true when react-native is running locally in dev mode
    return ENV.dev;
  } else if (env === 'prod') {
    // __DEV__ is set to false when our app is published
    return ENV.prod;
  }
};
