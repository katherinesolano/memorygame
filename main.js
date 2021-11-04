document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "squidgame-1",
      img: "images/squidgame-1.png",
    },
    {
      name: "squidgame-2",
      img: "images/squidgame-2.png",
    },
    {
      name: "squidgame-3",
      img: "images/squidgame-3.png",
    },
    {
      name: "squidgame-4",
      img: "images/squidgame-4.png",
    },
    {
      name: "squidgame-5",
      img: "images/squidgame-5.png",
    },
    {
      name: "squidgame-6",
      img: "images/squidgame-6.png",
    },
    {
      name: "squidgame-7",
      img: "images/squidgame-7.png",
    },
    {
      name: "squidgame-8",
      img: "images/squidgame-8.png",
    },
    {
      name: "squidgame-1",
      img: "images/squidgame-1.png",
    },
    {
      name: "squidgame-2",
      img: "images/squidgame-2.png",
    },
    {
      name: "squidgame-3",
      img: "images/squidgame-3.png",
    },
    {
      name: "squidgame-4",
      img: "images/squidgame-4.png",
    },
    {
      name: "squidgame-5",
      img: "images/squidgame-5.png",
    },
    {
      name: "squidgame-6",
      img: "images/squidgame-6.png",
    },
    {
      name: "squidgame-7",
      img: "images/squidgame-7.png",
    },
    {
      name: "squidgame-8",
      img: "images/squidgame-8.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  //music
  var audio = new Audio("music/bg.mp3");
  audio.play();

  //popup
  function togglePopup() {
    document.getElementById("popup").classList.toggle("active");
  }

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.classList.add("imageCard");
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      alert("You have clicked the same image!");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      alert("Sorry, try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = " Congratulations! You finished the game!";
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
