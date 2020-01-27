

function User(username, password, firstName, lastName, role) {

    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;

    this.setUsername = setUsername;
    this.getUsername = getUsername;
    this.setPassword = setPassword;
    this.getPassword = getPassword;
    this.setFirstname = setFirstname;
    this.getFirstname = getFirstname;
    this.setLastname = setLastname;
    this.getLastname = getLastname;
    this.setRole = setRole;
    this.getRole = getRole;

    function setUsername(username){
        this.username = username;
    }
    function getUsername(username){
        this.username = username;
    }

    function setPassword(password) {
        this.password = password;
    }
    function getPassword(password) {
        this.password = password;
    }

    function setFirstname(firstName) {
        this.firstName = firstName;
    }
    function getFirstname(firstName) {
        this.firstName = firstName;
    }

    function setLastname(lastName) {
        this.lastName = lastName;
    }
    function getLastname(lastName) {
        this.lastName = lastName;
    }

    function setRole(role) {
        this.role = role;
    }
    function getRole(role) {
        this.role = role;
    }
}

