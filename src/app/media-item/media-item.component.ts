import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css'],
})
export class MediaItemComponent implements OnInit {
  /**
   * (4)
   * @Input can be used to pass data from parent -> child
   * data passed from parent can be watched to reload child element with ngOnChanges lifecycle hook
   */
  @Input() mediaItem: any;
  /**
   * (5)
   * @Output can be used to send data from child -> parent
   * we can create a instance of EventEmitter from angular/core and emit an event on some condition
   * and we can catch that event in parent component and get the date passed through $event
   */
  @Output() deleteEmit = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onDelete() {
    this.deleteEmit.emit(this.mediaItem);
  }
}
