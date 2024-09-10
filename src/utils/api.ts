const footballURL = "https://v3.football.api-sports.io";

const sportsHeaders = (url: URL) => {
    const headers = new Headers();
    headers.append("x-rapidapi-host", url.host);
    headers.append("x-apisports-key", process.env.SPORTSAPI_KEY || "");
    return headers;
};

export async function apiCall({
    endpoint,
    params,
}: {
    endpoint: string;
    params: { [key: string]: string | number };
}) {
    const url = new URL(endpoint, footballURL);

    for (let [key, value] of Object.entries(params)) {
        url.searchParams.append(key, `${value}`);
    }

    const res = await fetch(url, {
        headers: sportsHeaders(url),
    });

    return res;
}
