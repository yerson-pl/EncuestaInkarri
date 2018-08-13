import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { MainNavComponent } from "./main-nav.component";

const routes: Routes = [
    { path: "", component: MainNavComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MainNavRoutingModule { }