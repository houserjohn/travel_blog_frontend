import ArticleCard from "../components/ArticleCard";
import ShareStory from "../components/ShareStory";

let articles = [
    {
        "author_name": "John",
        "title": "test post",
        "content": "test",
        "created_at": "2021-12-18T02:04:12.695260Z"
    },
    {
        "author_name": "Steve",
        "title": "My Trip to the Bahamas",
        "content": "the Bahamas",
        "created_at": "2021-12-18T02:04:12.695260Z"
    }
];

function view() {
    return(
        <div>
            <div className="m-auto w-7/12 pt-2 flex flex-col gap-2">
                <ShareStory/>
                {articles.map((article: any, index: number) => (
                    <ArticleCard key={index} title={article.title} 
                    author_name={article.author_name} created_at={article.created_at}/>     
                ))}
            </div>
        </div>
    );
}

export default view;