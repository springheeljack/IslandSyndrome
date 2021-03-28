import { Camera } from "./Camera";
import { GameBase } from "../../Boilerplate/Classes/GameBase";
import { ImagePaths } from "../Enums/ImagePaths";

export class Game extends GameBase {
    camera: Camera;

    initialize() {
        this.context.imageSmoothingEnabled = false;

        this.camera = new Camera();
    }

    update() {

    }

    draw() {
        console.log('in here');
        this.context.drawImage(this.images.getImage(ImagePaths.Test), 200, 100);
    }
}
