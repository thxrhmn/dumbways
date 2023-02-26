let datas = [];

const getData = (event) => {
    event.preventDefault();

    let projectName = document.getElementById("projectname").value;
    let startDate = document.getElementById("startdate").value;
    let endDate = document.getElementById("enddate").value;
    let description = document.getElementById("description").value;
    let img = document.getElementById("blog-img").files;

    let nodejs = document.getElementById("nodejs").checked;
    let nextjs = document.getElementById("nextjs").checked;
    let reactjs = document.getElementById("reactjs").checked;
    let typescript = document.getElementById("typescript").checked;

    let icons = [nodejs, nextjs, reactjs, typescript];

    startDate = new Date(startDate);
    endDate = new Date(endDate);
    let duration = endDate.getTime() - startDate.getTime();
    let days = Math.floor(duration / (1000 * 60 * 60 * 24));
    days += 1

    try {
        img = URL.createObjectURL(img[0]);
    } catch (error) {
        if (error instanceof TypeError) {
            alert("Image Cannot be empty");
        } else {
            throw error;
        }
    }

    if (projectName == "") {
        return alert("Project Cannot be empty");
    } else if (description == "") {
        return alert("Description Cannot be empty");
    } else if (description.length < 80) {
        return alert("Description must be more than 80 Characters");
    } else if (startDate == "") {
        return alert("Date Cannot be empty");
    } else if (endDate == "") {
        return alert("Date Cannot be empty");
    }

    let data = {
        projectName,
        days,
        description,
        img,
        icons,
    };

    datas.push(data);
    console.log(datas);
    showData();
};

const showData = () => {
    let contents = document.getElementById("contents");
    contents.innerHTML = "";

    for (let i = 0; i < datas.length; i++) {
        contents.innerHTML += `
            <div class="card-post">
                <img class="post-img" src="${datas[i].img}">
                <div class="title-date">
                    <h1 class="title">${datas[i].projectName}</h1>
                    <h3 class="date">Duration : ${blogDuration(datas[i].days)}</h3>
                </div>
                <div class="post-content">
                    <p>${datas[i].description}</p>
                </div>
                <div class="tag-tech" id="tag-tech">
                    ${datas[i].icons[0] ? `<img class="nodejs">` : ""}
                    ${datas[i].icons[1] ? `<img class="nextjs">` : ""}
                    ${datas[i].icons[2] ? `<img class="reactjs">` : ""}
                    ${datas[i].icons[3] ? `<img class="typescript">` : ""}
                </div>
                <div class="post-button">
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </div>
            </div>
        `;
    }
};

const blogDuration = (days) => {
    if (days < 30) {
        return Math.floor(days / 7) + " Weeks";
    } else if (days >= 30 && days < 365) {
        return Math.floor(days / 30) + " Months";
    } else if (days >= 365) {
        return Math.floor(days / 365) + " Years";
    }
};