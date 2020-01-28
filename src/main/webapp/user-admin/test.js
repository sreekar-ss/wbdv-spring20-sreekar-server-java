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

    let $user = $("<tr> <td>test</td> <td>&nbsp</td> </tr>")

    let $userList = $("#userList")
    $userList.append("<tr> <td>alice</td> <td> FO </td> <td>BS</td> </tr>")

    $userList.append($user)




}




