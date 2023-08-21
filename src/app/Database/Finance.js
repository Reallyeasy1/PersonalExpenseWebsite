import {Finance} from 'Database.js';

// To insert into database
// Insert

// Delete 

// Update

// Find ID helper

async function find_username(username){
        var query = {username: username};
        var testexists = await Finance.findOne(query);
        return testexists
        
    }


async function insert(username,action,datei,time,amount) {
    
  
 var find_id_list = find_username(username);
 var input_to_update 
 if (find_id_list==null){

var input = {username:username,
    dates:{},
    actions:[{time:time,action:action,amount:amount}],
    counter_id:1
 }
 var user_id = find_id_list._userid
 var counter_id = find_id_list._counter_id
 var counter_id_str = counter_id.toString()
 var date_str = datei.toString()
 var action_id = user_id  + date_str + counter_id_str
 var date_to_update = find_id_list.dates 
 input.dates[datei] = {time:time,action:action,amount:amount,id:action_id,next:{ }}

 var result = await Finance.insertOne(input);
 
 return result
}
else{
    var inputs = find_id_list.dates[datei]
    if (inputs==null){
        input_to_update = {time:time,action:action,amount:amount,id:action_id,next:{ }}
        
    }
    else{
        search_pointer = inputs
        while(true){
            if (search_pointer.time<=time){
                break
            } 
            search_pointer = search_pointer.next
        }
        temp = search_pointer.next
        search_pointer.next = {time:time,action:action,amount:amount,id:action_id,next:temp}
    }
    date_to_update[datei] = input_to_update
    counter_id += 1
    var updateDoc = {
        $set: {
          dates: date_to_update,
          counter_id:counter_id
        },
      };
    var result = await Finance.updateOne({username:username}, updateDoc)
    return result
}

}    
//updatedquery : {time:time,action:action,amount:amount,id:action_id,next:{}}
async function update(username,datei,action_id,updatedquery){
    var find_id_list = find_username(username);
    var updated_query = updatedquery;
    var head = find_id_list.dates[datei]
    var search_pointer = find_id_list.dates[datei]
    var prev = search_pointer

    while(true){
        if (search_pointer.id == action_id){
            break
        } 
        prev = search_pointer 
        search_pointer = search_pointer.next
    }
    search_pointer = updated_query
    var updateDoc = {
        $set: {
          dates: head,
        },
      };
    
      var result = await Finance.updateOne({username:username}, updateDoc)
    return result

}

async function del(username,datei,actionid){
    var find_id_list = find_username(username);
    var head = find_id_list.dates[datei]
    var search_pointer = find_id_list.dates[datei]
    var prev = search_pointer
    var action_id = actionid
   
    while(true){
        if (search_pointer.id == action_id){
            //TODO: Delete action
            if (search_pointer.next=={} && prev==search_pointer){
                var result = await Finance.remove({username:username})
                return result
            }
            prev.next = search_pointer.next
            break
        } 
        prev = search_pointer 
        search_pointer = search_pointer.next
    }

    var updateDoc = {
        $set: {
          dates: head,
        },
      };
    
      var result = await Finance.updateOne({username:username}, updateDoc)
    return result
}
//TODO Create SEO for find function
async function find(actionid){
    //TODO: Find username based on userid and date
    // var user_id = actionid.slice(0,11)
    // var date_id = actionid.slice(11,16)
    // var find_id_list = find_username(user_id);

    
    
    // var head = find_id_list.dates[datei]
    // var search_pointer = find_id_list.dates[datei]
    // var prev = search_pointer
    // var action_id = actionid
    // while(true){
    //     if (search_pointer.id == action_id){
    //         //TODO: Delete action
    //         if (search_pointer.next=={} && prev==search_pointer){
    //             var result = await Finance.remove({username:username})
    //             return result
    //         }
    //         prev.next = search_pointer.next
    //         break
    //     } 
    //     prev = search_pointer 
    //     search_pointer = search_pointer.next
    // }
}
//updatedquery : {time:time,action:action,amount:amount,id:action_id,next:{}}
async function listall(username){
    var find_id_list = find_username(username);
    var output = []
    var search_pointer = find_id_list.dates[datei]
    while(true){
        output.append({time:time,action:action,amount:amount,id:action_id})
        if (search_pointer.id == action_id){
            break
        } 
        prev = search_pointer 
        search_pointer = search_pointer.next
    }
    return output
}

module.exports = {del,update,insert,listall}