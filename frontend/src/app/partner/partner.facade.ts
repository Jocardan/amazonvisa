import { Injectable } from '@angular/core';
import { partnerState } from './state/partner.state';

@Injectable()
export class PartnerFacade {
  constructor(private readonly state: partnerState) {}
}
