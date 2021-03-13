import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";

import { GamesComponent } from "./../components/games/games.component";

const ROUTES: Routes = [
	{ path: "", redirectTo: "home", pathMatch: "full" },
	{ path: "games", component: GamesComponent },
	{ path: "home", component: HomeComponent },
];

@NgModule({
	imports: [
		RouterModule.forRoot(ROUTES, {
			// enableTracing: true
		}),
	],
	exports: [RouterModule],
})
export class AppPagesRoutingModule {}
