// service.js
import { logMessage } from "./logger.js";

export function greetUser(name) {
  logMessage(`Hello ${name}`);
  return `Hello ${name}`;
}
