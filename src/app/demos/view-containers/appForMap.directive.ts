import {Directive, DoCheck, Input, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({selector: '[appForMap]'})
export class AppForMapDirective implements DoCheck{

  @Input('nkForMapIn') map: Record<string, any>;

  constructor(private viewContainer: ViewContainerRef,
              private template: TemplateRef<any>) {}

  ngDoCheck(): void {
    Object.keys(this.map).forEach( key => {
     this.viewContainer.createEmbeddedView(
         this.template,
         { $implicit: {key: key, value: this.map[key]} }
     )
    })
  }
}
