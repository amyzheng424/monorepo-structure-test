import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fragomen.travellerapp',
  appName: 'traveller-app',
  webDir: '../../dist/traveller-app',
  server: {
    androidScheme: 'https'
  }
};

export default config;
