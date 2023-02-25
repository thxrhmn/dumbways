datas = []

const getData = (event) => {
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

    // IMG BLOB
    img = URL.createObjectURL(img[0])

    // KONDISI
    if (projectName == "") {
        return alert("Project Cannot be empty")
    } else if (description == "") {
        return alert("Description Cannot be empty")
    } else if (description.length < 80) {
        return alert("Description must be more than 80 Characters")
    } else if (startDate == "") {
        return alert("Date Cannot be empty")
    } else if (endDate == "") {
        return alert("Date Cannot be empty")
    }  

    let data = {
        projectName,
        description,
        img,
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
                <h3 class="date">Durasi : 2 Bulan</h3>
            </div>
            <div class="post-content">
                <p>${datas[i].description}</p>
            </div>
            <div class="tag-tech" id="tag-tech">
                ${datas[i].icons[0] == true ? `<img class="nodejs">` : ""}
                ${datas[i].icons[1] == true ? `<img class="nextjs">` : ""}
                ${datas[i].icons[2] == true ? `<img class="reactjs">` : ""}
                ${datas[i].icons[3] == true ? `<img class="typescript">` : ""}
            </div>
            <div class="post-button">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        </div>
        `
    }
}

