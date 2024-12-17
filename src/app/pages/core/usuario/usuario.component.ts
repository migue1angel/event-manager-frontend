import { Component, OnInit } from '@angular/core';
import { UsuarioService, EventoInterface } from '../../../services/core/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  vistaActual: 'creados' | 'registrados' = 'creados';
  eventos: EventoInterface[] = [];
  sidebarVisible: boolean = false;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.cargarDatosDeEjemplo();
  }

  cargarDatosDeEjemplo() {
    this.eventos = [
      {
        id: 1,
        name: 'Conferencia de Tecnología',
        description: 'Una conferencia sobre las últimas tendencias en tecnología',
        startDate: '2024-03-15',
        category: { name: 'Tecnología' },
        images: [{ url: 'https://picsum.photos/200/300?random=1' }],
        tipo: 'creado'
      },
      {
        id: 2,
        name: 'Concierto de Rock',
        description: 'Un concierto con las mejores bandas de rock',
        startDate: '2024-04-20',
        category: { name: 'Música' },
        images: [{ url: 'https://picsum.photos/200/300?random=2' }],
        tipo: 'registrado'
      },
      {
        id: 3,
        name: 'Maratón de la Ciudad',
        description: 'Carrera anual por las calles de la ciudad',
        startDate: '2024-05-10',
        category: { name: 'Deportes' },
        images: [{ url: 'https://picsum.photos/200/300?random=3' }],
        tipo: 'creado'
      },
      {
        id: 4,
        name: 'Exposición de Arte Moderno',
        description: 'Muestra de las obras de artistas contemporáneos',
        startDate: '2024-06-05',
        category: { name: 'Arte' },
        images: [{ url: 'https://picsum.photos/200/300?random=4' }],
        tipo: 'registrado'
      },
      {
        id: 5,
        name: 'Feria Gastronómica',
        description: 'Degustación de platos típicos de la región',
        startDate: '2024-07-15',
        category: { name: 'Gastronomía' },
        images: [{ url: 'https://picsum.photos/200/300?random=5' }],
        tipo: 'creado'
      }
    ];
  }

  cambiarVista(vista: 'creados' | 'registrados') {
    this.vistaActual = vista;
  }

  agregarEvento() {
    console.log('Agregar evento');
    // Aquí iría la lógica para agregar un nuevo evento
    const nuevoEvento: EventoInterface = {
      id: this.eventos.length + 1,
      name: 'Nuevo Evento',
      description: 'Descripción del nuevo evento',
      startDate: new Date().toISOString().split('T')[0],
      category: { name: 'General' },
      images: [{ url: 'https://picsum.photos/200/300?random=' + (this.eventos.length + 1) }],
      tipo: 'creado'
    };
    this.eventos.unshift(nuevoEvento);
  }

  get eventosFiltrados() {
    return this.eventos.filter(evento =>
      this.vistaActual === 'creados' ? evento.tipo === 'creado' : evento.tipo === 'registrado'
    );
  }
}

