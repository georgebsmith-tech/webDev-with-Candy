import { useState } from "react";

function MyTODO() {
  return (
    <main>
      <div className="color">
        <h1>My To-Do List</h1>
        <section className="insider">
          <div className="text">
          <input type="text"/>
            <button>Add</button>
          
        </div>
        <section className="subject">
          <div className="break">
            I will wake up by 8 in the morning
          </div>
          <div className="break">
            I will practice html for one hour
          </div>
          <div className="break">
            I will give time for two hours css
          </div>
          <div className="break">
            Then i will have my breakfast
          </div>
        </section>


        </section>
        </div>
    </main>
  );
}

export  default MyTODO;