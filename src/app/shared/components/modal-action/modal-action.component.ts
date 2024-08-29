import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-action',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
  ],
  templateUrl: './modal-action.component.html',
  styleUrl: './modal-action.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalActionComponent implements OnInit {
  title: string = '';
  description: string = '';

  data = inject(MAT_DIALOG_DATA);

  ngOnInit(): void {
    this.title = this.data.title;
    this.description = this.data.description;
  }
}
