"use strict";
var Bubble = (function () {
    function Bubble() {
        console.log("Bubble was created!");
        this.spawnBubble();
    }
    Bubble.prototype.spawnBubble = function () {
        var _this = this;
        this.div = document.createElement("bubble");
        var background = document.getElementsByTagName("background");
        background[0].appendChild(this.div);
        var x = Math.random() * (window.innerWidth - this.div.clientWidth);
        var y = Math.random() * (window.innerHeight - this.div.clientHeight);
        var color = Math.random() * 360;
        this.div.style.transform = "translate(" + x + "px, " + y + "px)";
        this.div.style.filter = "hue-rotate(" + color + "deg)";
        this.div.addEventListener("click", function () { return _this.onBubbleClick(); });
    };
    ;
    Bubble.prototype.onBubbleClick = function () {
        console.log("Popped!");
        this.div.remove();
    };
    return Bubble;
}());
var Corona = (function () {
    function Corona() {
        this.spawnCorona();
    }
    Corona.prototype.spawnCorona = function () {
        var _this = this;
        this.div = document.createElement("corona");
        var background = document.getElementsByTagName("background");
        background[0].appendChild(this.div);
        var x = Math.random() * (window.innerWidth - this.div.clientWidth);
        var y = Math.random() * (window.innerHeight - this.div.clientHeight);
        var color = Math.random() * 360;
        this.div.style.transform = "translate(" + x + "px, " + y + "px)";
        this.div.style.filter = "hue-rotate(" + color + "deg)";
        this.div.addEventListener("click", function () { return _this.expandCorona(); });
        console.log("Corona was created!");
    };
    Corona.prototype.expandCorona = function () {
        console.log("test");
        for (var index = 0; index < 5; index++) {
            this.spawnCorona();
        }
    };
    return Corona;
}());
var Fish = (function () {
    function Fish() {
        console.log("Fish was created!");
        this.spawnFish();
    }
    Fish.prototype.spawnFish = function () {
        var _this = this;
        this.div = document.createElement("fish");
        var background = document.getElementsByTagName("background");
        background[0].appendChild(this.div);
        var x = Math.random() * (window.innerWidth - this.div.clientWidth);
        var y = Math.random() * (window.innerHeight - this.div.clientHeight);
        var color = Math.random() * 360;
        this.div.style.transform = "translate(" + x + "px, " + y + "px)";
        this.div.style.filter = "hue-rotate(" + color + "deg)";
        this.div.addEventListener("click", function () { return _this.killFish(); });
    };
    ;
    Fish.prototype.killFish = function () {
        console.log("Aargh!");
        this.div.classList.add("dead");
    };
    return Fish;
}());
var Game = (function () {
    function Game() {
        console.log("Game was created!");
        for (var index = 0; index < 25; index++) {
            var fish = new Fish();
        }
        for (var index = 0; index < 40; index++) {
            var bubble = new Bubble();
        }
        for (var index = 0; index < 10; index++) {
            var corona = new Corona();
        }
    }
    Game.appendChild = function (bubble) {
        throw new Error("Method not implemented.");
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map