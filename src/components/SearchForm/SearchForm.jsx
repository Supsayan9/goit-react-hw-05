
import { useSearchParams } from "react-router-dom";

export default function SearchForm() {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        const query = e.target.elements.query.value.trim();
        
        if (query) {
            setSearchParams({ query }); 
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="query" 
                placeholder="Search for a movie..." 
                defaultValue={searchParams.get("query") || ""}
            />
            <button type="submit">Search</button>
        </form>
    );
}