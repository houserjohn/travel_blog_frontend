import { useEffect, useState } from 'react';

function Article(props: any) {
    const axios = require('axios');
    const [ article, setArticle ] = useState({});

    useEffect(() => {
        axios.get('https://travel-blog-api-778.herokuapp.com/api/'+props.id+'/')
        .then(function (response: any) {
            // handle success
            setArticle(response.data);
        })
        .catch(function (error: string) {
            // handle error
        })
        .then(function () {
            // always executed
        });


    }, []);

    return (
        <div>
            <div className="bg-white rounded-t-xl border border-gray-200 py-2">
                <div className="w-11/12 m-auto">
                    <div className="block text-lg w-full font-semibold">{article.title}</div>
                    <div className="text-sm font-normal text-gray-500 inline-block w-fit">
                        By {article.author_name} on {article.created_at}
                    </div>
                </div>
            </div>
            <div className="border border-gray-200 bg-gray-100 rounded-b-xl">
                <div className="w-11/12 m-auto py-2">
                    <div className="block text-gray-600 w-full">{article.content}</div>
                </div>
            </div>
        </div>
    );
}

export default Article;