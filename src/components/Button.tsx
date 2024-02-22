import { MouseEvent } from "react";

export default function Button({
  children,
  type,
  className,
  onClick
}:{
  children: React.ReactNode;
  className?: string;
    type?: 'primary' | 'secondary' | 'outline' | 'icon',
  onClick?: (event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>) => void
  }) {
  const defaultStyle = "uppercase border-2 max-sm:text-sm p-1 border-inherit font-medium p-3 flex flex-row gap-2 items-center justify-center transition-[2000ms]"
  
  switch (type) {
    case 'primary':
      return (
        <button onClick={onClick} className={`bg-primary min-w-40 bg-opacity-10 border-primary text-primary hover:bg-opacity-100 hover:text-white ${className} ${defaultStyle}`}>
          {children}
        </button>
      )
    case 'secondary':
      return (
        <button onClick={onClick} className={`bg-foreground min-w-40 bg-opacity-10 border-foreground text-foreground hover:bg-opacity-100 hover:text-white ${className} ${defaultStyle}`}>
          {children}
        </button>
      )
    case 'outline':
      return (
        <button onClick={onClick} className={`bg-transparent min-w-40 bg-opacity-10 border-foreground text-foreground hover:bg-opacity-15 hover:bg-gray ${className} ${defaultStyle}`}>
          {children}
        </button>
      )
    case 'icon':
        return (
          <button onClick={onClick} className={`bg-transparent max-sm:p-1 max-sm:text-[20px] text-[25px] bg-opacity-10 border-0 text-gray hover:bg-opacity-15 hover:bg-white hover:text-white ${className} ${defaultStyle}`}>
            {children}
          </button>
        )
    default:
      return (
        <button onClick={onClick}  className={`bg-foreground min-w-40 border-foreground text-white hover:bg-black hover:border-black ${className} ${defaultStyle}`}>
          {children}
        </button>
      )
  }
}