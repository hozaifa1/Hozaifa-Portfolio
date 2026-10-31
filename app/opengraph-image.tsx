import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { identity } from '@/lib/seo';

export const alt = `${identity.name}: semiconductor and neuromorphic hardware researcher`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  let headshot: string | null = null;
  try {
    const buf = await readFile(path.join(process.cwd(), 'public', 'headshot.jpg'));
    headshot = `data:image/jpeg;base64,${buf.toString('base64')}`;
  } catch {
    headshot = null;
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#080808',
          color: '#f5f4f0',
          padding: '72px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: headshot ? 700 : 1000 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 22,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: '#d4c9f0',
              marginBottom: 28,
            }}
          >
            Researcher · Dhaka
          </div>
          <div style={{ display: 'flex', fontSize: 76, fontWeight: 300, lineHeight: 1.05 }}>
            {identity.name}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 28,
              lineHeight: 1.4,
              marginTop: 32,
              color: 'rgba(245,244,240,0.7)',
            }}
          >
            {identity.oneLineBio}
          </div>
          <div style={{ display: 'flex', fontSize: 26, marginTop: 40, color: '#b8e4cc' }}>
            hozaifa.dev
          </div>
        </div>
        {headshot ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={headshot}
            alt={identity.name}
            width={340}
            height={340}
            style={{ borderRadius: 32, objectFit: 'cover' }}
          />
        ) : null}
      </div>
    ),
    { ...size },
  );
}
