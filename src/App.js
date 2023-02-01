import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from './styles.js'
import WordToNumbers from 'words-to-numbers'


const alanKey = 'af69777c095f4e4d45dbb122a084084a2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticles, setActiveArticles] = useState(-1);



    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles, number }) => {
                if (command === 'newHeadlines') {
                    setNewsArticles(articles);
                    setActiveArticles(-1);
                } else if (command === 'highlight') {
                    setActiveArticles((prevActiveArticles) => prevActiveArticles + 1);
                } else if (command === 'open') {
                    const parsedNumber = number.length > 2 ? WordToNumbers(number, { fuzzy: true }) : number;
                    const article = articles[parsedNumber - 1]
                    console.log(article)
                    if (parsedNumber > 20) {
                        alert('plz try again')
                    } else if (article) {
                        window.open(article.url, '');
                    }

                }
            }
        })
    }, []);

    return (
        <div>
            <div className={classes.logoContainer}>
                <img className={classes.alanLogo} src="https://voicebot.ai/wp-content/uploads/2019/10/alan.jpg" alt="alanLogo" />
            </div>
            <NewsCards articles={newsArticles} activeArticles={activeArticles} />
        </div>
    );
}

export default App;