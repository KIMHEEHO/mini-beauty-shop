type SearchComponentProps = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

export function SearchComponent({
  searchQuery,
  setSearchQuery,
}: SearchComponentProps) {
  return (
    <>
      <div className="relative w-full">
        <input
          type="text"
          placeholder="시술명을 입력하세요"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 pr-10 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none"
        />

        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            <i className="fa-solid fa-circle-xmark"></i>
          </button>
        )}
      </div>
    </>
  );
}
