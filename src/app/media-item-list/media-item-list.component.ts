import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediaItemService } from '../service/media-item.service';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css'],
})
export class MediaItemListComponent implements OnInit {
  mediaItems;

  constructor(
    private mediaItemService: MediaItemService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    /**
     * [sec 7.c]
     * we can get uri param if path is defined in that way 'path/:pathid'
     * ActivatedRoute is a class provided by angular for that.
     * paramMap property in that will have the uri param passed in the path
     * we can get it using get() method by passing the name with which we defined it in router file
     * this method returns an observable
     */
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.mediaItems = this.mediaItemService.get(paramMap.get('medium'));
    });
  }

  onDeleteEmit($event: any) {
    console.log('request to delete this', $event);
    this.mediaItemService.delete($event);
  }
}
