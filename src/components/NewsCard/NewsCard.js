import React, { useState, useEffect, createRef } from 'react'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import useStyles from './styles.js'
const classnames = require('classnames');


const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i, activeArticles }) => {

    const classes = useStyles();

    const [elRefs, setElRefs] = useState([]);

    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50)

    useEffect(() => {
        setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()))
    }, []);

    useEffect(() => {
        if (i === activeArticles && elRefs[activeArticles]) {
            scrollToRef(elRefs[activeArticles]);
        }
    }, [i, activeArticles, elRefs]);

    return (
        <Card ref={elRefs[i]} className={classnames(classes.card, activeArticles === i ? classes.activeCard : null)}>
            <CardActionArea href={url} target="_blank">
                <CardMedia className={classes.media} image={urlToImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8_0YRGmFgpt4yAUQIvu0S56J9fxJdVxtbugJp-33y&s"} />
                <div className={classes.details}>
                    <Typography variant='body2' color='white' component="h2">{(new Date(publishedAt).toDateString())}</Typography>
                    <Typography variant='body2' color='white' component="h2">{source.name}</Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant='h6'>{title}</Typography>
                {/* <CardContent className={classes.CardContent}>
                    <Typography variant='body2' color='textSecondary' component="p">{description}</Typography>
                </CardContent> */}
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <a className='btn' href={url} target="_blank" rel="noreferrer">
                    <Button size='small' color='primary'>Read More</Button>
                </a>
                <Typography variant='h5' color='white'>{i + 1}</Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard
