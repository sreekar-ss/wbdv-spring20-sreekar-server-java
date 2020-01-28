


(function () {

    let userService = new AdminUserServiceClient()

     function main() {


         let username = "alice"
         let password = "12324355"
         let firstName = "Alice"
         let lastName = "lastName"

         const FACULTY = "FACULTY"
         const STUDENT = "STUDENT"
         const ADMIN = "ADMIN"

         let role = STUDENT


         let alice = {
             username: username,
             password: password,
             firstName: "firstName",
             lastName: "lastName",
             role: STUDENT,

         }

         let $users = [
             alice,
             {username: "xyz", password: "asdmkfs", firstName: "last", lastName: "lastname", role: FACULTY},
             {username: "aasnf", password: "asfkf", firstName: "ksksja", lastName: "asfddf", role: FACULTY}
         ]


         let $userList = $("#userList")

         const deleteUser = (index) => {
             let user = $users[index]
             let userId = user._id

             userService.deleteUser(userId)
                 .then(response => {
                     $users.splice(index, 1)
                     renderUsers()
                 })

         }

         function editUser(index) {
            let user = $users[index]
             let userId = user._id

            userService.findUserById(userId)
                .then(actualUser =>{
                    $usernameFld.val(actualUser.username)
                    $firstNameFld.val(actualUser.firstName)
                    $lastNameFld.val(actualUser.lastName)
                    $roleFld.val(actualUser.role)
                })

         }

         const renderUsers = () => {
             $userList.empty()

             for (let u in $users) {
                 let $user1 = $(
                     `<tr class='wbdv-template wbdv-user wbdv-hidden'>` +
                     `<td class='wbdv-username'>` + $users[u].username + `</td>` +
                     `<td>&nbsp</td> ` +
                     `<td class='wbdv-first-name'>` + $users[u].firstName + `</td>` +
                     `<td class='wbdv-last-name'>` + $users[u].lastName + `</td>` +
                     `<td class='wbdv-role'>` + $users[u].role + `</td>` +
                     `<td class='wbdv-actions'>` +
                     `<span class='float-center'>` +
                     `<button class='wbdv-remove' id="wbdv-remove" style="border: none"><i class='fa-2x fa fa-times'></i></button>` +
                     `<button class="wbdv-edit" style="border: none"> <i id='wbdv-edit' class='fa-2x fa fa-pencil wbdv-edit'></i></button>` +
                     `</span>` +
                     `</td>` +
                     `</tr>
`)

                 $userList.append($user1)
                 let $removeBtn = $(".wbdv-remove")
                 $removeBtn.click(() => deleteUser(u))
                 let $editBtn = $(".wbdv-edit")
                 $editBtn.click(() => editUser(u))

             }
         }
         renderUsers()


         let $usernameFld = $("#usernameFld")
         let $passwordFld = $("#passwordFld")
         let $firstNameFld = $("#firstNameFld")
         let $lastNameFld = $("#lastNameFld")
         let $roleFld = $("#roleFld")

         const createUser = () => {

             const username = $usernameFld.val()
             $usernameFld.val("")
             const password = $passwordFld.val()
             $passwordFld.val("")
             const fistName = $firstNameFld.val()
             $firstNameFld.val("")
             const lastName = $lastNameFld.val()
             $lastNameFld.val("")
             const role = $roleFld.val()
             $roleFld.val("")

             const newUser = {
                 username: username,
                 password: password,
                 firstName: fistName,
                 lastName: lastName,
                 role: role
             }

             userService.createUser(newUser)
                 .then(actualUser => {
                     console.log(actualUser)
                     $users.push(actualUser)
                     renderUsers()
                 })
         }

         let $createBtn = $("#createUser")
         $createBtn.click(createUser)

         //renderUsers()

         userService
             .findAllUsers().then(
                 thusers => {
                     $users = thusers
                     renderUsers()
                 })

     }

     $(main)


 }) ()