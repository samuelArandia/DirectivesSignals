import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  private htmlElement? : ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  @Input()
  set errors( value: ValidationErrors | null | undefined ){
    this._errors = value;
    // console.log({errors : value});
    this.setErrorMessage();
  }


  @Input()
  set color( value: string ){
    this._color = value;
    // console.log({color : value});
    this.setStyle();
  }

  constructor( private el: ElementRef<HTMLElement> ) {
    // console.log(el);
    // console.log(this.htmlElement);
    this.htmlElement = el;
    // this.htmlElement.nativeElement.innerHTML = 'red';
  }

  ngOnInit(): void {
    this.setStyle();
  }

  setStyle(): void {
    if ( !this.htmlElement ) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMessage():void {
    if ( !this.htmlElement ) return;
    if ( !this._errors ) {
      this.htmlElement.nativeElement.innerText = 'No hay errores';
      return;
    }

    const errores = Object.keys( this._errors );
    console.log(errores);

    if ( errores.includes('required') ) {
      this.htmlElement.nativeElement.innerText = 'Este campo es requerido';
      return;
    }
    if ( errores.includes('minlength') ) {
      const min = this._errors!['minlength']['requiredLength'];
      const current = this._errors!['minlength']['actualLength'];
      this.htmlElement.nativeElement.innerText = `Este campo debe tener al menos ${current}/${min} caracteres`;
      return;
    }
    if ( errores.includes('email') ) {
      this.htmlElement.nativeElement.innerText = 'El formato del correo es incorrecto';
      return;
    }

  }

}
