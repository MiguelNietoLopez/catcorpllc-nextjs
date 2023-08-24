
export default function ContactApp() {
        return(
            <main id="contactApp">
                <div id="centerContent">
                    <h1 id="title">Contact Us</h1>
                    <h3 id="subtitle">Fill out this form and we will get in touch with you</h3>
                    <form id="contactForm">
                        <div id="firstName" className="formDiv">
                            <label id="firstNameLabel" className="label" htmlFor="firstName">First Name </label>
                            <input type="text" className="inputs" name="firstName" ></input>
                        </div>
                        <div id="lastName" className="formDiv">
                            <label id="lastNameLabel" className="label" htmlFor="lastName">Last Name </label>
                            <input type="text" name="lastName"  className="inputs"></input>
                        </div>
                        <div id="email" className="formDiv">
                            <label className="label" id="emailLabel" htmlFor="email" >Email </label>
                            <input className="inputs" type="email" name="email"></input>
                        </div>
                        <div id="message" className="formDiv">
                            <label id="messageLabel" className="label" htmlFor="message">Message </label>
                            <textarea id="message" className="inputs" name="message" rows={4}></textarea>
                        </div>
                        <p id="warning"></p>
                        <button id="formButton">Submit</button>
                    </form>
                </div>

            </main>
        )
}


