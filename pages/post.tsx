import ArticlePost from "../components/ArticlePost";
import Navbar from "../components/Navbar";

function Post() {
    return (
        <div>
            <Navbar/>
            <div className="m-auto w-7/12 pt-2">
                
                <ArticlePost></ArticlePost>
            </div>
        </div>
    );
}

export default Post;