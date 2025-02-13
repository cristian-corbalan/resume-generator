import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Button: React.FC<Props> = function ({ children }) {
  return (
    <button className="py-2 px-4 rounded-sm font-bold transition-colors bg-gray-900 text-gray-50 hover:bg-gray-700 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-300">
      {children}
    </button>
  );
};

export default Button;
