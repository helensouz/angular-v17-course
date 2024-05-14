import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { WeatherDatas } from './../../../models/interfaces/weather.interface';
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.scss'
})
export class WeatherCardComponent {


  @Input() WeatherDatasInput!: WeatherDatas

  minTemperatureIcon = faTemperatureLow
  maxTemperatureIcon = faTemperatureHigh
  humidityIcon = faDroplet
  windIcon = faWind


}
