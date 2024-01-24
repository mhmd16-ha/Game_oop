import { Ui } from "./Ui.module.js";

export class Details{
    constructor(id){
        this.ui=new Ui;
        document.getElementById("btnClose").addEventListener("click", () => {
            document.querySelector(".Games").classList.remove("d-none");
            document.querySelector(".details").classList.add("d-none");
            });
            this.getDetails(id);

    }
    async getDetails(id) {
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2b49591637msh2ec4771b2b15daep1e1207jsncf836dc1ef6d',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
    
        const response = await fetch(
          `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
          options
        );
        const result = await response.json();
        console.log(result);
        this.ui.displayDetails(result);
        loading.classList.add("d-none");
      }
}