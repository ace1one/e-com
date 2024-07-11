import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from '../layout/top-bar/top-bar.component';
import { NbActionsModule, NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbThemeModule } from '@nebular/theme';
import { NavBarComponent } from '../layout/nav-bar/nav-bar.component';
import { FormWrapperComponent } from './form-wrapper/form-wrapper.component';
import { LinkDirective } from './link/link.directive';
import { GapDirective } from './gap/gap.directive';
import { SideCategoryComponent } from './side-category/side-category.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { ProductContentComponent } from './product-content/product-content.component';
import { ProductCardComponent } from './product-card/product-card.component';




@NgModule({
  declarations: [
    FormWrapperComponent,
    LinkDirective,
    GapDirective,
    SideCategoryComponent,
    ImageSliderComponent,
    HeaderComponent,
    ProductContentComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    NbThemeModule.forRoot({ name: 'custom' }),
    NbLayoutModule,
    NbActionsModule,
    NbIconModule,
    NbFormFieldModule,
    NbInputModule,
    NbListModule,
    NbCardModule,
    NgbCarouselModule,
    NbButtonModule
  ],
  exports:[
    NbIconModule,
    FormWrapperComponent,
    LinkDirective,
    SideCategoryComponent,
    ImageSliderComponent,
    HeaderComponent,
    ProductContentComponent,
    ProductCardComponent
  ]
})
export class ComponentsModule { }
