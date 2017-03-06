import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-search-bar',
  templateUrl: './post-search-bar.component.html',
  styleUrls: ['./post-search-bar.component.css']
})
export class PostSearchBarComponent implements OnInit {
  active: boolean = false;

  @Output() toggleFilter = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.toggleFilter.emit(false);
  }

  onToggleFilter(){
    this.active = !this.active;
    this.toggleFilter.emit(this.active);
  }

}
