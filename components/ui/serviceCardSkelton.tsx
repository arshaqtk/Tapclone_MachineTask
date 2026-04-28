export function ServiceCardSkeleton() {
  return (
    <article className="flex h-full min-h-[420px] animate-pulse flex-col rounded-2xl border border-[#1e3a2a] bg-[#081810] p-6">
      <div className="mb-6 flex items-center justify-center">
        <div className="h-[140px] w-[140px] rounded-full bg-[#123222]" />
      </div>
      <div className="mb-4 h-6 w-3/4 rounded bg-[#123222]" />
      <div className="mb-3 h-4 w-full rounded bg-[#0f2e1c]" />
      <div className="mb-3 h-4 w-5/6 rounded bg-[#0f2e1c]" />
      <div className="mb-8 h-4 w-2/3 rounded bg-[#0f2e1c]" />
      <div className="mt-auto h-12 w-full rounded-xl bg-[#123222]" />
    </article>
  );
}