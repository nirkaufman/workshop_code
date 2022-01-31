import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TabsComponent } from './demos/content-projection/tabs.component';
import { TabSlotDirective } from './demos/content-projection/tab-slot.directive';
import { TooltipDirective } from './demos/renderer/tooltip.directive';
import { AttachToDirective } from "./demos/view-containers/portal/attach-to.directive";
import { TargetDirective } from "./demos/view-containers/portal/target.directive";
import { CardDeckDirective } from "./demos/embedded-views/cards/card-deck";
import { ToggleDirective } from "./demos/selected-examples/toggle/toggle.directive";
import { AppIfNetworkDirective } from "./demos/view-containers/appIfNetwork.directive";
import { AppForMapDirective } from "./demos/view-containers/appForMap.directive";
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabSlotDirective,
    TooltipDirective,
    AttachToDirective,
    TargetDirective,
    CardDeckDirective,
    ToggleDirective,
    AppIfNetworkDirective,
    AppForMapDirective,
    HeaderComponent
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
