class Fish {

    div: HTMLElement

    constructor() {
        console.log("Fish was created!")
        this.spawnFish() // this.killFish()
    }

    spawnFish() {
        this.div = document.createElement("fish")
        let background = document.getElementsByTagName("background")
        background[0].appendChild(this.div)

        let x = Math.random() * (window.innerWidth - this.div.clientWidth)
        let y = Math.random() * (window.innerHeight - this.div.clientHeight)
        let color = Math.random() * 360

        this.div.style.transform = `translate(${x}px, ${y}px)`
        this.div.style.filter = `hue-rotate(${color}deg)`

        this.div.addEventListener("click", () => this.killFish())
    };

    killFish() {
        console.log("Aargh!")
        this.div.classList.add("dead")
    }
}