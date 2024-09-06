import { HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PropostaFinanceiraService } from '../../services/proposta-financeira.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { PropostaResponseDto } from '../../models/proposta-response-dto';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { ModalActionComponent } from '../../../../shared/components/modal-action/modal-action.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  providers: [PropostaFinanceiraService],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss',
})
export class ListaComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'nome',
    'valorSolicitadoFmt',
    'situacao',
    'observacao',
  ];

  propostas: PropostaResponseDto[] = [];
  isLoading: boolean = false;

  readonly observacaoDialog = inject(MatDialog);

  constructor(
    private propostaFinanceiraService: PropostaFinanceiraService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPropostas();
  }

  getPropostas(): void {
    this.isLoading = true;
    this.propostaFinanceiraService.getPropostas().subscribe({
      next: (propostas) => {
        //Timeout utilizado para testar o loader
        setTimeout(() => {
          this.propostas = propostas;
          this.isLoading = false;
        }, 1500);
      },
      error: (e) => {
        console.error(e);
        this.isLoading = false;
      },
    });
  }

  getSituacao(situacao: boolean | null): string {
    switch (situacao) {
      case true:
        return 'Aprovada';
      case false:
        return 'Reprovada';
      default:
        return 'Em análise';
    }
  }

  openDialog(observacao: string) {
    this.observacaoDialog.open(ModalActionComponent, {
      data: {
        title: 'Observação',
        description: observacao,
      },
    });
  }

  addProposta() {
    this.router.navigate(['propostas/cadastro']);
  }
}
