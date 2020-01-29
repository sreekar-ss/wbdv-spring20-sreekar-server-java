


(function () {

    let userService = new AdminUserServiceClient()

     function main() {

         let $users = []

         let $usernameFld = $("#usernameFld")
         let $passwordFld = $("#passwordFld")
         let $firstNameFld = $("#firstNameFld")
         let $lastNameFld = $("#lastNameFld")
         let $roleFld = $("#roleFld")

         let $tbody = $("#userList")

         let $createBtn = $("#createUser")
         let $updateBtn = $("#updateUser")

         const deleteUser = (index) => {
             let user = $users[index]
             let userId = user._id

             userService.deleteUser(userId)
                 .then(response => {
                     $users.splice(index, 1)
                     renderUsers()
                 })

         }

         let currentUserIndex = -1
         function findUserById(index) {
             currentUserIndex = index
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

         const updateUser = () => {
             const updatedUser = {
                 username: $usernameFld.val(),
                 password: $passwordFld.val(),
                 firstName: $firstNameFld.val(),
                 lastName: $lastNameFld.val(),
                 role: $roleFld.val()
             }
             $usernameFld.val("")
             $passwordFld.val("")
             $firstNameFld.val("")
             $lastNameFld.val("")
             $roleFld.val("")
             updatedUser._id = $users[currentUserIndex]._id
             userService.updateUser(updatedUser._id, updatedUser)
                 .then(actualUser => {
                     console.log(actualUser)
                     //$users.push(actualUser)
                     //renderUsers()
                     findAllUsers()
                 })
         }

         const renderUsers = () => {
             $tbody.empty()

             for (let u in $users) {
                 let $userRowTemplate = $(
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

                 $tbody.append($userRowTemplate)
                 let $removeBtn = $(".wbdv-remove")
                 $removeBtn.click(() => deleteUser(0))
                 let $editBtn = $(".wbdv-edit")
                 $editBtn.click(() => findUserbyId(0))

             }
         }
         renderUsers()


         const renderUser = (user) => {
             $tbody.empty()
             let $userRowTemplate = $(
                 `<tr class='wbdv-template wbdv-user wbdv-hidden'>` +
                 `<td class='wbdv-username'>` + user.username + `</td>` +
                 `<td>&nbsp</td> ` +
                 `<td class='wbdv-first-name'>` + user.firstName + `</td>` +
                 `<td class='wbdv-last-name'>` + user.lastName + `</td>` +
                 `<td class='wbdv-role'>` + user.role + `</td>` +
                 `<td class='wbdv-actions'>` +
                 `<span class='float-center'>` +
                 `<button class='wbdv-remove' id="wbdv-remove" style="border: none"><i class='fa-2x fa fa-times'></i></button>` +
                 `<button class="wbdv-edit" style="border: none"> <i id='wbdv-edit' class='fa-2x fa fa-pencil wbdv-edit'></i></button>` +
                 `</span>` +
                 `</td>` +
                 `</tr>
`)
             $tbody.append($userRowTemplate)
             let $removeBtn = $(".wbdv-remove")
             $removeBtn.click(() => deleteUser(user))
             let $editBtn = $(".wbdv-edit")
             $editBtn.click(() => findUserbyId(user))

         }

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



         function findAllUsers() {
             userService
                 .findAllUsers()
                 .then(
                     thusers => {
                         $users = thusers
                         renderUsers()
                     })
         }

         findAllUsers()


         $createBtn.click(createUser)
         $updateBtn.click(updateUser)

  }



     $(main)


 }) ()