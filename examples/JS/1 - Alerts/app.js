alert('Hello! I am a JavaScript alert box!')

const name = prompt('What is your name?')
alert(`Hello ${name}!`)

const answer = confirm('Do you like JavaScript?')
if (answer === true) {
    alert('Great!')
} else {
    alert('Too bad!')
}