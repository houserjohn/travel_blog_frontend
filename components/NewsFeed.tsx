import React, { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";

const axios = require('axios');


function NewsFeed() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('https://travel-blog-api-778.herokuapp.com/api/')
        .then(function (response: any) {
            // handle success
            setArticles(response.data);
        })
        .catch(function (error: string) {
            // handle error
        })
        .then(function () {
            // always executed
        });


    }, []);
    
    return (
        <div className="flex flex-col gap-2">
            {articles.map((article: any) => (
                <ArticleCard key={article.id} title={article.title} 
                author_name={article.author_name} created_at={article.created_at} id={article.id}/>     
            ))}
        </div>
    );
}

export default NewsFeed;