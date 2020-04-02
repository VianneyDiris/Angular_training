import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Training';
  firstName = 'Vianney';
  lastName = 'Diris';

  values = ['ceci','est','une','boucle','ngFor','avec un ngIf'];
  show=true;

  doClick(){
    this.title = "clique sur bouton";
  }

  toggle(){
    this.show = this.show?false:true;
  }
}
