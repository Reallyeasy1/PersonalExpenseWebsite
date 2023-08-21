import {Login} from './Database.js';

export default async function signup(username, password) {
    
  var queryauth = {username: username};
  var query = {username: username, password: password};
var testexists = await Login.findOne(queryauth);
if (testexists != null) {
    return Error('Username already exists, please try another one.')
}
else {
    var result = await Login.insertOne(query);
    return result
}

}