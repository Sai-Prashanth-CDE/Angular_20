import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { ControlFlow } from './components/control-flow/control-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { Signals } from './components/signals/signals';
import { AttributeDirective } from './components/attribute-directive/attribute-directive';
import { LifecycleEvents } from './components/lifecycle-events/lifecycle-events';

export const routes: Routes = [
    {
        path:'admin',
        component:Admin
    },
    {
        path:'control-flow',
        component:ControlFlow
    },
    {
        path:'data-binding',
        component:DataBinding
    },
    {
        path:'signal',
        component:Signals
    },
    {
        path:'attribute-dir',
        component: AttributeDirective
    },
    {
        path:'lifecycle-events',
        component: LifecycleEvents
    }

];
