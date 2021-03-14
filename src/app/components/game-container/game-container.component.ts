import { Component, Input, OnInit } from "@angular/core";
import { Game } from "src/app/shared";

@Component({
	selector: "game-container",
	templateUrl: "./game-container.component.html",
	styleUrls: ["./game-container.component.scss"],
})
export class GameContainerComponent implements OnInit {
	@Input() game: Game | undefined;
	constructor() {}

	ngOnInit(): void {}

	play(link: string) {
		console.log('link: '+link)
		window.open(link, "_blank");
	}
}
