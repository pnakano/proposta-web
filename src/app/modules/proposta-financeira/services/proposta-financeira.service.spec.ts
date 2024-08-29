import { TestBed } from '@angular/core/testing';

import { PropostaFinanceiraService } from './proposta-financeira.service';

describe('PropostaFinanceiraServiceService', () => {
  let service: PropostaFinanceiraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropostaFinanceiraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
