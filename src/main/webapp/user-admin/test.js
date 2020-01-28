jQuery(main)



function main(){

const STUDENT = "STUDENT";

    let alice = {
        username: "username",
        password: "password",
        firstName: "firstName",
        lastName: "lastName",
        role: STUDENT,

    }

    let $users = [
        alice,
    ]


    let $h2 = $("#mainTitle")

    $h2.html("Changed")



    let $userList = $("#userList")
    $userList.append("<tr> <td>alice</td> <td> FO </td> <td>BS</td> </tr>")

    $userList.append($user)

    let $user = $("<tr> <td>test</td> <td>&nbsp</td> </tr>")
    console.log(alice)

    let $userLi = $(`
    <tr> <td>`+ $users[0].username + `</td> <td> this is test 2 </td> <td> im bored </td> </tr>
    `)

    $userList.append($user)

    $userList.append("<tr class='wbdv-template wbdv-user wbdv-hidden'>" +
        " <td class='wbdv-username'>"+$users[0].username + "</td> " +
        "<td> FO </td> " +
        "<td class='wbdv-first-name'>najfdj</td>" +
        "<td class='wbdv-last-name'>last name</td>"+
        "<td class='wbdv-role'>Student</td>" +
        "<td class='wbdv-actions'> " +
        "<span class='float-center'>" +
        "<button class='wbdv-remove' style='border: none'><i id='wbdv-remove' class='fa-2x fa fa-times wbdv-remove'></i></button>" +
        " <i id='wbdv-edit' class='fa-2x fa fa-pencil wbdv-edit'></i>" +
        "</span>" +
        "</td>" +
        " </tr>")


}




