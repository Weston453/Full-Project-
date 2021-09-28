// Get random mountain facts 
const radBtn = document.getElementById("radBtn")
const mountainContainer = document.getElementById("mountainContainer")

radBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    axios.get('http://localhost:4000/api/mountain/')
        .then(res => {
            mountainContainer.innerHTML = ''
            const mountainElem = document.createElement("p")
            mountainElem.textContent = res.data
            mountainContainer.appendChild(mountainElem)
        })
        .catch(err => console.log(err))
    })
    
    