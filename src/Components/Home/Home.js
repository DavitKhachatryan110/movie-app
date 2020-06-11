import React from "react";
import {Col, Container} from "reactstrap";
import Slider from "../Slider/Slider";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import MultipleSlider from "../MultipleSlider/MultipleSlider";

const styles = {
    textAlign: {
        textAlign: "center",
        color: "white"
    },
    height: {
        heght: "50px"
    }
}

const Home = (props) => {

    return(
        <Container fluid>
            <h1 style={styles.textAlign} >Now Playing</h1>
            <MultipleSlider className="mt-2" url="https://api.themoviedb.org/3/movie/now_playing?api_key=e2bdf1adf27f9d4d32f149f3274aa754&language=en-US&page=1"/>
            <VideoPlayer className="mt-5" ids={[419704, 514847, 508439, 454626, 429617]}/>
            <h1 className="mt-2" style={styles.textAlign}>Upcoming Movies</h1>
            <Slider className="mt-2" url="https://api.themoviedb.org/3/movie/upcoming?api_key=e2bdf1adf27f9d4d32f149f3274aa754&language=en-US&page=1"/>
        </Container>
    )
}

export default Home;