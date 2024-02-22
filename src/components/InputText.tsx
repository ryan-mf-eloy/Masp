export default function InputText({
  type,
  name,
  placeholder,
  required = true,
  className
}: {
  type: string,
  name: string,
  placeholder: string,
  required?: boolean,
  className?: string
}) {
  return (
    <input className={`p-5 font-body font-semibold outline-none max-h-10 border-4 text-foreground border-foreground focus:border-black ${className}`} type={type} required={required} name={name} placeholder={placeholder} />
  )
}