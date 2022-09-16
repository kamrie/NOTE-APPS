let title = document.getElementById("noteTitle") 
let Notes = document.getElementById("notes") 
let error =  document.getElementById("errorParagraph")
const books = document.querySelector(".books")

    //  else{window.location.href = '/'}
    // window.location.assign('/')
    
     
//     const userInfo = {
//         "name": "Chibuzor",
//         "age": 20,
//         "sex": "male"
// //      }

//  localStorage.setItem("user", JSON.stringify(userInfo))

//  const userData = JSON.parse(localStorage.getItem("user"))
// console.log(userData.name)

function createNote(){
    let bookArray = JSON.parse(localStorage.getItem('book')) || [];
    if(title.value === "" || Notes.value === ""){
        error.textContent = "Please fill in all boxes"
    }  else {
        let bookDetails = {
            title: title.value,
            body: Notes.value,
            id: Date.now() + Math.random()
        }
        bookArray.push(bookDetails)
        localStorage.setItem("book", JSON.stringify(bookArray))

        
        window.location.assign('/')
    }
    if(title.value && Notes.value === ""){
        error.textContent = "fill in the notes"
    } 
    if (title.value === "" && Notes.value ){
        error.textContent = "fill in the title"
    }

}


// console.log(document.createElement('div'))

function readFromLocalStorage(){
    let bookArraysss = JSON.parse(localStorage.getItem('book'))
    if(!bookArraysss){
        return
    }else{
        bookArraysss.reverse()
        bookArraysss.forEach((i) => {
            let div = document.createElement('div')
            div.innerHTML = `
                <div>
                    <h4>Title: ${i.title}</h4>
                    <p>Body: ${i.body}</p>
                </div>
                <p onclick="deleteNote(${i.id})" class="del">Del</p>
            `
            div.classList.add("rrrr")
            books.appendChild(div)
        })
    }
}

readFromLocalStorage()

function deleteNote(id){
    let bookArray = JSON.parse(localStorage.getItem('book'));
    let index = bookArray.findIndex((book) => book.id === id);
    bookArray.splice(index, 1);
    localStorage.setItem('book', JSON.stringify(bookArray));
    location.reload()
}

// https://fullstackheroes.com/tutorials/javascript/local-storage/


// let twoSum = (array, target) => {
//     for(let i = 0; i < array.length; i++){
//         for(let j = i + 1; j < array.length; j++){
//             if(array[i] + array[j] === target){
//                 return [i,j]
//             }
//         }
//     }
// }

// let twoSum = (array, target) => {
//     let hashMap = {}
//     for(let i = 0; i < array.length; i++){
//         let value = array[i];
//         let res = target - value;
//         if(hashMap[res] !== undefined){
//             return [hashMap[res], i]
//         }else{
//             hashMap[value] = i
//         }
//     }
// }

// console.log(twoSum([2,11,7,21], 9))