import { SearchMovieInput } from "../../Components/SearchMovieInput";
import { HomeContainer } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <SearchMovieInput />
        </HomeContainer>
    );
}