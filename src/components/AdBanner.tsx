export default function AdBanner() {
  return (
    <div
      className={`
        w-full
        bg-linear-to-r
        from-[#7e619e]
        via-[#6a72c4]
        to-[#c98be6]
        rounded-xl
        px-6
        py-5
        flex
        items-center
        justify-between
        text-white
        mb-8
      `}
    >
      <div
        className={`
          flex
          flex-col
          gap-1
        `}
      >
        <h2
          className={`
            text-xl
            font-semibold
            tracking-tight
          `}
        >
          Unlock the Power of Our New Campaign Management Dashboard!
        </h2>
        <p
          className={`
            text-sm
            text-white/90
          `}
        >
          Introducing our latest innovation - a revolutionary dashboard designed
          to elevate your campaign management.
        </p>
      </div>

      <button
        className={`
          bg-white
          text-indigo-700
          px-5
          py-2
          rounded-lg
          font-medium
          text-sm
          shrink-0
          hover:bg-slate-50
          transition-colors
          shadow-sm
        `}
      >
        Try the New Features Now!
      </button>
    </div>
  );
}
