import http from "./httpService";
import { apiUrl } from "../config.json";

export async function getGenres() {
  return http.get(apiUrl + "/genres");
}
