window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 100) {
    navbar.classList.add("hide-nav");
  } else {
    navbar.classList.remove("hide-nav");
  }
});
  const services = {
    apartments: {
      title: "SEO Analysis & Daily Reports",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore similique aspernatur porro magni blanditiis explicabo cumque.",
      image: "imeges/travling.jpg"
    },
    food: {
      title: "Healthy Food & Life",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Food & Life service details.",
      image: "imeges/food.jpg"
    },
    cars: {
      title: "Car Research & Transport",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cars service details.",
      image: "imeges/car.jpg"
    },
    shopping: {
      title: "Online Shopping",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Shopping service details.",
      image: "imeges/shopping.jpg"
    },
    travel: {
      title: "Traveling & Tours",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Traveling service details.",
      image: "imeges/travling.jpg"
    }
  };

  const serviceCards = document.querySelectorAll(".service-card");
  const titleEl = document.getElementById("service-title");
  const descEl = document.getElementById("service-description");
  const imgEl = document.getElementById("service-image");

  serviceCards.forEach(card => {
    card.addEventListener("click", () => {
      serviceCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");

      const key = card.getAttribute("data-service");
      const data = services[key];

      titleEl.textContent = data.title;
      descEl.textContent = data.description;
      imgEl.src = data.image;
    });
  });

  const slider = document.querySelector(".project-grid");
const cards = document.querySelectorAll(".project-card");

const step = cards[0].offsetWidth + 20;
let index = 0;

setInterval(() => {
    index++;

    slider.scrollTo({
        left: index * step,
        behavior: "smooth"
    });

    if (index === 6) {
        setTimeout(() => {
            slider.scrollTo({
                left: 0,
                behavior: "auto"
            });
            index = 0;
        }, 500);
    }
}, 2000);
//api//
async function getUserData(id) {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
}

async function getPosts(id) {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching post:", error);
        throw error;
    }
}

async function getComments(id) {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}/comments`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching comments:", error);
        throw error;
    }
}

async function fetchData() {
    console.log("Button clicked");
    try {
        const user = await getUserData(1);

        const post = await getPosts(user.id);

        const comments = await getComments(post.id);

        mappedFun(comments);

    } catch (err) {
        console.error("Error:", err);
    }
}

function mappedFun(data) {
     console.log("Comments Data:", data);
    const titles = document.querySelectorAll(".project-title");
    const descs = document.querySelectorAll(".project-desc");

    data.forEach((item, index) => {
        if (titles[index]) {
            titles[index].textContent = item.name;
        }

        if (descs[index]) {
            descs[index].textContent = item.email;
        }
    });
}

document
    .getElementById("loadProjectsBtn")
    .addEventListener("click", fetchData);
    //animation//
    window.addEventListener("DOMContentLoaded", () => {

  const animatedElements = document.querySelectorAll(
    ".hero-text, .hero-image, .about-text, .about-image, .service-card, .project-card, .blog-featured, .blog-card"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        setTimeout(() => {
          entry.target.classList.add("show-animation");
        }, 150);

      }

    });
  }, {
    threshold: 0.15
  });

  animatedElements.forEach((el) => observer.observe(el));

});