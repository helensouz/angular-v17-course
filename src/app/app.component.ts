import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
     HttpClientModule,
     FormsModule,
      FontAwesomeModule],
  providers: [HttpClient ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})



export class AppComponent {
  title = 'angular-v17-course';
}
