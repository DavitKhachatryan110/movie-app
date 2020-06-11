import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import PostCard from "../PostCard/PostCard";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const MultipleSlider = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {

        axios(props.url)
            .then(response => {
                console.log(response.data.results)
                setItems(response.data.results.map(data => ({
                    adult: data.adult,
                    backdrop_path: `https://image.tmdb.org/t/p/w500${data.backdrop_path}`,
                    genre_ids: data.genre_ids,
                    original_language: data.original_language,
                    title: data.title,
                    overview: data.overview,
                    popularity: data.popularity,
                    poster_path: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
                    release_date: data.release_date,
                    vote_average: data.vote_average,
                    vote_count: data.vote_count,
                    id: data.id
                })))
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return(
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {items.map((item) => {
                return(<PostCard poster={item.poster_path} title={item.title} year={item.release_date.slice(0,4)} rating={item.vote_average}/>)
            })}
        </Carousel>
    )
}

export default MultipleSlider;