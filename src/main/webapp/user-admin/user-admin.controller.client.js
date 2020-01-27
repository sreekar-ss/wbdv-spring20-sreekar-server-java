


let username = "alice"
let password = "12324355"
let firstName = "Alice"
let lastName  = "lastName"

const FACULTY = "FACULTY"
const STUDENT = "STUDENT"
const ADMIN = "ADMIN"

let role = STUDENT


let alice ={
    username : username,
    password : password,
    firstName : "askjndf",
    lastName : "adnjggsa",
    role : STUDENT,

}

let $usernameFld = $("#usernameFld")







let $createBtn = $("#createUser")
$createBtn.click(createUser)

const createUser = ()=> {

    const username = $usernameFld.value

    users.push(//newUser)
        renderUsers()
}






const renderUsers = () => {
    $userList.empty()

    for(let u in users){

        let $user = $(`<li>
            ${users[u]}
            </li>
        `)

        $userList.append($user)
    }
}