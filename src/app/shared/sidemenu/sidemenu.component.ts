import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css',
})
export class SidemenuComponent {
  public menuItems = routes
    // obtener todas las rutas
    .map((route) => route.children ?? [])
    // quitar el array vacío, para tener solo las rutas
    .flat()
    // incluir solo rutas con path, excluyendo la ruta bacía
    .filter( route => route && route.path )
    // excluir ruta :id, filtrando por ":"
    .filter( route => !route.path?.includes(':') );

  constructor() {
    // const dashboardRoutes = routes
    //   // obtener todas las rutas
    //   .map((route) => route.children ?? [])
    //   // quitar el array vacío, para tener solo las rutas
    //   .flat()
    //   // incluir solo rutas con path, excluyendo la ruta bacía
    //   .filter( route => route && route.path )
    //   // excluir ruta :id, filtrando por ":"
    //   .filter( route => !route.path?.includes(':') );
    // console.log(dashboardRoutes);
  }
}
