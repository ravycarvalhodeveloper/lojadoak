// facebookPixel.ts
import ReactPixel from 'react-facebook-pixel';

const pixelId: string = '1722741844933924';

export const initFacebookPixel = (): void => {
  ReactPixel.init(pixelId);
  ReactPixel.pageView(); // Para registrar uma visualização de página
};

export const trackEvent = (event: string, data?: Record<string, any>): void => {
  if (data) {
    ReactPixel.track(event, data);
  } else {
    ReactPixel.track(event);
  }
};

export const trackCustomEvent = (event: string, data: Record<string, any>): void => {
  ReactPixel.trackCustom(event, data);
};
