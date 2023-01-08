
let data;
function handleform(event){
    event.preventDefault()

    let form =document.querySelector("form")

    let brand =form.Brand.value;
    let type= form. Type.value
    let year=form.Year.value
    let kms=form.km.value
    let description = form.Description.value
    let Price=form.Price.value
    data={brand,type,year,kms,description,Price}
    console.log(data)
    if(brand =="" || type==""|| year==""|| kms=="" || description==""|| Price==""){
        alert("Please fill all data")

    }else{
        postData()

    }
   


    form.Brand.value="";
   form. Type.value=""
  form.Year.value=""
   form.km.value=""
     form.Description.value=""
    form.Price.value=""

}

 function postData(){
    try{
        fetch("https://masai-mock.onrender.com/cars",{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(data)
    })
    .then((res)=>resizeBy.json())
    .then((res)=>{
        window.location.reload()
        console.log(res)
    })
    }catch(err){
        console.log(err)
    }
    
}


