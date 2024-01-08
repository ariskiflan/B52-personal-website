////////////// OOP CONCEPT //////////////
// class MyTestimonials {
//   #image = "";
//   #content = "";
//   #author = "";

//   constructor(image, content, author) {
//     this.#image = image;
//     this.#content = content;
//     this.#author = author;
//   }

//   html() {
//     return `
//     <div class="box">
//             <a href="detail-project.html">
//               <img src="${this.#image}" alt="" class="testimonials-img" />
//             </a>
//             <p class="testimonials-project-description">${this.#content}</p>
//             <h3 class="testimonials-project-title">- ${this.#author}</h3>
//           </div>
//     `;
//   }
// }

// const myTestimonial1 = new MyTestimonials(
//   "https://cdn0-production-images-kly.akamaized.net/VlfIPSwzuGv-jlIDNf6orv3L4WY=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/980310/original/053143900_1441626669-sanji-472600-untitled_35.png",
//   "mantab sekali!",
//   "Sanji"
// );
// const myTestimonial2 = new MyTestimonials(
//   "https://c4.wallpaperflare.com/wallpaper/605/539/788/one-piece-anime-roronoa-zoro-wallpaper-preview.jpg",
//   "Good Game!",
//   "Zoro"
// );
// const myTestimonial3 = new MyTestimonials(
//   "https://awsimages.detik.net.id/community/media/visual/2022/04/01/manga-one-piece_43.webp?w=600&q=90",
//   "Makasih",
//   "Luffy"
// );

// console.log(myTestimonial1.html());

// const testimonials = [myTestimonial1, myTestimonial2, myTestimonial3];
// let myTestimonialEl = "";

// for (let i = 0; i < testimonials.length; i++) {
//   myTestimonialEl += testimonials[i].html();
// }

// document.querySelector(".testimonials-box").innerHTML = myTestimonialEl;

////////////// HOF //////////////
const testimonials = [
  {
    image:
      "https://awsimages.detik.net.id/community/media/visual/2022/04/01/manga-one-piece_43.webp?w=600&q=90",
    content: "Makasih",
    author: "Luffy",
    rating: 1,
  },
  {
    image:
      "https://c4.wallpaperflare.com/wallpaper/605/539/788/one-piece-anime-roronoa-zoro-wallpaper-preview.jpg",
    content: "Good Game!",
    author: "Zoro",
    rating: 2,
  },
  {
    image:
      "https://cdn0-production-images-kly.akamaized.net/VlfIPSwzuGv-jlIDNf6orv3L4WY=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/980310/original/053143900_1441626669-sanji-472600-untitled_35.png",
    content: "mantab sekali!",
    author: "Sanji",
    rating: 2,
  },
  {
    image:
      "https://cdn0-production-images-kly.akamaized.net/VlfIPSwzuGv-jlIDNf6orv3L4WY=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/980310/original/053143900_1441626669-sanji-472600-untitled_35.png",
    content: "mantab sekali!",
    author: "Sanji",
    rating: 4,
  },
  {
    image:
      "https://cdn0-production-images-kly.akamaized.net/VlfIPSwzuGv-jlIDNf6orv3L4WY=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/980310/original/053143900_1441626669-sanji-472600-untitled_35.png",
    content: "mantab sekali!",
    author: "Sanji",
    rating: 5,
  },
];

const ratingBtnAll = document.querySelector(".rating-btn-el");

const allTestimonials = function () {
  const myTestimonialsEL = testimonials.map((item) => {
    return `
    <div class="box">
    <a href="detail-project.html">
      <img src="${item.image}" alt="" class="testimonials-img" />
    </a>
    <p class="testimonials-project-description">${item.content}</p>
    <h3 class="testimonials-project-title">- ${item.author}</h3>
    <p class="testimonials-project-rating">
      ${item.rating}<i class="ri-star-fill"></i>
    </p>
  </div>
    
         `;
  });
  document.querySelector(".testimonials-box").innerHTML =
    myTestimonialsEL.join(" ");
};
allTestimonials();
ratingBtnAll.addEventListener("click", allTestimonials);

function filterTestimonials(rating) {
  const filteredTestimonial = testimonials
    .filter((item) => item.rating === rating)
    .map((item) => {
      return `
      <div class="box">
      <a href="detail-project.html">
        <img src="${item.image}" alt="" class="testimonials-img" />
      </a>
      <p class="testimonials-project-description">${item.content}</p>
      <h3 class="testimonials-project-title">- ${item.author}</h3>
      <p class="testimonials-project-rating">
        ${item.rating}<i class="ri-star-fill"></i>
      </p>
    </div>
         `;
    });

  document.querySelector(".testimonials-box").innerHTML =
    filteredTestimonial.join(" ");
}
