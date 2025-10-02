
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
      const errorMessage = result.error ? `OGS error: ${result.error}` : 'Could not fetch metadata from the URL.';
      return NextResponse.json(
        { error: 'Failed to fetch metadata', details: errorMessage },
        { status: 500 }
      );
    }

    const imageUrl = Array.isArray(result.ogImage) ? result.ogImage[0]?.url : result.ogImage?.url;

    return NextResponse.json({
      caption: result.ogTitle || '',
      image: imageUrl || '',
    });
  } catch (error: any) {
    console.error('OGS Critical Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return NextResponse.json(
      { error: 'Failed to process request', details: errorMessage },
      { status: 500 }
    );
  }
}
