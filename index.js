//Declarando as variáveis do nome e o nível do héroi
let nomeDoHeroi = prompt("Olá! Informe o nome do héroi: ");

let nivel = prompt("Boas vindas " + nomeDoHeroi + "! Por favor informe sua XP: ");

//Verificando a classificação do héroi de acordo com seu nível
//Utilizei a estrutura condicional if / else if
if (nivel <= 1000){
      console.log("Parabéns "+nomeDoHeroi+", você está no nível Ferro!");

      // As condições abaixo são executadas para todos os valores acima de 1000xp
      } else if (nivel <=2000){
        console.log("Parabéns "+nomeDoHeroi+", você está no nível Bronze!");
      } else if (nivel <=5000){
        console.log("Parabéns "+nomeDoHeroi+", você está no nível Prata!");
        } else if (nivel <=7000){
            console.log("Parabéns "+nomeDoHeroi+", você está no nível Ouro!");
            } else if (nivel <=8000){
                console.log("Parabéns "+nomeDoHeroi+", você está no nível Platina!");
              } else if (nivel <=9000){
                console.log("Parabéns "+nomeDoHeroi+", você está no nível Ascendente!");
                }  else if (nivel <=10000){
                    console.log("Parabéns "+nomeDoHeroi+", você está no nível Imortal!");
                        } else if (nivel >10000){
                            console.log("Parabéns "+nomeDoHeroi+", você está no nível Radiante!");
                        }
//Não consegui rodar no ambiente VSCode, pois utilizei o Prompt, rodei o desafio em um navegador.
