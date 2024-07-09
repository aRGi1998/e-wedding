import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wedding-form',
  templateUrl: './wedding-form.component.html',
  styleUrls: ['./wedding-form.component.css']
})
export class WeddingFormComponent {
  weddingForm: FormGroup;
  themes = ['Classic', 'Modern', 'Rustic', 'Boho'];

  constructor(private fb: FormBuilder, private router: Router) {
    this.weddingForm = this.fb.group({
      groomName: [''],
      groomFatherName: [''],
      groomMotherName: [''],
      groomHouseName: [''],
      groomPlaceName: [''],
      brideName: [''],
      brideFatherName: [''],
      brideMotherName: [''],
      brideHouseName: [''],
      bridePlaceName: [''],
      dateTime: [''],
      venue: [''],
      mapLocation: [''],
      theme: [''],
      backgroundImage: [null]
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input && input.files) {
      const file = input.files[0];
      this.weddingForm.patchValue({ backgroundImage: file });
    }
  }

  onSubmit(): void {
    if (this.weddingForm.valid) {
      const formData = this.weddingForm.value;
      const reader = new FileReader();

      reader.onload = () => {
        formData.backgroundImage = reader.result || null;
        localStorage.setItem('weddingDetails', JSON.stringify(formData));
        this.router.navigate(['/preview']);
      };

      if (formData.backgroundImage) {
        reader.readAsDataURL(formData.backgroundImage);
      } else {
        localStorage.setItem('weddingDetails', JSON.stringify(formData));
        this.router.navigate(['/preview']);
      }
    }
  }
}
