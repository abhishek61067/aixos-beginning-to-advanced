import axios from "axios";
// For global defaults, we will add those headers and  other options which wont change like Accept and not
// authorization and base url which maynot be the same for every axios request for this project
// For that, axios instance is required
axios.defaults.headers.common["Accept"] = "application/json";
