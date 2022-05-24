import React from "react";
import Ring from "./Ring";

export default function Graph() {
  return (
    <section>
      <Ring />

      <section className="historian">
        <div>
          <h4 className="hiss">Price History</h4>
        </div>
        <div className="secs">
          <div className="update">
            <p className="few">Updated Few seconds ago</p>
            <div className="arrows">
              <div className="arr">
                <img src="btc 1.svg" />
              </div>
              <div className="eight">
                <h4>NGN 28,861,242.54</h4>
              </div>
              <div className=" down">
                <img src="arrow.svg" />
              </div>
            </div>
            <div className="change">
              <p className="deci">4.76%</p>
              <p className="fourth">24h change(&)</p>
            </div>

            <div>
              <img src="graphical.svg"></img>
            </div>
          </div>
          {/* <p>24h change(&)</p> */}
        </div>

        <div className="help">
          <div className="placetwo">
            <div>
              <img src="chart.svg" />
            </div>
            <div>
              <p className="passive">Earn Passive Income on Roqqu</p>
              <div className="refer">
                <p>
                  Refer your friends and earn 0.5% on all their transactions
                  when they sign up using your referral link. Click here to get
                  your link.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
