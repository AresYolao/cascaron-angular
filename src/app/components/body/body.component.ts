import {Component} from '@angular/core'


@Component({
    selector:'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent
{

    mostrar = true;
    frase: any = {
        mensaje: "mensaje",
        autor:  "autor"
    };

    personajes: string[] = ['Spiderman','Venom','Carnage'];

}