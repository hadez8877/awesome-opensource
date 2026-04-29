import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import { normalizeWhitespace } from "../license.js";

export function readApache2License() {
  return readLicenseFile("apache-2-license");
}

export function readGplV3License() {
  return readLicenseFile("gpl-v3-license");
}

export function readLgplV3License() {
  return readLicenseFile("lgpl-v3-license");
}

export function readMitLicense() {
  return readLicenseFile("mit-license");
}

export function readOtherLicense() {
  return "Some other license that we do not currently accept (yet).";
}

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const licenseCache = new Map();

export function readLicenseFile(fileName: string) {
  let content = licenseCache.get(fileName);

  if (content) {
    return content;
  }

  content = normalizeWhitespace(
    fs.readFileSync(path.join(__dirname, fileName), "utf-8"),
  );
  licenseCache.set(fileName, content);

  return content;
}
