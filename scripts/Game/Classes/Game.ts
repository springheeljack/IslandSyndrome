import { Camera } from "./Camera";
import { GameBase } from "../../Boilerplate/Classes/GameBase";

export class Game extends GameBase {
    camera: Camera;

    initialize() {
        this.camera = new Camera();
    }

    update() {

    }

    draw() {

    }
}
