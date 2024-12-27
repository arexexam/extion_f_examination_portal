import { GraduationCap } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <GraduationCap className="w-8 h-8 text-[#d041f4]" />
      <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        Extion
      </span>
    </div>
  );
}