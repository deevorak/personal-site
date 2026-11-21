import { DOCUMENT } from '@angular/common';
import { DestroyRef, Injectable, computed, inject, signal } from '@angular/core';

export type ColorSchemePreference = 'light' | 'dark';

const STORAGE_KEY = 'color-scheme';
const DARK_MEDIA_QUERY = '(prefers-color-scheme: dark)';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  readonly storedScheme = signal<ColorSchemePreference | null>(this.readStoredScheme());
  readonly systemScheme = signal<ColorSchemePreference>(this.readSystemScheme());

  readonly resolvedScheme = computed<ColorSchemePreference>(
    () => this.storedScheme() ?? this.systemScheme()
  );
  readonly isDark = computed(() => this.resolvedScheme() === 'dark');
  readonly toggleTooltip = computed(() =>
    this.isDark() ? 'Ativar tema claro' : 'Ativar tema escuro'
  );

  constructor() {
    this.syncMetaTag(this.storedScheme());

    if (typeof window === 'undefined') {
      return;
    }

    if (typeof window.matchMedia === 'function') {
      const mediaQuery = window.matchMedia(DARK_MEDIA_QUERY);
      const handleMediaChange = (event: MediaQueryListEvent) => {
        this.systemScheme.set(event.matches ? 'dark' : 'light');
      };

      mediaQuery.addEventListener('change', handleMediaChange);
      this.destroyRef.onDestroy(() =>
        mediaQuery.removeEventListener('change', handleMediaChange)
      );
    }

    const handleStorage = (event: StorageEvent) => {
      if (event.key !== STORAGE_KEY && event.key !== null) {
        return;
      }

      const next = this.parseScheme(event.newValue);
      this.storedScheme.set(next);
      this.syncMetaTag(next);
    };

    window.addEventListener('storage', handleStorage);
    this.destroyRef.onDestroy(() => window.removeEventListener('storage', handleStorage));
  }

  toggleTheme(): void {
    const target: ColorSchemePreference =
      this.resolvedScheme() === 'dark' ? 'light' : 'dark';
    const nextStored: ColorSchemePreference | null =
      target === this.systemScheme() ? null : target;

    this.storedScheme.set(nextStored);
    this.syncMetaTag(nextStored);
    this.writeStoredScheme(nextStored);
  }

  private parseScheme(value: string | null): ColorSchemePreference | null {
    return value === 'light' || value === 'dark' ? value : null;
  }

  private readStoredScheme(): ColorSchemePreference | null {
    try {
      if (typeof localStorage === 'undefined') {
        return null;
      }
      return this.parseScheme(localStorage.getItem(STORAGE_KEY));
    } catch {
      return null;
    }
  }

  private writeStoredScheme(scheme: ColorSchemePreference | null): void {
    try {
      if (typeof localStorage === 'undefined') {
        return;
      }
      if (scheme) {
        localStorage.setItem(STORAGE_KEY, scheme);
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // Ignora falhas de persistência quando o armazenamento do navegador está bloqueado
    }
  }

  private readSystemScheme(): ColorSchemePreference {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return 'light';
    }
    return window.matchMedia(DARK_MEDIA_QUERY).matches ? 'dark' : 'light';
  }

  private syncMetaTag(scheme: ColorSchemePreference | null): void {
    const meta = this.document.querySelector('meta[name="color-scheme"]');
    if (meta) {
      meta.setAttribute('content', scheme ?? 'light dark');
    }
  }
}
