import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { GameContainerComponent } from "./../components/game-container/game-container.component";
import { GamesComponent } from "./../components/games/games.component";

import { AppPagesRoutingModule } from "./pages-routing.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";

const COMPONENTS = [HomeComponent, GameContainerComponent, GamesComponent];

@NgModule({
	imports: [
		CommonModule,
		AppPagesRoutingModule,
		MatFormFieldModule,
		MatSelectModule,
	],
	declarations: [...COMPONENTS],
	exports: [...COMPONENTS, MatFormFieldModule, MatInputModule],
})
export class AppPagesModule {}
