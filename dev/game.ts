class Game {
    static appendChild(bubble: HTMLElement) {
        throw new Error("Method not implemented.")
    }

    constructor() {
        console.log("Game was created!")

        for (let index = 0; index < 25; index++) {
            let fish : Fish = new Fish()
        }

        for (let index = 0; index < 40; index++) {
            let bubble : Bubble = new Bubble()
        }

        for (let index = 0; index < 10; index++) {
            let corona : Corona = new Corona()
        }
    }
}

window.addEventListener("load", () => new Game())