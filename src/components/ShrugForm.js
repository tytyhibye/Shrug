import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { PropTypes } from "prop-types";




function ShrugForm(props) {
  const [price, setPrice] = useState("1");
  const [location, setLocation] = useState("45.523064, -122.676483");
  function handlePriceChange(e) {
    e.preventDefault();
    setPrice(e.target.value);
  }
  function handleLocationChange(e) {
    e.preventDefault();
    setLocation(e.target.value);
  }
  return (
    <div className="fadeIn">
      <Form className="formStyle" onSubmit={(e)=>props.onFormSubmission(e, price, location)}>
        <Form.Group>
          <Form.Label>
            <h4>Hungry huh? Let's find you something to eat</h4>
          </Form.Label>
          <Form.Control onChange={handlePriceChange} className="formDrop" as="select">
            <option value = "1" >Select a Price Range</option>
            <option value = "1" >$</option>
            <option value = "2" >$$</option>
            <option value = "3" >$$$</option>
            <option value = "4" >$$$$</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control onChange={handleLocationChange} className="formDrop" as="select">
            <option value = "45.523064,-122.676483">Select a City</option>
            <option value = "44.058174,-121.315308">Bend, OR</option>
            <option value = "45.523064,-122.676483">Portland, OR</option>
            <option value = "44.9429,-123.0351">Salem, OR</option>
            <option value = "47.608013,-122.335167">Seattle, WA</option>
            <option value = "34.0536909,-118.2427666">Los Angeles, CA</option>
            <option value = "32.7174209,-117.1627714">San Diego, CA</option>
            <option value = "37.7647993,-122.4629897">San Francisco, CA</option>
            <option value = "33.9792,-118.0328">Whittier, CA</option>
            <option value = "33.4484367,-112.0741417">Phoenix, AZ</option>
            <option value = "33.4942189,-111.9260184">Scottsdale, AZ</option>
            <option value = "36.1672559,-115.1485163">Las Vegas, NV</option>
            <option value = "35.3972397,-105.4756569">San Jose, NM</option>
            <option value = "30.2711286,-97.7436995">Austin, TX</option>
            <option value = "32.7762719,-96.7968559">Dallas, TX</option>
            <option value = "29.7589382,-95.3676974">Houston, TX</option>
            <option value = "39.7392364,-104.9848623">Denver, CO</option>
            <option value = "39.9622601,-83.0007065">Columbus, OH</option>
            <option value = "35.2272,-80.843083">Charlotte, NC</option>
            <option value = "36.1622296,-86.7743531">Nashville, TN</option>
            <option value = "41.8755616,-87.6244212">Chicago, IL</option>
            <option value = "42.3602534,-71.0582912">Boston, MA</option>
            <option value = "39.9527237,-75.1635262">Philadelphia, PA</option>
            <option value = "43.1561681,-75.8449946">New York, NY</option>
            <option value = "30.3321838,-81.655651">Jacksonville, FL</option>
            <option value = "21.2793568,-157.8285713">Waikiki, HI</option>

          </Form.Control>
        </Form.Group>
        <br /><br />
        <Button
          className="searchButton"
          variant="outline-info"
          type="submit"
          >
         Feed Me
        </Button>
      </Form>
    </div>
  );
}

ShrugForm.propTypes = {
  onFormSubmission: PropTypes.func,
};

export default ShrugForm;
