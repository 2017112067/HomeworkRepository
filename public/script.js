fetch("product.json")
                .then(data => {
                    return data.json();
                }).then((completedata) => {
                   let data1 = "";
                   completedata.map((values) => {
                       data1 +=  ` <div class = "card">
                       <h3 class = "title">${values.name}</h3>
                       <img src = ${values.image} alt = ${values.name} class = "images">
                       <p>${values.detail}</p>
                       <p class = "category"${values.category}</p>
                       <p class = "price"${values.price}</p> 
                   </div> `
                   });
                   document.getElementById("cards").innerHTML = data1;
                }).catch((err) => {
                    console.log(err);
                });


