import React from "react";
class Siva extends React.Component {
   users = [
     {
       id: 1,
       name: "Srinivas Ippili",
       email: "ippilisrinivas715@gmail.com",
       phone: "8886272515"
     },
     {
       id: 2,
       name: "Ramesh",
       email: "info@aspire.com",
       phone: "9708877889"
     },
     {
       id: 3,
       name: "Amit",
       email: "amit@gmail.com",
       phone: "9705697953"
     }
   ];
   render() {
     return (
       <React.Fragment>
         {this.users.map(user => (
           <React.Fragment key={user.id}>
             <h2>{user.name}</h2>
             <p>{user.email}</p>
             <p>{user.phone}</p>
           </React.Fragment>
         ))}
       </React.Fragment>
     );
   }
 }
export default Siva