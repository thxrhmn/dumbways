datas = []

const getData = (event) => {
    // preventdefault = methode untuk mencegah browser reload 
    // ketika tombol submit di klik
    event.preventDefault()
    let projectName = document.getElementById("projectname").value
    let startDate = document.getElementById("startdate").value
    let endDate = document.getElementById("enddate").value
    let description = document.getElementById("description").value
    let img = document.getElementById("blog-img").files
    
    let nodejs = document.getElementById("nodejs").checked
    let nextjs = document.getElementById("nextjs").checked
    let reactjs = document.getElementById("reactjs").checked
    let typescript = document.getElementById("typescript").checked

    // ICON TAG
    let icons = []

    icons.push(nodejs)
    icons.push(nextjs)
    icons.push(reactjs)
    icons.push(typescript)
    console.log(icons)

    // IMG BLOB
    img = URL.createObjectURL(img[0])

    // DATE 
    let newStartDate = new Date(startDate);
    let newEndDate = new Date(endDate);
    let duration = newEndDate.getTime() - newStartDate.getTime()
    let months = Math.floor(duration / (1000 * 60 * 60 * 24 * 30)) // milidetik * detik * menit * jam * hari

    // KONDISI
    if (projectName == "") {
        return alert("Project Name Tidak Boleh Kosong")
    } else if (description == "") {
        return alert("Description Name Tidak Boleh Kosong")
    } else if (startDate == "") {
        return alert("Date Tidak Boleh Kosong")
    } else if (endDate == "") {
        return alert("Date Tidak Boleh Kosong")
    }  

    let data = {
        projectName,
        months,
        description,
        img,
        date: new Date(),
        icons
    }

    datas.push(data)
    console.log(datas)
    showData()
}

const showData = () => {
    document.getElementById("contents").innerHTML = ''

    for (i = 0; i < datas.length; i++) {
        document.getElementById("contents").innerHTML += `
        <div class="card-post">
            <img class="post-img" src="${datas[i].img}">
            <div class="title-date">
                <h1 class="title">${datas[i].projectName}</h1>
                <h3 class="date">Durasi : ${blogTime(datas[i].months)} Bulan</h3>
            </div>
            <div class="post-content">
                <p>${datas[i].description}</p>
            </div>
            <div class="tag-tech" id="tag-tech">
                ${datas[i].icons[0] == true ? `<img id="nodejs" src="./assets/icons/nodejs.png" alt="">` : ""}
                ${datas[i].icons[1] == true ? `<img id="nextjs" src="./assets/icons/nextjs.png" alt="">` : ""}
                ${datas[i].icons[2] == true ? `<img id="reactjs" src="./assets/icons/reactjs.png" alt="" style="width:28px;">` : ""}
                ${datas[i].icons[3] == true ? `<img id="typescript" src="./assets/icons/typescript.png" alt="">` : ""}
            </div>
            <div class="post-button">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        </div>
        `
    }
}

const blogTime = (month) => {
    return month
}