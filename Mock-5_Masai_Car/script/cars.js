let DataArr = [];
let cont = document.querySelector(".container");

async function fetchData() {
  cont.innerHTML = "Loading.......";

  await fetch("https://masai-mock.onrender.com/cars")
    .then((res) => res.json())
    .then((res) => {
      DataArr = res;
      Display(DataArr)
      console.log(DataArr);
    })
    .catch((err) => {
      cont.innerText = "isError";
      console.log(err);
    });
}
fetchData();



function Display(DataArr) {
  cont.innerText = "";
  if (DataArr?.length == 0) {
    return (container.innerText = "No data Available");
  }

  DataArr.map((el) => {
    let Box = document.createElement("div");

    let mainBox = document.createElement("div");

    let Description = document.createElement("p");
    Description.innerText = "Description:" + el.Description;
    Description.setAttribute("class", "borderfont");

    let Price = document.createElement("p");
    Price.innerText = "Price:" + el.Price;
    Price.setAttribute("class", "price");

    let brand = document.createElement("p");
    brand.innerText = "Brand :" + el.brand;

    let id = document.createElement("p");
    id.innerText = el.id;

    let kms = document.createElement("p");
    kms.innerText = "KMS :" + el.kms;
    kms.setAttribute("class", "kms");
  
    let type= document.createElement("p")
    type.innerText="Type :"+ el.type;

    let year = document.createElement("p")
    year.innerText="Year :" + el.year;

    let img=document.createElement("img")
    img.src="https://purepng.com/public/uploads/large/purepng.com-chevrolet-camaro-black-carcarcarsvehiclevehiclestransport-561521126664dkdbq.png";

    let buttonBox= document.createElement("div")
    buttonBox.setAttribute("class","icon_box")


    let DltBtn=document.createElement("i")
    DltBtn.setAttribute("class","fa-solid fa-trash")
    DltBtn.addEventListener("click",()=>{
        deleteData(el)
    })


    let EdtBtn=document.createElement("i")
    EdtBtn.setAttribute("class","fa-solid fa-pen-to-square")
    EdtBtn.addEventListener("click",()=>{
        Price.setAttribute("contenteditale",true)
        Price.focus()
        Price.addEventListener("keydown",(e)=>{
            if(e.Key==="enter"){
                Price.setAttribute("contenteditable",true)
                let new_price=Price.innerText
                EditData(el,new_price)

            }
        })
       
    })

    let wislstBtn = document.createElement("i")
        wislstBtn.setAttribute("class","fa-solid fa-heart");
        wislstBtn.addEventListener("click",()=>{
            WishlistData(el)
        })



        buttonBox.append(DltBtn,EdtBtn,wislstBtn)
        mainBox.append(Description,type,brand,kms,year,buttonBox)
        Box.append(img,mainBox)
        cont.append(Box)
  });

 

 

}

function deleteData(el){
    let id=el.id;
    fetch(`https://masai-mock.onrender.com/cars/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        },
        
    }).then((res)=>res.json())
    .then((res)=>{console.log(res)
        fetchData()
    })
    .catch((err)=>console.log(err))
    
}


function WishlistData(el){
    fetch("https://masai-mock.onrender.com/wishlisted_car",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(el)
    })
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res)
        alert("Car added to wishlist")
    })
    .catch((err)=>{
        console.log(err)
        alert("car is already added in Wishlist")
    })

}

function EditData(el,new_price){
    let id =el.id
    let Price=""
    for(let i=0;i<new_price;i++){
        if(new_price[i]!=="₹" && new_price[i] !== ","){
            Price+=new_price[i]
        }
    }

    let data={Price}

    fetch(`https://masai-mock.onrender.com/cars/${id}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    .then((res)=> res.json())
    .then((res)=>{
        console.log(res)
        fetchData()
    })
    .catch((err)=>{
        console.log(err)
    });

}



