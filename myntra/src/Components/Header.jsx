/*import { BsFillPersonFill } from "react-icons/bs";
import { FaFaceGrinHearts, FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const bag = useSelector((store) => store.bag);

  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">search</span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <BsFillPersonFill />
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          <FaFaceGrinHearts />
          <span className="action_name">Wishlist</span>
        </div>

        <Link className="action_container" to="/bag">
          <FaBagShopping />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
*/
import { BsFillPersonFill } from "react-icons/bs";
import { FaFaceGrinHearts, FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const bag = useSelector((store) => store.bag);

  return (
    <>
      <style>
        {`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 24px;
          background-color: white;
          font-family: 'Segoe UI', sans-serif;
          height: 70px;
          border-bottom: 1px solid #ddd;
        }

        .logo_container img.myntra_home {
          height: 40px;
        }

        .nav_bar {
          display: flex;
          gap: 20px;
          font-weight: 600;
          font-size: 14px;
        }

        .nav_bar a {
          text-decoration: none;
          color: #282c3f;
        }

        .nav_bar sup {
          color: #ff3f6c;
          font-size: 10px;
          font-weight: bold;
          margin-left: 2px;
        }

        .search_bar {
          display: flex;
          align-items: center;
          background-color: #f5f5f6;
          padding: 6px 12px;
          border-radius: 4px;
          flex-grow: 1;
          margin: 0 30px;
          max-width: 400px;
        }

        .search_icon {
          font-size: 20px;
          color: #777;
          margin-right: 8px;
        }

        .search_input {
          border: none;
          outline: none;
          background: transparent;
          width: 100%;
          font-size: 14px;
        }

        .action_bar {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .action_container {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 12px;
          color: #282c3f;
          position: relative;
          text-decoration: none;
        }

        .action_name {
          margin-top: 4px;
        }

        .bag-item-count {
          position: absolute;
          top: -6px;
          right: -10px;
          background-color: #ff3f6c;
          color: white;
          font-size: 10px;
          padding: 2px 6px;
          border-radius: 50%;
          font-weight: bold;
        }

        @media screen and (max-width: 768px) {
          .nav_bar {
            display: none;
          }

          .search_bar {
            margin: 0 10px;
            max-width: 200px;
          }
        }
      `}
      </style>

      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>

        <nav className="nav_bar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">
            Studio <sup>NEW</sup>
          </a>
        </nav>

        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">search</span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>

        <div className="action_bar">
          <div className="action_container">
            <BsFillPersonFill />
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
            <FaFaceGrinHearts />
            <span className="action_name">Wishlist</span>
          </div>

          <Link className="action_container" to="/bag">
            <FaBagShopping />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{bag.length}</span>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;




