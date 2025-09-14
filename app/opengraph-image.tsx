import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const hasTitle = searchParams.has('title')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Nara Therapy - For Providers'

    return new ImageResponse(
      (
        <div
          style={{
            backgroundImage: 'url(https://joinnara.com/providersocialpreview.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 60,
            fontWeight: 700,
            color: 'white',
            textAlign: 'center',
            padding: '0 120px',
          }}
        >
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.5)',
              padding: '40px',
              borderRadius: '20px',
              textAlign: 'center',
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
