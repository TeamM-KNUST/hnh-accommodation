export const Search = () => {
    return (
        <div className="flex items-center justify-center gap-4">
            <input
                type="text"
                placeholder="Search"
                className="border-2 border-gray-300 p-2 rounded-md outline-none w-96"
            />
            <button className="bg-blue-500 p-2 rounded-md text-white">
                Search
            </button>
        </div>
    );
}