var products = [

    {
        itemName: "Wallets",
        itemValue: {

            subItemName: "Bifold",
            subItemValue: {
                title: "Bifold Wallet" ,
                leatherType: "Veg-Tanned leather",
                price: "3000Rs"
            },

            subItemName: "Long",
            subItemValue: {
                title: "Long Wallet",
                leatherType: "Oil Pull-up leather",
                price: "3500Rs"
            }
        }
    }


    ,

    {
        itemName: "Bags",
        itemValue:
        {
            subItemName: "File",
            subItemValue: {
                title: "File Bag",
                leatherType: "Grain-Real leather",
                price: "15000Rs"
                         },
            subItemName: "Satchel",
            subItemValue: {
                title: "Satchel Bag",
                leathherType: "Grain-Real leather",
                price: "21000Rs"
                             }
        }
    }

    //    { Belts: {
    //         Casual: {
    //             title: "Machine-Waxed Belt",
    //             size: "35mm",
    //             price: "4000Rs"
    //         },
    //         Formal: {
    //             title: "Buffalo Leather Belt",
    //             size: "40mm",
    //             price: "5000Rs"
    //         },
    //         ExtraFormal: {
    //             title: "Italian Imported Belt",
    //             size: "40mm",
    //             price: "6000Rs"

    //         }

    //     }}

]



let productType = document.getElementById('productType')
let productCategory = document.getElementById('productCategory')
// let productKeys = Object.keys(products) //walets bags
var productValues
var searchItem
var ptInd, pcInd;

// const  {Bifold,Long}=Wallets;
// console.log(Bifold)
function fillProductType() {
    // console.log(productKeys)
    // productType.innerHTML += `<option id="temp">Product Type</option>`

    for (i = 0; i < products.length; i++) {

        productType.innerHTML += `<option>${products[i].itemName}</option>`
    }
    ptInd = productType.selectedIndex
    console.log(ptInd)
}
fillProductType();



var executed = false
function fillProductCategory() {

    productCategory.innerHTML = ""

    ptInd = productType.selectedIndex
    productValues = Object.keys(Object.values(products)[ptInd]) //{bifold: {…}, long: {…}}
    productCategory.disabled = false;
    console.log(ptInd, productValues)
    // let b= products.filter(function (x,i){
    //    return 
    productCategory.innerHTML += `<option>${products[0].itemValue.subItemName}</option>`

    // })
    for (i = 0; i < products.length; i++) {
        console.log()
        productCategory.innerHTML += `<option>${products[1].itemValue.subItemName}</option>`
    }

    let search = document.getElementById('search')
    search.disabled = false;
    // fillProductType();
    var pcInd = productCategory.selectedIndex
    let productSpecs = Object.values(Object.values(products)[ptInd])[pcInd]
    // console.log(productKeys, productValues, productSpecs)

    let specsTitle = Object.keys(productSpecs)
    let specsValues = Object.values(productSpecs)
    // console.log(specsValues)
    let values = document.getElementById('values')
    for (i = 0; i < specsValues.length; i++) {
        var li = document.createElement('li')
        var lip = document.createElement('p')
        lip.innerHTML = (specsValues[i])
        li.appendChild(lip)
        values.appendChild(li)

    }
    productCategory.innerHTML = ""

}

