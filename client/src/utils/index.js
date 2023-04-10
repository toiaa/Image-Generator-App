import FileSaver from 'file-saver';
import { surpriseMePrompts } from '../constants';

export function getRandomPrompt(propmpt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    //aca estamos buscando un index random de 1 a 49 que es el length de surpriseMePrompts y lo redondeamos para q no sea decimal
    const randomPrompt = surpriseMePrompts[randomIndex];
    //aca estamos buscando el prompt random en el array surpriseMePrompts
    if (randomPrompt === propmpt) {
        //aca estamos preguntando si el prompt random es igual al prompt que le pasamos por parametro
        return getRandomPrompt(propmpt);
        //aca estamos llamando a la funcion de nuevo , porque salio el mismo prompt que le pasamos por parametro
        //seria para que no salga el mismo que el anterior retornado
    }
    return randomPrompt;
}

export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`)
}