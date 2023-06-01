import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  options = ['14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00'];

  limitSelections(): void {
    const selectedOptions = this.options.filter(option => this.isSelected(option));
    
    if (selectedOptions.length > 2) {
      const lastSelectedOption = selectedOptions[selectedOptions.length - 1];
      this.deselectOption(lastSelectedOption);
    }
  }

  isSelected(option: string): boolean {
    return (document.querySelector(`input[type="radio"][name="group"][value="${option}"]`) as HTMLInputElement).checked;
  }

  deselectOption(option: string): void {
    (document.querySelector(`input[type="radio"][name="group"][value="${option}"]`) as HTMLInputElement).checked = false;
  }
}

