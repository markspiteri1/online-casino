import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import {GamesContainerComponent} from "./../components/games-container/games-container.component"

import { AppPagesRoutingModule } from "./pages-routing.module";

const COMPONENTS = [
	HomeComponent,
	GamesContainerComponent
];

@NgModule({
	imports: [
		CommonModule,
		AppPagesRoutingModule,
	],
	declarations: [
		...COMPONENTS
	],
	exports: [
		...COMPONENTS
	]
})
export class AppPagesModule {

}
