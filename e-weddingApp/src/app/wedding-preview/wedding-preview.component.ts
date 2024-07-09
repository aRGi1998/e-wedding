import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-wedding-preview',
  templateUrl: './wedding-preview.component.html',
  styleUrls: ['./wedding-preview.component.css']
})
export class WeddingPreviewComponent implements OnInit {
  details: any;
  themes = ['Classic', 'Modern', 'Rustic', 'Boho'];

  ngOnInit(): void {
    const storedDetails = localStorage.getItem('weddingDetails');
    if (storedDetails) {
      this.details = JSON.parse(storedDetails);
    }
  }

  getGoogleMapsLink(): string {
    return `https://maps.google.com/?q=${encodeURIComponent(this.details.mapLocation)}`;
  }

  downloadTheCard(): void {
    const element = document.querySelector('.invitation-card') as HTMLElement;
    if (element) {
      html2canvas(element).then((canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'wedding-invitation.png';
        link.click();
      });
    }
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toDateString();
  }
}
