jQuery(main)

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
    ]


    let $userList = $("#userList")

    let $user = $("<tr> <td>test</td> <td>&nbsp</td> </tr>")
    console.log(alice)

    $userList.append($user)

    $userList.append("<tr class='wbdv-template wbdv-user wbdv-hidden'>" +
        " <td class='wbdv-username'>"+$users[0].username + "</td> " +
        "<td> FO </td> " +
        "<td class='wbdv-first-name'>najfdj</td>" +
        "<td class='wbdv-last-name'>last name</td>"+
        "<td class='wbdv-role'>Student</td>" +
        "<td class='wbdv-actions'> " +
            "<span class='float-center'>" +
                " <i id='wbdv-remove' class='fa-2x fa fa-times wbdv-remove'></i>" +
                " <i id='wbdv-edit' class='fa-2x fa fa-pencil wbdv-edit'></i>" +
            "</span>" +
        "</td>" +
        " </tr>")


    let $usernameFld = $("#usernameFld")
    let $passwordFld = $("#passwordFld")
    let $firstNameFld = $("#firstNameFld")
    let $lastNameFld = $("#lastNameFld")
    let $roleFld = $("#roleFld")


    let $createBtn = $("#createUser")
 $createBtn.click(createUser)

    const createUser = () => {

        const username = $usernameFld.val()
        const password = $passwordFld.val()
        const fistName = $firstNameFld.val()
        const lastName = $lastNameFld.val()
        const role = $roleFld.val()

        const newUser = {
            username: username,
            password: password,
            firstName: fistName,
            lastName: lastName,
            role: role
        }

        $users.push(newUser)
        renderUsers()
    }


    const renderUsers = () => {
        $userList.empty()

        for (let u in $users) {
            let $user = $(`
        "<tr class='wbdv-template wbdv-user wbdv-hidden'>" +
        " <td class='wbdv-username'>" + $users[u].username} + "</td> " +
        "<td>&nbsp</td> " +
        "<td class='wbdv-first-name'>" + $users[u].firstName + "</td>" +
        "<td class='wbdv-last-name'>" + $users[u].lastname + "</td>"+
        "<td class='wbdv-role'>"+ $users[u].role + "</td>" +
        "<td class='wbdv-actions'> " +
            "<span class='float-center'>" +
                " <i id='wbdv-remove' class='fa-2x fa fa-times wbdv-remove'></i>" +
                " <i id='wbdv-edit' class='fa-2x fa fa-pencil wbdv-edit'></i>" +
            "</span>" +
        "</td>" +
        " </tr>"
        `)

            $userList.append($user)
        }
    }


}