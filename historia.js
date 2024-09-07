let historia = {
    "dia0": "A tripulação da nave Yukito está retornando de uma missão de coleta materiais para a construção de componentes eletrônicos para uma organização. Próximo ao final da viagem, vocês são surpreendidos por uma violenta turbulência causada por um campo de asteroides. A situação força um pouso de emergência em um planeta desconhecido. Com o impacto, toda a tripulação faleceu, restando apenas você como sobrevivente.",
    "dia1": "Sistemas online. Boa tarde, comandante. Detectei que seus sinais vitais estão estabilizados, e seus níveis de energia estão críticos. A nave sofreu danos severos durante o pouso forçado, e a tripulação... infelizmente, não sobreviveu. Suas chances de sobrevivência dependem de decisões estratégicas imediatas. O rádio de comunicação foi comprometido, mas análises preliminares indicam que pode ser reparado com os recursos certos. Precisamos coletar componentes externos para reativá-lo e enviar um sinal de socorro. Restam apenas 45% de suas reservas alimentares. Recomendo agir rapidamente.",
    "dia2": "Comandante, é hora de se levantar. Precisamos começar a busca pelas peças imediatamente. O ciclo diurno deste planeta é extremamente curto, e seus recursos continuam diminuindo. Recomendo agir com eficiência para evitar que a situação se torne irreversível. Além disso, detectei movimentação desconhecida ao redor da nave. Não podemos identificar a natureza ou intenções dessas entidades, mas sugiro extrema cautela. Priorize a recuperação das peças, mas esteja atento a possíveis ameaças.",
    "dia3": "Bom dia, comandante. É hora de acordar e retomar a busca. Apesar de ontem não ter encontrado nenhuma das peças, não devemos perder a esperança, elas ainda estão em algum lugar nas proximidades.",
    "dia4": "Bom dia, comandante! Parabéns por ter encontrado duas das peças essenciais — o Condensador de Fluxo e o Transformador de Partículas. Excelente trabalho! Com essas peças, o rádio está parcialmente operacional. No entanto, para aumentar o sinal e realmente enviar um pedido de ajuda, ainda precisamos do Oscilador de Ondas. Continue a busca com determinação. Estamos mais perto de conseguir comunicação com o mundo exterior, mas precisamos encontrar essa última peça para completar a restauração do rádio.",
    "dia5": "Acorde imediatamente! Houve uma invasão na nave. Algo conseguiu penetrar no interior e representa uma ameaça iminente. Precisamos agir com rapidez sua segurança está em perigo. Vou realizar uma varredura para identificar a origem da invasão e fornecer mais informações sobre a situação.",
    "dia6":  "Comandante, precisamos agir rapidamente. Temos pouco tempo de luz antes que a noite caia e as condições se tornem ainda mais perigosas. A caverna onde nos abrigamos na última noite foi de grande auxílio, mas o traje de proteção não conseguirá nos manter seguros por muito tempo devido às suas limitações. Precisamos recuperar o Oscilador de Ondas e completar nossa missão antes que a situação se torne insustentável.",
    "dia7": "Comandante, o sinal de socorro foi enviado com sucesso e o resgate chegou. A missão foi cumprida com bravura, apesar das adversidades. Sua determinação e coragem foram essenciais para superar os desafios enfrentados. Agora, você está a salvo e a nave será recuperada. Descanso e recuperação são necessários após tudo o que passou. Parabéns pela sobrevivência e pelo sucesso na missão. Estarei sempre disponível para auxiliar em futuras jornadas."
};

