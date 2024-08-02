// Accessing all the elements 
let todoName = document.querySelector("#container>input")
let priority = document.querySelector("#container>select")
let addtodoBtn = document.querySelector("#container>button")
let tableBody = document.querySelector("#table-container>tbody")
let data = []

// Adding Event in the Button
addtodoBtn.addEventListener("click", handleclick)

// Adding Functionalities 

function saveData(){
    localStorage.setItem("data", JSON.stringify(data))
}

function loadData(){
    let storedvalue = JSON.parse(localStorage.getItem("data"))
    if(storedvalue){
        data = storedvalue
        showData(data)
    }
}

function handleclick(){
    
    let obj = {
        title : todoName.value ,
        priority : priority.value
    }

    data.push(obj)

    saveData()
    showData(data)
    console.log(data)
}

function showData(arr){
    tableBody.innerHTML = ""
    arr.forEach(function (ele,i){
        let tr = document.createElement("tr")

        let td1 = document.createElement("td")
        td1.innerHTML = `${i+1}`

        let td2 = document.createElement("td")
        td2.innerHTML = ele.title
        td2.style.textAlign = "center"

        let td3 = document.createElement("td")
        td3.innerHTML = ele.priority
        td3.style.textAlign = "Center"

        if(ele.priority == "high"){
            td3.style.backgroundColor = "Yellow"
        }

        let td4 = document.createElement("td")
        let btn = document.createElement("button")
        btn.innerHTML = "Delete"
        btn.addEventListener("click" , function(){
            handleDelete(i)
        })
        td4.append(btn)

        tr.append(td1 , td2 , td3 , td4)
         tableBody.append(tr)
    })
}

function handleDelete(index){
    data.splice(index , 1)
    saveData()
    showData(data)
}

loadData()