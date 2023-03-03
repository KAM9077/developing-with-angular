import { Component, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-templated-list',
  templateUrl: './templated-list.component.html',
  styleUrls: ['./templated-list.component.css']
})
export class TemplatedListComponent {
  @ContentChild(TemplateRef)
  template: TemplateRef<any>;

  // @Input() items: Array<{ title: string }> = [];

  items: Array<{ title: string }> = [
    { title: 'item 1' },
    { title: 'item 2' },
    { title: 'item 3' }
  ]

  @Input('selector') aaa: TemplateRef<any> | undefined
  @Input('selector2') bbb: TemplateRef<any> | undefined
}
