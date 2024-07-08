import { AfterContentInit, Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'ecom-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrl: './form-wrapper.component.scss'
})
export class FormWrapperComponent implements AfterContentInit {
  @Input() label?: string;
  @Input() icon?: string;
  @ContentChild(NgControl) control?: NgControl;
  @ContentChild('errorTemplate') errorTemplate?: TemplateRef<any>;

  errorMessage: string | null = null;

  ngAfterContentInit() {
    if (this.control) {
      this.control.statusChanges?.subscribe(() => {
        this.updateErrorMessage();
      });
      this.updateErrorMessage();  // Initial check
    }
  }

  private updateErrorMessage() {
    if (this.control?.invalid && (this.control?.dirty || this.control?.touched)) {
      if (this.control.errors) {
        // Check for various error conditions
        if (this.control.errors['required']) {
          this.errorMessage = 'This field is required';
        } else if (this.control.errors['minlength']) {
          this.errorMessage = `Minimum length is ${this.control.errors['minlength'].requiredLength}`;
        } else if (this.control.errors['maxlength']) {
          this.errorMessage = `Maximum length is ${this.control.errors['maxlength'].requiredLength}`;
        } else if (this.control.errors['pattern']) {
          this.errorMessage = `Invalid format`;
        } else {
          this.errorMessage = 'Invalid field';
        }
      } else {
        this.errorMessage = null;
      }
    } else {
      this.errorMessage = null;
    }
  }

}