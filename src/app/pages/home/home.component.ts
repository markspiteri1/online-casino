import { Component, ChangeDetectionStrategy } from "@angular/core";

import { GameMockClient, Game } from "../../shared";

import { GamesContainerComponent } from "../../components/games-container/games-container.component";
import { Observable } from "rxjs";

const NAME_KEBAB = "app-home";

@Component({
	templateUrl: "./home.component.html",
	styleUrls: ["./home.scss"],
	host: { class: NAME_KEBAB },
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
	gamesData$: Observable<Game[]>

	constructor(
		gameMockClient: GameMockClient
		// gamesContainer: GamesContainerComponent
	) {
		// gameMockClient.getAll$().subscribe({
		// 	next: (res) => {
		// 		// this.gamesData = res;
		// 	},
		// });
		this.gamesData$ = gameMockClient.getAll$()
	}
}
