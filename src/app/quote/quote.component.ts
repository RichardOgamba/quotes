import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, 'We have finished the job, What do we do with the tools', '- Haile Selassie'),
    new Quote(2, 'Life is not fair; get used of it', '- Bill Gates'),
    new Quote(3, 'He alone who owns the youth owns the future', '- Hitler'),
    new Quote(4, 'Darkness cannot drive out darkness; only lightcan do that. Hate cannot drive out hate; only love can do that', '- Martin Luther King Jr.')
  ]

  completeQuote(isComplete, index){
    if (isComplete){
      this.quotes.splice(index, 1);
    }
  }
  toogleConstructors(index){
    this.quotes[index].showConstructor = !this.quotes[index].showConstructor;
  }

  constructor() { }

  ngOnInit() {
  }

}
