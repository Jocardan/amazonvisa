import { Injectable } from '@angular/core';
import { SystemApi } from './api/system.api';
import { SystemState } from './state/system.state';
import { map } from 'rxjs';

@Injectable()
export class SystemFacade {
  constructor(private state: SystemState, private api: SystemApi) {}

  public getAddress(cep: string) {
    return this.api.consultaCEP(cep).pipe(map((e) => e));
  }
}

