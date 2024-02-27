import { API } from "../instance";

export const backend = new API({
  baseUrl: import.meta.env.VITE_API_URL,

});
