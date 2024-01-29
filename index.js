// for (let index = 0; index < (document.querySelectorAll(".drum")).length; index++) {
//     var x = document
//         .querySelectorAll(".drum")[index]
//         .addEventListener("click", function () {
//             alert("Test Ok");
//         });
// }
// Above Code is also working but its is in short form am=nd little bit difficult to understood

// function handleClick()
// {
//     var path=this.innerHTML;
//     if (path == "w")
//     {
//         var audio= new Audio("./sounds/kick-bass.mp3");
//         audio.play();
//     }
// }

var a = document.querySelectorAll(".drum");
for (var index = 0; index < a.length; index++) {
    var b = a[index].addEventListener("click", function () {
        var location = this.innerHTML;
        makeSound(location);
        makeAnimation(location);
    });
}
document.addEventListener("keypress", function (x) {
    makeSound(x.key);
    makeAnimation(x.key);
});

function makeSound(location) {
    switch (location) {
        case "w":
            var audio1 = new Audio("./sounds/kick-bass.mp3");
            audio1.play();
            break;
        case "a":
            var audio2 = new Audio("./sounds/snare.mp3");
            audio2.play();
            break;
        case "s":
            var audio3 = new Audio("./sounds/tom-1.mp3");
            audio3.play();
            break;
        case "d":
            var audio4 = new Audio("./sounds/tom-2.mp3");
            audio4.play();
            break;
        case "j":
            var audio5 = new Audio("./sounds/tom-3.mp3");
            audio5.play();
            break;
        case "k":
            var audio6 = new Audio("./sounds/tom-4.mp3");
            audio6.play();
            break;
        case "l":
            var audio7 = new Audio("./sounds/crash.mp3");
            audio7.play();
            break;
        default:
            break;
    }
}

function makeAnimation(target) {
    document.querySelector("."+target).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+target).classList.remove("pressed");
    },100)
}

// var a=document.querySelectorAll(".drum");
// for (var index = 0; index < a.length; index++)
// {
//     var b=a[index].addEventListener("keypress",naman);

// }

// function naman()
// {
//     var lc=this.innerHTML;
//     switch (lc)
//     {
//         case "w":
//             var audio11= new Audio("./sounds/kick-bass.mp3");
//             audio11.play();
//             break;
//         case "a":
//             var audio22= new Audio("./sounds/snare.mp3");
//             audio22.play();
//             break;
//         case "s":
//             var audio33= new Audio("./sounds/tom-1.mp3");
//             audio33.play();
//             break;
//         case "d":
//             var audio44= new Audio("./sounds/tom-2.mp3");
//             audio44.play();
//             break;
//         case "j":
//             var audio55= new Audio("./sounds/tom-3.mp3");
//             audio55.play();
//             break;
//         case "k":
//             var audio66= new Audio("./sounds/tom-4.mp3");
//             audio66.play();
//             break;
//         case "l":
//             var audio77= new Audio("./sounds/crash.mp3");
//             audio77.play();
//             break;
//         default:
//             break;
//     }
// }
