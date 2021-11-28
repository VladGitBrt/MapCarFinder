import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Object } from 'src/interfaces/interfaces';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'synapse-app';
  clicked = false;
  mapLat: number = 47.492647;
  mapLon: number = 19.051399;
  searchFormControl = new FormControl('');
  carSearchObjects: Object[] = [];
  carObjects: Object[] = [
    {
      id: 1,
      latitude: 50.760918,
      longitude: 4.11017,
      name: 'ВАЗ',
      animation: 'DROP',
      clicked: false,
    },
    {
      id: 2,
      latitude: 47.492647,
      longitude: 19.051399,
      name: 'ГАЗель',
      animation: 'DROP',
      clicked: false,
    },
    {
      id: 3,
      latitude: 41.902689,
      longitude: 12.496176,
      name: 'Lexus',
      animation: 'DROP',
      clicked: false,
    },
    {
      id: 4,
      latitude: 43.779787,
      longitude: 11.265817,
      name: 'Volkswagen',
      animation: 'DROP',
      clicked: false,
    },
    {
      id: 5,
      latitude: 52.373057,
      longitude: 4.892557,
      name: 'Lada',
      animation: 'DROP',
      clicked: false,
    },
    {
      id: 6,
      latitude: -22.90315,
      longitude: -43.189903,
      name: 'Kia',
      animation: 'DROP',
      clicked: false,
    },
    {
      id: 7,
      latitude: 38.716174,
      longitude: -9.141589,
      name: 'Bentli',
      animation: 'DROP',
      clicked: false,
    },
    {
      id: 8,
      latitude: 50.080293,
      longitude: 14.428983,
      name: 'Porche',
      animation: 'DROP',
      clicked: false,
    },
    {
      id: 9,
      latitude: 48.856663,
      longitude: 2.351556,
      name: 'BMW',
      animation: 'DROP',
      clicked: false,
    },
    {
      id: 10,
      latitude: 45.438095,
      longitude: 12.319029,
      name: 'Honda',
      animation: 'DROP',
      clicked: false,
    },
  ];

  ngOnInit(): void {
    this.carSearchObjects = this.carObjects;
  }
  pingMarker(id: number) {
    console.log(id);
  }
  markerOver(m: Object) {
    m.animation = 'BOUNCE';
  }

  markerOut(m: Object) {
    m.animation = 'DROP';
  }
  carClicked(car: Object) {
    this.carObjects.forEach((carObj) => {
      if (carObj.id == car.id) {
        carObj.clicked = !carObj.clicked;
        if (carObj.clicked == false) {
          carObj.animation = 'DROP';
        } else {
          carObj.animation = 'BOUNCE';
        }
      }
    });
  }
  searchResult(value: string) {
    if (value == '') {
      this.carSearchObjects = this.carObjects;
    } else {
      this.carObjects.forEach((car) => {
        if (car.name.toLowerCase() == value.toLowerCase()) {
          this.carSearchObjects = [];
          this.carSearchObjects.push(car);
        }
      });
    }
  }
}
