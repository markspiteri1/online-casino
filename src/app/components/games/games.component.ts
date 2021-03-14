import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Location } from "@angular/common";
import { Observable } from "rxjs/internal/Observable";
import {
	debounceTime,
	distinctUntilChanged,
	startWith,
	switchMap,
	tap,
} from "rxjs/operators";
import { Game, GameMockClient } from "src/app/shared";
import { Router } from "@angular/router";

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

	constructor(
		gameMockClient: GameMockClient,
		private location: Location,
		private router: Router
	) {
		this.providers$ = gameMockClient.getProviders$();
		this.searchField = new FormControl();

		this.results = this.searchField.valueChanges.pipe(
			startWith(""),
			debounceTime(500),
			distinctUntilChanged(),
			tap((_) => (this.loading = true)),
			switchMap((term) =>
				gameMockClient.getFilteredResults$(
					term,
					this.provider === "Show all providers" ? "" : this.provider
				)
			),
			tap((_) => (this.loading = false))
		);
	}

	ngOnInit(): void {}

	onProviderChange(val: string) {
		this.provider = val;
		// console.log(this.router.url);
		this.location.replaceState(`${this.router.url}?provider=${val}`);
	}
}
