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
  private readonly currentLngLat = new LngLat(
    -78.81518766536175,
    -1.7283071380767154
  );
  private map?: Map;
  private marker!: Marker;
  public readonly PrimeIcons = PrimeIcons;
  @Output() outputLngLat = new EventEmitter<LngLat>();
  @Input() zoom?: number;
  @Input() initialLngLat?: string;
  @Input() latitude!: number;
  @Input() longitude!: number;

  ngAfterViewInit(): void {

    this.map = new Map({
      container: 'map', 
      style:
        'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL', // style URL
      center: new LngLat(this.longitude, this.latitude),
      zoom: this.zoom ?? 12, 
    });
    this.marker = new Marker({
      color: 'red',
    })
    .setLngLat(new LngLat(this.longitude, this.latitude))
    .addTo(this.map);
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }
}
