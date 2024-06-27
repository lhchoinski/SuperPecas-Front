import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {AppModule} from "../../../app.module";
import {PecaService} from "../../../services/peca.service";

@Component({
  selector: 'app-peca-listar.component',
  templateUrl: './peca-listar.component.html',
  styleUrls: ['./peca-listar.component.css']
})
export class PecaListarComponent implements OnInit, AfterViewInit, AppModule {
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'serial_number', 'fabricante', 'carro', 'acoes'];
  dataSource = new MatTableDataSource<any>();
  totalItems = 5;
  pageSize = 10;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  value = ''

  constructor(private pecaService: PecaService, private router: Router) {
  }

  ngOnInit() {
    this.loadItemsPage(0, this.pageSize);
  }

  ngAfterViewInit() {
    this.paginator.pageSize = this.pageSize;
    this.paginator.page.subscribe(() => this.loadItemsPage(this.paginator.pageIndex, this.paginator.pageSize));
  }

  loadItemsPage(pageIndex: number, pageSize: number) {
    this.pecaService.getPecas(pageIndex, pageSize).subscribe(data => {
      this.dataSource.data = data.content;
      this.totalItems = data.totalElements;
      if (this.paginator) {
        this.paginator.pageIndex = pageIndex;
        this.paginator.length = this.totalItems;
      }
    });
  }

  editPeca(peca: any) {
    this.router.navigate(['/pages/peca/editar/', peca.id]);
  }

  deletePeca(peca: any) {
    this.pecaService.deletePeca(peca.id).subscribe(() => {
      this.loadItemsPage(this.paginator.pageIndex, this.paginator.pageSize);
    });
  }
}
