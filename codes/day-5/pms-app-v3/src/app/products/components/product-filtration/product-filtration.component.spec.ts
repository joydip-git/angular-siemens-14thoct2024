import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFiltrationComponent } from './product-filtration.component';

describe('ProductFiltrationComponent', () => {
  let component: ProductFiltrationComponent;
  let fixture: ComponentFixture<ProductFiltrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductFiltrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFiltrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
