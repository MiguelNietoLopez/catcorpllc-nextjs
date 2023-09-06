import Image from "next/image";
import businessCatInOffice from "../../public/images/business-cat-in-office.jpg";
import dataGraphImg from "../../public/images/13122-01-data-driven-infographic-16x9-1.jpg";
import happyCustomerThumbsUp from "../../public/images/srdffd.png";
import Silly from "../../public/images/Silly.jpg";
export default function  IndexApp() {
            return(
            <main id="indexApp">
                <div id="centerContent" className="flex flex-1 mb-10 items-center space-y-4 flex-nowrap flex-col">
                    <h1 id="title" className="text-8xl">Cat Corp LLC</h1>
                    <h2 id="subtitle" className="text-2xl">Number One Cat based Software Firm</h2>
                    <Image id="img1" className="img w-full h-[60rem]" alt="Cat working on Computer" src={businessCatInOffice}></Image>
                    <p className="centerText imgDesc text-4xl" id="main">We provide many different services and can help you.</p>
                    <p className="centerText imgTitle text-6xl" id="stats">Our customers see an average of:</p>
                    <Image id="img2" className="img w-full h-[60rem]"alt="Graph. The Information of the Graph is described as"  src={dataGraphImg}></Image>
                    <p className="centerText imgDesc text-4xl" id="stats2">5000x more purchases, 90000x more return customers, and an average life expectancy of 35000 years</p>
                    <p className="centerText imgTitle text-6xl" id="thumbsuptext">Contact Us Today for a Free quote</p>
                    <Image id="img4"  className="img w-full h-[60rem]" src={happyCustomerThumbsUp} alt="Happy Customers Giving A Thumbs Up"></Image>
                </div>
            </main>
        )

}
