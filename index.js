function submitAnakan() {
  alert(
    "O ano é 2175 e o planeta Terra está próximo de sua ruína. Devido ao abuso do solo e as constantes explorações em busca de minérios, o núcleo está instável e seu colapso é iminente."
  );
  alert(
    "Para evitar tamanho desastre, três exploradores do espaço são enviados em missões diferentes para adquirir recursos raros que serão necessários para a construção de um estabilizador de núcleo."
  );
  alert(
    "Anakan parte em direção ao planeta X-JARROS, localizado em uma galaxia distante e com seu céu coberto por inúmeras camadas de nuvens."
  );
  alert(
    "Por conta disso, as tempestades são mais fortes do que qualquer outra antes vista por Anakan."
  );
  alert(
    "Durante a entrada na atmosfera do Planeta X-JARROS, a nave de Anakan demonstra um problema no painel de controle. Devido as fortes descargas elétricas causadas pela tempestade, a nave se torna inutilizável."
  );

  var anakanEscolha = prompt(
    "A - Abandonar a nave em um Pod; \nB - Tentar realizar um pouso de emergência."
  );
  var anakanEscolha = anakanEscolha.toUpperCase();

  while ((anakanEscolha != "A" && anakanEscolha != "B") || anakanEscolha === "") {
    alert("Atenção! Você deve escolher entre A ou B.");
    var anakanEscolha = prompt(
      "A - Abandonar a nave em um Pod; \nB - Tentar realizar um pouso de emergência."
    );
    var anakanEscolha = anakanEscolha.toUpperCase();
  }

  if (anakanEscolha === "B") {
    alert(
      "Com muito esforço, Anakan conseguiu aterrizar a nave com sucesso em um lago raso."
    );
    alert(
      "Ele sai da nave com seus equipamentos enquanto o estabilizador elétrico volta ao normal. Para a sua sorte, não muito distande dali, há um depósito de VAR brilhando em vermelho sangue."
    );
    alert(
      "Na esperança de concluir sua missão o mais rápido possível para não ter problemas com outra tempestade que se aproxima, Anakan se vê em um impasse, agir com cautela ou agir com rapidez."
    );

    var anakanEscolha2 = prompt(
      "A - Anakan deve usar seus equipamentos para analisar o minério antes de o minerar e guardar no pote; \nB - Anakan deve agir com rapidez e tentar coletar o minério antes que a tempestade chegue."
    );
    var anakanEscolha2 = anakanEscolha2.toUpperCase();

    while ((anakanEscolha2 != "A" && anakanEscolha2 != "B") || anakanEscolha2 === "") {
      alert("Atenção! Você deve escolher entre A ou B.");
      var anakanEscolha2 = prompt(
        "A - Anakan deve usar seus equipamentos para analisar o minério antes de o minerar e guardar no pote; \nB - Anakan deve agir com rapidez e tentar coletar o minério antes que a tempestade chegue."
      );
      var anakanEscolha2 = anakanEscolha2.toUpperCase();
    }

    if (anakanEscolha2 === "A") {
      alert(
        "Anakan analisa o minério e percebe sua instabilidade e a necessidade de usar um coletor de minério espacial, além de agir com mais cautela para coletar e guardar o material."
      );
      alert(
        "Ele consegue coletar com sucesso e guardar em um pote, porém, a tempestade se aproxima. A nave esta um pouco distante, mas há uma caverna próxima."
      );

      var anakanEscolha3 = prompt(
        "A - Anakan deve correr o mais rápido que puder em direção a nave, mesmo que de encontro a tempestade, e fugir do planeta; \nB - Anakan deve tentar se proteger da tempestade na caverna."
      );
      var anakanEscolha3 = anakanEscolha3.toUpperCase();

      while ((anakanEscolha3 != "A" && anakanEscolha3 != "B") ||anakanEscolha3 === "") {
        alert("Atenção! Você deve escolher entre A ou B.");
        var anakanEscolha3 = prompt(
          "A - Anakan deve correr o mais rápido que puder em direção a nave, mesmo que de encontro a tempestade, e fugir do planeta; \nB - Anakan deve tentar se proteger da tempestade na caverna."
        );
        var anakanEscolha3 = anakanEscolha3.toUpperCase();
      }

      if (anakanEscolha3 === "A") {
        alert(
          "A missão é concluida com sucesso, e com ajuda dos outros exploradores espaciais a construção do estabilizador de núcleo consegue ser completa a tempo! Foi uma ótima jornada."
        );
      } else if (anakanEscolha3 === "B") {
        alert(
          "Logo após entrar na caverna, pouco tempo se passa até a tempestade chegar no local. Raios atingem a estrutura, derrubando rochas que prendem Anakin dentro da caverna."
        );
        alert("GAME OVER! Tente novamente.");
      }
    } else if (anakanEscolha2 === "B") {
      alert(
        "Devido a velocidade que seria necessária para a coletagem do minério, Anakan fica nervoso e derruba o VAR, quer por sua vez explode e acaba com a jornada de Anakan."
      );
      alert("GAME OVER! Tente novamente.");
    }
  } else if (anakanEscolha === "A") {
    alert(
      "A nave foi totalmente destrúida após a evacuação de Anakan. Nosso aventureiro sobreviveu por muitos anos no planeta X-JARROS, mas sem acesso a qualquer uma de suas ferramentas, ele nunca conseguiu sair."
    );
    alert("GAME OVER! Tente novamente.");
  }
}

