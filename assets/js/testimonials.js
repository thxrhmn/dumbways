class Testimonials {
    constructor(image, content, author) {
        this.image = image
        this.content = content
        this.author = author
    }

    html() {
        return `
            <div class="testi-card">
                <div class="image">
                    <img src="${this.image}" alt="" />
                </div>
                <div class="content">
                    <p>
                        "${this.content}"
                    </p>
                </div>
                <div class="footer">
                    <h4>${this.author}</h4>
                </div>
            </div>
        `
    }  
}

class Company extends Testimonials {
    constructor(company, image, content, author) {
        super(image, content, author)
        this.company = company
    }

    getInfo() {
        return this.company
    }
}

let data1 = {
    image: "./assets/images/man1.jpg",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aspernatur quis est iste doloremque quisquam.",
    author: "-Johny"
}

let data2 = {
    image: "./assets/images/mia.png",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aspernatur quis est iste doloremque quisquam.",
    author: "-Mia"
}

let data3 = {
    image: "./assets/images/man22.jpg",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aspernatur quis est iste doloremque quisquam.",
    author: "-Jordy"
}

let data4 = {
    image: "./assets/images/google.webp",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aspernatur quis est iste doloremque quisquam.",
    author: "-Google"
}

let data5 = {
    image: "./assets/images/microsoft.png",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aspernatur quis est iste doloremque quisquam.",
    author: "-Microsoft"
}

let data6 = {
    image: "./assets/images/apple.png",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aspernatur quis est iste doloremque quisquam.",
    author: "-Apple"
}

let datas = [data1, data2, data3, data4, data5, data6]
console.log(datas)

const showTestimoni = () => {
    let testimonials = document.getElementById("testimonials")
    testimonials = ""

    for (let i = 0; i < datas.length; i++) {
        let testimoni = new Testimonials(`${datas[i].image}`, `${datas[i].content}`, `${datas[i].author}`)
        testimonials += testimoni.html()
        document.getElementById("testimonials").innerHTML = testimonials
    }
}

showTestimoni()