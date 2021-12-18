
interface ArticleCard_props {
    title: string,
    author_name: string,
    created_at: string,
}

function ArticleCard(props: ArticleCard_props) {
    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg py-2 px-4">
            <div className="text-lg font-semibold">{props.title}</div>
            <div className="text-sm font-normal text-gray-600 inline-block w-fit">
                By {props.author_name} on {props.created_at}
            </div>
        </div>
    );
}

export default ArticleCard;