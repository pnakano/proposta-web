export interface PropostaResponseDto {
  id: number;
  nome: string;
  sobrenome: string;
  telefone: string;
  cpf: string;
  email: string;
  renda: number;
  valorSolicitadoFmt: number;
  prazoPagamento: number;
  aprovada: boolean;
  observacao: string;
}
