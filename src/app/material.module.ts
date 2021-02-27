import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';


const MaterialComponents = [
  MatButtonModule,
  MatBadgeModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatDividerModule,
  MatInputModule,
  MatFormFieldModule,
  MatTableModule,
  MatPaginatorModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatDialogModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSnackBarModule,
  MatDatepickerModule,
  MatSelectModule,
  MatSidenavModule,
];

@NgModule({

  imports: [MaterialComponents] ,

  exports: [MaterialComponents]
})

export class MaterialModule { }
