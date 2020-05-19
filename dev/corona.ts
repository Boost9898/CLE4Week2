class Corona {

    div: HTMLElement

    constructor() {
        this.spawnCorona()
    }

    spawnCorona() {
        this.div = document.createElement("corona")
        let background = document.getElementsByTagName("background")
        background[0].appendChild(this.div)

        let x = Math.random() * (window.innerWidth - this.div.clientWidth)
        let y = Math.random() * (window.innerHeight - this.div.clientHeight)
        let color = Math.random() * 360

        this.div.style.transform = `translate(${x}px, ${y}px)`
        this.div.style.filter = `hue-rotate(${color}deg)`

        this.div.addEventListener("click", () => this.expandCorona())

        console.log("Corona was created!")
    }

    expandCorona() {
        console.log("test")
        for (let index = 0; index < 5; index++) {
            this.spawnCorona();
        }
    }
}