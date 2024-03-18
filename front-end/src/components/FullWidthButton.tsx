import clsx from "clsx";

type ButtonVariant = "green" | "black";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  green: "w-full text-white uppercase py-4 font-bold bg-bgGreen",
  black: "w-full text-white uppercase py-4 font-bold bg-textBlack",
};

export function FullWidthButton({
  children,
  className,
  variant = "green",
}: ButtonProps): JSX.Element {
  return (
    <button className={clsx(className, BUTTON_VARIANTS[variant])}>
      {children}
    </button>
  );
}
