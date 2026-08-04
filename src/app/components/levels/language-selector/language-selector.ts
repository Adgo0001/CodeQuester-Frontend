import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.html',
  styleUrl: './language-selector.scss',
})
export class LanguageSelector {
  @Input() languages: string[] = [];
  @Input() chosenLanguage = '';

  @Output() languageChanged = new EventEmitter<string>();

  changeLanguage(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.languageChanged.emit(select.value);
  }

  getLanguageLogo(): string {
    return `/Icons/${this.chosenLanguage}-Icon.png`;
  }
}