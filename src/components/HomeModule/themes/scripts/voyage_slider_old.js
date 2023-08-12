import { logError } from "../../../../utils/QLogger";

const { gsap, imagesLoaded } = window;
let cardsContainerEl;
let appBgContainerEl;

let cardInfosContainerEl;
let buttons = {
  prev: '',
  second: '',
};

export function initPager() {
  buttons = {
    prev: document.querySelector(".btn--left"),
    second: document.querySelector(".btn--right"),
  };
  cardsContainerEl = document.querySelector(".cards__wrapper");
  appBgContainerEl = document.querySelector(".apps__bg");

  cardInfosContainerEl = document.querySelector(".info__wrapper");

  buttons.second.addEventListener("click", () => swapCards("right"));

  buttons.prev.addEventListener("click", () => swapCards("left"));

}
function swapCards(direction) {
  const firstCardEl = cardsContainerEl.querySelector(".first--card");
  const thirdCardEl = cardsContainerEl.querySelector(".third--card");
  const secondCardEl = cardsContainerEl.querySelector(".second--card");
  const fifthCardEl = cardsContainerEl.querySelector(".fifth--card");
  const fourthCardEl = cardsContainerEl.querySelector(".fourth--card");

  const firstBgImageEl = appBgContainerEl.querySelector(".first--image");
  const thirdBgImageEl = appBgContainerEl.querySelector(".third--image");
  const secondBgImageEl = appBgContainerEl.querySelector(".second--image");
  const fifthBgImageEl = appBgContainerEl.querySelector(".fifth--image");
  const fourthBgImageEl = appBgContainerEl.querySelector(".fourth--image");

  changeInfo(direction);
  swapCardsClass();

  removeCardEvents(firstCardEl);

  function swapCardsClass() {
    firstCardEl.classList.remove("first--card");
    thirdCardEl.classList.remove("third--card");
    secondCardEl.classList.remove("second--card");
    fifthCardEl.classList.remove("fifth--card");
    fourthCardEl.classList.remove("fourth--card");

    firstBgImageEl.classList.remove("first--image");
    thirdBgImageEl.classList.remove("third--image");
    secondBgImageEl.classList.remove("second--image");
    fifthBgImageEl.classList.remove("fifth--image");
    fourthBgImageEl.classList.remove("fourth--image");

    firstCardEl.style.zIndex = "50";
    firstBgImageEl.style.zIndex = "-2";

    if (direction === "right") {
      thirdCardEl.style.zIndex = "20";
      secondCardEl.style.zIndex = "30";
      fifthCardEl.style.zIndex = "10";
      fourthCardEl.style.zIndex = "40";

      secondBgImageEl.style.zIndex = "-1";

      firstCardEl.classList.add("third--card");
      thirdCardEl.classList.add("fifth--card");
      secondCardEl.classList.add("first--card");
      fifthCardEl.classList.add("fourth--card");
      fourthCardEl.classList.add("second--card");

      firstBgImageEl.classList.add("third--image");
      thirdBgImageEl.classList.add("fifth--image");
      secondBgImageEl.classList.add("first--image");
      fifthBgImageEl.classList.add("fourth--image");
      fourthBgImageEl.classList.add("second--image");
    } else if (direction === "left") {
      thirdCardEl.style.zIndex = "30";
      secondCardEl.style.zIndex = "20";
      fifthCardEl.style.zIndex = "40";
      fourthCardEl.style.zIndex = "10";

      thirdBgImageEl.style.zIndex = "-1";

      firstCardEl.classList.add("second--card");
      thirdCardEl.classList.add("first--card");
      secondCardEl.classList.add("fourth--card");
      fifthCardEl.classList.add("third--card");
      fourthCardEl.classList.add("fifth--card");

      firstBgImageEl.classList.add("second--image");
      thirdBgImageEl.classList.add("first--image");
      secondBgImageEl.classList.add("fourth--image");
      fifthBgImageEl.classList.add("third--image");
      fourthBgImageEl.classList.add("fifth--image");
    }
  }
}

