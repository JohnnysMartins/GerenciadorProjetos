import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { GerenciadorProjetosSharedModule, UserRouteAccessService } from './shared';
import { GerenciadorProjetosHomeModule } from './home/home.module';
import { GerenciadorProjetosAdminModule } from './admin/admin.module';
import { GerenciadorProjetosAccountModule } from './account/account.module';
import { GerenciadorProjetosEntityModule } from './entities/entity.module';

import { LayoutRoutingModule } from './layouts';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        GerenciadorProjetosSharedModule,
        GerenciadorProjetosHomeModule,
        GerenciadorProjetosAdminModule,
        GerenciadorProjetosAccountModule,
        GerenciadorProjetosEntityModule
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class GerenciadorProjetosAppModule {}
