/**
 * Checks if a URL is valid by sending a HEAD request.
 *
 * @param {string} url - The URL to check.
 * @returns {Promise<{url: string, status: boolean, statusCode?: number, error?: string}>} The result of the check.
 */
export async function checkUrl(url) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const httpResponse = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: controller.signal,
    });

    clearTimeout(timeout);
    return { url, status: httpResponse.ok, statusCode: httpResponse.status };
  } catch (fetchError) {
    return { url, status: false, error: fetchError.message };
  }
}
