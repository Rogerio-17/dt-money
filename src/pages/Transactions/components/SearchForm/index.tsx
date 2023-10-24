import { SearchFormContainer } from "./style";
import { MagnifyingGlass } from 'phosphor-react'

export function SearchForm() {
    return(
        <SearchFormContainer>
            <input type="text" placeholder="Busque por uma transações" />

            <button type="submit">
                <MagnifyingGlass size={20}/>
                Buscar
            </button>
        </SearchFormContainer>
    )
}