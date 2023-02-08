import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css'],
})
export class MainScreenComponent implements OnInit {
  symptoms: string[];
  selectedSymptoms: string ;

  ngOnInit(): void {
    this.symptoms = [
      'rash',
      'diarrhea',
      'snuffle',
      'fever heat',
      'fever',
      'stomach-ache',
      'edema',
      'convulsions',
      'photophobia',
      'body aches',
    ];
    this.selectedSymptoms = ''
  }

  showSymptom(symptom: string) {
    this.selectedSymptoms += symptom + ", " ;
    console.log('click');
  }
}
