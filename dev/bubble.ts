class Bubble {

    div: HTMLElement

    constructor() {
        console.log("Bubble was created!")
        this.spawnBubble()
    }

    spawnBubble() {
        this.div = document.createElement("bubble")
        let background = document.getElementsByTagName("background")
        background[0].appendChild(this.div)

        let x = Math.random() * (window.innerWidth - this.div.clientWidth)
        let y = Math.random() * (window.innerHeight - this.div.clientHeight)
        let color = Math.random() * 360

        this.div.style.transform = `translate(${x}px, ${y}px)`
        this.div.style.filter = `hue-rotate(${color}deg)`

        this.div.addEventListener("click", () => this.onBubbleClick())
    };

    onBubbleClick() {
        console.log("Popped!")
        this.div.remove()
    }
}