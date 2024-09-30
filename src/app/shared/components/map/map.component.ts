import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { Map, Marker, LngLat, Evented } from 'maplibre-gl';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent implements AfterViewInit, OnDestroy {
  private currentLngLat = new LngLat(-78.81518766536175, -1.7283071380767154);
  private marker!: Marker;
  private map?: Map;
  public readonly PrimeIcons = PrimeIcons;
  @Output() outputLngLat = new EventEmitter<LngLat>();
  @Input() zoom?: number;

  ngAfterViewInit(): void {
    this.map = new Map({
      container: 'map', // container id
      style:
        'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.zoom || 6, // starting zoom
    });
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  marklisteners() {
    if (!this.map) return;
    if (!this.marker) return;

    this.marker.on('dragend', () => {
      this.outputLngLat.emit(this.marker.getLngLat());
    });
  }

  addMarker() {
    if (!this.map) return;
    const lngLat = this.map.getCenter();

    if (this.marker) {
      this.marker.setLngLat(lngLat);
      this.outputLngLat.emit(this.marker?.getLngLat());
      return;
    }

    this.marker = new Marker({
      color: 'red',
    })
      .setLngLat(lngLat)
      .setDraggable(true)
      .addTo(this.map);

    this.marklisteners();
    this.outputLngLat.emit(this.marker?.getLngLat());
  }

  setLabelButton(): string {
    if (this.marker) return 'Volver a centrar el marcador';
    return 'Agregar marcador';
  }
}
