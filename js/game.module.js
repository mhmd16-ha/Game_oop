import { Ui } from "./Ui.module.js";
import { Details } from "./details.module.js";
export class Game {
  constructor() {
	this.getData("mmorpg");
	document.querySelectorAll(".menu a").forEach((link) => {
	   link.addEventListener("click", (e) => {
		  document.querySelector(".menu .active").classList.remove("active");
		  e.target.classList.add("active");
		  this.getData(e.target.dataset.category);
	   });
	});
    this.ui = new Ui();
  }

  async getData(category) {
    const loading = document.querySelector(".loading");
    loading.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2b49591637msh2ec4771b2b15daep1e1207jsncf836dc1ef6d",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );
    const result = await response.json();
    console.log(result);
    this.ui.displayGame(result);
	this.getId()
    loading.classList.add("d-none");
  }
  getId(){
	document.querySelectorAll(".item").forEach((item) => {
		item.addEventListener("click", () => {
		   const id = item.dataset.id
		   this.getDetails(id)
		});
	 });
  }
   getDetails(GameId) {
	 const details = new Details(GameId);
	 document.querySelector(".Games").classList.add("d-none");
	 document.querySelector(".details").classList.remove("d-none");
  }
}
