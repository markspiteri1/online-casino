import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs/internal/Observable";
import {
	debounceTime,
	distinctUntilChanged,
	startWith,
	switchMap,
	tap,
} from "rxjs/operators";
import { Game, GameMockClient } from "src/app/shared";

@Component({
	selector: "app-games",
	templateUrl: "./games.component.html",
	styleUrls: ["./games.component.scss"],
})
export class GamesComponent implements OnInit {
	providers$: Observable<string[]>;
	provider: string = "Show all providers";
	searchField: FormControl;
	results: Observable<Game[]>;
	private loading: boolean = false;

	constructor(gameMockClient: GameMockClient) {
		this.providers$ = gameMockClient.getProviders$();
		this.searchField = new FormControl();

		this.results = this.searchField.valueChanges.pipe(
			startWith(""),
			debounceTime(500),
			distinctUntilChanged(),
			tap((_) => (this.loading = true)),
			switchMap((term) =>
				gameMockClient.getFilteredResults$(term, this.provider)
			),
			tap((_) => (this.loading = false))
		);
	}

	ngOnInit(): void {}

	onProviderChange(val: string) {
		console.log(val);
	}
}
