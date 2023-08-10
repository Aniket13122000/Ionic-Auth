import { useEffect } from 'react';
import { Plugins } from '@capacitor/core';

const { CustomURLScheme } = Plugins;

interface DeepLinkData {
  // Define properties that your deep link data should have
  // For example:
  code: string;
  state: string;
}

const DeepLinkHandler: React.FC = () => {
  useEffect(() => {
    const listener = CustomURLScheme.addListener(
      'customScheme',
      (data: DeepLinkData) => {
          console.log('Received deep link:', data);
          // Handle the deep link data here
        }
    );

    return () => {
      listener.remove();
    };
  }, []);

  return null;
};

export default DeepLinkHandler;
