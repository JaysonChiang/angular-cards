import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: "Neat Tres",
      username: "nature",
      content: "Saw this awesome tree during my hike day.",
      imageUrl: "assets/tree.jpeg"
    }, {
      title: "Mountain",
      username: "mounting",
      content: "Saw this awesome tree during my hike day.",
      imageUrl: "assets/mountain.jpeg"
    }, {
      title: "Biking",
      username: "biking",
      content: "I bike today",
      imageUrl: "assets/biking.jpeg"
    }
  ]
}
