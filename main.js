const form = document.querySelector('#form')
const taskList = document.querySelector('#taskList')
const clearAllButt = document.querySelector('#clearAll')
const clearDoneButt = document.querySelector('#clearDone')
let numOfTasks = 0


form.addEventListener('submit', addToList)

// input turns to li
function addToList(e){
    const taskInput = document.querySelector('#task') 
    
    e.preventDefault()
    if (taskInput.value != ''){
        const createNewItem = document.createElement('li')
        createNewItem.appendChild(document.createTextNode(`${taskInput.value}`))
        createNewItem.addEventListener('click', done)
        taskList.appendChild(createNewItem)
        taskInput.value = ''
        //add to count
        numOfTasks ++
        document.querySelector('#counter').innerHTML = numOfTasks
        console.log(numOfTasks)
    }
}

//clear all 
clearAllButt.addEventListener('click', clearAll)
function clearAll(){
    while (taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
        numOfTasks = 0
        document.querySelector('#counter').innerHTML = numOfTasks
    }
}

//mark done
function done(evt){
evt.target.classList.toggle('done')
//sub from count
if (numOfTasks > 0 && evt.target.classList.contains('done')){
numOfTasks --
document.querySelector('#counter').innerText = numOfTasks
console.log(numOfTasks)
} else {
    numOfTasks ++
    document.querySelector('#counter').innerText = numOfTasks
}
}
        
//clear done - ! not working 
clearDoneButt.addEventListener('click', clearDone)
function clearDone(){
    const doneThings = document.querySelectorAll('.done')
    console.log(doneThings)
    for ( let i = 0; i < doneThings.length; i++ ){
    doneThings[i].remove()  
    }  
}
// complete shown complete

// clear complete

// clear all 