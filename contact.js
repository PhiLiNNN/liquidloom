let news = ['Vielen Dank, dass Sie unseren Newsletter abonniert haben.', 'Das Fenster schließt sich in 3 Sekunden.' ];
let feedb = ['Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.', 'Sie werden in 3 Sekunden zurück zur Startseite geleitet.' ];

function sendMail(event) {
    let counter = checkInputValidation(event);
    
    if (counter ==   3) {
        event.preventDefault();
        let feedback = document.getElementById('feedback-id');   
        createFetch(event, feedback, feedb);
        setTimeout(() => {
                    feedback.classList.add('d-none');
                    window.location.href = "index.html";
                }, 3000);
    }
}

function checkInputValidation(event) {
    let errorClass = 'd-none';
    let msgId = getMsgIDs();
    let fields = getInputFields();
    let specialCharRegex  = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-0123456789]/;
    let counter = 0;
    for (let i = 0; i < fields.length; i++) {
        let inputFieldIncludesSpecialCahrs = specialCharRegex.test(fields[i].value);
        let inputFieldAlreadyContainsErrorClass =  msgId[i].classList.contains(errorClass);
        if (i === 0 && inputFieldIncludesSpecialCahrs) {
            if (inputFieldAlreadyContainsErrorClass) { handleInputError(fields[i], msgId[i].id, errorClass); }
        } else if (fields[i].checkValidity()) { handleInputSuccess(fields[i], msgId[i].id, errorClass) , counter++;
        } else { handleInputError(fields[i], msgId[i].id, errorClass); }
    }
    return counter;
}



function handleInputError(field, msgId, errorClass) {
    field.style.border = "3px solid #F44336";
    document.getElementById(msgId).classList.remove(errorClass);
}
function handleInputSuccess(field, msgId, errorClass) {
    field.style.border = "solid #4CAF50";
    document.getElementById(msgId).classList.add(errorClass);
}
  

function getInputFields() {
    return [
        document.getElementById('name_contact'),
        document.getElementById('email_contact'),
        document.getElementById('message_contact')
    ];
}

function getMsgIDs() {
    return [
        document.getElementById('no-name'),
        document.getElementById('no-mail'),
        document.getElementById('no-text')
    ];
} 
    
   
function sendNews(event){
    let errorInput = document.getElementById('email_footer');
    if (!errorInput.checkValidity()) {
        errorInput.style.border = "2px solid #F44336";
        setTimeout(() => {
            errorInput.style.border = "2px solid #2d2c2c";
        }, 1000);
    }
    else {
        errorInput.style.border = "2px solid #4CAF50";
        event.preventDefault();
        let newsletter = document.getElementById('newsletter-id');  
        document.getElementById('email_footer').value = ''; ;  
        createFetch(event, newsletter, news);
        setTimeout(() => {
                newsletter.classList.add('d-none');
                errorInput.style.border = "2px solid #2d2c2c";
        }, 3000);
    }
    
}


function createFetch(event, id, arr) {
        const data = new FormData(event.target);
        fetch("https://formspree.io/f/xwkgpklw", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
            id.classList.remove('d-none');
            document.activeElement.blur();
            id.innerHTML = templateFeedback(arr);
    }).catch((error) => {
        console.log(error);
    });
}

function templateFeedback(arr) {
    return /*html*/`
        <div class="feedback">
            <p>${arr[0]}</p>
            <p class="close-popup-msg">${arr[1]}</p>
        </div>
     `;
}