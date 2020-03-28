import React from "React";

 const Contact = props => {
    return (
        <div className="page  project " >
            <p>
                <ul className="projectList">
                    <li>
                        <span className="listTitle">MAIL</span>
                        <p><a href='mailto:jonas.aymoz@gmail.com'> jonas.aymoz@gmail.com</a></p>
                    </li>
                    <li>
                        <span className="listTitle">TWITTER</span>
                        <p>@JonasAyz</p></li>
                    <li>
                        <span className="listTitle">VIMEO</span>
                        <p>https://vimeo.com/jonasayz</p> </li>
                    <li>
                        <span className="listTitle">FLICKR</span>
                        <p></p>
                    </li>
                </ul>
            </p>
        </div>
    );
}

 export default Contact;