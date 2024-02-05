import { BUSSINESS_HEAD_TOP_RIGHT_lOGO } from "../../services/ImageService";

const Header = ({ user, handleLogout }) => {
  return (
    <div className='columns smart-head-nav-crop is-vcentered'>
      <div className='column'>
        <i class="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className='column'>
        <span className="icon-text">
          <span className="icon">
            <i className="fa fa-address-book" aria-hidden="true"></i>
          </span>
          <span>BUS0000002</span>
        </span>
      </div>
      <div className='column'>
        <span className="icon-text">
          <span className="icon">
            <i className="fa fa-address-book" aria-hidden="true"></i>
          </span>
          <span>92933.35</span>
        </span>
      </div>
      <div className='column'>
        <span className="icon-text">
          <span className="icon">
            <i className="fa fa-address-book" aria-hidden="true"></i>
          </span>
          <span> D </span>
        </span>
      </div>
      <div className='column'>
        <button class="button is-link is-outlined is-rounded">Home</button>
      </div>
      <div className='column'>
        <button class="button is-link is-outlined is-rounded">Promos</button>
      </div>
      <div className='column'>
        <button class="button is-link is-outlined is-rounded">More</button>
      </div>
      <div className='column'>
        <button class="button is-link is-outlined is-rounded">Help</button>
      </div>
      <div className='column'><i class="fa fa-bell" aria-hidden="true"></i></div>
      <div className='column'><img src={BUSSINESS_HEAD_TOP_RIGHT_lOGO} /></div>
    </div>
  );
};

export default Header;

/*
 <a className="navbar-content smart-pdf-site-title">
          Soft Digi Solutions
        </a>
*/