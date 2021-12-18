function Article() {
    return (
        <div className="bg-gray-100 rounded-xl border border-gray-200 shadow-lg py-2 px-4">
            <div className="text-lg font-semibold">Title</div>
            <div className="text-sm font-normal text-gray-600 inline-block w-fit">
                By Author on 10/12/2021
            </div>
            <div className="text-gray-600 pt-2">
                Content
            </div>
        </div>
    );
}

export default Article;