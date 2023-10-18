import { APP_INITIALIZER } from '@angular/core';
import { PartnerFacade } from './partner.facade';

export const partnerInitializer = (partnerFacade: PartnerFacade) => () => {};

export const partnerInitializerProvider = {
  provide: APP_INITIALIZER,
  useFactory: partnerInitializer,
  multi: true,
  deps: [PartnerFacade],
};
