// import {Finance} from 'Database.js';




// //TODO Create binary search algorithm
// async function find_id(username,id){
//     var query = {username: username};
//     var testexists = await Finance.findOne(query);
//     if (testexists != null) {
//         var updatedquery = testexists
//         var actions_old = updatedquery.actions
//         var index = 0
//         while (true) {
//             if (testexists.id==actions_old[index].id){
//                 break
//             }
//             index += 1
            
//         }}
// }
// async function find_id_insert(username,id){
//     var query = {username: username};
//     var testexists = await Finance.findOne(query);
//     if (testexists != null) {
//         var updatedquery = testexists
//         var actions_old = updatedquery.actions
//         var index = 0
//         while (true) {
//             if (testexists.id<=actions_old[index].id){
//                 break
//             }
//             index += 1
            
//         }
//         return [index,actions_old]
//     }
//     return null
// }


// async function insert(username,action,datei,time,amount) {
//     //date is a date object
  
//  var find_id_list = find_id_insert(username,idx);
//  var index = find_id_list[0]
//  var actions_old = find_id_list[1]
//  if (find_id_list==null){
// // TODO complete if null
// var input = {username:username,
//     dates:{},
//     actions:[{time:time,action:action,amount:amount,id:create_date_id()}]
//  }
//  input.dates[datei] = []
//  var result = await Finance.insertOne(input);
//  return 1 
// }

//     var actions_new =  [
//         ... actions_old.slice(0, index),
//         {date:date,time:time,action:action,amount:amount,id:},
//         ...actions_old.slice(index)
//     ];
    
//     var filter = query;

//     var updateDoc = {
//         $set: {
//           action: actions_new
//         },
//       };

    
   
// }

    
//     var result = await Finance.insertOne(input);
//     return 1 

//}    



// async function update(username,id) {
//     var query = {username: username};
//     var testexists = await Finance.findOne(query);
//     if (testexists != null) {

//     }
   
// }

// async function del(username, id) {
//     var query = {username: username};
//     var testexists = await Finance.findOne(query);
//     if (testexists != null) {

//     }
// }