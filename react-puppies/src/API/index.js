export default async function fetchAllPuppies() {
     try {
          const response = await fetch(
               "https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/players"
          );
          const result = await response.json();
          // console.log(result.data.players);
          return result.data.players;
     } catch (error) {
          console.error(error);
     }
}
//irl name this services, thunks, etc. - this is the clearinghouse for adjusting all the API calls




// export default async function fetchAllPuppies() {
//     try {
//          const response = await fetch(
//               "https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/players"
//          );
//          const result = await response.json();
//          console.log(result.data.players);
//          return result;
//     } catch (error) {
//          console.error(error);
//     }
// }
//irl name this services, thunks, etc. - this is the clearinghouse for adjusting all the API calls