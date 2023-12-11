import { suggestions } from './suggestions'

export const SearchSuggestion = (value)=>{
    let userData = value;
    let emptyArray = [];
    if(userData){
        emptyArray = suggestions.filter((data)=>{
            return data.name.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            return data;
        });
    }
    return emptyArray
}



