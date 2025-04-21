//selecting Side Navbar,menuIcon

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})


//product search functionality

var productcontainer = document.getElementById("product-container") //product container means anga namma add panniirukura all imagestag
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div") 

    search.addEventListener("keyup",function(){
        var enteredvalue = event.target.value.toUpperCase() //touppercase means including uppercase

        for(count = 0; count<productlist.length; count=count+1) //all h1 tag check pannurathuku;//enteredvalue means input tag enter pannuarthu sollurathu
    {
        var productname = productlist[count].querySelector("h1").textContent //anga coding irukura p tag 

        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            productlist[count].style.display="none"

        }
        else{
            productlist[count].style.display="block"
        }
    }

    })