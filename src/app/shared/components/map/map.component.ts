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
  styleUrl: './map.component.scss'
})
export class MapComponent implements AfterViewInit, OnDestroy {
  private readonly currentLngLat = new LngLat(-78.81518766536175, -1.7283071380767154);
  private map?: Map;
  public readonly PrimeIcons = PrimeIcons;
  @Output() outputLngLat = new EventEmitter<LngLat>();
  @Input() zoom?: number;
  @Input() initialLngLat?: LngLat;

  ngAfterViewInit(): void {
    this.map = new Map({
      container: 'map', // container id
      style:
        'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.zoom ?? 6, // starting zoom
    });
  }

  ngOnDestroy(): void {
    this.map?.remove();
  } 
}

