export default function Button({
  children,
  type,
  className,
}:{
  children: React.ReactNode;
  className?: string;
  type?: 'primary' | 'secondary' | 'outline',
  }) {
  const defaultStyle = "uppercase border-2 border-inherit font-medium p-3 flex flex-row gap-2 items-center justify-centeer transition-[1500ms]"
  
  switch (type) {
    case 'primary':
      return (
        <button className={`bg-primary bg-opacity-10 border-primary text-primary hover:bg-opacity-100 hover:text-white ${className} ${defaultStyle}`}>
          {children}
        </button>
      )
    case 'secondary':
      return (
        <button className={`bg-foreground bg-opacity-10 border-foreground text-foreground hover:bg-opacity-100 hover:text-white ${className} ${defaultStyle}`}>
          {children}
        </button>
      )
      case 'outline':
      return (
        <button className={`bg-transparent bg-opacity-10 border-foreground text-foreground hover:bg-opacity-15 hover:bg-gray ${className} ${defaultStyle}`}>
          {children}
        </button>
      )
    default:
      return (
        <button className={`bg-foreground border-foreground text-white hover:bg-black hover:border-black ${className} ${defaultStyle}`}>
          {children}
        </button>
      )
  }
}