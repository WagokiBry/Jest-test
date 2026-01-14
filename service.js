// service.js
import { fetchUser } from "./api";

export function getUsername() {
  return fetchUser().toUpperCase();
}