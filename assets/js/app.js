console.log("hellooooooo js");

const cl = console.log;
// let imgPath= "https://image.tmdb.org/t/p/w1280/";
// let getImage = document.getElementById("img-fluid");
// cl(getImage);
// let heading4 = document.getElementById("heading-4")
// heading4.textContent = ${movieArray.title}

const movieContainer = document.getElementById("movieContainer");

let result = "";

movieArray.forEach(function (movie) {
    result += `
    <div class="col-md-3">
        <div class="card">
            <figure>
            <img class="img-fluid"
                id="img-fluid"
                src="https://image.tmdb.org/t/p/w1280/${movie.poster_path}"
                alt="">
                
            <figcaption>
                <div class="heading">
                    <div class="row">
                        <div class="col-md-10">
                            <h3>
                            ${movie.original_title}
                            </h3>
                        </div>
                        <div class="col-md-2 d-flex align-items-center">
                            <span class="badge badge-warning p-1" id="bgColor"><i class="fa-solid fa-star p-1"></i>${movie.vote_average}</span>
                        </div>
                    </div>
                </div>
                <div class="overview">
                    <h4>
                        <em>
                            overview
                        </em>
                    
                    </h4>
                    <p>
                    ${movie.overview}
                    </p>
                </div>
            </figcaption>
            </figure>
    </div>
</div>
        `;
})

movieContainer.innerHTML = result;

let color=[0,1,2,3,4,5,6,7,8,9,10];

const bgColor=document.getElementById('bgColor');

let result01 ="";

for (let i=0; i < color.length; i++) {
    if(color[i] < 5){
        
    }
}





