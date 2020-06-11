import React, {useEffect, useState} from "react";
import axios from "axios";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const styles = {
    center: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "50%"
    },
    colorW: {
        color: "white"
    }
}

const Slider = (props) => {
    const [items, setItems] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

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

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                className="custom-tag mb-5"
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.id}
            >
                <img style={styles.center} src={item.backdrop_path}/>
                <CarouselCaption captionText={item.release_date.slice(0,4)} captionHeader={item.title}/>
            </CarouselItem>
        );
    });

    return (
        <>
            <style>
                {
                    `.custom-tag {
                           max-width: 100%;
                           max-height: 400px;
                           background: #0c1f28;
                         }`
                }
            </style>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex}/>
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}/>
                <CarouselControl direction="next" directionText="Next" onClickHandler={next}/>
            </Carousel>
        </>
    );
}

export default Slider;