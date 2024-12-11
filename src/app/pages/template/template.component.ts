import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaisService } from '../../services/pais.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-template',
  standalone: false,
  
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {
  paises: any[] = [];
  constructor(private paisService: PaisService){}
  ngOnInit(): void{
    this.paisService.getPaises()
    .subscribe( paisesServicio => {
      this.paises = paisesServicio;
      this.paises.unshift({nombre: '[ Seleccione Pais]',codigo: ''})
    });
  }


}
