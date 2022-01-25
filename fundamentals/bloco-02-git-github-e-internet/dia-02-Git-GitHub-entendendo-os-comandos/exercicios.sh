# 1- Navegue até a raiz do projeto com o arquivo .txt;
cd /

#2 - Verifique se não existe nada sem "commitar" utilizando git status :
    #Caso exista algo, verifique se é necessário e faça o commit , ou remova-o.
git status

#3 - Crie uma nova branch com o nome trybe-skills-changes e faça checkout nela;
git checkout -b trybe-skills-changes

#4.0 - No arquivo .txt , ao final da lista de habilidades , adicione mais duas habilidades que serão desenvolvidas na Trybe:
cat >> trybe-skills.txt
Rect
JavaScript

#4.1 - Faça um git add nome-do-arquivo.extensao ;
git add trybe-skills.txt

#4.2 - Você pode adicionar todos os arquivos que você modificou usando git add . , mas evite isso em commits com muitos arquivos para não adicionar nenhuma alteração por engano;
git add trybe-skills.txt

#4.3 - Agora um git commit -m "Mensagem que você gostaria" ;
git commit -m "Atualizando o arquivo trybe-skills"

#4.4 - Uma boa prática é sempre resumir o que o seu commit está alterando, por exemplo, git commit -m "Adiciona nova skill" ;

#4.5 - Evite juntar muitas modificações em um único commit. Assim, caso haja algum erro no código, ficará mais fácil visualizar em qual alteração ele surgiu;

#4.5 - E por último um git push -u origin trybe-skills-changes ;
git push -u origin trybe-skills-changes

#5.0 - Abra um Pull Request com uma descrição detalhada:
#5.1 - Dê contexto para o que você está fazendo, passe links ou cite especificações que forem relevantes. Ex: "Trabalho feito para a semana 1 do curso de Software Developer da Trybe. Aqui, o desafio foi... E para resolver o problema fizemos... E o resultado foi..." ;
#5.2 - O merge deve ser feito apenas quando chegar no exercício 10.

#6 - Retorne para a branch principal, master , com o comando: git checkout master;
git checkout main

#7 - Verifique que você está na branch master , com o comando: git branch (esta branch deve estar com o formato original, sem as habilidades recém adicionadas);

#8 - Crie uma nova branch trybe-skills-updates a partir da master e faça checkout nela;

#9 - No mesmo arquivo .txt que você modificou no passo 4 , também ao final da sua lista de habilidades, adicione mais um aprendizado que você terá nos próximos blocos: