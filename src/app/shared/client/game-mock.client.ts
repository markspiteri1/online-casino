import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Game } from "./game.model";
import { distinct, map } from "rxjs/operators";

@Injectable({
	providedIn: "root",
})
export class GameMockClient {
	private readonly dataURL = "assets/game.mock-data.json";

	constructor(private http: HttpClient) {}

	getAll$(): Observable<Game[]> {
		return this.http.get<Game[]>(this.dataURL);
	}

	getFilteredResults$(filter: string, provider: string): Observable<Game[]> {
		return this.http.get<Game[]>(this.dataURL);
	}

	getProviders$(): Observable<string[]> {
		return this.http.get<Game[]>(this.dataURL).pipe(
			map((games) => games.map((game) => game.providerName)),
			distinct(game=>game)
		);
	}
}
