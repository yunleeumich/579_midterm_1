const messageInput = document.querySelector('#problem-4 #message-input');
const messageFeedback = document.querySelector('#problem-4 #message-feedback')

const MAX_CHARACTERS = 50;
let charcterNum = 50;

// Write your code here
function testValidOrNot() {
    if (messageInput.value.length <= MAX_CHARACTERS) {
        messageInput.classList.remove('is-invalid');
        messageInput.classList.add('is-valid');
        messageFeedback.classList.remove('invalid-feedback');
        messageFeedback.classList.add('valid-feedback');
        messageFeedback.textContent = (charcterNum - messageInput.value.length) + ' characters left';
        console.log(charcterNum);
    } else {
        messageInput.classList.remove('is-valid');
        messageInput.classList.add('is-invalid');
        messageFeedback.classList.remove('valid-feedback');
        messageFeedback.classList.add('invalid-feedback');
        messageFeedback.textContent = (charcterNum - messageInput.value.length) + ' characters too long';
        // console.log('invalid');
    }
}

messageFeedback.addEventListener('input', () => {
    testValidOrNot();
});