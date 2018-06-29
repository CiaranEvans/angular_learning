import { Component } from '@angular/core';
import {geoJSON, icon, latLng, Layer, marker, tileLayer} from 'leaflet';
import * as geojson from 'geojson';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-learning';

  options = {
    layers: [
      tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        detectRetina: true
      })
    ],
    zoom: 7,
    center: latLng([ 46.879966, -121.726909 ])
  };

  markers: Layer[] = [];

  public addMarker(): void {
    const newMarker = marker([ 46.879966 + 0.1 * (Math.random() - 0.5), -121.726909 + 0.1 * (Math.random() - 0.5) ],
      {
        icon: icon({
          iconSize: [ 25, 41 ],
          iconAnchor: [ 13, 41 ],
          iconUrl: 'assets/marker-icon.png',
          shadowUrl: 'assets/marker-shadow.png'
        })
      });

    this.markers.push(newMarker);
    console.log(this.markers);
  }

  public addGeoJson(): void {
    const toAdd = geoJSON(<geojson.Polygon>(JSON.parse(
      '{\n' +
      '      "type": "Feature",\n' +
      '      "properties": {},\n' +
      '      "geometry": {\n' +
      '        "type": "Polygon",\n' +
      '        "coordinates": [\n' +
      '          [\n' +
      '            [\n' +
      '              -6.416015625,\n' +
      '              58.44773280389084\n' +
      '            ],\n' +
      '            [\n' +
      '              -7.3828125,\n' +
      '              55.87531083569679\n' +
      '            ],\n' +
      '            [\n' +
      '              -4.306640625,\n' +
      '              53.4357192066942\n' +
      '            ],\n' +
      '            [\n' +
      '              -6.767578125,\n' +
      '              50.28933925329178\n' +
      '            ],\n' +
      '            [\n' +
      '              -1.494140625,\n' +
      '              49.095452162534826\n' +
      '            ],\n' +
      '            [\n' +
      '              6.50390625,\n' +
      '              51.67255514839676\n' +
      '            ],\n' +
      '            [\n' +
      '              2.63671875,\n' +
      '              54.826007999094955\n' +
      '            ],\n' +
      '            [\n' +
      '              -0.087890625,\n' +
      '              56.75272287205736\n' +
      '            ],\n' +
      '            [\n' +
      '              -2.98828125,\n' +
      '              59.40036514079251\n' +
      '            ],\n' +
      '            [\n' +
      '              -6.416015625,\n' +
      '              58.44773280389084\n' +
      '            ]\n' +
      '          ]\n' +
      '        ]\n' +
      '      }\n' +
      '    }'
    )));
    this.markers.push(toAdd);
  }
}
