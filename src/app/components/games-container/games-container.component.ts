import { Component, Input, OnInit } from "@angular/core";
import { Game } from "src/app/shared";

@Component({
	selector: "games-container",
	templateUrl: "./games-container.component.html",
	styleUrls: ["./games-container.component.scss"],
})
export class GamesContainerComponent implements OnInit {
	@Input() game: Game | undefined;
	constructor() {}

	ngOnInit(): void {}
}
