// Your JS goes here
function makeDivs(howmany) {
    for (var i = 0; i < howmany; i++) {
        if (i % 2 === 0) {
            var newDiv = document.createElement('div');
            newDiv.className = "div" + i;
            newDiv.style.width = "11.1%";
            newDiv.style.paddingBottom = "11.1%";
            newDiv.style.float = "left";
            newDiv.style.backgroundColor = "black";
            document.body.appendChild(newDiv);
        } else {
            var newDiv = document.createElement('div');
            newDiv.className = "div" + i;
            newDiv.style.width = "11.1%";
            newDiv.style.paddingBottom = "11.1%";
            newDiv.style.float = "left";
            newDiv.style.backgroundColor = "red";
            document.body.appendChild(newDiv);
        }
    }
}

makeDivs(63);

function makeRandomDivs(howmany) {
    for (var i = 0; i < howmany; i++) {
            var newDiv = document.createElement('div');
            newDiv.className = "div" + i;
            newDiv.style.width = "11.1%";
            newDiv.style.paddingBottom = "11.1%";
            newDiv.style.float = "left";
            newDiv.style.backgroundColor = getRandomColor();
            document.body.appendChild(newDiv);
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

makeRandomDivs(63);

function makeLotsOfRandomDivs(howmany) {
    for (var i = 0; i < howmany; i++) {
            var newDiv = document.createElement('div');
            newDiv.className = "div" + i;
            newDiv.style.width = ".4%";
            newDiv.style.paddingBottom = ".4%";
            newDiv.style.float = "left";
            newDiv.style.backgroundColor = getRandomColor();
            document.body.appendChild(newDiv);
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

makeLotsOfRandomDivs(35000);
