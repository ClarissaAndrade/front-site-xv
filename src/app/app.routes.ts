import { Routes } from '@angular/router';
import { RedirectWhatsComponent } from './rotaWhats';
import { RedirectMapaComponent } from './rotaMapa';
import { RedirectInstaComponent } from './rotaInsta';

export const routes: Routes = [
    {
        path: "whats",  component: RedirectWhatsComponent
    },
    {
        path: "mapa",  component: RedirectMapaComponent
    },
    {
        path: "insta",  component: RedirectInstaComponent
    }
];
