import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { GameMockClient } from "src/app/shared";

@Component({
	selector: "app-games",
	templateUrl: "./games.component.html",
	styleUrls: ["./games.component.scss"],
})
export class GamesComponent implements OnInit {
	providers$: Observable<string[]>;
	constructor(gameMockClient: GameMockClient) {
		this.providers$ = gameMockClient.getProviders$();
	}

	ngOnInit(): void {}
}
