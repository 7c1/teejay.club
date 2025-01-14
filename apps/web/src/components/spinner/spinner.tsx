import { memo } from "react";

type Props = {
  isSpinning: boolean;
};

export const Spinner = memo<Props>(({ isSpinning }) => {
  if (!isSpinning) {
    return null;
  }

  return (
    <div className="absolute inset-0 bg-white/75 flex items-center justify-center z-40">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-amber-500 animate-spin !fill-[none]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>
    </div>
  );
});

Spinner.displayName = "Spinner";
