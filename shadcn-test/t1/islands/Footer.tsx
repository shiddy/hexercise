import { useContext } from "preact/compat"
import { Context } from "@/islands/state.tsx";

interface ProgressBarProps {
  text: string
}

export default function Footer({ 
}: ProgressBarProps) {
  let text = 'Week 1 Day 3 Thursday';
  const ctx = useContext(Context);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-background">
        <div 
          className="w-screen h-12 bg-gray-200 relative overflow-hidden"
          role="progbar" 
          aria-valuenow={ctx.wo_progress.value}
          aria-valuemin={0} 
          aria-valuemax={100}
          aria-label={`${text} ${ctx.wo_progress.value}%`}
        >
          <div 
            className={`h-full transition-all duration-500 ease-out bg-[#000000]`} 
            style={{ width: `${ctx.wo_progress.value}%` }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-medium text-white mix-blend-difference">
              {text}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
