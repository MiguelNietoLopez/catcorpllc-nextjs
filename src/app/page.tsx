import Image from "next/image";
import businessCatInOffice from "../../public/images/business-cat-in-office.jpg";
import dataGraphImg from "../../public/images/13122-01-data-driven-infographic-16x9-1.jpg";
import happyCustomerThumbsUp from "../../public/images/srdffd.png";
export default function  IndexApp() {
            return(
            <main id="indexApp">
                <div id="centerContent">
                    <h1 id="title">Cat Corp LLC</h1>
                    <h2 id="subtitle">Number One Cat based Software Firm</h2>
                    <Image id="img1" className="img" alt="Cat working on Computer"  src={businessCatInOffice}></Image>
                    <p className="centerText imgDesc" id="main">We provide many different services and can help you.</p>
                    <p className="centerText imgTitle" id="stats">Our customers see an average of:</p>
                    <Image id="img2" className="img"alt="Graph. The Information of the Graph is described as"  src={dataGraphImg}></Image>
                    <p className="centerText imgDesc" id="stats2">5000x more purchases, 90000x more return customers, and an average life expectancy of 35000 years</p>
                    <p className="centerText imgTitle" id="thumbsuptext">Contact Us Today for a Free quote</p>
                    <Image id="img4"  className="img" src={happyCustomerThumbsUp} alt="Happy Customers Giving A Thumbs Up"></Image>
                </div>
            </main>
        )

}
