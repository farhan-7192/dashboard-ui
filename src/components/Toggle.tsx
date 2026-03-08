export default function Toggle() {
  const tabs = [
    { label: "Active", count: 24, isActive: true },
    { label: "Completed", count: 179, isActive: false },
    { label: "Draft", count: 3, isActive: false },
  ];

  return (
    <div
      className={`
        flex
        items-center
        gap-8
        border-b
        border-slate-200
        mb-8
      `}
    >
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`
            flex
            items-center
            gap-2
            pb-4
            relative
            text-sm
            font-medium
            transition-colors
            ${tab.isActive ? "text-indigo-700" : "text-slate-500 hover:text-slate-800"}
          `}
        >
          {tab.label}
          <span
            className={`
              bg-slate-100
              text-slate-500
              text-xs
              py-0.5
              px-1.5
              rounded-md
              font-medium
            `}
          >
            {tab.count}
          </span>
          {tab.isActive && (
            <div
              className={`
                absolute
                bottom-0
                left-0
                w-full
                h-0.5
                bg-indigo-600
              `}
            />
          )}
        </button>
      ))}
    </div>
  );
}
