// Get random mountain facts---------------------------------------------
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

// Add Trail Card--------------------------------------------------------
const addStoryForm = document.getElementById("addStoryForm")
let addTrailName = document.getElementById("trail")

addStoryForm.addEventListener('submit', (event) => {
    event.preventDefault()
    // const {value} = addTrailName
    
    // axios.post('http://localhost:4000/api/trail/', value)
    // .then(res => {
        const trail = document.createElement('li')
        trail.setAttribute('id', 'trailLi')
        const trailCont = document.createElement('span')
        trailCont.setAttribute('id','trailElem')
        trailCont.textContent = addTrailName.value
        
        trailCont.addEventListener('click', skiedTrail)
        
        trail.append(trailCont)
        
        const delBtn = document.createElement("button")
        delBtn.textContent = "X"
        delBtn.addEventListener('click', deleteTrail)
        const list = document.getElementById("trailList")
        trail.append(delBtn)
        
        list.append(trail)
        addTrailName.value = ""
        // console.log(res.data)
    // })
    // .catch(err => console.log(err))
})

const message = document.querySelector('#message')

deleteTrail = (event) => {
    event.target.parentNode.remove()
    // message.textContent = "Trail Removed"
}

skiedTrail = (event) => {
    event.target.classList.toggle("skied")
}