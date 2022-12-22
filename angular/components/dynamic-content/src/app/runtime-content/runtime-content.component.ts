import {
  Component,
  ViewChild,
  ViewContainerRef,
  Compiler,
  ComponentFactory,
  NgModule,
  ComponentRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { TestComponent } from '../test/test.component';
import { async } from 'rxjs';

@Component({
  selector: 'app-runtime-content',
  templateUrl: './runtime-content.component.html',
  styleUrls: ['./runtime-content.component.css'],
})
export class RuntimeContentComponent {
  private componentRef: ComponentRef<{}>;

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  // template = '<div>\nHello, {{name | json}}\n</div>';
  template = `<div><app-test [name]="data"></app-test></div>`;
  data = '{"name":"kkk"}'
  aaa = "KKKKKKKKKKK"

  htmlString = `<div>
  <app-test [name]="data"></app-test>
  </div>`;

  htmlData = this.sanitizer.bypassSecurityTrustHtml(this.template);

  constructor(private compiler: Compiler, private sanitizer: DomSanitizer) { }

  compileTemplate() {
    const metadata = {
      selector: `runtime-component-sample`,
      template: this.template,
    };

    // const index = 'test/test'
    // let imp = async () => { return await import(`../${index}.component`).then((modules) => { console.log(modules.TestComponent); return modules.TestComponent }) }
    // let comp = imp()

    const factory = this.createComponentFactorySync(
      this.compiler,
      metadata,
      TestComponent,
      this
    );

    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
    this.componentRef = this.container.createComponent(factory);
  }

  private createComponentFactorySync(
    compiler: Compiler,
    metadata: Component,
    componentClass: any,
    properties: any
  ): ComponentFactory<any> {
    const cmpClass =
      // componentClass ||
      class RuntimeComponent {
        data = JSON.parse(properties.data);
        name = JSON.parse(properties.data);
        // onClick() {
        //   alert('Clicked');
        // }
      };
    const decoratedCmp = Component(metadata)(cmpClass);
    const moduleClass = class RuntimeComponentModule { };
    const decoratedNgModule = NgModule({
      imports: [],
      declarations: [decoratedCmp, TestComponent],
    })(moduleClass);
    const module = compiler.compileModuleAndAllComponentsSync(
      decoratedNgModule
    );

    return module.componentFactories.find(
      (f) => f.componentType === decoratedCmp
    );
  }
}
