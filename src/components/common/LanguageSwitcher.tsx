import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC<{ compact?: boolean }> = ({ compact }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:border-slate-600 transition-colors cursor-pointer"
      title="Toggle Language / العربية / English"
    >
      <Globe className="w-3.5 h-3.5 text-cyan-400" />
      <span>{language === 'en' ? 'العربية (AR)' : 'English (EN)'}</span>
    </button>
  );
};
