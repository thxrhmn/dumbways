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
    
    let newNodejs = nodejs == true ? `<img id="nodejs" src="./assets/icons/nodejs.png" alt="">` : "";
    let newNextjs = nextjs == true ? `<img id="nextjs" src="./assets/icons/nextjs.png" alt="">` : "";
    let newReactjs = reactjs == true ? `<img id="reactjs" src="./assets/icons/reactjs.png" alt="" style="width:28px;">` : "";
    let newTypescript = typescript == true ? `<img id="typescript" src="./assets/icons/typescript.png" alt="">` : "";

    img = URL.createObjectURL(img[0])
    
    if (projectName == "") {
        return alert("Project Name tidak Boleh Kosong")
    } else if (description == "") {
        return alert("Description Name tidak Boleh Kosong")
    }

    let data = {
        projectName,
        startDate,
        endDate,
        description,
        img,
        newNodejs,
        newNextjs,
        newReactjs,
        newTypescript
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
                <h3 class="date">Durasi : 2 bulan</h3>
            </div>
            <div class="post-content">
                <p>${datas[i].description}</p>
            </div>
            <div class="tag-tech" id="tag-tech">
                ${datas[i].newNodejs}
                ${datas[i].newNextjs}
                ${datas[i].newReactjs}
                ${datas[i].newTypescript}
            </div>
            <div class="post-button">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        </div>
        `
    }
}