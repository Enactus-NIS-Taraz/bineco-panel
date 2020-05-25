import { requestWithoutProgress } from "./request";

export const createDevice = async device =>
  await requestWithoutProgress({
    url: "devices",
    data: device,
    method: "POST"
  });