function submitCowboy() {
  alert(
    "O ano é 2175 e o planeta Terra está próximo de sua ruína. Devido ao abuso do solo e as constantes explorações em busca de minérios, o núcleo está instável e seu colapso é iminente."
  );
  alert(
    "Para evitar tamanho desastre, três exploradores do espaço são enviados em missões diferentes para adquirir recursos raros que serão necessários para a construção de um estabilizador de núcleo."
  );
  alert(
    "Cowboy Espacial chega ao seu destino, o planeta Rex-18. Enquanto sobrevoa a área tentando rastrear RES-ILIA, sua nave é atacada por piratas espaciais."
  );
  alert(
    "Após o ataque, Cowboy identifica pelo painel de controle que a nave teve a estrutura danificada."
  );

  var cowboyEscolha = prompt(
    "A - Abandonar a nave em um Pod; \nB - Tentar realizar um pouso de emergência."
  );
  var cowboyEscolha = cowboyEscolha.toUpperCase();

  while ((cowboyEscolha != "A" && cowboyEscolha != "B") ||cowboyEscolha === "") {
    alert("Atenção! Você deve escolher entre A ou B.");
    var cowboyEscolha = prompt(
      "A - Abandonar a nave em um Pod; \nB - Tentar realizar um pouso de emergência."
    );
    var cowboyEscolha = cowboyEscolha.toUpperCase();
  }

  if (cowboyEscolha === "A") {
    alert(
      "O Pod é ejetado enquanto a nave vai em direção ao solo. Chegando ao chão, Cowboy Espacial nota que a nave dos piratas está a caminho dos destroços de sua nave."
    );
    alert(
      "Ele começa a caminhar nas dunas com o pouco equipamento que tem e avista um buraco enorme com várias árvores ao redor, indicando a existência de água e possivelmente do elemento RES."
    );
    alert(
      "Ao se aproximar, Cowboy percebe que para descer pode ir por um caminho no qual ele não enxerga nada ou realizar um salto de fé para tentar cair no que parece ser um lago fundo."
    );

    var cowboyEscolha2 = prompt(
      "A - Tentar o salto de fé; \nB - Percorrer o caminho escuro."
    );
    var cowboyEscolha2 = cowboyEscolha2.toUpperCase();

    while ((cowboyEscolha2 != "A" && cowboyEscolha2 != "B") ||cowboyEscolha2 === "") {
      alert("Atenção! Você deve escolher entre A ou B.");
      var cowboyEscolha2 = prompt(
        "A - Tentar o salto de fé; \nB - Percorrer o caminho escuro."
      );
      var cowboyEscolha2 = cowboyEscolha2.toUpperCase();
    }

    if (cowboyEscolha2 === "A") {
      alert(
        "Ao realizar o salto de fé, Cowboy Espacial se vê em um lago de profundidade desconhecida, porém identifica o que parece ser um material brilhante abaixo dele."
      );
      alert(
        "Ao seu redor, apenas uma estrutura de pedras em ruínas e árvores, sem identificação de margem para exploração."
      );

      var cowboyEscolha3 = prompt(
        "A - Cowboy Espacial deve mergulhar e explorar o possível objeto brilhante; \nB - Cowboy Espacial deve persistir e explorar as ruínas."
      );
      var cowboyEscolha3 = cowboyEscolha3.toUpperCase();

      while ((cowboyEscolha3 != "A" && cowboyEscolha3 != "B") ||cowboyEscolha3 === "") {
        alert("Atenção! Você deve escolher entre A ou B.");
        var cowboyEscolha3 = prompt(
          "A - Cowboy Espacial deve mergulhar e explorar o possível objeto brilhante; \nB - Cowboy Espacial deve persistir e explorar as ruínas."
        );
        var cowboyEscolha3 = cowboyEscolha3.toUpperCase();
      }

      if (cowboyEscolha3 === "A") {
        alert(
          "A missão é concluida com sucesso, e com ajuda dos outros exploradores espaciais a construção do estabilizador de núcleo consegue ser completa a tempo! Foi uma ótima jornada."
        );
      } else if (cowboyEscolha3 === "B") {
        alert(
          "No momento em que sai do lago, Cowboy escuta um barulho estridente vindo dos cantos da ruína, mas mesmo assim decide continuar a exploração."
        );
        alert(
          "Sem tempo de reação, Cowboy Espacial é arremessado por uma criatura e não sobrevive."
        );
        alert("GAME OVER! Tente novamente.");
      }
    } else if (cowboyEscolha2 === "B") {
      alert(
        "Cowboy tenta seguir o caminho nas dunas escuras e encontra uma criatura colossal. Sem suas armas, que ficaram na nave, o nosso viajante é atacado e morre."
      );
      alert("GAME OVER! Tente novamente.");
    }
  } else if (cowboyEscolha === "B") {
    alert(
      "Mesmo com a estrutura de sua nave comprometida, ele consegue aterrizar, mas os piratas, que vieram roubar os componentes de sua nave, são muitos..."
    );
    alert("GAME OVER! Tente novamente.");
  }
}

