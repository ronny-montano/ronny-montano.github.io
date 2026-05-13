export interface YTVideo {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  published: string;
}

const FEED_URL =
  'https://www.youtube.com/feeds/videos.xml?channel_id=UCA0ujkxkiaByV9vf1OUoZ-A';

export async function fetchLatestVideos(limit = 4): Promise<YTVideo[]> {
  try {
    const res = await fetch(FEED_URL, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Astro build)' },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const entries = xml.split('<entry>').slice(1);
    const videos: YTVideo[] = entries.slice(0, limit).map((entry) => {
      const id = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1] ?? '';
      const title = entry.match(/<title>([^<]+)<\/title>/)?.[1] ?? '';
      const published =
        entry.match(/<published>([^<]+)<\/published>/)?.[1] ?? '';
      return {
        id,
        title,
        url: `https://www.youtube.com/watch?v=${id}`,
        thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
        published,
      };
    });
    return videos.filter((v) => v.id);
  } catch {
    return [];
  }
}
