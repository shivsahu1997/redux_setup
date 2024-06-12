import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchData, setPopup } from "../../redux/action/api";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { allData, popData } = useSelector((state) => state.collection);

  const getAllData = () => {
    if (!allData) {
      dispatch(fetchData());
    }
  };

  const openPopup = () => {
    console.log("step");
    dispatch(setPopup("popup"));
  };
  console.log("popData", popData);
  return (
    <>
      <nav className='nav'>
        <div className='nav-header'>
          <div className='nav-title'>
            <span onClick={() => openPopup()}>ReactSession</span>
          </div>
        </div>
        <div className='nav-links'>
          <ul>
            <li
              onClick={() => {
                getAllData();
              }}>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div> {children}</div>
      {popData === "popup" && <h1>hello this is modal popup</h1>}
    </>
  );
};

export default Layout;
