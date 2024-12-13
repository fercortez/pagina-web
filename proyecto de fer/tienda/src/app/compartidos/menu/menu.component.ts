import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../modelos/producto.model';
@Component({
  selector: 'app-menu',
  imports: [CommonModule,RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  cantidadProductos: number = 0;

  constructor(private carritoService: CarritoService) {}
 
  ngOnInit(): void {
    
    this.carritoService.carrito$.subscribe((productos: { producto: Producto,cantidad: number}[]) => {
      this.cantidadProductos = productos.reduce((total,item) => total + item.cantidad, 0);
    });
   }

   onCarritoClick() {
    console.log('carrito clicked');
   }
}
