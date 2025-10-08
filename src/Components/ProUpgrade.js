import React from "react";
import "../Assets/Styles/ProUpgrade.css";
import { CircleCheckBig, CircleX, Crown } from "lucide-react";

function ProUpgrade() {
  return (
    <div>
      <div>
        <h1 className="upgrade-header">
          <Crown />
          UPGRADE PRO
        </h1>
        <hr />
      </div>

      <div>
        <h2 className="upgrade-plan">Choose Your Plan</h2>
        <div>
          <div className="d-flex justify-content-center gap-5 mt-5 mb-5">
            <div className="plan1">
              <h3 className="week">weekly plan</h3>
              <p className="cost">
                <CircleX /> $05.99/week
              </p>
              <p className="cost1">
                <CircleCheckBig />
                $02.99/week
              </p>
              <ul className="list">
                <li>Unlimited Articles</li>
                <li>Ad-Free Experience</li>
                <li>Priority Support</li>
                <li>7-Day Free Trial</li>
                <button type="button" class="btn btn-success week-btn">
                  Get Premium
                </button>
              </ul>
            </div>

            <div className="plan3">
              <h3 className="year">Yearly Plan</h3>
              <p className="cost">
                <CircleX />
                $25.99/year
              </p>
              <p className="cost1">
                <CircleCheckBig />
                $19.99/year
              </p>
              <ul className="list">
                <li>Unlimited Articles</li>
                <li>Ad-Free Experience</li>
                <li>Priority Support</li>
                <li>3 Months Free</li>
              </ul>

              <button type="button" class="btn btn-success year-btn">
                Get Premium
              </button>
            </div>
            <div className="plan2">
              <h3 className="month">Monthly Plan</h3>
              <p className="cost">
                {" "}
                <CircleX />
                $12.99/month
              </p>
              <p className="cost1">
                <CircleCheckBig />
                $08.99/month
              </p>
              <ul className="list">
                <li>Unlimited Articles</li>
                <li>Ad-Free Experience</li>
                <li>Priority Support</li>
              </ul>
              <button type="button" class="btn btn-success month-btn">
                Get Premium
              </button>
            </div>
          </div>
          <div>
            <h3 className="upgrade-header1">
              Get Unlimited Access to All Features
            </h3>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default ProUpgrade;
