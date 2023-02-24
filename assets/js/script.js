const getData = () => {
    // ambil value/hasil inputan dari id
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    // cek kondisi jika variable isinya kosong
    // maka tampilkan alert 
    if (name == "") {
        return alert("Nama belum diisi")
    } else if (email == "") {
        return alert("Email belum diisi")
    } else if (phone == "") {
        return alert("Phone belum diisi")
    } else if (subject == "") {
        return alert("Subject belum diisi")
    } else if (message == "") {
        return alert("Message belum diisi")
    } 
    
    // email penerima
    const emailReceiver = "rahmanmuhaemin@gmail.com"

    // buat element a
    let a = document.createElement('a')

    // format mailto
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=hello my name is ${name}, ${subject} with me asap you can call me here (+${phone}) %0D%0A%0D%0A${message}%0D%0A%0D%0A`

    // click function bawaaan js || ketika di klik 
    // otomatis membuka email
    a.click()

    // object 
    let data = {
        name,
        email,
        phone,
        subject,
        message
    }

    // menampilkan pada console
    // console.log(`${name}\n${email}\n${phone}\n${subject}\n${message}`)
    console.log(data)
}