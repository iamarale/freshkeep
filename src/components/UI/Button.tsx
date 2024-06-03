import { ReactNode, ReactElement } from 'react';

type ButtonType = 'success' | 'danger' | 'default';

interface ButtonProps {
  type: ButtonType;
  children: ReactNode;
  icon?: ReactElement;
}

export default function Button({
  type = 'default',
  onClick,
  children,
  icon,
}: ButtonProps) {
  let className;

  switch (type) {
    case 'success':
      className = 'border-green-700 border-[1px]';
      break;
    case 'danger':
      className = 'border-red-700 border-[1px]';
      break;
    default:
      className = 'border-neutral-200 border-[1px]';
  }

  return (
    <button
      onClick={onClick}
      className={`${className} flex gap-2 rounded px-3 py-1 text-neutral-50 duration-200 hover:opacity-60 md:flex-1 md:justify-between`}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}
