import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Popover.css"; // Create a CSS file for styling the popover
import Ima from "./Abidjan.JPG"

const Popover = ({ Port }) => {
  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    // Attach an event listener to handle clicks outside the popover
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setShowPopover(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const togglePopover = () => {
    setShowPopover((prev) => !prev);
  };

  return (
    <div>
      {/* {console.log("PortIdk")}
      {console.log(Port)}
      {console.log("PortIdk")} */}
      <button
        type="button"
        class="btn btn-outline-primary"
        onClick={togglePopover}
      >
        Detailed Area Info
      </button>
      {showPopover &&
        ReactDOM.createPortal(
          <div ref={popoverRef} className="popover text-center">
          
          <img  className="imgPop" src={Port.Link} alt="" />

            <table className="two-column-table">

              <tbody>
                <tr>
                  <td>Area Name</td>
                  <td>{Port["Commercial name"]}</td>
                </tr>
                <tr>
                  <td>Commercial Name</td>
                  <td>{Port["Port Name"]}</td>
                </tr>
                <tr>
                  <td>NTPro Version</td>
                  <td>{Port["NTPro Version"]}</td>
                </tr>
                <tr>
                  <td>Product Code</td>
                  <td>{Port["Product Code"]}</td>
                </tr>
                <tr>
                  <td>Creation Date & Last Modified Date</td>
                  <td>{Port["Creation date"]} & {Port["Last Modified date"]}</td>
                </tr>
                <tr>
                  <td>Center Location</td>
                  <td>{Port["Country"]}</td>
                </tr>
                <tr>
                  <td>Size(NM)</td>
                  <td>{Port["Size in NM"]}</td>
                </tr>
                <tr>
                  <td>Used Carts,Scale</td>
                  <td>{Port["Used Charts, scale"]}</td>
                </tr>
                <tr>
                  <td>Harbours for Entry Training</td>
                  <td>{Port["Harbors for Entry Training"]}</td>
                </tr>
                <tr>
                  <td>Area Type</td>
                  <td>{Port["Area type"]}</td>
                </tr>
              </tbody>
            </table>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Popover;
