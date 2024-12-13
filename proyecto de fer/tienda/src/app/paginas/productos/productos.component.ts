import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'pokemon rojo fuego ',
      descripcion: 'cartucho game boy ',
      precio: 29.99,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUDlrrbjboM2dH-aR3dmbblWMn4_FKhTVpw&s.jpg' ,   
      disponibilidad: true
    },

    {
      id: 2,
      nombre: 'sonic',
      descripcion: 'figura de sonic',
      precio: 29.99,
      imagen: 'https://media.printables.com/media/prints/329976/images/2835899_6572e1c3-4c73-484a-b9fb-af720f61e73c/sonic-front.png' ,   
      disponibilidad: true
    },

    {
      id: 3,
      nombre: 'comic',
      descripcion: 'comic #1 de superman ',
      precio: 29.99,
      imagen: 'https://i.pinimg.com/originals/63/1b/0f/631b0ffb4742f20387be121bcc67801b.jpg' ,   
      disponibilidad: true
    },

    {
      id: 4,
      nombre: 'guante de thanos',
      descripcion: 'objeto coleccionable ',
      precio: 29.99,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQULvNVBn_c7UMVdHU635IXEUp8U0dSODtbFQ&usqp=CAU.png' ,   
      disponibilidad: true
    },
    
    {
      id: 5,
      nombre: 'need for speed mw',
      descripcion: 'juego de ps2',
      precio: 29.99,
      imagen: 'https://www.retroplace.com/pics/ps2/packshots/79098--need-for-speed-most-wanted.png' ,   
      disponibilidad: true
    },

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