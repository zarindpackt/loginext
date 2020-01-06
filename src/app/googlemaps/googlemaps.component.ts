import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { Postcode } from "../models/postcode";

@Component({
  selector: "app-googlemaps",
  templateUrl: "./googlemaps.component.html",
  styleUrls: ["./googlemaps.component.scss"]
})
export class GooglemapsComponent implements AfterViewInit, OnChanges {
  @ViewChild("map", { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  markers: google.maps.Marker[];

  @Input() postcode: Postcode[];

  constructor() {
    console.log("Loaded GooglemapsComponent!");
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.map) {
      this.updateMarker(changes.postcode.currentValue);
    }
  }

  ngAfterViewInit(): void {
    this.map = new google.maps.Map(this.gmap.nativeElement);
    const mapOptions = {
      zoom: 1,
      center: new google.maps.LatLng(0, 0)
    };
    this.map = new google.maps.Map(this.gmap.nativeElement, mapOptions);
  }

  updateMarker(postcode: any[]) {
    if (this.markers) {
      this.markers.forEach(marker => marker.setMap(null));
    }
    const cordinates = postcode.map(item => {
      return new google.maps.LatLng(item.latitude, item.longitude);
    });

    this.markers = cordinates.map(
      item =>
        new google.maps.Marker({
          position: item,
          map: this.map
        })
    );

    const bound = new google.maps.LatLngBounds();

    cordinates.forEach(item => bound.extend(item));
    this.map.fitBounds(bound);
    this.map.setCenter(bound.getCenter());
  }
}
