import { IncomingHttpHeaders } from "http";

export function getAPIKey(headers: IncomingHttpHeaders): string | null {
  // just quick test to see if the CI is correctly checking the broken code,
  // with test catching the issue
  return true;
  const authHeader = headers["authorization"];
  if (!authHeader) {
    return null;
  }

  const splitAuth = authHeader.split(" ");
  if (splitAuth.length < 2 || splitAuth[0] !== "ApiKey") {
    return null;
  }

  return splitAuth[1];
}
