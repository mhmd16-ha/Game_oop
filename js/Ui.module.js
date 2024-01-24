export class Ui{
    displayGame(data){
        let temp=` `;
        for(let x=0;x<data.length;x++){
            temp +=`<div class="col-md-3 ">
            <div data-id="${data[x].id}" class=" border border-1 overflow-hidden rounded item">
            <div class=" p-3 ">
                <img src="${data[x].thumbnail}" class="w-100 rounded"/>
                <div class="d-flex justify-content-between mt-3">
                    <h3 class="text-light fs-6">${data[x].title}</h3>
                    <p class="rounded free text-light p-1">Free</p>
                </div>
                <p class="text-center desc">${data[x].short_description}</p>
            </div>
            <div class="d-flex justify-content-between w-100 border-top p-1 align-items-center "> 
                <p class="rounded type text-light">${data[x].genre}</p>

                <p class="rounded type text-light">${data[x].platform}</p>
            </div>
         </div>
         </div>`
        }
        document.getElementById("GAME").innerHTML=temp;
    }
    displayDetails(result){
        let temp=` `;
        
            temp +=`<div class="col-md-4">
            <img src="${result.thumbnail}" class="w-100" alt="image details" />
         </div>
         <div class="col-md-8">
            <h3>Title: ${result.title}</h3>
            <p>Category: <span class="badge text-bg-info"> ${result.genre}</span> </p>
            <p>Platform: <span class="badge text-bg-info"> ${result.platform}</span> </p>
            <p>Status: <span class="badge text-bg-info"> ${result.status}</span> </p>
            <p class="small">${result.description}</p>
            <a class="btn btn-outline-warning" target="_blank" href="${result.game_url}">Show Game</a>
         </div>
            
            `
        
        document.getElementById("detailsContent").innerHTML=temp;
    }
}