import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

// Pruebas unitarias.
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  // Comprueba que la aplicación se crea correctamente.
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Comprueba que tiene el título 'front-end'.
  it(`should have as title 'front-end'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.titulo).toEqual('front-end');
  });

  // Comprueba que está renderizando un párrafo.
  it('debería renderizar un párrafo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Hola mundo');
  });

});