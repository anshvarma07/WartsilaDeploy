import React,{useState} from "react";
import a from "./Abidjan.JPG"
import "./Card.css"
import Popover from "./Popover";
import { BsPinMapFill } from 'react-icons/bs';
import { FcDocument } from 'react-icons/fc';


export default function Card({ CardData }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };
  return (
    <div className="gridContainer">
      {CardData?.map((data) => (
        <div key={data.Column1} className="card mystyle" >
          <img src={data.Link} alt="" />
          <div className="card-body marbot">
            <h5 className="card-title">{data["Port Name"]} ({data["Country"]})</h5>
            <p className="card-text">
              NTPro {data["NTPro Version"]}
              <br />
              {console.log(data)}
              Area type: {data["Area type"]}
              <br />
              Size(NM): {data["Size in NM"]}
              <br />
              Location Center: {data["Location Center"]}
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-center flex-column"><a href={data.Location} target="_blank" className="">Map View <BsPinMapFill></BsPinMapFill></a> &nbsp;  &nbsp; <a href="/" className="card-link" >
              Request Quote <FcDocument></FcDocument>
            </a><br /><Popover Port={data}/></li>
          </ul>
          <div className="card-body text-center addtoCart">
            <button type="button" class="btn btn-outline-primary martop" onClick={() => addToCart(data)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}