import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loadedFeature: string = 'recipes';
  title = 'RecipesBook';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
