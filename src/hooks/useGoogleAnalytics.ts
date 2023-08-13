import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';

const useGoogleAnalytics = () => {
  const location = useLocation();
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;

  useEffect(() => {
    if (TRACKING_ID) {
      ReactGA.initialize(TRACKING_ID);
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (isInitialized) {
      ReactGA.set({ page: location.pathname });
      ReactGA.send('pageview');
    }
  }, [isInitialized, location]);
};

export default useGoogleAnalytics;
