const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb+srv://Reallyeasy:Eatsomemore1!@nodeexpressprojectstut3.xmf4z.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);



// async function run() {
//   // try {
//     const database = client.db('Webapp');
//     // const Login = database.collection('Login Details');
//     // // Query for a movie that has the title 'Back to the Future'
//     // const query = {h: 'hello' };
//     // const movie = await Login.findOne(query);
//     // console.log(movie);
//   // } finally {
//   //   // Ensures that the client will close when you finish/error
//   //   // await client.close();
//   // }
  
// }


// run().catch(console.dir);

try{
  const database = client.db('Webapp');
  const Login = database.collection('Login Details');
  const Finance = database.collection('Personal Finance Tracker');
  module.exports = {Login, Finance}
} catch (error) {
  console.error(error);
  
}
