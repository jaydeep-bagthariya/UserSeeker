import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useSearchHistory } from "@/components/search-history-context";
const LandingPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { addSearchEntry } = useSearchHistory();
  const [validationError, setValidationError] = useState("");

  // Function to validate GitHub username
  const validateUsername = () => {
    const name = searchQuery.trim();
    const usernameRegex = /^(?!.*--)[a-zA-Z0-9-]{4,39}$/;

    if (!name.trim()) return "Username is required.";
    if (name.startsWith("-") || name.endsWith("-"))
      return "Username cannot start or end with '-'.";
    if (!usernameRegex.test(name))
      return "Invalid username. Only letters, numbers, and single hyphens allowed (4-39 chars).";

    return "";
  };

  const handleSearch = async () => {
    const errorMessage = validateUsername();
    setValidationError(errorMessage);

    if (errorMessage) {
      setSearchResult(null);
      return;
    }
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.github.com/users/${searchQuery}`
      );
      const data = await response.json();
      if (response.ok) {
        const { avatar_url, login } = data;
        const result = { name: login, avatar_url };
        setSearchResult(result);
        setError(null);

        // Save successful search to history
        addSearchEntry({
          query: searchQuery,
          result,
          timestamp: new Date().toISOString(),
        });
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      setError(error);

      // Save failed search to history
      addSearchEntry({
        query: searchQuery,
        error: error.message,
        timestamp: new Date().toISOString(),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-4">Search GitHub Users</h1>

      {/* Search Input and Button */}
      <div className="w-full max-w-md space-y-4 mb-6">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Enter username"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleSearch}>
            {isLoading ? "Searching..." : "Search"}
          </Button>
        </div>
        <p className="text-red-500 text-sm">{validationError}</p>
      </div>

      {/* Search Results Text */}
      {searchResult && <p className="text-lg mb-4">Search results</p>}

      {/* Search Results List */}
      <div className="w-full max-w-md space-y-4">
        {searchResult && !error && (
          <Card>
            <CardHeader className="flex flex-row items-center gap-8">
              <img
                src={searchResult.avatar_url}
                alt={searchResult.name}
                className="w-12 h-12 rounded-full"
              />
              <CardTitle>{searchResult.name}</CardTitle>
            </CardHeader>
          </Card>
        )}
        {error && <p className="text-gray-500">No results found.</p>}
      </div>
    </div>
  );
};

export default LandingPage;
