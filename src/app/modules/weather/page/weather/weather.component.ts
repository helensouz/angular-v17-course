import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { subscribe } from 'diagnostics_channel';
import { HttpClientModule } from '@angular/common/http';
import { WeatherDatas } from '../../../../models/interfaces/weather.interface';
import { Subject, takeUntil } from 'rxjs';
import { faIcons, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FormsModule, NgForm } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherCardComponent } from "../../../components/weather-card/weather-card.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-weather',
    standalone: true,
    templateUrl: './weather.component.html',
    imports: [FormsModule, FontAwesomeModule, WeatherCardComponent, CommonModule]
})
export class WeatherComponent implements OnInit, OnDestroy{

  initialCityName = 'Barueri'
  weatherDatas!: WeatherDatas
  searchIcon = faMagnifyingGlass


  private readonly destroy$ : Subject<void> = new Subject()



  constructor(private weatherService: WeatherService){}



  ngOnInit(): void {

    this.getWeatherDatas(this.initialCityName)

  }




  getWeatherDatas(cityName: string): void{
    this.weatherService.getWeatherData(cityName)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
       next: (response) => {
        response && (this.weatherDatas = response)
        console.log(this.weatherDatas.main.temp_max)

       },
       error: (error) => console.log(error),
       } )
    }

    OnSubmit(): void {
      this.getWeatherDatas(this.initialCityName)
      this.initialCityName = ''
    }

    ngOnDestroy(): void {
      this.destroy$.next()
      this.destroy$.complete()
    }
  }


