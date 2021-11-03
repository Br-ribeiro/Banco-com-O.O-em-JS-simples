export class SistemaAutenticacao{

    static login(autenticavel, senha){

        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    // verificando se o objeto tem a função autenticar
    static ehAutenticavel(autenticavel){
       return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}