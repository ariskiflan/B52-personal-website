class MyTestimonials {
  #image = "";
  #content = "";
  #author = "";

  constructor(image, content, author) {
    this.#image = image;
    this.#content = content;
    this.#author = author;
  }

  set image(item) {
    this.#image = item;
  }

  set content(item) {
    this.#content = item;
  }

  set author(item) {
    this.#author = item;
  }

  get image() {
    return this.#image;
  }

  get content() {
    return this.#content;
  }

  get author() {
    return this.#author;
  }

  html() {
    return `
    <div class="box">
            <a href="detail-project.html">
              <img src="${this.image}" alt="" class="testimonials-img" />
            </a>
            <p class="testimonials-project-description">${this.content}</p>
            <h3 class="testimonials-project-title">- ${this.author}</h3>
          </div>
    `;
  }
}

const myTestimonial1 = new MyTestimonials(
  "https://cdn0-production-images-kly.akamaized.net/VlfIPSwzuGv-jlIDNf6orv3L4WY=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/980310/original/053143900_1441626669-sanji-472600-untitled_35.png",
  "mantab sekali!",
  "Sanji"
);
const myTestimonial2 = new MyTestimonials(
  "https://c4.wallpaperflare.com/wallpaper/605/539/788/one-piece-anime-roronoa-zoro-wallpaper-preview.jpg",
  "Good Game!",
  "Zoro"
);
const myTestimonial3 = new MyTestimonials(
  "https://awsimages.detik.net.id/community/media/visual/2022/04/01/manga-one-piece_43.webp?w=600&q=90",
  "Makasih",
  "Luffy"
);

console.log(myTestimonial1.html());

const testimonials = [myTestimonial1, myTestimonial2, myTestimonial3];
let myTestimonialEl = "";

for (let i = 0; i < testimonials.length; i++) {
  myTestimonialEl += testimonials[i].html();
}

document.querySelector(".testimonials-box").innerHTML = myTestimonialEl;
