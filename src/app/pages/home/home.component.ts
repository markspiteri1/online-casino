import { Component, ChangeDetectionStrategy } from "@angular/core";

import { GameMockClient, Game } from "../../shared";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

const NAME_KEBAB = "app-home";

@Component({
	templateUrl: "./home.component.html",
	styleUrls: ["./home.scss"],
	host: { class: NAME_KEBAB },
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
	gamesData$: Observable<Game[]>;

	constructor(
		gameMockClient: GameMockClient
	) {
		this.gamesData$ = gameMockClient
			.getAll$()
			.pipe(map((res) => res.filter((game) => game.tag === "trending")));
	}
}
