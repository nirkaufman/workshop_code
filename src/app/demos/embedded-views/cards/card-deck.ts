import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  Injector,
  Input,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { Card, CardContext, CardTypes } from "./cards-types";
import { CardsComponent } from "./cards-templates";

@Directive({
  selector: '[cardDeck]'
})
export class CardDeckDirective implements OnInit {
  @Input('cardDeckFor') cards: Card[];
  @Input('cardDeckPrimary') primaryTemplate: TemplateRef<CardContext>;
  @Input('cardDeckPlain') plainTemplate: TemplateRef<CardContext>;

  constructor(
      private cfr: ComponentFactoryResolver,
      private injector: Injector,
      private vcr: ViewContainerRef,
      private renderer: Renderer2,
      private hostElement: ElementRef
  ) {
  }

  ngOnInit(): void {
    const parentNode = this.renderer.parentNode(this.hostElement.nativeElement);
    const wrapper = this.renderer.createElement('div');

    this.renderer.addClass(wrapper, 'card-deck');
    this.renderer.insertBefore(parentNode, wrapper, this.hostElement.nativeElement);
    this.renderer.removeChild(parentNode, this.hostElement.nativeElement);
    this.renderer.appendChild(wrapper, this.hostElement.nativeElement);

    const cardsComponentFactory = this.cfr.resolveComponentFactory<CardsComponent>(CardsComponent);
    const cardsComponent: ComponentRef<CardsComponent> = cardsComponentFactory.create(this.injector);

    this.cards.forEach(card => {
      this.renderTemplate(card, cardsComponent.instance)
    })
  }

  private renderTemplate(card: Card, component: CardsComponent) {
    switch (card.type) {
      case CardTypes.Plain:
        this.vcr.createEmbeddedView(this.plainTemplate || component.plainCardTemplate, {$implicit: card});
        break
      case CardTypes.Primary:
        this.vcr.createEmbeddedView(this.primaryTemplate || component.primaryCardTemplate, {$implicit: card});
        break;
    }
  }
}
