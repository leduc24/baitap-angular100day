import { Component } from '@angular/core';
import { Author, authors } from '../authors.model';

@Component({
  selector: 'author-list',
  template: `
    <author-details *ngFor = "let author of authors" [author]= "author" 
    (select) = "onSelected ($event)" 
    (delete) = "onDelete($event)"></author-details>
    <br />
    <div>
      curren select author: {{currentAuthor?.firstName}} {{currentAuthor?.lastName}}
    </div>
    `,
})
export class AuthorListComponent {
  authors = authors;
  currentAuthor = authors[0];
  onSelected(selcetedAuthor: Author) {
    this.currentAuthor = selcetedAuthor;
  }
  onDelete(id: number) {
    this.authors = this.authors.filter((author) => {
      return author.id !== id;
    }); // [{id: 1},{id: 2}]
    if (this.currentAuthor.id == id) {
      this.currentAuthor = this.authors[0];
    }
  }
}
