import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'simple-ui';
  storedPosts = [];

  onPostAdded(post) {
    this.storedPosts.push(post);
  }
}
