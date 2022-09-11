var products = [

    {
        Category: "Wallet",
        Title: "Bifold Wallet",
        leatherType: "Veg-Tanned leather",
        Price: "3000Rs",
        imgurl: "img/bfw.jpeg"

    },
    {

        Category: "Wallet",
        Title: "Long Wallet",
        leatherType: "Oil Pull-up leather",
        Price: "3500Rs",
        imgurl: "img/lw.jpeg"

    }


    ,

    {

        Category: "Bag",
        Title: "File Bag",
        leatherType: "Grain-Real leather",
        Price: "15000Rs",
        imgurl: "img/fb.jpeg"

    },
    {
        Category: "Bag",
        Title: "Satchel Bag",
        leathherType: "Grain-Real leather",
        Price: "21000Rs",
        imgurl: "img/sb.jpeg"
    },

    {
        Category: "Belt",
        Title: "Machine-Waxed Belt",
        Size: "35mm",
        Price: "4000Rs",
        imgurl: "img/b3.jpeg"
    },
    {


        Category: "Belt",

        Title: "Buffalo Leather Belt",
        Size: "40mm",
        Price: "5000Rs",
        imgurl: "img/b1.jpeg"
    },
    {

        Category: "Belt",

        Title: "Italian Imported Belt",
        Size: "40mm",
        Price: "6000Rs",
        imgurl: "img/b2.jpeg"

    }


]


let productType = document.getElementById('productType')
let productCategory = document.getElementById('productCategory')
let remDup
let filteredArr, searchedProd

let ptInd, pcInd;

function fillProductType() {


    let mainCat = products.map(function (value) {
        //console.log(value.Category)
        return value.Category
    })
    //console.log("mainCat here")
    //console.log(mainCat)
    remDup = [...new Set(mainCat)]
    //console.log(remDup)

    for (i = 0; i < remDup.length; i++) {

        productType.innerHTML += `<option>${remDup[i]}</option>`
    }
}
fillProductType();


function fillProductCategory() {

    productCategory.innerHTML = ""
    ptInd = productType.selectedIndex

    productCategory.disabled = false;
    //console.log("ptInd here")

    //console.log(ptInd)
    filteredArr = products.filter(x => x.Category == remDup[ptInd])
    //console.log("filtered Arr here")
    //console.log(filteredArr)
   
    for (i = 0; i < filteredArr.length; i++) {
        //console.log()
        productCategory.innerHTML += `<option>${filteredArr[i].Title}</option>`
    }

    let search = document.getElementById('search')
    search.disabled = false;
}


function searchfunc() {

    let dispResult = document.getElementById("dispResult")
    let imgResult= document.getElementById("imgResult")
    dispResult.innerHTML = ""
    imgResult.innerHTML=""
    //console.log(dispResult)
    pcInd = productCategory.selectedIndex

    searchedProd = filteredArr[pcInd]
    let specsTitle = Object.keys(searchedProd)
    let specsValues = Object.values(searchedProd)
    //console.log(specsTitle, specsValues)

    for (i = 0; i < specsTitle.length-1; i++) {
        //console.log("loop working")
        dispResult.innerHTML += `<p>${specsTitle[i]} : ${specsValues[i]}<br></p>`

    }


    imgResult.innerHTML += `<img src=${specsValues[specsValues.length - 1]} alt="">
            `

}

 