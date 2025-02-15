import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useSearchHistory } from "../components/search-history-context";
import { Button } from "@/components/ui/button";

const SearchHistory = () => {
  const { searchHistory, clearSearchHistory } = useSearchHistory();

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Search History</h1>
      {/* Clear History Button */}
      {searchHistory.length > 0 && (
        <Button
          onClick={clearSearchHistory}
          variant="destructive"
          className="mb-4"
        >
          Clear History
        </Button>
      )}

      {searchHistory.length > 0 ? (
        <div className="w-full max-w-md space-y-4">
          {searchHistory.map((entry, index) => (
            <Card key={index} className="w-full">
              <CardHeader>
                <CardTitle className="text-lg">Query: {entry.query}</CardTitle>
                <p className="text-sm text-gray-500">
                  {new Date(entry.timestamp).toLocaleString()}
                </p>
                {entry.result ? (
                  <div className="flex items-center gap-4 mt-2">
                    <img
                      src={entry.result.avatar_url}
                      alt={entry.result.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <p>{entry.result.name}</p>
                  </div>
                ) : (
                  <p className="text-red-500">{entry.error}</p>
                )}
              </CardHeader>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No search history yet.</p>
      )}
    </div>
  );
};

export default SearchHistory;
