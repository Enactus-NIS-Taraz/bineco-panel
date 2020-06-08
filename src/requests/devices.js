import { requestWithoutProgress } from "./request";

export const createDevice = async device =>
  await requestWithoutProgress({
    url: "devices",
    data: device,
    method: "POST"
  });

export const editDevice = async (id, device) =>
  await requestWithoutProgress({
    url: "devices/" + id,
    data: device,
    method: "PATCH"
  });
