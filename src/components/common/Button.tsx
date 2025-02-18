import { component$, Slot, type PropFunction } from "@builder.io/qwik";
import { type ClassList } from "@builder.io/qwik";

interface ButtonProps {
  class?: ClassList;
  onClick$?: PropFunction<() => void>;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  href?: string;
}

export default component$((props: ButtonProps) => {
  const {
    class: className,
    onClick$,
    type = "button",
    variant = "primary",
    href,
  } = props;

  const baseStyles = "flex flex-row items-center px-[10px] py-2 gap-2 h-9 rounded-[10px] transition-colors";
  
  const variants = {
    primary: "bg-[#333738] text-white shadow-[0px_0px_0px_1px_#000000,0px_1px_3px_rgba(63,70,75,0.1)]",
    secondary: "bg-white text-[#333738] shadow-[0px_0px_0px_1px_#E5E5E5,0px_1px_3px_rgba(63,70,75,0.1)]"
  };

  const classes = `${baseStyles} ${variants[variant]} ${className || ''}`;

  if (href) {
    return (
      <a href={href} class={classes}>
        <Slot />
      </a>
    );
  }

  return (
    <button type={type} onClick$={onClick$} class={classes}>
      <Slot />
    </button>
  );
}); 