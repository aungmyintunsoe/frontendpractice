const textInput = document.getElementById('message-input');
const wrapper = document.getElementById('input-wrapper');
const counter = document.getElementById('char-counter');
const maxLength = 250;

textInput.addEventListener('input', () => {
    const currentLength = textInput.value.length;
    counter.innerText = currentLength + " / " + maxLength;

    if (currentLength == maxLength) {
        wrapper.classList.add('limit-reached');
    } else {
        wrapper.classList.remove('limit-reached');
    }

})
