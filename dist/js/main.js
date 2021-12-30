    
    const formList = document.querySelector("#formList")
    const createList = document.querySelector("#create-list")

    createList.addEventListener("click", getData)

     function getData(){
        const data = converToObj(formList)
        const getLocalData = JSON.parse(localStorage.getItem('list')) || []
         getLocalData.push(data)
         localStorage.setItem("list", JSON.stringify(getLocalData))
         showList()
    }

    function converToObj(form){
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())
        return {
            id:generateUUID(),
            ...data
        }
    }

    function showList(){
        const showList = document.querySelector("#show-list")

        const itensFromLocalStorage = JSON.parse(localStorage.getItem('list'))
        itensFromLocalStorage.map((item, index)=>{
            let elementToShow =`
            <div class="list-item">
                <input type="checkbox" name="" id="">
                <div class="list-item info">
                    <h3>${item.title}</h3>
                    <p>${item.time}</p>
                </div>
                <i class="fas fa-arrow-right"></i>
            </div>
            `
            showList.innerHTML += elementToShow
            console.log(item);
        })
    }

    showList()




    
    
