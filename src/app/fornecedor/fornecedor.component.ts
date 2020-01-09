import { Component, OnInit } from '@angular/core';
import { Fornecedor } from './fornecedor';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {

  submitted = false;

  fornecedores: Fornecedor[];

  fornecedor: Fornecedor = new Fornecedor();

  constructor(private fornecedorService: FornecedorService) { }

  ngOnInit() {
    this.fornecedorService.getFornecedorList().subscribe(data => {this.fornecedores = data;}, error => alert("Error"))
  }

  novoFornecedor(): void{
    this.submitted = false;
    this.fornecedor = new Fornecedor();
  }

  save(){
    this.fornecedorService.createFornecedor(this.fornecedor).subscribe(data => alert("Got Right"), error => alert("Error"));
    this.fornecedor = new Fornecedor();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

}