function changeInfo(direction) {
  let firstInfoEl = cardInfosContainerEl.querySelector(".first--info");
  let thirdInfoEl = cardInfosContainerEl.querySelector(".third--info");
  let secondInfoEl = cardInfosContainerEl.querySelector(".second--info");
  let fifthInfoEl = cardInfosContainerEl.querySelector(".fifth--info");
  let fourthInfoEl = cardInfosContainerEl.querySelector(".fourth--info");

  try {
    gsap.timeline()
      .to([buttons.prev, buttons.second], {
        duration: 0.2,
        opacity: 0.5,
        pointerEvents: "none",
      })
      .to(
        firstInfoEl.querySelectorAll(".text"),
        {
          duration: 0.4,
          stagger: 0.1,
          translateY: "-120px",
          opacity: 0,
        },
        "-="
      )
      .call(() => {
        swapInfosClass(direction);
      })
      .call(() => initCardEvents())
      .fromTo(
        direction === "right"
          ? secondInfoEl.querySelectorAll(".text")
          :
          thirdInfoEl.querySelectorAll(".text"),
        {
          opacity: 0,
          translateY: "40px",
        },
        {
          duration: 0.4,
          stagger: 0.1,
          translateY: "0px",
          opacity: 1,
        }
      )
      .to([buttons.prev, buttons.second], {
        duration: 0.2,
        opacity: 1,
        pointerEvents: "all",
      });

  } catch (error) {
    logError("Error occurred during animation:", error);
  }
  function swapInfosClass() {
    firstInfoEl.classList.remove("first--info");
    thirdInfoEl.classList.remove("third--info");
    secondInfoEl.classList.remove("second--info");
    fifthInfoEl.classList.remove("fifth--info");
    fourthInfoEl.classList.remove("fourth--info");

    if (direction === "right") {
      firstInfoEl.classList.add("third--info");
      secondInfoEl.classList.add("first--info");
      thirdInfoEl.classList.add("second--info");
      fifthInfoEl.classList.add("fifth--info");
      fourthInfoEl.classList.add("fourth--info");
    } else if (direction === "left") {
      firstInfoEl.classList.add("second--info");
      secondInfoEl.classList.add("third--info");
      thirdInfoEl.classList.add("first--info");
      fifthInfoEl.classList.add("fifth--info");
      fourthInfoEl.classList.add("fourth--info");
    }

  }
}

function updateCard(e) {
  const card = e.target;
  const box = card?.getBoundingClientRect();
  // const box = card.getBoundingClientRect();
  const centerPosition = {
    x: box.left + box.width / 2,
    y: box.top + box.height / 2,
  };
  let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);
  try {
    gsap.set(card, {
      "--first-card-rotation-offset": `${angle}deg`,
    });
    const firstInfoEl = cardInfosContainerEl.querySelector(".first--info");
    gsap.set(firstInfoEl, {
      rotateY: `${angle}deg`,
    });
  } catch (error) {
    logError("Error occurred during animation:", error);
  }
}

function resetCardTransforms(e) {
  const card = e.target;
  const firstInfoEl = cardInfosContainerEl.querySelector(".first--info");
  try {
    gsap.set(card, {
      "--first-card-rotation-offset": 0,
    });
    gsap.set(firstInfoEl, {
      rotateY: 0,
    });
  } catch (error) {
    logError("Error occurred during animation:", error);
  }
}

export function initCardEvents() {
  const firstCardEl = cardsContainerEl.querySelector(".first--card");
  firstCardEl.addEventListener("pointermove", updateCard);
  firstCardEl.addEventListener("pointerout", (e) => {
    resetCardTransforms(e);
  });
}

function removeCardEvents(card) {
  card.removeEventListener("pointermove", updateCard);
}

function init() {
  try {
    let tl = gsap.timeline();

    tl.to(cardsContainerEl.children, {
      delay: 0.15,
      duration: 0.5,
      stagger: {
        ease: "power4.inOut",
        from: "right",
        amount: 0.1,
      },
      "--card-translateY-offset": "0%",
    })
      .to(cardInfosContainerEl.querySelector(".first--info").querySelectorAll(".text"), {
        delay: 0.5,
        duration: 0.4,
        stagger: 0.1,
        opacity: 1,
        translateY: 0,
      })
      .to(
        [buttons.prev, buttons.second],
        {
          duration: 0.4,
          opacity: 1,
          pointerEvents: "all",
        },
        "-=0.4"
      );

  } catch (error) {
    logError("Error occurred during animation:", error);
  }
}

export const waitForImages = () => {
  const images = [...document.querySelectorAll("img")];
  const totalImages = images.length;
  let loadedImages = 0;
  const loaderEl = document.querySelector(".loader span");

  try {

    gsap.set(cardsContainerEl.children, {
      "--card-translateY-offset": "100vh",
    });



    gsap.set(cardInfosContainerEl.querySelector(".first--info").querySelectorAll(".text"), {
      translateY: "40px",
      opacity: 0,
    });

    gsap.set([buttons.prev, buttons.second], {
      pointerEvents: "none",
      opacity: "0",
    });

  } catch (error) {
    logError("Error occurred during animation:", error);
  }

  images.forEach((image) => {
    imagesLoaded(image, (instance) => {
      if (instance.isComplete) {
        loadedImages++;
        let loadProgress = loadedImages / totalImages;
        try {
          gsap.to(loaderEl, {
            duration: 1,
            scaleX: loadProgress,
            backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,
          });
        } catch (error) {
          logError("Error occurred during animation:", error);
        }

        if (totalImages == loadedImages) {

          try {
            gsap.timeline()
              .to(".loading__wrapper", {
                duration: 0.8,
                opacity: 0,
                pointerEvents: "none",
              })
              .call(() => init());

          } catch (error) {
            logError("Error occurred during animation:", error);
          }
        }
      }
    });
  });
};
