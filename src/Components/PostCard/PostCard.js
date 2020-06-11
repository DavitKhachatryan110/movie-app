import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Col
} from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
import { FaStar } from 'react-icons/fa';

const styles = {
    CardImg: {
        width: "210px",
        backgroundColor: "#054163"
    },
    FontSize: {
        fontSize: "12px",
        color: "white"
    },
    imgHeight: {
        height: "300px"
    }
}

const PostCard = (props) => {
    return (
        <Col>
            <Card style={styles.CardImg}>
                <CardImg style={styles.imgHeight} top width="100%" src={props.poster} alt="Card image cap"/>
                <CardBody>
                    <CardTitle style={styles.FontSize}><b>{props.title}, {props.year}</b> </CardTitle>
                    <CardSubtitle>
                        <StarRatingComponent
                            name="rate2"
                            editing={false}
                            renderStarIcon={() => <span> <FaStar/> </span>}
                            starCount={10}
                            value={props.rating}
                        />
                    </CardSubtitle>
                </CardBody>
            </Card>
        </Col>
    );
};

export default PostCard;