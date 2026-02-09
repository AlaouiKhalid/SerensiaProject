import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  term: string = '';
  rawChoices: string = '';
  numberOfSuggestions!: number;

  suggestions: string[] = [];

  search(): void {
    if (!this.term || !this.rawChoices || !this.numberOfSuggestions) {
      this.suggestions = [];
      return;
    }

    const choices = this.rawChoices
      .split(',')
      .map(c => c.trim().toLowerCase())
      .filter(c => c.length > 0);

    this.suggestions = this.getSuggestions(
      this.term.toLowerCase(),
      choices,
      this.numberOfSuggestions
    );
  }

  private getSuggestions(
    term: string,
    choices: string[],
    limit: number
  ): string[] {
    return choices
      .map(choice => ({
        word: choice,
        score: this.getDifferenceScore(choice, term),
        lengthDiff: Math.abs(choice.length - term.length),
      }))
      .sort((a, b) => {
        if (a.score !== b.score) return a.score - b.score;
        if (a.lengthDiff !== b.lengthDiff) return a.lengthDiff - b.lengthDiff;
        return a.word.localeCompare(b.word);
      })
      .slice(0, limit)
      .map(x => x.word);
  }

  private getDifferenceScore(dest: string, src: string): number {
    const minLength = Math.min(dest.length, src.length);
    let differences = 0;

    for (let i = 0; i < minLength; i++) {
      if (dest[i] !== src[i]) differences++;
    }

    differences += Math.abs(dest.length - src.length);
    return differences;
  }
}
