import MobileDataIcon from "../Media/mobile_data_icon.png"
import WifiIcon from "../Media/wifi_icon.png"
import GLogo from "../Media/g_icon.png";
import transparentImg from "../Media/transparent_img.jpg"

function SectionTwo() {
    return (
        <section>
            <div className="Div_section">
                <div className="NetworkBar_main">
                    <div className="NetworkBar">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                        <div className="bar4"></div>
                        <div className="bar5"></div>
                    </div>
                    <h4>5G</h4>
                </div>
                <div className="InnerSection_2">
                    <h2>G+</h2>
                    <p>Connection</p>
                    <a href="">Connection Settings</a>
                    <div>
                        <a href=""><img src={MobileDataIcon} /></a>
                        <a href=""><img src={WifiIcon} /></a>
                    </div>
                </div>
                <div className="InnerSection_3">
                    <img src={GLogo} alt="G plus" />
                    <h2>Bolt</h2>
                </div>
            </div>
            <div className="divider"></div>
        </section>
        
    )
}

export default SectionTwo;