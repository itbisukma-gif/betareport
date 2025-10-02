
import { NextRequest, NextResponse } from 'next/server';
import ogs from 'open-graph-scraper';

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

    const imageUrl = Array.isArray(result.ogImage) ? result.ogImage[0]?.url : result.ogImage?.url;

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
