


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
                     findAllUsers()
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
                 const testId = "wbdv-remove".concat(u)
                 const editId = "wbdv-edit".concat(u)

                 let $userRowTemplate = $(
                     `<tr class='wbdv-template wbdv-user wbdv-hidden'>` +
                     `<td class='wbdv-username'>` + $users[u].username + `</td>` +
                     `<td>&nbsp</td> ` +
                     `<td class='wbdv-first-name'>` + $users[u].firstName + `</td>` +
                     `<td class='wbdv-last-name'>` + $users[u].lastName + `</td>` +
                     `<td class='wbdv-role'>` + $users[u].role + `</td>` +
                     `<td class='wbdv-actions'>` +
                     `<span class='float-center' style="white-space: nowrap">` +
                     `<button class='wbdv-remove' id="${testId}" style="border: none"><i class='fa-2x fa fa-times'></i></button>` +
                     `<button class="wbdv-edit" id="${editId}" style="border: none"> <i id='wbdv-edit' class='fa-2x fa fa-pencil wbdv-edit'></i></button>` +
                     `</span>` +
                     `</td>` +
                     `</tr>`)


                 $tbody.append($userRowTemplate)
                // $("button").click(function() {
                //     alert(this.id); // or alert($(this).attr('id'));
                // });

                 console.log(testId)
                 let $removeBtn = $("#"+testId)
                 //console.log($removeBtn)
                 $removeBtn.click(() => deleteUser(u))
                 let $editBtn = $("#"+editId)
                 $editBtn.click(() => findUserById(u))

             }
         }
         renderUsers()



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

         const renderUser = (user) => {
             $tbody.empty()
             const singleUserId = "wbdv-remove".concat(0)
             const singleusereditId = "wbdv-edit".concat(0)

             let $userRowTemplate = $(
                 `<tr class='wbdv-template wbdv-user wbdv-hidden'>` +
                 `<td class='wbdv-username'>` + user.username + `</td>` +
                 `<td>&nbsp</td> ` +
                 `<td class='wbdv-first-name'>` + user.firstName + `</td>` +
                 `<td class='wbdv-last-name'>` + user.lastName + `</td>` +
                 `<td class='wbdv-role'>` + user.role + `</td>` +
                 `<td class='wbdv-actions'>` +
                 `<span class='float-center'>` +
                 `<button class='wbdv-remove' id="${testId}" style="border: none"><i class='fa-2x fa fa-times'></i></button>` +
                 `<button class="wbdv-edit" id="${singleusereditId}" style="border: none"> <i id='wbdv-edit' class='fa-2x fa fa-pencil wbdv-edit'></i></button>` +
                 `</span>` +
                 `</td>` +
                 `</tr>
`)
             $tbody.append($userRowTemplate)
             let $removeBtn = $("#"+singleUserId)
             $removeBtn.click(() => deleteUser(0))
             let $editBtn = $("#"+singleusereditId)
             $editBtn.click(() => findUserById(0))

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