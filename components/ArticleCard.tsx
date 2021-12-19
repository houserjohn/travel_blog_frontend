
import Link from "next/link";

interface ArticleCard_props {
    title: string,
    author_name: string,
    created_at: string,
    id: string,
}

function ArticleCard(props: ArticleCard_props) {
    let year = props.created_at.substring(0,4);
    let month = props.created_at.substring(5,7);
    let day = props.created_at.substring(8,10);

    return (
        <a href={"view?id="+props.id}>
        <div className="hover:bg-gray-100 hover:cursor-pointer bg-white rounded-xl border border-gray-200 shadow-lg py-2 px-4">
            <div className="text-lg font-semibold">{props.title}</div>
            <div className="text-sm font-normal text-gray-600 inline-block w-fit">
                By {props.author_name} on {month +"/"+day+"/"+year}
            </div>
        </div>
        </a>
    );
}

export default ArticleCard;