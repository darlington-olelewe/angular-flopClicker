import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'my-actor-display',
  templateUrl: './actor-display.component.html',
  styleUrls: [ ]
})
export class ActorDisplayComponent  {
  @Input() actor;
  @Output() selectedActorEvent = new EventEmitter();
  selected = false;

  ngOnInit() {
    this.selected = false;
  }
  actorSelectedNow(actorSelected){
    if(this.selected) return;
    this.selected = true;
    this.selectedActorEvent.emit(actorSelected);
  }

}