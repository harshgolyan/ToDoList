let form=document.getElementById("addForm")
let listItems=document.getElementById("items")
let search=document.getElementById("filter")
console.log(filter)

form.addEventListener("submit",function(e)
{
    e.preventDefault()
    let item=document.getElementById("item").value
    let li=document.createElement("li")
    li.appendChild(document.createTextNode(item))
    let btn=document.createElement("button")
    btn.appendChild(document.createTextNode("X"))
    li.appendChild(btn)
    li.className="list-group-item"
    listItems.appendChild(li).value
    btn.className="btn btn-danger btn-sm float-right delete"
    document.getElementById("item").value=''

    
})

listItems.addEventListener("click",function(e)
{
    if(e.target.classList.contains("delete"))
    {
        alert("select OK to delete.")
            listItems.removeChild(e.target.parentElement)
        
        
    }
    else{
        alert("kuch nahi hoga")
    }
    
})

search.addEventListener("keypress",function(e)
{
    let value=e.target.value.toLowerCase()
    let li=document.getElementsByTagName("li")
    Array.from(li).forEach(function(item)
    {
        if(item.firstChild.textContent.toLowerCase().indexOf(value)!=-1){
            item.style.display="block"
        }
        else{
            item.style.display="none"
        }
    })
    
    
       
})

