import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 py-8">
      <div className="container mx-auto px-4">
        <p className="text-center text-zinc-600 dark:text-zinc-400">
          &copy; {currentYear} AssistantHire. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
