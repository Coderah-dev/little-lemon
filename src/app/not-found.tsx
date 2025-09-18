export default function NotFound() {
  return (
    <main className='flex min-h-screen items-center justify-center bg-background px-4'>
      <div className='text-center space-y-6'>
        <h1 className='text-4xl font-extrabold tracking-tight text-primary'>
          🚧 Coming Soon 🚧
        </h1>
        <p className='text-lg text-muted-foreground'>
          This page is under construction. Please check back later!
        </p>
        <a
          href='/'
          className='inline-block rounded-lg bg-primary px-5 py-2 font-medium text-background shadow-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'>
          Go back home
        </a>
      </div>
    </main>
  );
}
