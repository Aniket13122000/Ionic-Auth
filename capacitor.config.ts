import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  // appId: 'io.ionic.starter',
  // appName: 'SSO',
  // webDir: 'dist',
  // server: {
  //   androidScheme: 'https'
  // }
  appId: 'io.ionic.starter',
  appName: 'myapp',
  bundledWebRuntime: false,
  webDir: 'build',
  plugins: {
    CustomURLScheme: {
      ios: {
        scheme: 'myapp'
      },
      android: {
        scheme: 'myapp'
      }
    }
  }
};

export default config;
