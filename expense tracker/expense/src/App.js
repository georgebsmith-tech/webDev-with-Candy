function expense(){
  return(

    <main>
      <div className="tracker">
        <div className="track">

          <h2 className="head">Expense Tracker</h2>


          <div className="balance">
            <h5>
              YOUR BALANCE
            </h5>
            <p>
              N420.00
            </p>
          </div>

            <div className="income">
              <p>
                INCOME<br/>
                N450
              </p>
              <p>
                EXPENSE<br/>
                N30
              </p>
            </div>
          
          <section className="history">
            <h3>
              History
            </h3>

            <div className="items">
              <div className="flower one">
                <p>Flower</p>
                <p>-N20</p>
              </div>

              <div className="flower two">
                <p>Salary</p>
                <p>-N300</p>
              </div>

              <div className="flower three">
                <p>Book</p>
                <p>-N10</p>
              </div>

              <div className="flower four">
                <p>Camera</p>
                <p>-N150</p>
              </div>
            </div>
          </section>


          <section className="add">
            <div className="trans">
              <h3>
                Add New Transaction
              </h3>
              <div className="trance">
                <div className="enter">
                  <p>Text</p>
                  <input type="text" placeholder="Enter text"/>
                </div>
                
                <div className="quantity">
                  <p>Amount</p>
                  <p>
                    (negative - expense, positive - income)
                  </p>
                  <input type="text" placeholder="0"/>
                </div>

                <div className="butt">
                  <button>
                    Add Transaction
                  </button>
                </div>
              </div>
            </div>
          </section>


        </div>
      </div>
    </main>
  );
}

export default expense;
