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
git checkout -b trybe-skills-updates

#9.0 - No mesmo arquivo .txt que você modificou no passo 4 , também ao final da sua lista de habilidades, adicione mais um aprendizado que você terá nos próximos blocos:
cat >> trybe-skills.txt
NodeJS

#9.1 - Atenção! Aqui o arquivo não terá as alterações feitas anteriormente na outra branch 😉;

#9.2 - Faça um git add nome-do-arquivo.extensao ;
git add trybe-skills.txt

#9.3 - Agora um git commit -m "Mensagem que você gostaria" ;
git commit -m "Atualizando o arquivo trybe-skills"

#9.4 - e por último um git push -u origin trybe-skills-updates ;
git push -u origin trybe-skills-updates

#9.5 - Após o primeiro "push" da sua branch, você pode usar apenas o comando git push ;
#9.6 - Abra um Pull Request com uma descrição amigável:
    #9.6.1 - O merge deve ser feito apenas quando chegar no exercício 10;

#10.0 - Agora, faça o merge das branches trybe-skills-changes e trybe-skills-updates na branch master , através do Pull Request :
#10.1 - Primeiro, vá até a página do primeiro Pull Request (branch trybe-skills-changes ) e faça o merge clicando no botão verde "Merge pull request" ;
#10.2 - Agora, vá até página do outro Pull Request (branch trybe-skills-updates ) e tente fazer o merge clicando no mesmo botão. Reparou que ele está bloqueado? Isso acontece porque esse Pull Request está tentando alterar a mesma linha de código com um conteúdo diferente, e o Git não consegue determinar sozinho qual das duas linhas é a correta;
#10.3 - Você terá que resolver esse conflito antes de "mergear" o Pull Request . Clique no botão "Resolve conflicts" , escolha uma das duas versões do texto (lembre-se de apagar as linhas com <<<<<<< e >>>>>>> , elas são criadas apenas para dar uma identificação mais visual ao problema) . Depois clique em "Mark as resolved" e, em seguida, em "Commit merge" ;
#10.4 - Agora você deve conseguir "mergear" seu Pull Request normalmente. 😎