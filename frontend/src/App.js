import { useEffect, useState } from "react";
import request from "./request";

import "./App.css"

function App() {
  const [userList, setUserList] = useState();

  function fetchAllUsers() {
    (async () => {
      try {
        const res = await request.fetchAllUsers()
        setUserList(res.data)
      } catch (error) {
        console.log("error");
      }
    })();
  }

  useEffect(() => {
    fetchAllUsers()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        This is a user table
      </header>
      <main>
        <section>
          <h1>The users table</h1>
        </section>
        <section>
          <div className="d-flex flex-row flex-wrap mb-2">
            <div className="col-1">User Id</div>
            <div className="col-3">Name</div>
            <div className="col-2">Email</div>
            <div className="col-2">Phone</div>
            <div className="col-2">Website</div>
          </div>
          {userList && 
            userList.map((user)=>{
              return (
                <div className="d-flex flex-row flex-wrap mb-1" key={user?.id}>
                  <div className="col-1">{user?.id}</div>
                  <div className="col-3">{user?.name}</div>
                  <div className="col-2">{user?.email}</div>
                  <div className="col-2">{user?.phone}</div>
                  <div className="col-2">{user?.website}</div>
                </div>
              )
            }) 
          }
        </section>
      </main>
    </div>
  );
}

export default App;
