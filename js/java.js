let title = document.getElementById("noteTitle") 
let Notes = document.getElementById("notes") 
let error =  document.getElementById("errorParagraph")  

    //  else{window.location.href = '/'}
    // window.location.assign('/')

//     const userInfo = {
//         "name": "Chibuzor",
//         "age": 20,
//         "sex": "male"
//      }

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
            body: Notes.value
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

// https://fullstackheroes.com/tutorials/javascript/local-storage/