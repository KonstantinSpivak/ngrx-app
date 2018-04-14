import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { SystemComponent } from "./system.component";
import { UserComponent } from "./user/user.component";
import { DashboardComponent } from "./dashboard/dashboard.component";


const routes: Routes = [
    {
        path: 'system',
        component: SystemComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'user', component: UserComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SystemRoutingModule { }