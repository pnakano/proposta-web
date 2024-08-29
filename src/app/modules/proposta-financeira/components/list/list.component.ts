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
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
  ],
  providers: [PropostaFinanceiraService],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'nome',
    'valorSolicitadoFmt',
    'situacao',
    'observacao',
  ];

  propostas: PropostaResponseDto[] = [];

  readonly dialog = inject(MatDialog);

  constructor(
    private propostaFinanceiraService: PropostaFinanceiraService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPropostas();
  }

  getPropostas(): void {
    this.propostaFinanceiraService.getPropostas().subscribe((propostas) => {
      console.log(propostas);
      this.propostas = propostas;
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
    this.dialog.open(ModalActionComponent, {
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
