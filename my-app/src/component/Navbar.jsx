import BatteryStatusIcon from "../Media/battery_status_icon.png";
import NetworkBarIcon from "../Media/network_bar_icon.png";
import MailIcon from "../Media/mail_icon.png";
import GLogo from "../Media/g_icon.png";
import ComputerIcon from "../Media/computer_icon.png"
import MobileDataIcon from "../Media/mobile_data_icon.png"

function Navbar() {
    return (
        <section>
            <div className="Navbar-main">
                <img src={GLogo} alt="G Logo" />
                <div className="nav-option">
                    <select>
                        <option>English</option>
                        <option>Spanish</option>
                    </select>
                    <a href="">Help</a>
                    <a href="">Login</a>             
                </div>
                <div className="nav">
                    <a href=" "><img src={MailIcon} /></a>
                    <a href=" "><img src={NetworkBarIcon} /></a>
                    <a href=" "><img src={MobileDataIcon} /></a>
                    <a href=" "><img src={ComputerIcon} /></a>
                    <a href=" "><img src={BatteryStatusIcon} /></a>
                </div>
                <div className="nav-links">
                    <a href="">Home</a>
                    <div></div>
                    <a href="">Statistics</a>
                    <div></div>
                    <a href="">SMS</a>
                    <div></div>
                    <a href="">Selfcare/USSD</a>
                    <div></div>
                    <a href="">Settings</a>
                </div>
            </div>
        </section>
    );
}

export default Navbar;