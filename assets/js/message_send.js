$(document).ready(function () {
    // const name = $('#name');
    // const email = $('#email');
    // const subject = $('#subject');
    // const message = $('#comment');


    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("comment");
    $('#submit').on("click", (e) => {
        e.preventDefault();

        console.log(name.value);
        console.log(email.value);
        console.log(subject.value);
        console.log(message.value);

        const data = {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value
        }
        postGoogle(data);
    })

    async function postGoogle(data) {
        const formUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdU1DHIfAgPGPImCDvwwz9oHX1hyL8UbWutIPaByeEGEh0oAQ/formResponse";

        const formData = new FormData();

        formData.append("entry.280346201", data.name);
        formData.append("entry.225488508", data.email);
        formData.append("entry.878630978", data.subject);
        formData.append("entry.1037824851", data.message);

        await fetch(formUrl, {
            method: "POST",
            body: formData
        }).finally(() => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("comment").value = "";
        })
    }
})