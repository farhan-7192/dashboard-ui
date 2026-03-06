export default function AdBanner() {
  return (
    <div className="w-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-400 rounded-2xl p-6 flex items-center justify-between text-white mb-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-medium">
          Unlock the Power of Our New Campaign Management Dashboard!
        </h2>
        <p className="text-sm text-indigo-50">
          Introducing our latest innovation - a revolutionary dashboard designed
          to elevate your campaign management.
        </p>
      </div>

      <button className="bg-white text-indigo-600 px-6 py-2.5 rounded-xl font-medium text-sm shrink-0 hover:bg-slate-50 transition-colors">
        Try the New Features Now!
      </button>
    </div>
  );
}