let listaEventos = [
    {
        dia: 0,
        eventos: {
            "Verificar danos na nave": "Analisando o estado da nave... Os danos são extensivos e severos. A estrutura está em condições críticas. Com os recursos atualmente disponíveis, não há possibilidade de reparo ou decolagem. Sua situação é grave, comandante. Recomendo focar na restauração do rádio como única chance de comunicação externa.",
            "Verificar saúde": "Analisando sua condição física... Você apresenta alguns arranhões e contusões leves, mas nada que comprometa sua integridade. Sua condição geral é estável, porém, cuidados contínuos serão necessários para manter sua eficiência operacional. Recomendo descanso e atenção aos sinais vitais."
        }
    },
    {
        dia: 1,
        eventos: {
            "Atmosfera do planeta": "Analisando a atmosfera do planeta... Os níveis de toxinas são extremamente elevados. A composição inclui gases corrosivos e partículas nocivas que tornam o ambiente letal para formas de vida não adaptadas. Recomendo fortemente o uso contínuo do traje de proteção. Qualquer exposição direta pode resultar em danos irreversíveis à sua saúde, comandante.",
            "Consertar o rádio": "Para restaurar o rádio, precisamos recuperar três peças-chave do módulo de transmissão que se dispersaram na região durante o impacto da nave. Sem elas, a comunicação será impossível. As peças são as seguintes, comandante: Condensador de Fluxo, Oscilador de ondas e do Transformador de Partículas. Essas peças foram lançadas ao redor do ponto de impacto. Será necessário explorarmos as redondezas para recuperá-las."
        }
    },
    {
        dia: 2,
        eventos: {
            "Iniciar buscas": "Para a busca, recomendo que você comece vasculhando a área ao redor da nave. As peças necessárias para a restauração do rádio podem estar espalhadas em um raio considerável. Procure especificamente pelo Condensador de Fluxo, pelo Oscilador de Ondas e pelo Transformador de Partículas. Além disso, é crucial coletar qualquer tipo de matéria orgânica disponível. Essa matéria ajudará a manter o combustível responsável pelo aquecimento da nave, garantindo que você tenha uma fonte de energia estável enquanto trabalha para restaurar o rádio.",
            "Minhas armas": "Após o impacto e os danos subsequentes, a única arma restante em condições operacionais é a pistola de plasma ionizado. As outras armas e equipamentos foram destruídos ou ficaram inutilizáveis. Recomendo usar a pistola com cautela e somente em situações de defesa, dada a sua importância limitada e o risco potencial que enfrentamos no planeta."
        }
    },
    {
        dia: 3,
        eventos: {
            "Meus recursos": "Analisando os recursos atuais, eles deverão durar aproximadamente mais 4 dias com o ritmo atual de consumo. O maior problema é o aquecimento da nave, que foi severamente danificado no impacto. O sistema de aquecimento está operando em estado crítico. Devemos continuar buscando matéria para fornecimento de energia afim de deixa-lo estável para evitar um colapso completo do sistema. Continuar a busca pelas peças do rádio e encontrar matéria orgânica para o combustível são essenciais para manter a nave funcionando e garantir sua sobrevivência.",
            "Barulhos durante a noite": "Ainda não conseguimos identificar a origem dos barulhos que você ouviu durante a noite. A causa permanece desconhecida, e a movimentação ao redor da nave continua sendo uma preocupação. Recomendo que prossiga com cautela. Continue sua busca pelas peças e mantenha-se alerta para qualquer sinal de perigo. Evitar confrontos desnecessários é crucial para garantir sua segurança."
        }
    },
    {
        dia: 4,
        eventos: {
            "Mapa da região": "Após os dias de exploração, consegui mapear toda a região ao redor da nave. Com base nas suas buscas e no mapeamento realizado, a análise indica que a peça que falta, o Oscilador de Ondas, pode estar localizada na região montanhosa ao sul. Essa área foi menos explorada até agora, o que sugere que é um local potencial para encontrar a peça. Recomendo que você direcione seus esforços para essa região montanhosa para aumentar suas chances de sucesso.",
            "Chance de sobrevivência": "Com base na análise atual, suas chances de sobrevivência são boas. Temos mais 3 dias de mantimentos disponíveis, o que deve ser suficiente para continuar a busca. Além disso, as condições indicam uma alta probabilidade de encontrar o Oscilador de Ondas ainda hoje, especialmente com a exploração direcionada para a região montanhosa ao sul. O tempo de resgate é de um dia."
        }
    },
    {
        dia: 5,
        eventos: {
            "Arma": "Acorde, comandante! Seus tiros não tiveram efeito algum na criatura. Ela o jogou para longe e você desmaiou com o impacto.",
            "Radio": "Péssimas notícias, comandante. A criatura parece estar interessada no núcleo energético da nave e está causando danos significativos. Os danos são graves; a nave encontra-se em estado crítico. O núcleo está extremamente instável e corre o risco de explodir a qualquer momento."
        }
    },
    {
        dia: 6,
        eventos: {
            "Subir montanha": "Comandante, excelente trabalho ao encontrar a peça. No entanto, é crucial que você retorne urgentemente à caverna. A noite está caindo, e não sabemos quais perigos podem surgir. Seus níveis de oxigênio estão muito baixos. O sinal de socorro está sendo enviado.Tome extremo cuidado ao voltar para garantir sua segurança. A caverna oferece a proteção necessária contra os riscos externos, e precisamos garantir que você chegue em segurança."
        }
    },
    {
        dia: 7,
        eventos: {
            "Fim": "Obrigado por acompanhar."
        }
    }
];