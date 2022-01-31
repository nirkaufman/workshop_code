import { Directive, Input, Optional, TemplateRef, ViewContainerRef } from '@angular/core';
import { TabsComponent } from "./tabs.component";

@Directive({
  selector: '[tab]'
})
export class TabSlotDirective {
  @Input('tab') id: any;

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {}

  toggleVisibility(state: boolean) {
    this.viewContainer.clear();

    if(state) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

}
