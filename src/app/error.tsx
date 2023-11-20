'use client';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <p>{error.name}</p>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
