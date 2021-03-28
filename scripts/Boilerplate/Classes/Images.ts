export class Images {
    private imageContainerElement: HTMLElement;
    private images = {};

    constructor(imageContainerElementId: string) {
        this.imageContainerElement = document.getElementById(imageContainerElementId);
    }

    getImage(path: string) {
        if (this.images[path] == undefined) {
            const image = new Image();
            image.src = "images/" + path + ".png";
            this.imageContainerElement.append(image);
            this.images[path] = image;
        }

        return this.images[path];
    }
}
