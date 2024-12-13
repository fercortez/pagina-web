import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { Producto } from '../../modelos/producto.model';

@Component({
  selector: 'app-ofertas',
  imports: [RouterModule, CommonModule],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export class OfertasComponent {
  Productos: Producto[] = [

    {
      id: 6,
      nombre: 'estatua de raichu',
      descripcion: 'estatua de pokemon ',
      precio: 29.99,
      imagen: 'https://magasinmanga.fr/cdn/shop/files/figurine-pokemon-raichu-evolution-magasin-manga-2_700x700.jpg?v=1725392792.png' ,   
      disponibilidad: true
    },

    {
      id: 7,
      nombre: 'comic',
      descripcion: 'comic the amazing spiderman',
      precio: 29.99,
      imagen: 'https://comicparatodos.net/wp-content/uploads/2013/08/spideycover1.jpg' ,   
      disponibilidad: true
    },

    {
      id: 8,
      nombre: 'taza ',
      descripcion: 'taza de cuphead',
      precio: 29.99,
      imagen: 'https://www.distritomax.com/cdn/shop/files/761p494u6j_700x700.webp?v=1714491192.png' ,   
      disponibilidad: true
    },
  ];
  constructor(private carritoService: CarritoService) {}

  // Método para agregar un producto al carrito
  agregar(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
    alert('Producto agregado al carrito'); // Muestra el mensaje

  }
}
