import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PropostaResponseDto } from '../models/proposta-response-dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { PropostaRequestDto } from '../models/proposta-request-dto';

@Injectable({
  providedIn: 'root',
})
export class PropostaFinanceiraService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  prefix: string = 'proposta';

  constructor(private http: HttpClient) {}

  getPropostas(): Observable<PropostaResponseDto[]> {
    return this.http.get<PropostaResponseDto[]>(
      `${environment.apiUrl}/${this.prefix}`
    );
  }

  postProposta(
    propostaRequestDto: PropostaRequestDto
  ): Observable<PropostaResponseDto> {
    return this.http.post<PropostaResponseDto>(
      `${environment.apiUrl}/${this.prefix}`,
      propostaRequestDto,
      this.httpOptions
    );
  }
}
