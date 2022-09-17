import React from "react";
import { Country, State } from "country-state-city";

const Shipping = () => {
  console.log(State.getAllStates("PK"));
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label htmlFor="h-no">House No.</label>
            <input type="text" placeholder="Enter House No." />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <select>
              <option value="">Select Country</option>
              {Country &&
                Country.getAllCountries().map((country) => (
                  <option key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label htmlFor="state">State</label>
            <select>
              <option value="">Select state</option>
              {State &&
                State.getAllStates("IN").map((state) => (
                  <option value={state.isoCode}>{state.name}</option>
                ))}
            </select>
          </div>
          <div>
            <label htmlFor="pincode">Pin Code</label>
            <input type="text" placeholder="Enter Pin Code" />
          </div>
          <div>
            <label htmlFor="mobile">Mobile No</label>
            <input type="text" placeholder="Enter Mobile No" />
          </div>
          <button type="submit">Confirm Order</button>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
