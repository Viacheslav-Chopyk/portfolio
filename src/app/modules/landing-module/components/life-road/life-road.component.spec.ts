import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LifeRoadComponent } from "./life-road.component";

describe("LifeRoadComponent", () => {
  let component: LifeRoadComponent;
  let fixture: ComponentFixture<LifeRoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LifeRoadComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeRoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
