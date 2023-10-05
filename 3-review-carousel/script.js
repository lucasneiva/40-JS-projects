const reviews = [
    {
        id: 0,
        author: "David Jones",
        job: "web designer",
        img: "https://iili.io/J2o2sMx.md.png",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit et nesciunt ipsa illo exercitationem eos. Ipsa iusto ducimus in adipisci voluptatum dicta laborum, quisquam neque quibusdam, provident pariatur necessitatibus aperiam?",
    },
    {
        id: 1,
        author: "Sarah Smith",
        job: "software engineer",
        img: "https://iili.io/J2o2tcB.md.png",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum vero repellendus libero illo, minima ex odio quos! Veniam, distinctio ad! Quas minus odit nam itaque voluptas possimus culpa eveniet numquam!",
    },
    {
        id: 2,
        author: "John Doe",
        job: "graphic designer",
        img: "https://iili.io/J2o2L6Q.md.png",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime exercitationem, ullam natus voluptatem fuga doloremque, porro eligendi harum laudantium dolores? Quae quaerat repellendus neque aspernatur, autem iste provident omnis? Incidunt, velit.",
    },
    {
        id: 3,
        author: "Emily Johnson",
        job: "marketing manager",
        img: "https://iili.io/J2o2ZFV.md.png",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, ut corporis architecto eius distinctio quaerat velit repellat. Sint, repellat vero laboriosam non dolorum temporibus impedit, quod rerum adipisci mollitia quibusdam.",
    },
    {
        id: 4,
        author: "Michael Brown",
        job: "frontend developer",
        img: "https://iili.io/J2o2D8P.md.png",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione vero amet impedit a voluptatibus maiores sint ullam itaque quos, ad expedita possimus animi deleniti ipsa facere quibusdam, magni tenetur velit.",
    },
];

const img = document.getElementById("person-img");

const author = document.getElementById("author");
const review = document.getElementById("info");
const job = document.getElementById("job");

const prevBtn = document.querySelector(".prev-btn");

const nextBtn = document.querySelector(".next-btn");

const randomBtn = document.querySelector(".random-btn");

let current_item = 0;

function setReview(id) {
    img.src = reviews[id].img
    author.innerHTML = reviews[id].author
    job.innerHTML = reviews[id].job
    review.innerHTML = reviews[id].review
}

prevBtn.addEventListener("click", function prevReview() {
    current_item--
    if (current_item < 0) {
        current_item = reviews.length-1
    }
    setReview(current_item)
})

nextBtn.addEventListener("click", function nextReview() {
    current_item++
    if (current_item > reviews.length-1) {
        current_item = 0
    }
    setReview(current_item)
})

randomBtn.addEventListener("click", function () {
    var ant = current_item
    while (current_item == ant) {
        current_item = getRandomInt(0, reviews.length-1)
    }
    setReview(current_item)
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

window.addEventListener("DOMContentLoaded", function () {
    setReview(current_item)
})



