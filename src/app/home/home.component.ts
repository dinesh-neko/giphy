import { Component, HostListener } from '@angular/core';
import { GiphyService } from '../services/giphy.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public searchTerm: string;
  constructor(public giphyService: GiphyService, public dialog: MatDialog) {}

  @HostListener('window:scroll')
  onScroll() {
    if (window.outerHeight + window.scrollY >= document.body.scrollHeight) {
      this.giphyService.next();
    }
  }

  search() {
    this.giphyService.search(this.searchTerm);
  }

  openDialog(giphyItem) {
    this.dialog.open(DialogContentComponent, {
      data: {
        name: giphyItem.title,
        image: giphyItem.images.original.url,
      },
    });
  }
}
