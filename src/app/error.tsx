"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-6 text-center'>
      <h1 className='text-2xl font-bold mb-4'>Something went wrong</h1>
      <p className='mb-6 text-gray-600'>{error.message}</p>
      <button
        onClick={() => reset()}
        className='px-4 py-2 rounded bg-amber-500 text-white hover:bg-amber-600'>
        Try again
      </button>
    </div>
  );
}
