import {
  AfterContentChecked, AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren, DoCheck,
  Input, OnChanges,
  OnInit,
  QueryList, SimpleChanges
} from '@angular/core';
import { TabSlotDirective } from "./tab-slot.directive";

@Component({
  selector: 'tabs',
  template: `<ng-content></ng-content>`,
})
export class TabsComponent implements DoCheck {
  @Input() selectedTabId: any;
  @ContentChildren(TabSlotDirective) slots: QueryList<TabSlotDirective>;

  ngDoCheck(): void {
    if(!this.slots) return;
    this.slots.forEach(  (slot: TabSlotDirective) => {
        if(slot.id.toString() === this.selectedTabId) {
          slot.toggleVisibility(true);
        } else {
          slot.toggleVisibility(false);
        }
    })
  }


}
