import React from 'react'
import { Grid, Grow, Typography } from "@material-ui/core";
import NewsCard from '../NewsCard/NewsCard'
import useStyles from './styles.js'


const infoCards = [
    { color: '#000', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#000', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#000', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#000', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
];


const NewsCards = ({ articles, activeArticles }) => {

    const classes = useStyles();

    if (articles.length) {
        return (
            <Grow in>
                <Grid className={classes.container} container spacing={2} alignItems='stretch'>
                    {articles.map((article, i) => (
                        <Grid item key={i} xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
                            <NewsCard article={article} activeArticles={activeArticles} i={i} />
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        )
    }




    return (
        <Grow in>
            <Grid className={classes.container} container spacing={2} alignItems='stretch'>
                {infoCards.map((infoCard) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                        <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                            <Typography variant="h5" >{infoCard.title}</Typography>
                            {infoCard.info ? (<Typography variant="h6"><strong>{infoCard.title.split(" ")[2]}:</strong><br />{infoCard.info}</Typography>) : null}
                            <Typography variant="h6" color="initial">Try saying : <br /> <i>{infoCard.text}</i> </Typography>
                        </div>
                    </Grid>
                ))};
            </Grid>
        </Grow>
    )

}

export default NewsCards
