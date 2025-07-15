 function CategoryName(){
        fetch("https://fakestoreapi.com/products/categories")
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            data.unshift("All")
            data.map(function(category){
                var option=document.createElement("option")
                option.text=category.toUpperCase()
                option.value=category
                document.getElementById("selectCategory").appendChild(option)
            })
        })
       }

       function Products(url){
        document.querySelector("main").innerHTML=""
        fetch(url)
        .then(function(response){
            return response.json()
        })
        .then(function(products){
            products.map(function(product){
                var div=document.createElement("div")
                div.className="card p-2 m-3"
                div.style.width="250px"
                div.innerHTML=`
                <img class="card-img-top" src=${product.image} height="200">
                <div class="card-header overflow-auto" style="height:100px;">
                    ${product.title}
                    </div>
                <div class="card-body">
                    <dl style="display:grid;grid-template-columns:6fr 6fr;">
                    <dt>Price :</dt>
                    <dd>${product.price.toLocaleString("en-in",{style:"currency",currency:"INR"})}</dd>
                    <dt>Rating :</dt>
                    <dd>${product.rating.rate} <span class="bi bi-star-fill text-success"></span></dd>
                    <dt>Count :</dt>
                    <dd><span class="bi bi-person-fill text-secondary"></span> ${product.rating.count}</dd>     
                    </dl>
                    </div>
                <div class="card-footer">
                    <button value=${product.id} onclick="additems(this.value)" class="bi bi-cart4 btn btn-warning w-100">Add to cart</button>
                    </div>
                `
                document.querySelector("main").appendChild(div)
            })
        })
       }

       function Loading(){
        CategoryName()
        Products("https://fakestoreapi.com/products")
       }
       function CategoryChange(){
        var category=document.getElementById("selectCategory").value
        if(category==="All"){
            Products("https://fakestoreapi.com/products")
        }else{
            Products(`https://fakestoreapi.com/products/category/${category}`)
        }
       }
       var mycart=[]
       function cartsymbol(){
        document.getElementById("badge").innerHTML=mycart.length
       }
       function additems(id){
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(function(response){
            return response.json()
        })
        .then(function(product){
            mycart.push(product)
            alert(`added an item`)
            cartsymbol()
        })
       }
        var total=0
       function showcartitems(){
       
        document.querySelector("tbody").innerHTML=""
        
        mycart.map(function(product){
            var tr=document.createElement("tr")
                var tdtitle=document.createElement("td")
                var tdpreview=document.createElement("td")
                var tdprice=document.createElement("td")

                tdtitle.innerHTML=product.title
                tdpreview.innerHTML=`<img src=${product.image} height="50" width="50">`
                tdprice.innerHTML=product.price

                tr.appendChild(tdtitle)
                tr.appendChild(tdpreview)
                tr.appendChild(tdprice)
                document.querySelector("tbody").appendChild(tr)
           })
           for(var item of mycart){
            total += item.price
           }
           document.getElementById("price").innerHTML=`${total}`
       }