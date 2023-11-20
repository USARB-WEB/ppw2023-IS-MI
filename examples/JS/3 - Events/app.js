document.getElementById('click-me-button').addEventListener('click', function () {
    alert('You clicked me!');
});


document.getElementById('hover-me-button').addEventListener('mouseover', function () {
    alert('You hovered over me!');
});

document.getElementById('remove-me-button').addEventListener('click', function () {
    this.remove();
})

document.getElementById('hide-me-button').addEventListener('click', function () {
    document.getElementById('hide-me-button').style.display = 'none';
});

document.getElementById('create-input-button').addEventListener('click', function () {
    var input = document.createElement('input');
    input.type = 'text';
    document.getElementById('create-input-button').after(input);
});

const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange', 'brown', 'black', 'white'];

setTimeout(function () {
    document.body.style.backgroundColor = colors[0];
}, 1000);

let i = 0;
setInterval(function () {
    document.body.style.backgroundColor = colors[i];
    if(i < colors.length - 1) {
        i++;
    } else {
        i = 0;
    }
}, 1000)