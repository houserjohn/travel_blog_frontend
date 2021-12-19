
import Link from "next/link";

interface ArticleCard_props {
    title: string,
    author_name: string,
    created_at: string,
    id: string,
}

function ArticleCard(props: ArticleCard_props) {
    return (
        <a href={"view?id="+props.id}>
        <div className="hover:bg-gray-100 hover:cursor-pointer bg-white rounded-xl border border-gray-200 shadow-lg py-2 px-4">
            <div className="text-lg font-semibold">{props.title}</div>
            <div className="text-sm font-normal text-gray-600 inline-block w-fit">
                By {props.author_name} on {props.created_at}
            </div>
        </div>
        </a>
    );
}

export default ArticleCard;