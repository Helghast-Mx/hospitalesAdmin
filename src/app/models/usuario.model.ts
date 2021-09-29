import { environment } from "src/environments/environment"

const api_url = environment.apiUrl

export class Usuario {

    constructor(
        public nombre    : string, 
        public email     : string,
        public password  : string,
        public role     ?: string,
        public google   ?: string,
        public img      ?: string,
        public uid      ?: string,
        
    ) {}

    get imagenUrl() {

        // /upload/usuarios/no-image
        if ( !this.img ){
            return `${api_url}/upload/usuarios/no-image`
        } else if ( this.img.includes('https') ){
            return this.img
        }  else if (this.img) {
            return `${api_url}/upload/usuarios/${ this.img }`
        } else {
            return `${api_url}/upload/usuarios/no-image`
        }

    }
}