const datas = [
    {
        image: "https://telegra.ph/file/de5ea71e2b1a7bd575b20.jpg",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aspernatur quis est iste doloremque quisquam.",
        author: "- Johny",
        rating: 5
    },
    {
        image: "https://telegra.ph/file/1d6b34014e972100d9c81.png",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aspernatur quis est iste doloremque quisquam.",
        author: "- Mia",
        rating: 5
    },
    {
        image: "https://telegra.ph/file/34da9e18176d4ebfbe80e.jpg",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aspernatur quis est iste doloremque quisquam.",
        author: "- Jordy",
        rating: 2
    },
    {
        image: "https://telegra.ph/file/968038a97d66f04dd4c14.png",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aspernatur quis est iste doloremque quisquam.",
        author: "- Google",
        rating: 3
    },
    {
        image: "https://telegra.ph/file/01735daa675d1ff881278.png",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aspernatur quis est iste doloremque quisquam.",
        author: "- Microsoft",
        rating: 3
    },
    {
        image: "https://telegra.ph/file/6a772836ed601e7a4e068.png",
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