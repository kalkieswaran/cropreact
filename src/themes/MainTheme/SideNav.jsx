import { CROP_LOGO_LIGHT } from "../../services/ImageService";
import SideNavigation from "../BusinessTheme/SideNavigation";



const SideNav = ({  }) => {

  
  return (
    <div className="main-side-nav">
        <div className="is-flex is-justify-content-center mt-5" >
            <img className="crops-logo" src={CROP_LOGO_LIGHT} />
        </div>  

        <div className="">
          <SideNavigation />
        </div>
    </div>
  );
};

export default SideNav;
