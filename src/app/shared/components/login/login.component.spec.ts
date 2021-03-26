import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('should submit form without show the errors', () => {
    component.email.setValue('ramon@gmail.com');
    component.password.setValue('123456789');

    component.submit();
     expect(component.error(component.email)).toBeFalsy();
     expect(component.error(component.password)).toBeFalsy();
   });
  
  it('should submit form with show the errors', () => {
    component.email.setValue('ramcom');
    component.password.setValue('123');

    component.submit();
     expect(component.error(component.email)).toBeDefined();
     expect(component.error(component.password)).toBeDefined();
  });
});
