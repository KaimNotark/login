import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

// Init autocomplete

const autocomplete = document.querySelectorAll('.autocomplete');
M.Autocomplete.init(autocomplete, {
  data: {
    Apple: null,
    Mic: null
  }
});

export function getAutocompleteInstance(elem) {
  return M.Autocomplete.getInstance(elem);
}