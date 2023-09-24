import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  s_Ubi: boolean = false;
  s_Cels: boolean = false;
  s_tel: boolean = false;
  s_email: boolean = false;
  s_LinkedIn: boolean = false;
  s_Github: boolean = false;
  s_cerrar: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.reset();
  }

  reset(): void {
    this.s_Ubi = false;
    this.s_Cels = false;
    this.s_tel = false;
    this.s_email = false;
    this.s_LinkedIn = false;
    this.s_Github = false;
    this.s_cerrar = false;
  }

  ubicacion(): void {
    this.reset();
    this.s_Ubi = true;
    this.s_cerrar = true;
  }

  celular(): void {
    this.reset();
    this.s_Cels = true;
    this.s_cerrar = true;
  }

  telefono(): void {
    this.reset();
    this.s_tel = true;
    this.s_cerrar = true;
  }

  email(): void {
    this.reset();
    this.s_email = true;
    this.s_cerrar = true;
  }

  LinkedIn(): void {
    this.reset();
    this.s_LinkedIn = true;
    this.s_cerrar = true;
  }

  github(): void {
    this.reset();
    this.s_Github = true;
    this.s_cerrar = true;
  }

  cerrar(): void {
    this.reset();
  }

}
