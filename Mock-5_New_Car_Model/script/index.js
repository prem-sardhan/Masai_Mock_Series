let container = document.getElementById("container");

let form = document.getElementById("form");
var editID;
form.addEventListener("submit", editcar);

let cross = document.getElementById("cross");
cross.addEventListener("click", closeModel);

getdata()

// Display function------------------
function Display(data) {
  container.innerHTML = null;

  data.forEach((ele, i) => {
    let card = document.createElement("div");
    card.className = "card";

    let image = document.createElement("img");
    image.src =
      "https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

    let brand = document.createElement("h1");
    brand.innerText = ele.brand;
    brand.className = "brand";

    let description = document.createElement("p");
    description.innerText = ele.Description;

    let price = document.createElement("h4");
    price.innerText = `Price : ${ele.Price}`;
    price.className = "price";

    let type = document.createElement("p");
    type.innerText = `Type : ${ele.type}`;
    type.className = "type";

    let kms = document.createElement("p");
    kms.innerText = `KM : ${ele.kms}`;
    kms.className = "kms";

    let year = document.createElement("p");
    year.innerText = `Year : ${ele.year}`;
    year.className = "year";

    let wishlist=document.createElement("i")
    wishlist.setAttribute("class","fa-solid fa-heart")
    wishlist.addEventListener("click",()=>addTowishlist(ele))


    let deleteicon=document.createElement("i")
    deleteicon.setAttribute("class","fa-solid fa-trash")
    deleteicon.addEventListener("click",()=>deletecar(ele))

    let editicon=document.createElement("i")
    editicon.setAttribute("class","fa-solid fa-pen-to-square")

    editicon.addEventListener("click",()=>EditData(ele.id))

    let childdiv=document.createElement("div")
    childdiv.className="child-div"
    let childdiv2=document.createElement("div")
    childdiv2.className="child-div"

    childdiv2.append(type,kms)
    childdiv.append(wishlist,editIcon,deleteicon)

    card.append(image,brand,description,price,childdiv2,childdiv)
    container.append(card)
  });
}


async function getdata(){

    let sortprice=document.getElementById("price-sort").value
    let sortkms=document.getElementById("km-sort").value
    let filteredBrand=document.getElementById("filter-brand").value

    try{

        fetch(`https://masai-mock.onrender.com/cars?_sort=Price,kms&_order=${sortprice},${sortkms}${filteredBrand && `&brand=${filteredBrand}`}`).then((res)=>res.json()).then((res)=>Display(res))

    }catch(err){
        console.log(err)
    }

}