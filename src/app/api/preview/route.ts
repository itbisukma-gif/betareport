import { NextRequest, NextResponse } from 'next/server';
import ogs from 'open-graph-scraper';

type OgImage = { url: string };

// Helper untuk ambil ogImage
function getOgImageUrl(ogImage: unknown): string | undefined {
  if (Array.isArray(ogImage)) {
    const first = ogImage[0];
    if (first && typeof first === "object" && "url" in first) {
      return (first as OgImage).url;
    }
  } else if (ogImage && typeof ogImage === "object" && "url" in ogImage) {
    return (ogImage as OgImage).url;
  }
  return undefined;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 });
  }

  try {
    const { result } = await ogs({ url });

    if (result.success === false || !result.ogTitle) {
      return NextResponse.json(
        {
          caption: 'Konten berhasil diunggah!',
          image: `https://picsum.photos/seed/fallback-ogs/400/600`,
        },
        { status: 200 }
      );
    }

    const imageUrl = getOgImageUrl(result.ogImage);

    return NextResponse.json({
      caption: result.ogTitle || '',
      image: imageUrl || `https://picsum.photos/seed/fallback-image/400/600`,
    });
  } catch (error: any) {
    console.error('OGS Critical Error:', error);
    return NextResponse.json(
      {
        caption: 'Konten berhasil diunggah!',
        image: `https://picsum.photos/seed/critical-error/400/600`,
      },
      { status: 200 }
    );
  }
}
