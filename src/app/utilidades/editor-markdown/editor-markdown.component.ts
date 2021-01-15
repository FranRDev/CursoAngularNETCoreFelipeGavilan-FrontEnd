import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-editor-markdown',
  templateUrl: './editor-markdown.component.html',
  styleUrls: ['./editor-markdown.component.css']
})
export class EditorMarkdownComponent {

  @Input()
  texto = '';

  @Input()
  titulo: string = 'Texto';

  @Output()
  textoIntroducido: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

}
