import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-second-nested',
  templateUrl: './second-nested.component.html',
  styleUrl: './second-nested.component.css'
})
export class SecondNestedComponent implements OnChanges, OnInit, OnDestroy {
  @Input('nameData') nameValue = ''
  message = ''

  constructor() {
    // this.message = 'Welcome ' + (this.nameValue === '' ? 'NA' : this.nameValue)
    console.log('object created');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes happened-new name received: ' + this.nameValue);
    this.message = 'Welcome ' + (this.nameValue === '' ? 'NA' : this.nameValue)
  }
  ngOnInit(): void {
    console.log('init happened..');
  }
  ngOnDestroy(): void {
    console.log('component destroyed...');
  }
}
