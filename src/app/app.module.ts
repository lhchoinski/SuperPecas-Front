import {NgModule} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {NotificationsService, SimpleNotificationsModule} from "angular2-notifications";
import {CarroListarComponent} from "./pages/carro/carro-listar/carro-listar-component";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatButton, MatButtonModule, MatIconButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatDividerModule} from "@angular/material/divider";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {CarroCadastrarComponent} from "./pages/carro/carro-cadastrar/carro-cadastrar.component";
import {PecaListarComponent} from "./pages/peca/peca-listar/peca-listar.component";
import {PecaCadastrarComponent} from "./pages/peca/peca-cadastrar/peca-cadastrar.component";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger,
  MatOption
} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";

@NgModule({
  declarations: [
    CarroListarComponent,
    CarroCadastrarComponent,
    PecaListarComponent,
    PecaCadastrarComponent
  ],
    imports: [
        CommonModule,
        MatCard,
        MatCardHeader,
        MatCardActions,
        MatButton,
        RouterLink,
        MatLabel,
        MatFormField,
        MatIcon,
        FormsModule,
        MatIconButton,
        MatCardContent,
        MatTable,
        MatHeaderCell,
        MatColumnDef,
        MatCell,
        MatCellDef,
        MatHeaderCellDef,
        MatHeaderRow,
        MatRow,
        BrowserModule,
        MatRowDef,
        MatHeaderRowDef,
        MatPaginator,
        BrowserAnimationsModule,
        MatCardTitle,
        MatCardSubtitle,
        MatInput,
        MatButtonModule, MatDividerModule, MatIconModule, NgIf,
        SimpleNotificationsModule.forRoot(), ReactiveFormsModule, MatAutocompleteTrigger, MatAutocomplete, MatOption,
        MatInputModule,
        MatAutocompleteModule, MatSelect
    ],
  providers: [NotificationsService]
})
export class AppModule {
}
