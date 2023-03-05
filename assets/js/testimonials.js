const datas = [
    {
        image: "./assets/images/man1.jpg",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aspernatur quis est iste doloremque quisquam.",
        author: "- Johny",
        rating: 5
    },
    {
        image: "./assets/images/mia.png",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aspernatur quis est iste doloremque quisquam.",
        author: "- Mia",
        rating: 5
    },
    {
        image: "./assets/images/man22.jpg",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aspernatur quis est iste doloremque quisquam.",
        author: "- Jordy",
        rating: 2
    },
    {
        image: "./assets/images/google.webp",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aspernatur quis est iste doloremque quisquam.",
        author: "- Google",
        rating: 3
    },
    {
        image: "./assets/images/microsoft.png",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aspernatur quis est iste doloremque quisquam.",
        author: "- Microsoft",
        rating: 3
    },
    {
        image: "./assets/images/apple.png",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aspernatur quis est iste doloremque quisquam.",
        author: "- Apple",
        rating: 4
    }
]


class Testimonials {
    constructor(image, content, author, rating) {
        this.image = image
        this.content = content
        this.author = author
        this.rating = rating
    }

    getHtml() {
        return `
            <div class="testi-card">
                <div class="image">
                    <img src="${this.image}" alt="" />
                </div>
                <div class="content">
                    <p>
                        <i>"${this.content}"</i>
                    </p>
                </div>
                <div class="footer">
                    <h4>${this.author}</h4>
                    <div class="rating">
                        <h4>${this.rating}<i class="fa-solid fa-star"></i></h4>
                    </div>
                </div>
            </div>
        `
    }  
}


const showTestimonials = () => {
    let testimonials = document.getElementById("testimonials")
    testimonials = ""

    for (let i = 0; i < datas.length; i++) {
        let testimoni = new Testimonials(`${datas[i].image}`, `${datas[i].content}`, `${datas[i].author}`, `${datas[i].rating}`)
        testimonials += testimoni.getHtml()
        document.getElementById("testimonials").innerHTML = testimonials
    }
}

showTestimonials()

const testimoniFilter = (rating) => {
    let testimonialz = document.getElementById("testimonials");
    testimonialz = ""

    let testimoniFiltered = datas.filter((item) => {
        return item.rating === rating
    })

    if (testimoniFiltered != 0) {
        testimoniFiltered.forEach((item) => {
            testimonialz += `
                <div class="testi-card">
                    <div class="image">
                        <img src="${item.image}" alt="" />
                    </div>
                    <div class="content">
                        <p>
                            <i>"${item.content}"</i>
                        </p>
                    </div>
                    <div class="footer">
                        <h4>${item.author}</h4>
                        <div class="rating">
                            <h4>${item.rating}<i class="fa-solid fa-star"></i></h4>
                        </div>
                    </div>
                </div>
            `
        })
        console.log(testimoniFiltered)
        document.getElementById("testimonials").innerHTML = testimonialz
    } else {
        return document.getElementById("testimonials").innerHTML = `<h1>Not Found</h1>`
    }

}