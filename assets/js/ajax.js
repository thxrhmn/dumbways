const testimonialData = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.npoint.io/b143df67312de0db7033", true);
    
    xhr.onload = () => {
        if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response))
        } else {
            reject(Error(xhr.status))
        }
    }

    xhr.onerror = () => {
        reject("Network Error!!")
    }

    xhr.send()
})

async function getTestimonialData() {
    try {
        const response = await testimonialData
        
        let testimonialHTML = document.getElementById("testimonials")
        testimonialHTML = ""

        response.forEach((item) => {
            testimonialHTML += `
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

        document.getElementById("testimonials").innerHTML = testimonialHTML;

        console.log(response)

    } catch(error) {
        console.log(error)
    }
}

getTestimonialData()


async function getTestimonialFilter(rating) {
    let responFiltered = await testimonialData

    let testimonialHTML = document.getElementById("testimonials")
    testimonialHTML = ""

    let testimonialFiltered = responFiltered.filter((item) => {
        return item.rating === rating
    })

    if (testimonialFiltered != 0) {
        testimonialFiltered.forEach((item) => {
            testimonialHTML += `
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
        
        console.log(testimonialFiltered)
        document.getElementById("testimonials").innerHTML = testimonialHTML

    } else {
        return document.getElementById("testimonials").innerHTML = `<h1>Not Found</h1>`
    }

}
