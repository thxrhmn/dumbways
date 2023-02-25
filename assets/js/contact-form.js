const getData = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (name == "") {
        alert("Name Cannot be empty");
        
        return;
    } else if (email == "") {
        alert("Email Cannot be empty");
        return;
    } else if (phone == "") {
        alert("Phone Cannot be empty");
        return;
    } else if (subject == "") {
        alert("Subject Cannot be empty");
        return;
    } else if (message == "") {
        alert("Message Cannot be empty");
        return;
    }    

    const emailReceiver = "rahmanmuhaemin@gmail.com";
    const bodyMessage = `hello my name is ${name}, ${subject} with me asap you can call me here (+${phone}) \n\n${message}\n\n`;

    let a = document.createElement("a");
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=${encodeURIComponent(bodyMessage)}`;
    a.click();

    let data = {
        name,
        email,
        phone,
        subject,
        message,
    };

    console.log(data);
};
