import React from "react";

const styles = {
    firstBackground: {
        backgroundColor: "#052f4b",
    },
    secondBackground: {
        backgroundColor: "#143D59",
        color: "white"
    },
    colorWhite: {
        color: "white"
    },
    signUp: {
        color: "white",
        border: "solid 2px white",
        borderRadius: "20px"
    }
}

const Footer = () => {
    return(
        <footer style={styles.firstBackground} class="page-footer font-small unique-color-dark pt-4">
            <div  class="container">
                <ul class="list-unstyled list-inline text-center py-2">
                    <li class="list-inline-item">
                        <h5 style={styles.colorWhite} class="mb-1">Register for free</h5>
                    </li>
                    <li class="list-inline-item">
                        <a href="#!" style={styles.signUp} class="btn btn-outline-white btn-rounded">Sign up!</a>
                    </li>
                </ul>
            </div>
            <div style={styles.secondBackground} class="footer-copyright text-center py-3">© 2020 Copyright:

                <a href="/"> MovieApp</a>
            </div>
        </footer>
    )
}

export default Footer;