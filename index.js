import {Cliente} from "./Cliente.js";
import {Gerente} from "./funcionario/Gerente.js";
import {Diretor} from "./funcionario/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor = new Diretor("bernardo",2500, 123456464);
diretor.cadastrarSenha("123456")
const gerente = new Gerente("bernardo 2", 5000, 12315646523)
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 78945612379, "456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");


const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);
