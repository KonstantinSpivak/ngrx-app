import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { SystemRoutingModule } from "./system.routing.module";
import { SystemComponent } from "./system.component";
import { UserComponent } from "./user/user.component";
import { MenuComponent } from "./shared/component/menu/menu.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ListComponent } from "./user/list/list.component";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SystemRoutingModule
    ],
    declarations: [
        SystemComponent,
        UserComponent,
        ListComponent,
        DashboardComponent,
        MenuComponent,
    ]
})

export class SystemModule { }