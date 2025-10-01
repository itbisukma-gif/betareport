
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

    const imageUrl = Array.isArray(result.ogImage) ? result.ogImage[0]?.url : result.ogImage?.url;

    return NextResponse.json({
      caption: result.ogTitle || '',
      image: imageUrl || '',
    });
  } catch (error: any) {
    console.error('OGS Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch metadata', details: error.result?.error || error.message },
      { status: 500 }
    );
  }
}
