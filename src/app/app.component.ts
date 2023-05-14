import { Component } from '@angular/core';

declare let particlesJS: any; // Required to be properly interpreted by TypeScript.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  ngOnInit(){
    this.initilaizeParticles()
  }

  private initilaizeParticles(){
    particlesJS.load('particles-js','../../../assets/particles.json', function() {
      console.log('callback - particles-js config loaded');
    });
  }
}
