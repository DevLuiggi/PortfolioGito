import { translations, type Language } from './translations';

type Listener = (lang: Language) => void;

class LanguageStore {
  private lang: Language = 'en';
  private listeners: Set<Listener> = new Set();

  get current(): Language {
    return this.lang;
  }

  toggle(): void {
    this.lang = this.lang === 'en' ? 'es' : 'en';
    localStorage.setItem('portfolio-lang', this.lang);
    this.notify();
  }

  subscribe(fn: Listener): () => void {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  init(): void {
    const saved = localStorage.getItem('portfolio-lang') as Language | null;
    if (saved === 'en' || saved === 'es') {
      this.lang = saved;
    }
    this.notify();
  }

  getTranslation(key: string): string {
    const keys = key.split('.');
    let result: any = translations[this.lang];
    for (const k of keys) {
      result = result?.[k];
    }
    return typeof result === 'string' ? result : key;
  }

  private notify(): void {
    this.listeners.forEach((fn) => fn(this.lang));
  }
}

export const langStore = new LanguageStore();