function submitLaika() {
  alert(
    "O ano é 2175 e o planeta Terra está próximo de sua ruína. Devido ao abuso do solo e as constantes explorações em busca de minérios, o núcleo está instável e seu colapso é iminente."
  );
  alert(
    "Para evitar tamanho desastre, três exploradores do espaço são enviados em missões diferentes para adquirir recursos raros que serão necessários para a construção de um estabilizador de núcleo."
  );
  alert(
    "Laika vai para um planeta de gelo, o Midnight-Mistery01, que já havia sido habitado por uma civilização, mas a temperatura tornou a possibilidade de vida mais improvável."
  );
  alert(
    "Acredita-se que o artefato conhecido como Golden Circle pode estar soterrado em alguma parte da superfice congelada."
  );
  alert(
    "Ao chegar no planeta com sua nave, Laika identifica, através de seus equipamentos, uma estrutura subterrânea."
  );

  var laikaEscolha = prompt(
    "A - Laika decide adentrar a estrutura subterrânea; \nB - Laika decide continuar sobrevoando o planeta."
  );
  var laikaEscolha = laikaEscolha.toUpperCase();

  while ((laikaEscolha != "A" && laikaEscolha != "B") || laikaEscolha === "") {
    alert("Atenção! Você deve escolher entre A ou B.");
    var laikaEscolha = prompt(
      "A - Laika decide adentrar a estrutura subterrânea; \nB - Laika decide continuar sobrevoando o planeta."
    );
    var laikaEscolha = laikaEscolha.toUpperCase();
  }

  if (laikaEscolha === "A") {
    alert(
      "Chegando na estrutura subterrânea, Laika identifica uma caverna. Após caminhar por algum tempo dentro dela, a viajante encontra uma bifurcação."
    );
    alert(
      "Laika, porém, sabe que seu tempo é curto e precisa de uma decisão rápida."
    );

    var laikaEscolha2 = prompt(
      "A - Percorrer o caminho da esquerda; \nB - Percorrer o caminho da direita."
    );
    var laikaEscolha2 = laikaEscolha2.toUpperCase();

    while ((laikaEscolha2 != "A" && laikaEscolha2 != "B") ||laikaEscolha2 === "") {
      alert("Atenção! Você deve escolher entre A ou B.");
      var laikaEscolha2 = prompt(
        "A - Percorrer o caminho da esquerda; \nB - Percorrer o caminho da direita."
      );
      var laikaEscolha2 = laikaEscolha2.toUpperCase();
    }

    if (laikaEscolha2 === "B") {
      alert(
        "Laika segue o caminho da direita e encontra uma torre gigante feita de gelo. Ela usa seus equipamentos para escalar até a entrada e se depara com uma mesa e um item sobre ela."
      );
      alert(
        "Laika usa seu identificador de objetos e tem certeza de que se trata do Golden Circle. O que Laika deve fazer?"
      );

      var laikaEscolha3 = prompt(
        "A - Laika deve avançar até a mesa e coletar o artefato; \nB - Laika inspeciona o ambiente antes de avançar em direção ao artefato."
      );
      var laikaEscolha3 = laikaEscolha3.toUpperCase();

      while ((laikaEscolha3 != "A" && laikaEscolha3 != "B") ||laikaEscolha3 === "") {
        alert("Atenção! Você deve escolher entre A ou B.");
        var laikaEscolha3 = prompt(
          "A - Laika deve avançar até a mesa e coletar o artefato; \nB - Laika inspeciona o ambiente antes de avançar em direção ao artefato."
        );
        var laikaEscolha3 = laikaEscolha3.toUpperCase();
      }

      if (laikaEscolha3 === "B") {
        alert(
          "A missão é concluida com sucesso, e com ajuda dos outros exploradores espaciais a construção do estabilizador de núcleo consegue ser completa a tempo! Foi uma ótima jornada."
        );
      } else if (laikaEscolha3 === "B") {
        alert(
          "No momento em que Laika avança para atravessar a sala, uma armadilha é ativada, o que coloca um fim na jornada de Laika."
        );
        alert("GAME OVER! Tente novamente.");
      }
    } else if (laikaEscolha2 === "A") {
      alert(
        "Cowboy tenta seguir o caminho nas dunas escuras e encontra uma criatura colossal. Sem suas armas, que ficaram na nave, o nosso viajante é atacado e morre."
      );
      alert("GAME OVER! Tente novamente.");
    }
  } else if (laikaEscolha === "B") {
    alert(
      "Laika segue sobrevoando o planeta, mas é surpreendida por uma tempestade de gelo que danifica o sistema de elerólise de sua nave, a deixando sem oxigênio."
    );
    alert("GAME OVER! Tente novamente.");
  }
}
