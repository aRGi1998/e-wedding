import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingPreviewComponent } from './wedding-preview.component';

describe('WeddingPreviewComponent', () => {
  let component: WeddingPreviewComponent;
  let fixture: ComponentFixture<WeddingPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeddingPreviewComponent]
    });
    fixture = TestBed.createComponent(WeddingPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
