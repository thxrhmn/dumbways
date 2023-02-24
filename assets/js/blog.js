datas = []

const getData = (event) => {
    event.preventDefault()
    let projectname = document.getElementById("projectname").value
    let startdate = document.getElementById("startdate").value
    let enddate = document.getElementById("enddate").value
    let description = document.getElementById("description").value
    let img = document.getElementById("blog-img").files

    let nodejs = document.getElementById("nodejs").checked
    let nextjs = document.getElementById("nextjs").checked
    let reactjs = document.getElementById("reactjs").checked
    let typerscript = document.getElementById("typescript").checked
    
    let newnodejs = nodejs == true ? `<img id="nodejs" src="./assets/icons/nodejs.png" alt="">` : "";
    let newnextjs = nextjs == true ? `<img id="nextjs" src="./assets/icons/nextjs.png" alt="">` : "";
    let newreactjs = reactjs == true ? `<img id="reactjs" src="./assets/icons/reactjs.png" alt="" style="width:28px;">` : "";
    let newtyperscript = typerscript == true ? `<img id="typescript" src="./assets/icons/typescript.png" alt="">` : "";

    img = URL.createObjectURL(img[0])
    
    if (projectname == "") {
        return alert("Project Name tidak Boleh Kosong")
    } else if (description == "") {
        return alert("Description Name tidak Boleh Kosong")
    }

    let data = {
        projectname,
        startdate,
        enddate,
        description,
        img,
        newnodejs,
        newnextjs,
        newreactjs,
        newtyperscript
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
                <h1 class="title">${datas[i].projectname}</h1>
                <h3 class="date">Durasi : 2 bulan</h3>
            </div>
            <div class="post-content">
                <p>${datas[i].description}</p>
            </div>
            <div class="tag-tech" id="tag-tech">
                ${datas[i].newnodejs}
                ${datas[i].newnextjs}
                ${datas[i].newreactjs}
                ${datas[i].newtyperscript}
            </div>
            <div class="post-button">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        </div>
        `
    }
}