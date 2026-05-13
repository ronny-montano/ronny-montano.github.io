export interface YTVideo {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  published: string;
}

const FEED_URL =
  'https://www.youtube.com/feeds/videos.xml?channel_id=UCA0ujkxkiaByV9vf1OUoZ-A';

const TECH_KEYWORDS = [
  'odoo', 'owl', 'python', 'flutter', 'dart', 'django',
  'javascript', 'typescript', 'postgres', 'sql', 'api', 'rest',
  'test', 'unittest', 'docker', 'linux', 'git', 'github',
  'backend', 'frontend', 'erp', 'devops', 'tutorial', 'hooks',
];

function isTechVideo(title: string, description: string): boolean {
  const haystack = (title + ' ' + description).toLowerCase();
  return TECH_KEYWORDS.some((kw) => haystack.includes(kw));
}

export async function fetchLatestVideos(limit = 4): Promise<YTVideo[]> {
  try {
    const res = await fetch(FEED_URL, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Astro build)' },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const entries = xml.split('<entry>').slice(1);
    const all: YTVideo[] = entries.map((entry) => {
      const id = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1] ?? '';
      const title = entry.match(/<title>([^<]+)<\/title>/)?.[1] ?? '';
      const description =
        entry.match(/<media:description>([\s\S]*?)<\/media:description>/)?.[1] ?? '';
      const published =
        entry.match(/<published>([^<]+)<\/published>/)?.[1] ?? '';
      return {
        id,
        title,
        description,
        url: `https://www.youtube.com/watch?v=${id}`,
        thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
        published,
      } as YTVideo & { description: string };
    });
    return all
      .filter((v) => v.id && isTechVideo(v.title, (v as YTVideo & { description: string }).description))
      .slice(0, limit)
      .map(({ id, title, url, thumbnail, published }) => ({ id, title, url, thumbnail, published }));
  } catch {
    return [];
  }
}
