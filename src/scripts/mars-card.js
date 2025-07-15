 function Loading(){
           fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=dhmJ54q2NMXqywzeqoIiW1zq6mi4R24ft93Gv24b")
           .then(function(active){
            return active.json()
           })
           .then(function(data){
            data.photos.map(function(item){
                var div=document.createElement("div")
                div.className=` card border border-2 m-2`
                div.style.width="300px"
                div.innerHTML=`
                  <img class="card-img-top" src=${item.img_src} height="150">
                 <div class="card-header">
                    <h3>${item.id}</h3>
                    </div>
                    <div class="card-body">
                        <dl>
                            <dt>camera name</dt>
                            <dd>${item.camera.full_name}</dd>
                            <dt>Rover name</dt>
                            <dd>${item.rover.name}</dd>
                            <dt>Launch Date</dt>
                            <dd>${item.rover.launch_date}</dd>
                            </dl>
                        </div>
                        <div class="card-footer">
                            <a href=${item.img_src} target="_blank"><button class="btn btn-dark w-100">Preview</button></a>
                            </div>
                `
                document.querySelector("section").appendChild(div)
            })
           })
        }