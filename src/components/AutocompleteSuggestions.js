import React from "react";

function AutocompleteSuggestions({ suggestions, onSuggestionClick }) {
  return (
    <ul id="autocomplete-suggestions">
      {suggestions.map((suggestion) => (
        <li key={suggestion.id} onClick={() => onSuggestionClick(suggestion)}>
          {`${suggestion.name}, ${suggestion.region}, ${suggestion.country}`}
        </li>
      ))}
    </ul>
  );
}

export default AutocompleteSuggestions;
