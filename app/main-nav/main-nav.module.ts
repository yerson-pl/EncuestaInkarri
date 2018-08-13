import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MainNavRoutingModule } from "./main-nav.routing.module";
import { MainNavComponent } from "./main-nav.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MainNavRoutingModule
    ],
    declarations: [
        MainNavComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MainNavModule { }