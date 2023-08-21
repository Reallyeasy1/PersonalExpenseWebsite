import {Login} from './Database.js';


export default async function logins(username, password) {
    var queryauth = {username: username, password: password};
    var testexists = await Login.findOne(queryauth);
    if (testexists != null) {
        console.log(testexists)
        return testexists
    }
    else {
        console.log('success')
        return Error('Username and password does not match.')
    }
}


