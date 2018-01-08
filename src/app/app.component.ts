import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
quotes = [
  new Quote(1, 'We have finished the job, What do we do with the tools', '- Haile Selassie'),
  new Quote(2, 'Life is not fair; get used of it', '- Bill Gates'),
  new Quote(3, 'He alone who owns the youth owns the future', '- Hitler'),
  new Quote(4, 'Darkness cannot drive out darkness; only lightcan do that. Hate cannot drive out hate; only love can do that', '- Martin Luther King Jr.')
]

  constructor() {}
}
