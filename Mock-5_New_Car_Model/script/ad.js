let form = document.getElementById("form");
form.addEventListener("submit", AddNewCar);


function AddNewCar(e) {
  e.preventDefault();

  let brand = document.getElementById("Brand").value;

  let type = document.getElementById("Type").value;

  let year = document.getElementById("Year").value;

  let kms = document.getElementById("km-driven").value;

  let Price = document.getElementById("price").value;

  let Description = document.getElementById("desc").value;

  if(brand && type && year && kms && Price && Description){

    try{
        fetch("https://masai-mock.onrender.com/cars",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({brand,year,Description,kms,Price,type})
        })
        .then((res)=>res.json())
        .then((res)=>alert("Car Added to database"))
        console.log(res)

    }catch(err){
        console.log(err)
    }
  }
  else{
    alert("please fill all the details")
  }

  
}
