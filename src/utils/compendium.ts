export interface CompendiumItem {
    nome: string;
    descricao: string;
    images?: string[],
    detalhes?: Record<string, any>;
}

export const COMPENDIUM_DATA: Record<string, CompendiumItem[]> = {
    'Guia Rápido': [
        {
            nome: 'Overview',
            descricao: `Rolemaster é capaz de representar uma ampla gama de situações com um toque realista, a maioria das quais é resolvida por meio de manobras (por exemplo, correr, arrombar uma fechadura, escalar uma parede ou sintonizar-se com um item mágico). Os testes de manobra são feitos rolando um d100OE, modificado por bônus de perícia e modificadores situacionais. Os personagens só realizam manobras para ações executadas sob estresse ou pressão, ou se as ações forem difíceis o suficiente para que o sucesso não seja garantido. As regras de Rolemaster se enquadram em uma das áreas abaixo.
                        Para mais detalhes leia o livro.`,
            detalhes: {
                Perícias: 'O conhecimento e o treinamento de um personagem são representados por suas perícias. Os personagens recebem um certo número de pontos em perícias específicas com base em sua formação cultural, após o qual podem adquirir pontos adicionais em quaisquer perícias desejadas a cada nível (incluindo o 1º nível). Qualquer personagem pode desenvolver qualquer perícia, mas a dificuldade de fazê-lo depende de sua profissão. Perícias fundamentais para uma profissão são as mais fáceis de aprender, enquanto aquelas não relacionadas à profissão são as mais difíceis.',
                Manobras: 'As ações são resolvidas por meio de testes de manobra. As manobras podem ser Manobras Absolutas (aquelas que têm sucesso ou falham, como pular um abismo ou arrombar uma fechadura) ou Manobras Percentuais (aquelas que podem ter uma quantidade variável de sucesso, como correr ou escalar). O teste de manobra é modificado pela perícia aplicável do personagem, bem como pela dificuldade da manobra.',
                Movimento_e_Sobrecarga: 'Muitas manobras envolvem movimento, seja caminhando, voando ou nadando. A velocidade de movimento e o peso carregado podem modificar a dificuldade de uma manobra. O movimento impõe uma penalidade de Ritmo a outras manobras realizadas durante o movimento, enquanto uma carga pesada impõe uma penalidade de Sobrecarga. Personagens mais fortes conseguem carregar mais material antes de sentirem os efeitos da carga.',
                Fadiga: 'Os personagens frequentemente se envolvem em atividades fisicamente extenuantes (por exemplo, correr, marchar, escalar, nadar e lutar) e correm o risco de se fatigarem. Carga, atividade, fome, sono e fatores ambientais podem ter um grande impacto na rapidez com que um personagem sucumbe à exaustão. Ao longo de suas atividades, os personagens devem fazer testes de Resistência como Manobras Absolutas. O sucesso indica a capacidade de continuar sem se cansar, enquanto a falha acarreta penalidades de Fadiga que se acumulam com o tempo. Se a Fadiga se acumular o suficiente, pode até levar a ferimentos. As penalidades de Fadiga podem ser remediadas descansando.',
                Ataques: 'Tentar infligir dano a outro ser é um ataque e pode ser feito com uma arma, um soco, uma magia ou qualquer outra ação violenta direta. Um teste de ataque é resolvido como outras perícias: um d100 é rolado e o bônus de perícia de ataque apropriado, chamado Bônus Ofensivo (OB), é adicionado. O Bônus Defensivo (DB) do alvo é então subtraído do resultado total. O resultado é determinado consultando-se uma tabela de ataque para a arma, com o resultado baseado na rolagem e na armadura do oponente.',
                Ferimentos: 'Os personagens e seus adversários invariavelmente se ferem ao se enfrentarem. O tipo mais simples de dano é a concussão. Conforme um personagem perde mais e mais pontos de vida, ele começa a sofrer penalidades e eventualmente perde a consciência e possivelmente a vida. No entanto, os Acertos Críticos infligidos em combate podem resultar em danos mais graves, desde hematomas e membros quebrados até pulmões perfurados, e podem acarretar penalidades em manobras.',
                Conjuração: 'A conjuração de feitiços difere das manobras devido à natureza da magia. Conjurar um feitiço utiliza uma modificação de perícia menor do que as jogadas de ataque ou manobras, baseada apenas no número de pontos (não bônus) na especialização da perícia (uma lista específica de feitiços) mais um bônus de atributo baseado no reino utilizado. Os conjuradores devem fazer uma rolagem aberta, mais o bônus, mais quaisquer modificadores situacionais. Se o resultado final for 1 ou maior, o feitiço foi conjurado com sucesso. Resultados mais altos resultam em feitiços mais difíceis de resistir. Se o resultado final for 0 ou menor, a conjuração falhou.',
                Testes_de_Resistência: 'Alguns perigos durante o jogo exigem que um personagem resista a algum efeito nocivo (por exemplo, magia, veneno ou doença). Testes de Resistência são uma ação oposta, onde o teste é feito contra uma jogada de ataque. Alguns são estritamente sucesso/falha, enquanto outros têm graus variáveis de falha. Ao contrário das manobras, os Testes de Resistência não são modificados por perícia e, em vez disso, dependem das características inatas do personagem (atributos, nível, talentos e defeitos).'
            }
        },
        {
            nome: 'Criação Rápida de Personagem',
            descricao: 'Esta lista de verificação serve como uma referência rápida para o processo de criação de personagens. Esses passos não precisam necessariamente ser seguidos na ordem em que estão listados.',
            detalhes: {
                1: 'Pense no conceito do personagem que você deseja interpretar. Um bom conceito deve incluir Raça, Cultura e Profissão.',
                2: 'Raça: Sua raça também pode conceder bônus ou penalidades em bônus de atributos e outras características, bem como talentos e defeitos, e a maioria das raças fornecerá uma reserva de Pontos de Desenvolvimento (DP) bônus.',
                3: 'Cultura: Você receberá níveis em perícias com base na cultura escolhida. Algumas perícias são automáticas (por exemplo, todo personagem receberá pelo menos 1 nível em Desenvolvimento Corporal), enquanto outras devem ser atribuídas.',
                4: 'Profissão: Você selecionará 10 Perícias Profissionais e 2 Aptidões com base na sua profissão. Para conjuradores, sua profissão determinará seu reino mágico; profissões de Armas devem escolher um reino.',
                5: 'Gere os atributos do seu personagem.',
                6: 'Selecione quaisquer talentos e obtenha a aprovação do Mestre antes de comprá-los com Pontos de Desenvolvimento.',
                7: 'Compre suas habilidades. Os custos dependerão da sua profissão.',
                8: 'Se o seu personagem for de nível superior a 1, repita os passos 3 e 4 até concluir.',
                9: 'Compre o equipamento inicial e calcule seus bônus e outros parâmetros.'
            }
        },
        {
            nome: 'Perícias e Talentos',
            descricao: `Com profissão, raça, cultura e atributos definidos, é hora de criar o núcleo do personagem: as perícias. Pontos de Desenvolvimento (DP) são gastos a cada nível para desenvolver e treinar perícias. Treinamento e aptidão natural (baseada nos atributos) afetam a chance de realizar certas ações e atividades (por exemplo, lutar, manobrar, conjurar magias, etc.). A lista completa de perícias e suas descrições está na seção de Perícias. Os custos das perícias são determinados pela profissão do personagem.
                        Os personagens começam com 60 DP a cada nível, mais um número de DP bônus baseado na raça. Os DP bônus podem ser gastos em talentos na criação do personagem ou nos níveis iniciais. Até 25 DP bônus são gastos a cada nível até que todos sejam utilizados (por exemplo, um humano que não gasta nada em talentos recebe 60 + 25 = 85 DP para cada um dos níveis 1 e 2).
                        O Mestre também pode permitir que os personagens gastem DP em talentos. Embora algumas raças recebam talentos especiais automaticamente, outras habilidades, sejam culturais ou individuais, podem ser adquiridas como talentos e defeitos. Enquanto as perícias são treinadas em pequenos incrementos ao longo do tempo, talentos e defeitos representam (in)capacidades ou condições que alguém possui ou não. Enquanto as perícias podem ser adquiridas diversas vezes para aprimorá-las, os talentos são adquiridos uma única vez ou um número limitado de vezes, dependendo do talento.`,
        }
    ], //ok
    'Raças': [
        {
            nome: 'Overview',
            descricao: `Esta seção fornece uma ampla variedade de exemplos de raças, variando em estatura e habilidades inatas, como força, velocidade, resistência ou resistência/suscetibilidade à magia. Essas raças incluem aquelas extraídas da literatura fantástica e as raças mais comuns em jogos de RPG de fantasia, bem como outras extraídas da história de Rolemaster. Um Mestre de Jogo deve examinar cada raça cuidadosamente antes de incluí-la em sua campanha — nem todas essas raças são adequadas para todos os cenários, e algumas podem ser mais apropriadas como NPCs e adversários do que como personagens jogadores.
                        A raça de um personagem pode conceder bônus ou penalidades aos bônus de atributos, testes de Resistência, acertos, testes de Vigor e modificar o tempo de recuperação. Algumas raças têm talentos ou defeitos especiais que conferem a todos os personagens da raça uma habilidade ou desvantagem especial que não é representada por simples bônus ou penalidades; Essas características são resumidas nas descrições das raças.
                        Cada raça fornece uma reserva de Pontos de Desenvolvimento bônus na criação do personagem. Até 25 desses pontos podem ser gastos por nível em talentos ou aprimoramento deperícias durante o desenvolvimento de nível.`,
            images: ['/public/racas-bonus.png']
        },
        {
            nome: 'Avinarc',
            descricao: `Um capuz retirado de um estranho de manto escuro no canto mais afastado de uma taverna pode revelar um Avinarc, com sua cabeça semelhante à de um falcão e sua pele coberta de penas. As outrora poderosas asas do Avinarc tornaram-se braços com mãos hábeis. Apenas suas cabeças e penas os denunciam como não humanos.
                    Outrora uma raça orgulhosa e nobre, com terras e nações próprias, esse povo-pássaro viu seu número diminuir lentamente devido a uma poderosa maldição lançada sobre eles em eras passadas. Uma antiga profecia afirma que os Avinarcs um dia superarão a maldição e ressurgirão em número e poder. Agora são reclusos, misturando-se silenciosamente à sociedade humana, muitas vezes envolvendo-se com o lado mais sombrio da humanidade. Usam sua rapidez e agilidade aviárias para auxiliá-los em roubos e trapaças.`,
            images: ['/public/races/avinarc.png'],
            detalhes: {
                Olfato_Aguçado_II: 'Os Avinarcs recebem um bônus de +10 em testes de Percepção envolvendo olfato.',
                Ossos_Leves_I: 'Os Avinarcs são tratados como criaturas Pequenas para fins de seus acertos (determine normalmente e multiplique por 0,75) e ataques contra eles, mas não para outros fins.',
                Armamento_Natural: 'Os Avinarcs podem atacar usando seus bicos, utilizando a especialização Bico da perícia Treinamento de Combate: Desarmado.',
                Dieta_Restrita: 'Os Avinarcs são carnívoros e não obtêm sustento de alimentos que não sejam carne.',
                Visão_de_Águia: 'A visão aguçada de Avinarc permite tanto uma boa visão periférica quanto a capacidade de focar em objetos distantes. Eles recebem um bônus de +20 em todas as manobras de Percepção baseadas na visão.',
                Asas_Vestigiais: 'As asas de Avinarc (agora reduzidas a braços densamente emplumados) são pequenas demais para o voo, mas fornecem um bônus de +10 em Salto e ao usar Acrobacias para reduzir o impacto de uma queda.'
            }
        },
        {
            nome: 'Anão',
            descricao: `Provavelmente a raça fisicamente mais resistente, os Anãos são baixos, atarracados e de tez rosada, com olhos profundos e cabelos e barbas escuros e crespos (dos quais se orgulham bastante, cultivando longas e elaboradas tranças). Os Anãos são artesãos exímios e bem adaptados à vida subterrânea; adoram minerar a terra em busca de metais e pedras preciosas, transformando-os em armas e artefatos poderosos. Não tão férteis quanto os humanos, têm poucos filhos, e menos de um terço de sua população é composta por mulheres, que são zelosamente protegidas em seus salões cavernosos.
                    Os Anãos possuem visão no escuro superior, sendo capazes de enxergar excepcionalmente bem na penumbra e a curtas distâncias mesmo na escuridão total. São ligeiramente mais densos que os humanos, o que torna a natação mais difícil, mas não impossível (-25 em testes de Resistência ao nadar). Possuem considerável resistência à magia da Essência e do Mentalismo. Os Anãos são muito resistentes a venenos e doenças, e possuem uma expectativa de vida excepcional, de até 600 anos.`,
            images: ['/public/races/anao.png'],
            detalhes: {
                Visão_no_Escuro_I: 'Os Anãos podem enxergar a 3 metros de distância sem penalidades, mesmo na escuridão total.',
                Inapto_V_Natação: 'Devido à sua densidade, os Anãos precisam se esforçar muito para não se afogarem. Eles sofrem uma penalidade de -25 nos testes de Resistência enquanto nadam.',
                Visão_Noturna: 'Os Anãos podem enxergar em penumbra, equivalente às condições noturnas, tão bem quanto um humano enxerga à luz do dia. Todas as penalidades por escuridão são reduzidas em 40, exceto em condições de escuridão total.'
            }
        },
        {
            nome: 'Elfo Belo',
            descricao: `Os mais etéreos de todos os elfos, os Elfos Belos têm cabelos dourados, olhos azuis, pele pálida e preferem vestimentas brancas, prateadas e douradas. Seja por graça divina ou herança feérica, eles possuem uma aura visível que impressiona aliados e intimida inimigos. Raramente são vistos além das fronteiras das terras élficas.
                    Como todos os elfos, não envelhecem após a idade adulta e seus corpos são imunes a todas as infecções bacterianas e virais não mágicas, sendo virtualmente imortais. Sua visão é extremamente aguçada; conseguem enxergar em uma noite clara como se estivessem em plena luz do dia.`,
            images: ['/public/races/elfo.png'],
            detalhes: {
                Sono_Eficiente_II: 'Elfos meditam em vez de dormir. Duas horas de meditação substituem quatro horas de sono.',
                Imunidade_a_Doenças_I: 'Elfos são imunes a todas as doenças não mágicas.',
                Visão_Noturna: 'Elfos podem enxergar na penumbra tão bem quanto um humano enxerga à luz do dia. Todas as penalidades por escuridão são reduzidas em 40, exceto em escuridão total.',
                Aura_Defensiva_II: 'A aura dos Elfos Belos embota ou confunde os sentidos de seus inimigos, concedendo-lhes +10 de DB, que não é cumulativo com nenhuma magia de Aura ou Visão Turva.',
                Voz_de_Ouro: 'Os Elfos Belos possuem belas vozes que acalmam e tranquilizam. Eles recebem +10 em qualquer manobra para acalmar ou persuadir verbalmente (Encantar, Canto, Liderança, etc.).'
            }
        },
        {
            nome: 'Elfo Cinzento',
            descricao: `Os Elfos Cinzentos são quase sempre intermediários entre seus irmãos mais extremos. A maioria tem cabelos loiros e olhos azuis ou cinzentos. Não são tão artísticos quanto os elfos loiros, tão astutos e industriosos quanto os altos elfos, ou tão serenos e rústicos quanto os elfos da floresta. Formam o meio-termo com sua companhia agradável e seu amor pela arte e pelo artesanato.
                    Quando a guerra chama, eles pegam em armas, mas na maior parte do tempo se estabelecem, criam uma família e fazem o que bem entendem. Não constroem cidades de mármore, mas amam cidades abertas em meio a uma bela paisagem. Compartilham as características gerais élfica de imortalidade e imunidade a doenças não mágicas.`,
            images: ['/public/races/elfo.png'],
            detalhes: {
                Sono_Eficiente_II: 'Elfos meditam em vez de dormir. Duas horas de meditação substituem quatro horas de sono.',
                Imunidade_a_Doenças_I: 'Elfos são imunes a todas as doenças não mágicas.',
                Visão_Noturna: 'Elfos podem enxergar na penumbra tão bem quanto um humano enxerga à luz do dia. Todas as penalidades por escuridão são reduzidas em 40, exceto em escuridão total.'
            }
        },
        {
            nome: 'Elfo Alto',
            descricao: `Cabelos negros como azeviche distinguem os Altos Elfos de seus parentes de pele mais clara, e olhos castanhos e avelã são as cores mais comuns. O amor por coisas belas, expresso pela habilidade em construção e artesanato, une-se à curiosidade sobre a natureza de toda a criação. As armaduras magníficas, as armas brilhantes e as belas joias veneradas em suas graciosas cidades de muralhas de mármore parecem justificar o preço.
                    Alguns dos artefatos mais poderosos que se conhece provêm das forjas desses artesãos élficos. Quando vivem entre outros elfos, inspiram-se nos Elfos Belos, mas aceitam de bom grado o fardo diário de governar seu povo. Compartilham as características gerais élfica de imortalidade e imunidade a doenças não mágicas.`,
            images: ['/public/races/elfo.png'],
            detalhes: {
                Sono_Eficiente_II: 'Elfos meditam em vez de dormir. Duas horas de meditação substituem quatro horas de sono.',
                Imunidade_a_Doenças_I: 'Elfos são imunes a todas as doenças não mágicas.',
                Visão_Noturna: 'Elfos podem enxergar na penumbra tão bem quanto um humano enxerga à luz do dia. Todas as penalidades por escuridão são reduzidas em 40, exceto em escuridão total.'
            }
        },
        {
            nome: 'Elfo da Floresta',
            descricao: `Os Elfos da Floresta vestem tons de verde e cinza para se camuflarem com o ambiente. Cabelos cor de areia e olhos azuis claros, verdes ou cinzentos complementam sua aparência rústica. Eles são ligeiramente mais baixos que outros elfos, embora mais altos que os humanos. Esses elfos são os mais comuns de toda a raça élfica e podem ser encontrados em quase todas as florestas do mundo.
                    Os Elfos da Floresta costumam ser bastante distantes de outros elfos e são conhecidos por discordar abertamente das políticas dos Altos Elfos e dos Elfos Belos. Mais sintonizados com as sutis marés das florestas, riachos e criaturas que vagam pelo reino silvestre, os Elfos da Floresta são hábeis em se mover silenciosamente.`,
            images: ['/public/races/elfo.png'],
            detalhes: {
                Sono_Eficiente_II: 'Elfos meditam em vez de dormir. Duas horas de meditação substituem quatro horas de sono.',
                Imunidade_a_Doenças_I: 'Elfos são imunes a todas as doenças não mágicas.',
                Visão_Noturna: 'Elfos podem enxergar na penumbra tão bem quanto um humano enxerga à luz do dia. Todas as penalidades por escuridão são reduzidas em 40, exceto em escuridão total.',
                Audição_Felina: 'Os Elfos da Floresta possuem uma audição tão aguçada quanto a de um gato, permitindo-lhes ouvir alguns sons agudos e determinar com mais precisão a localização da fonte sonora (ganhando +10 em manobras de Percepção para localizar um som).'
            }
        },
        {
            nome: 'Gnoll',
            descricao: `Pequenas figuras enrugadas de pele cinzenta e pouco cabelo, os Gnolls habitam as cavernas naturais que abundam nas regiões montanhosas. Quando protegidos pelo segredo e pela pedra, seu temperamento tímido relaxa e permite a celebração de festivais alegres. A luz do sol não os fere, mas o brilho os assusta e faz seus olhos lacrimejarem (-25 em todas as atividades), levando os Gnolls a preferirem o reino subterrâneo.
                    A maioria dos Gnolls evita o combate, usando suas magias para se esconder e escapar rapidamente. Sua habilidade como ilusionistas, praticantes e magos lhes permite evitar encontros com outras raças. Eles viajam em clãs e se estabelecem apenas em grutas desertas. Os Gnolls vivem em média 105 anos.`,
            images: ['/public/races/gnoll.png'],
            detalhes: {
                Tamanho_Reduzido_I: 'Gnolls são criaturas Pequenas. Além de outros efeitos de tamanho, multiplique seus impactos de concussão por 0,75.',
                Visão_Noturna: 'Os gnolls podem enxergar em penumbra tão bem quanto um humano enxerga à luz do dia. Todas as penalidades por escuridão são reduzidas em 40, exceto em escuridão total.',
                Sensibilidade_à_Luz_I: 'Os gnolls sofrem uma penalidade de -25 quando expostos à luz intensa equivalente à luz solar direta, mas não sofrem penalidade em dias nublados ou em áreas sombreadas.',
                Audição_Aguçada: 'Os gnolls possuem audição aguçada nas faixas de alta e baixa frequência. Eles podem localizar sons com grande precisão e ouvir perigos vindos de uma distância 10 vezes maior que a de um humano. Recebem +20 em manobras de Percepção auditiva.',
                Prodígio_II_IV: 'Os gnolls são extremamente sintonizados com o ambiente ao seu redor. Recebem +10 em manobras de Sobrevivência, valor dobrado ao usar a perícia para observação do clima.'
            }
        },
        {
            nome: 'Gnomo',
            descricao: `Menores que os anões, e com aparência mais frágil e debilitada, os longevos Gnomos preferem viver em cavernas rasas, onde acumulam conhecimento e sabedoria obsessivamente. Tomos antigos e pergaminhos raros povoam suas bibliotecas abarrotadas. O amor pela solidão garante que a maioria dos Gnomos permaneça sem herdeiros, raramente casando ou constituindo família, apesar da expectativa de vida típica de 600 anos.
                    Os Gnomos são reservados, mas se forçados a combater, seus inimigos devem estar preparados para uma surpresa, pois não se sabe quais feitiços e/ou artefatos mágicos um Gnomo específico possui. Embora solitários, os Gnomos não são tímidos nem tristes; a generosa hospitalidade atrai muitos amigos que os visitam como hóspedes.`,
            images: ['/public/races/gnomo.png'],
            detalhes: {
                Visão_Noturna: 'Os gnomos podem enxergar em penumbra, equivalente às condições noturnas, tão bem quanto um humano enxerga à luz do dia. Todas as penalidades por escuridão são reduzidas em 40, exceto em condições de escuridão total.'
            }
        },
        {
            nome: 'Goblin',
            descricao: `Os goblins são pequenos, com cerca de 90 cm de altura, e têm constituição física magra e esguia. Tendem a ter cabeças longas e estreitas com queixos pontiagudos, orelhas pontiagudas sem lóbulos, narizes estreitos e lábios finos. Os goblins subterrâneos comuns têm pele amarelada pálida, enquanto aqueles que vivem na superfície adquirem uma coloração verde-escura.
                    Uma combinação de forte desejo de dominância e um instinto racional de fuga do perigo frequentemente prejudica sua capacidade de formar grupos maiores e culturas estáveis. A lealdade, quando existe, é reservada a familiares próximos. Se suas vidas fossem mais seguras, os goblins atingiriam uma idade média de 70 anos, mas na prática poucos têm essa sorte.`,
            images: ['/public/races/goblin.png'],
            detalhes: {
                Visão_no_Escuro_I: 'Goblins podem enxergar a 3 metros sem penalidades, mesmo na escuridão total.',
                Tamanho_Reduzido_I: 'Goblins são criaturas Pequenas. Além de outros efeitos de tamanho, multiplique seus acertos de concussão por 0,75.',
                Visão_Noturna: 'Goblins podem enxergar em penumbra tão bem quanto um humano enxerga à luz do dia. Todas as penalidades por escuridão são reduzidas em 40, exceto em escuridão total.',
                Prodígio_Mecânica_V: 'Mãos pequenas, fortes e ágeis, e uma facilidade em visualizar sólidos tridimensionais os tornam muito hábeis com dispositivos mecânicos (+25 em Mecânica).',
                Sensibilidade_à_Luz_III: 'Goblins sofrem uma penalidade de -75 quando expostos à luz solar direta, -50 em dias nublados, -25 em condições de sombra ou dias muito nublados, ou -0 em sombras completas.'
            }
        },
        {
            nome: 'Gratar',
            descricao: `Os Gratar são humanoides semelhantes a sapos, com altura semelhante à de um homem, e predominantemente amorais. Possuem bocas largas e babantes e grandes olhos bulbosos. Essas criaturas são anfíbias, mas passam a maior parte do tempo fora da água.
                    A cor dos Gratar varia de acordo com seu poder e status: jovens são verdes e fracos; ao amadurecer ficam amarelos e mais ousados; os mais poderosos ficam negros; os que se isolam ficam acinzentados; e os que dominaram muitas tribos ficam vermelhos (Gratar Reais). A maioria dos Gratar é capaz de atingir a idade de 100 anos, e os Gratar Reais podem chegar aos dois séculos.`,
            images: ['/public/races/gratar.png'],
            detalhes: {
                Visão_Lagartixa: 'Os olhos dos Gratar funcionam como os de uma lagartixa, permitindo maior clareza de visão de perto, além de boa percepção de profundidade, e não perdem a visão de cores em condições de escuridão. Recebem um bônus de +10 em todas as manobras de Percepção baseadas na visão.',
                Musculatura_Recurvada: 'Os Gratar são saltadores incríveis com pernas poderosas. Seu salto em distância correndo é de 3,6 metros e seu salto em altura correndo é de 74 centímetros. Recebem um bônus de +20 em manobras de Acrobacia, Escalada, Salto e Corrida.'
            }
        },
        {
            nome: 'Meio Elfo',
            descricao: `Os meio-elfos se beneficiam da combinação da graça élfica e da robustez humana. São fortes e esbeltos, mais magros que os homens, mas mais robustos que os elfos, com traços finos e angulares. Todos os meio-elfos têm uma expectativa de vida maior que a dos humanos, mas não possuem a imortalidade élfica.
                    Meio-elfos geralmente vivem em sociedades élficas ou humanas, em vez de formarem sociedades próprias. Em regiões onde o contato entre as duas raças tem sido constante por longos períodos, populações mistas podem surgir e desenvolver suas próprias identidades culturais distintas.`,
            images: ['/public/races/meio-elfo.png'],
            detalhes: {
                Dorminhoco_Eficiente_I: 'Alguns meio-elfos meditam, enquanto outros dormem, mas em ambos os casos, três horas de sono ou meditação substituem quatro horas de sono.',
                Visão_Noturna: 'Meio-elfos podem enxergar em penumbra tão bem quanto um humano enxerga à luz do dia. Todas as penalidades por escuridão são reduzidas em 40, exceto em condições de escuridão total.'
            }
        },
        {
            nome: 'Halfling',
            descricao: `Os halflings são muito baixos, raramente ultrapassando 1,20 m de altura, e tendem a ser robustos. Possuem pés grandes e peludos que são quase imunes ao frio, e por isso costumam andar descalços. São um povo pacífico, que prefere a tranquilidade de suas aldeias. Amantes de boa comida e bebida, passam grande parte do tempo em tavernas e casas de amigos.
                    Os halflings possuem um alto nível de destreza manual e são hábeis em se mover silenciosamente. Quando pressionados, podem se tornar inimigos implacáveis e incansáveis devido a uma constituição incrível, capazes de resistir até mesmo aos danos mágicos e físicos mais poderosos por longos períodos.`,
            images: ['/public/races/halfling.png'],
            detalhes: {
                Tamanho_Reduzido_I: 'Halflings são criaturas Pequenas. Além de outros efeitos de tamanho, multiplique seus acertos de concussão por 0,75.',
                Prodígio_Stalking_II: 'Halflings recebem um bônus de +10 em manobras de Perseguição (Stalking).'
            }
        },
        {
            nome: 'Hobgoblin',
            descricao: `De tempos em tempos, os Goblins dão à luz filhotes incomumente grandes, que se tornarão adultos muito maiores, com a pele de um tom lamacento. Os Goblins evitam esse destino terrível matando a maioria deles ao nascer. Na idade adulta, o tamanho e a força superiores lhes conferem domínio sobre aqueles que reverenciam o domínio da força bruta.
                    O brilho do sol, embora desagradável, não causa horror aos Hobgoblins, que seguem destemidamente seus inimigos durante o dia. Esses guerreiros astutos são bastante formidáveis no campo de batalha. Em princípio, a expectativa de vida dos hobgoblins é pelo menos equivalente à dos humanos, mas a maioria morre rapidamente pelas mãos de irmãos ambiciosos.`,
            images: ['/public/races/hobgoblin.png'],
            detalhes: {
                Visão_no_Escuro_II: 'Hobgoblins podem enxergar a 6 metros sem penalidades, mesmo na escuridão total.',
                Visão_Noturna: 'Hobgoblins podem enxergar em penumbra tão bem quanto um humano enxerga à luz do dia. Todas as penalidades por escuridão são reduzidas em 40, exceto em escuridão total.',
                Sensibilidade_à_Luz_I: 'Os hobgoblins sofrem uma penalidade de -25 quando expostos à luz intensa equivalente à luz solar direta, mas não sofrem penalidade em dias nublados ou em áreas sombreadas.'
            }
        },
        {
            nome: 'Humano da Caverna',
            descricao: `Os homens das cavernas são os remanescentes isolados dos ancestrais dos homens comuns. Musculosos, com testas inclinadas e mandíbulas proeminentes, os homens das cavernas têm cabelos castanhos ou ruivos, olhos castanhos e pele bronzeada, mas são mais baixos que seus parentes comuns. Vestimentas simples feitas de peles de animais são o traje normal.
                    Seu intelecto não é poderoso, mas sua disposição cooperativa e bem-humorada torna sua companhia uma experiência agradável. Os homens das cavernas se unem para formar tribos, cada uma com seu próprio conjunto complexo de rituais sociais e crenças religiosas. Sua expectativa de vida média é de 50 anos.`,
            images: ['/public/races/humano.png'],
            detalhes: {
                Sem_Talentos_Especiais: 'Os humanos da caverna não possuem talentos raciais especiais além de sua excepcional Resistência física (+25).'
            }
        },
        {
            nome: 'Humano Comum',
            descricao: `Os homens comuns são da mesma raça que conhecemos no mundo real e apresentam as mesmas variações de tamanho, constituição física, cor da pele/cabelo e características faciais. Altamente adaptáveis, podem ser encontrados em praticamente qualquer clima ou ambiente e desenvolvem culturas bastante diversas.
                    Os humanos são o padrão pelo qual todas as outras raças são comparadas. No entanto, os humanos se beneficiam de um alto número de Pontos de Desenvolvimento (DP) bônus.`,
            images: ['/public/races/humano.png'],
            detalhes: {
                Sem_Talentos_Especiais: 'Os humanos não possuem talentos ou defeitos raciais. São o padrão de referência do sistema, beneficiando-se do maior número de Pontos de Desenvolvimento bônus (50 DPs).'
            }
        },
        {
            nome: 'Humano Superior',
            descricao: `Os homens superiores são mais altos e fortes do que os homens comuns, têm uma aparência mais imponente, vivem mais tempo e tendem a ser mais ousados e ambiciosos. Eles também são notoriamente rígidos e inflexíveis, não tão flexíveis ou adaptáveis quanto seus irmãos comuns, e mais facilmente influenciados por seu próprio orgulho ou pelo fascínio da magia e do poder.
                    Eles constroem grandes impérios, mas esses impérios frequentemente entram em colapso de forma espetacular devido à sua própria arrogância. Podem ter o sangue de deuses ou gigantes, o que explicaria tanto sua força quanto seu orgulho.`,
            images: ['/public/races/humano.png'],
            detalhes: {
                Sem_Talentos_Especiais: 'Os humanos superiores não possuem talentos ou defeitos raciais especiais além de seus bônus de atributos superiores.'
            }
        },
        {
            nome: 'Humano Mestiço',
            descricao: `Homens mestiços são descendentes de pais superiores e comuns. Eles têm características intermediárias e podem ser difíceis de distinguir de qualquer um dos parentes. Sociedades onde humanos superiores e comuns têm contato frequente podem ter populações significativas de homens mestiços.`,
            images: ['/public/races/humano.png'],
            detalhes: {
                Sem_Talentos_Especiais: 'Os humanos mestiços não possuem talentos ou defeitos raciais especiais além de seus bônus de atributos intermediários.'
            }
        },
        {
            nome: 'Hvasstonn',
            descricao: `Também conhecidos como gigantes ou homens grandes, os Hvasstonn são semelhantes em muitos aspectos a humanos extremamente grandes, diferindo na altura (os homens têm em média 2,30 m), olhos profundos tão escuros que a pupila mal pode ser distinguida, pelos corporais curtos, grossos e grisalhos, quase tão espessos quanto pelagem, e dentes afiados de carnívoros.
                    Clãs de Hvasstonn vivem próximos uns dos outros e, em tempos de necessidade, se ajudam mutuamente. Eles geralmente preferem empunhar uma arma em cada mão; devido ao seu tamanho, cada arma tem o tamanho de uma arma humana de duas mãos. Vivem até os 200 anos.`,
            images: ['/public/races/hvasstonn.png'],
            detalhes: {
                Tamanho_Aumentado_I: 'Os Hvasstonn são criaturas Grandes. Além de outros efeitos de tamanho, multiplique seus acertos de concussão por 1,5.',
                Armamento_Natural: 'Os Hvasstonn podem atacar usando seus dentes afiados, utilizando a especialização Mordida da perícia Treinamento de Combate: Desarmado.',
                Dieta_Restrita: 'Os Hvasstonn são carnívoros. Sua fome substancial precisa ser saciada com carne.'
            }
        },
        {
            nome: 'Idiyva',
            descricao: `Uma pelagem curta, cor de café com pontas douradas, cobre o corpo esguio e musculoso do Idiyva, exceto no rosto, nas palmas das mãos e nas solas dos pés. A pelagem na cabeça se alonga e clareia, formando uma juba dourada ao redor do rosto. Olhos felinos verdes conferem ao Idiyva uma excelente visão noturna; dentes caninos revelam sua natureza carnívora.
                    A sociedade Idiyva é competitiva e valoriza muito a honra pessoal. Não é incomum que desentendimentos sejam resolvidos por combates rituais. Embora os Idiyva possam ser amigáveis, eles não hesitam em revelar os instintos de luta de um predador que se escondem por trás de seus modos normalmente civilizados.`,
            images: ['/public/races/idiyva.png'],
            detalhes: {
                Audição_Felina: 'A audição dos Idiyva é equivalente à de um gato, permitindo-lhes ouvir alguns sons agudos e determinar com mais precisão a localização da fonte sonora (ganhando +10 em manobras de Percepção para localizar um som).',
                Armas_Naturais: 'Os Idiyva podem atacar usando suas garras, utilizando a especialização Garras da perícia Treinamento de Combate: Desarmado.',
                Visão_Noturna: 'Os Idiyva podem enxergar em penumbra tão bem quanto um humano enxerga à luz do dia. Reduzido em 40, exceto em condições de escuridão total.',
                Dieta_Restrita: 'Os Idiyva são carnívoros e não obtêm sustento de alimentos que não sejam carne.'
            }
        },
        {
            nome: 'Kobold',
            descricao: `Os menores entre as raças goblinoides, com pele avermelhada e um par de chifres crescendo em suas cabeças, os kobolds se curvam à ferocidade e ao bullying praticados por seus parentes maiores. As artes de mentir, trapacear, roubar e bajular permitem que o covarde kobold sobreviva na sanguinária sociedade goblin.
                    Os kobolds raramente lutam em uma batalha direta. Eles esperam por uma oportunidade de emboscada, ou possivelmente esperam que a ajuda chegue se não puderem fugir. Um juramento de rendição, é claro, será rapidamente quebrado se a situação se inverter. Em princípio, eles são capazes de atingir uma expectativa de vida de 75 anos, mas poucos o fazem.`,
            images: ['/public/races/kobold.png'],
            detalhes: {
                Tamanho_Reduzido_I: 'Kobolds são criaturas Pequenas. Além de outros efeitos de tamanho, multiplique seus acertos de concussão por 0,75.',
                Visão_no_Escuro_I: 'Kobolds podem enxergar a 3 metros sem penalidades, mesmo na escuridão total.',
                Visão_Noturna: 'Kobolds podem enxergar em penumbra tão bem quanto um humano enxerga à luz do dia. Todas as penalidades por escuridão são reduzidas em 40, exceto em escuridão total.',
                Sensibilidade_à_Luz_II: 'Kobolds sofrem uma penalidade de -50 quando expostos à luz solar direta, -25 em dias nublados ou -0 em áreas sombreadas ou dias muito nublados.',
                Armas_Naturais_Ataque_Menor: 'Kobolds podem atacar usando suas garras, utilizando a especialização Garras da perícia Treinamento de Combate: Desarmado, mas tais ataques são considerados Minúsculos.'
            }
        },
        {
            nome: 'Nycamerith',
            descricao: `Embora muitos se perguntem se são semelhantes a Gnomos ou até mesmo Halflings, esses seres baixos, gordos e de pele azul provavelmente constituem uma raça inteira por si só. Suas orelhas são grandes e pontudas, e seus olhos dançam ao ritmo da música que tocam continuamente. Vivendo suas longas vidas (até 600 anos) seguindo a Grande Canção, são um povo alegre e agradável, raramente se envolvendo em atos violentos.
                    Os Nycamerith estão entre os maiores músicos e artesãos de instrumentos musicais do mundo. A maioria se contenta em entreter em tavernas e trabalhar em seus ofícios. Habitam vilarejos isolados, localizados em vales profundos ou em altas montanhas, mas viajam para se apresentar para um público que os aprecie.`,
            images: ['/public/races/nycamerith.png'],
            detalhes: {
                Garganta_de_Ouro: 'Os Nycamerith possuem belas vozes que acalmam e tranquilizam. Recebem +10 em qualquer manobra para acalmar ou persuadir verbalmente (Charme, Canto, Liderança, etc.).',
                Audição_Gato: 'A audição dos Nycamerith é equivalente à de um gato, permitindo-lhes ouvir alguns sons agudos e determinar com mais precisão a localização da fonte sonora (+10 em manobras de Percepção para localizar um som).',
                Tom_Perfeito_I: 'Os Nycamerith possuem ouvido perfeito e são capazes de reproduzir qualquer tom com sua voz ou um instrumento. Eles recebem +10 em qualquer habilidade de Arte Performática: Canto ou Tocar Instrumento. Não cumulativo com Garganta de Ouro.',
                Não_Violento_II: 'Os Nycamerith não desejam ferir os outros. Após infligir um acerto crítico por qualquer meio, qualquer ação que realizarem na rodada seguinte sofre uma penalidade de -40.'
            }
        },
        {
            nome: 'Orc Maior',
            descricao: `Os orcs têm altura semelhante à dos humanos, embora possuam sobrancelhas e mandíbulas grossas em rostos arredondados, orelhas pontudas sem lóbulos, lábios finos que mal cobrem dentes grandes, narizes pequenos quase afilados e olhos pequenos e profundos. São de constituição robusta, pois são criados como guerreiros e trabalhadores.
                    Os Orcs Maiores são resistentes e astutos, capazes de operar à luz do dia sem penalidades, e geralmente são os líderes das tribos orcs. Os orcs enxergam bem à noite e têm visão limitada mesmo na escuridão total.`,
            images: ['/public/races/orc.png'],
            detalhes: {
                Visão_no_Escuro_I: 'Todos os Orcs podem enxergar a 3 metros sem penalidades, mesmo na escuridão total.',
                Visão_Noturna: 'Todos os Orcs podem enxergar em penumbra tão bem quanto um humano enxerga à luz do dia. Todas as penalidades por escuridão são reduzidas em 40, exceto em escuridão total.',
                Sensibilidade_à_Luz: 'Orcs Maiores não sofrem nenhuma penalidade à luz solar.'
            }
        },
        {
            nome: 'Orc Cinzento',
            descricao: `Os Orcs Cinzentos são altamente inteligentes, embora usem essa genialidade para o mal e para as trevas. Muitos são conjuradores, especialmente feiticeiros, clérigos e magos. Eles costumam trabalhar em pequenos grupos com outros tipos de orcs. Embora sejam mais inteligentes que os Orcs Maiores, a sociedade orc é governada pelos fisicamente fortes, e os Orcs Cinzentos são mais propensos a aconselhar do que a governar.`,
            images: ['/public/races/orc.png'],
            detalhes: {
                Visão_no_Escuro_I: 'Todos os Orcs podem enxergar a 3 metros sem penalidades, mesmo na escuridão total.',
                Visão_Noturna: 'Todos os Orcs podem enxergar em penumbra tão bem quanto um humano enxerga à luz do dia. Todas as penalidades por escuridão são reduzidas em 40, exceto em escuridão total.',
                Sensibilidade_à_Luz: 'Orcs Cinzentos sofrem uma penalidade de -50 quando expostos à luz solar direta, -25 em dias nublados e nenhuma penalidade em condições de sombra ou em dias muito nublados.'
            }
        },
        {
            nome: 'Orc Menor',
            descricao: `Os Orcs Menores nascem para viver, lutar e morrer na escuridão; eles odeiam as estrelas e a lua, mas entram em pânico sob o sol mais brilhante. Eles compõem a maior parte da população orc. São os mais sensíveis à luz entre as raças orcs.`,
            images: ['/public/races/orc.png'],
            detalhes: {
                Visão_no_Escuro_II: 'Orcs Menores podem enxergar a 4,5 metros sem penalidades, mesmo na escuridão total.',
                Visão_Noturna: 'Todos os Orcs podem enxergar em penumbra tão bem quanto um humano enxerga à luz do dia. Todas as penalidades por escuridão são reduzidas em 40, exceto em escuridão total.',
                Sensibilidade_à_Luz: 'Orcs Menores sofrem uma penalidade de -50 quando expostos à luz solar direta, -25 em dias nublados e nenhuma penalidade em condições de sombra ou em dias muito nublados.'
            }
        },
        {
            nome: 'Orc Scrug',
            descricao: `Os Scrugs são tão tolos quanto os Orcs Menores, mas se distinguem por seu grande tamanho. Frequentemente são confundidos com ogros ou trolls à distância. Embora a maioria não tenha inclinação para serem chefes, os Scrugs podem ser encontrados como guarda-costas de chefes orcs, embora não tenham consideração por nenhum outro ser vivo, nem mesmo por outros orcs.`,
            images: ['/public/races/orc.png'],
            detalhes: {
                Visão_no_Escuro_II: 'Orcs Scrug podem enxergar a 4,5 metros sem penalidades, mesmo na escuridão total.',
                Visão_Noturna: 'Todos os Orcs podem enxergar em penumbra tão bem quanto um humano enxerga à luz do dia. Todas as penalidades por escuridão são reduzidas em 40, exceto em escuridão total.',
                Sensibilidade_à_Luz: 'Orcs Scrug sofrem uma penalidade de -50 quando expostos à luz solar direta, -25 em dias nublados e nenhuma penalidade em condições de sombra.',
                Tamanho_Aumentado_I: 'Orcs Scrug são criaturas Grandes. Além de outros efeitos de tamanho, multiplique seus acertos de concussão por 1,5.'
            }
        },
        {
            nome: 'Orc Vard',
            descricao: `Os Vards são uma mutação de quatro braços dos Orcs Maiores, mas se mantêm entre os seus. Raramente são encontrados com outras raças de orcs. Os Vards são mais sensíveis à luz solar do que os Orcs Maiores, mas menos do que as outras raças. Os Vards podem usar com eficácia um escudo e três armas, quatro armas diferentes ou um par de armas de duas mãos.`,
            images: ['/public/races/orc.png'],
            detalhes: {
                Visão_no_Escuro_I: 'Todos os Orcs podem enxergar a 3 metros sem penalidades, mesmo na escuridão total.',
                Visão_Noturna: 'Todos os Orcs podem enxergar em penumbra tão bem quanto um humano enxerga à luz do dia. Todas as penalidades por escuridão são reduzidas em 40, exceto em escuridão total.',
                Sensibilidade_à_Luz: 'Orcs Vard sofrem apenas uma penalidade de -25 em luz solar intensa.',
                Ambidestro: 'Orcs Vard são capazes de usar qualquer uma de suas quatro mãos igualmente bem para todas as manobras e atividades. A penalidade normal de -20 para uso da mão secundária não se aplica.',
                Par_de_Membros_Adicional: 'Orcs Vard possuem quatro braços. Os braços adicionais podem ser usados para manipular e realizar ataques com as penalidades usuais para ataques múltiplos. Um braço pode carregar um escudo.'
            }
        },
        {
            nome: 'Plynos',
            descricao: `A cabeça de um cervo majestoso ou de uma corça esguia adorna o corpo de um Humano, tornando este ser facilmente identificável como um Plynos. Os homens-cervo são herbívoros, mas os cervos, em particular, apreciam o combate e a batalha, desde que sejam nobres e honrados — eles não toleram crueldade ou violência sem sentido.
                    Habitam cabanas de madeira de sua própria construção e geralmente vivem em clãs familiares. Os Elfos da Floresta são seus vizinhos preferidos. Sua expectativa de vida média é de 80 anos, e seus filhos atingem a maturidade vários anos mais cedo do que os Humanos.`,
            images: ['/public/races/plynos.png'],
            detalhes: {
                Olfato_Aguçado_II: 'Os Plynos recebem um bônus de +10 em testes de Percepção envolvendo olfato.',
                Audição_Felina: 'A audição dos Plynos é equivalente à de um gato, permitindo-lhes ouvir alguns sons agudos e determinar com mais precisão a localização da fonte sonora (+10 em manobras de Percepção para localizar um som).',
                Dieta_Restrita: 'Os Plynos são herbívoros e não conseguem digerir carne.',
                Armas_Naturais: 'Muitos Plynos machos possuem chifres poderosos o suficiente para atacar, utilizando a especialização em chifres da perícia Treinamento de Combate: Desarmado. Pode ser adquirida por 5 DP.'
            }
        },
        {
            nome: 'Sea-kral',
            descricao: `Os Sea-krals são criaturas semelhantes a macacos, com pele cinza-escura ou azul e uma densa pelagem branca que cresce na cabeça, pescoço e ombros. Ambos os sexos têm braços longos e um osso extra que conecta o pulso à mão. Dedos longos e ágeis, com unhas em forma de garra, os auxiliam a se tornarem artesãos e arqueiros habilidosos.
                    Os Sea-krals temem as ondas famintas, mas encontram tanto prazer em seu estilo de vida violento que não conseguem abandonar o oceano. Eles constroem navios longos para navegar pelos mares, saqueando e pilhando outras embarcações como piratas. Dormem durante o dia e são ativos durante a noite.`,
            images: ['/public/races/sea-kral.png'],
            detalhes: {
                Visão_Noturna: 'Os Sea-krals podem enxergar na penumbra tão bem quanto um humano enxerga à luz do dia. Todas as penalidades por escuridão são reduzidas em 40, exceto em escuridão total.',
                Articulações_Extras: 'Os braços dos Sea-kral possuem múltiplas articulações e são ágeis. Todas as manobras físicas que dependem principalmente de seus braços, incluindo combate corpo a corpo, arremesso e escalada, recebem um bônus de +10.',
                Inepto_II_Natação: 'Os Sea-kral são pouco adaptados para natação e sofrem uma penalidade de -10 em todas as manobras de natação.'
            }
        },
        {
            nome: 'Sibbicai',
            descricao: `Provavelmente parentes distantes dos Vulfen, os Sibbicai possuem cabeça de chacal e pelagem curta, lisa e oleosa, de cor preta, que cobre seus corpos humanoides musculosos. Um povo inteligente e culto, os Sibbicai se adaptam bem a outras raças humanoides, desde que estas não tenham preconceitos.
                    Os Sibbicai são geralmente quietos e reservados, mas se irritam facilmente. Em batalha, usam armaduras e uma variedade de armas. Grupos de Sibbicai frequentemente se oferecem como mercenários, mas seus serviços são muito caros. Uma vez contratados, sua reputação de lealdade e cumprimento de promessas é bem justificada.`,
            images: ['/public/races/sibbicai.png'],
            detalhes: {
                Olfato_Aguçado_III: 'Os Sibbicai recebem um bônus de +15 em testes de Percepção envolvendo olfato.',
                Audição_Canina: 'Os Sibbicai têm uma audição tão sensível quanto a de um cão, permitindo-lhes localizar sons próximos com alta precisão e ouvir sons até 4 vezes mais distantes que um humano. Isso concede +10 em manobras de Percepção baseadas em som.',
                Armas_Naturais: 'Os Sibbicai podem atacar mordendo, usando a especialização Mordida da perícia Treinamento de Combate: Desarmado.',
                Prodígio_II_Tracking: 'Os Sibbicai possuem um talento natural para rastreamento. Eles recebem um bônus de +10 em manobras de Rastreamento.'
            }
        },
        {
            nome: 'Sohleugir',
            descricao: `Escamas texturizadas de jade brilham na pele do anfíbio Sohleugir, interrompidas por cristas semelhantes a barbatanas que se elevam ao longo da espinha dorsal. Esses espinhos irregulares estendem-se da ponta da cauda de quase um metro até o topo da cabeça dracônica com focinho.
                    Os Sohleugir constroem cidades intrincadas de pedra, corais e conchas em costas rochosas próximas ao oceano. Eles cultivam as ondas como um agricultor lavra a terra. Os Sohleugir são um povo guerreiro, ávido por testar as pontas de seus tridentes e a coragem de seus espíritos, mas a crueldade permanece ausente de sua paixão pelo combate.`,
            images: ['/public/races/sohleugir.png'],
            detalhes: {
                Armadura_Natural_III: 'As escamas dos Sohleugir fornecem a proteção de um tipo de armadura (AT) 4 contra ataques, sem penalidades de carga ou manobra.',
                Armas_Naturais: 'Os Sohleugir podem atacar com suas garras, usando a especialização em garras da perícia Treinamento de Combate: Desarmado.',
                Visão_de_Lagartixa: 'Os olhos dos Sohleugir funcionam como os de uma lagartixa. Não perdem a visão de cores em condições de escuridão. Recebem um bônus de +10 em todas as manobras de Percepção baseadas na visão.',
                Visão_Tetracromática: 'A visão dos Sohleugir abrange a visão de cores normal, bem como a sensibilidade à luz ultravioleta. As penalidades para detectar pessoas e objetos invisíveis e camuflados são reduzidas em 30.',
                Terceira_Pálpebra: 'Os olhos dos Sohleugir possuem uma pálpebra adicional transparente que os protege, permitindo ainda a visão. Não são afetados por poeira, areia ou água.'
            }
        },
        {
            nome: "Sstoi'isslythi",
            descricao: `Homens esguios que se movem com a graça sinuosa de serpentes, os Sstoi'isslythi possuem peles macias de réptil compostas por pequenas escamas douradas. Bolsas de veneno, localizadas no pescoço, fornecem veneno às presas carnudas retraídas em suas bocas. Os Sstoi'isslythi vivem em grupos familiares, cada membro imune ao veneno de seus parentes.
                    Dependentes do ambiente para se aquecerem, os Sstoi'isslythi habitam climas ensolarados que nunca experimentam o frio do inverno. Amplos terraços para relaxar no calor e claraboias para aquecer os espaços internos dominam suas elegantes cidades.`,
            images: ['/public/races/sstoi-isslythi.png'],
            detalhes: {
                Sensibilidade_Térmica: 'Os Sstoi\'isslythi possuem órgãos sensoriais muito sensíveis em seus rostos, que lhes permitem avaliar a temperatura a curta distância com precisão de até 1/1000 de grau. Isso lhes concede um bônus de até +20 em testes de Percepção e Rastreamento para detectar criaturas vivas.',
                Armas_Naturais: "Os Sstoi'isslythi podem atacar com suas presas, usando a especialização Mordida da perícia Treinamento de Combate: Desarmado. Os ataques são resolvidos na tabela Ferrão.",
                Injeção_de_Veneno: "A mordida de um Sstoi'isslythi injeta veneno. Se o ataque resultar em um acerto crítico, o alvo deve fazer um Teste de Resistência Física ou sofrer o efeito de um veneno muscular.",
                Reflexo_de_Ataque: "Um poderoso reflexo de ataque permite que o Sstoi'isslythi aja com tremenda velocidade, ganhando um modificador de iniciativa de +20, quando o reflexo é acionado por qualquer movimento repentino em direção a ele. O Sstoi'isslythi deve tomar uma ação ofensiva imediata na rodada em que for surpreendido."
            }
        },
        {
            nome: 'Troll',
            descricao: `Os trolls são grandes e imensamente fortes (geralmente com cerca de 2,7 metros de altura e constituição maciça), mas mentalmente lentos em comparação com a maioria das outras raças. Os trolls são cobertos por uma pele grossa e dura que se sobrepõe nas articulações, semelhante à pele de um rinoceronte.
                    Os trolls não suportam a luz do dia, sofrendo uma penalidade de -50 em todas as ações sob a luz solar intensa. Suas vantagens inatas em situações físicas ou de combate, juntamente com mentes um tanto fracas e aparências aterrorizantes, tendem a fazer com que muitos trolls vivam suas vidas além dos limites da civilização.`,
            images: ['/public/races/troll.png'],
            detalhes: {
                Visão_no_Escuro_I: 'Os trolls enxergam a 3 metros sem penalidades, mesmo na escuridão completa.',
                Inepto_Influência_V: 'Por natureza e reputação, os trolls são violentos e perigosos. Eles sofrem uma penalidade de -25 em qualquer tentativa de usar perícias de Influência, exceto para provocar uma reação de medo ou moral.',
                Tamanho_Aumentado_I: 'Os trolls são criaturas Grandes. Além dos outros efeitos de tamanho, multiplique seus acertos de concussão por 1,5.',
                Sensibilidade_à_Luz_II: 'Os trolls sofrem uma penalidade de -50 quando expostos à luz solar direta, -25 em dias nublados ou -0 em áreas sombreadas.',
                Armadura_Natural_III: 'A pele resistente de um troll fornece a proteção de um tipo de armadura (AT) 4 contra ataques, sem penalidades de carga ou manobra.',
                Armamento_Natural: 'Os trolls podem atacar com suas garras, usando a especialização em garras da perícia Treinamento de Combate: Desarmado.',
                Visão_Noturna: 'Os trolls enxergam em penumbra tão bem quanto um humano enxerga à luz do dia. Todas as penalidades por escuridão são reduzidas em 40, exceto em condições de escuridão total.',
                Resistência_Elemental_Frio_e_Calor_III: 'Os trolls recebem um bônus de +15 em Defesa, Resistência e Vigor contra frio, gelo, calor e fogo. A severidade dos acertos críticos de Frio e Calor é reduzida em um.'
            }
        },
        {
            nome: 'Vulfen',
            descricao: `Homens peludos com cabeças e caudas lupinas, os Vulfen são frequentemente confundidos com lobisomens. A astúcia molda o comportamento dos Vulfen, mas a crueldade e a sede de sangue os privam do respeito e da admiração dos humanos. Os Vulfen vivem em matilhas, matando e devorando tudo em seu caminho. São noturnos, dormindo durante o dia e devastando à noite.
                    Suas vidas são brutais, mas geralmente curtas, raramente ultrapassando os 40 anos. Os Vulfen expulsos de suas matilhas, geralmente por um desafio fracassado contra seus superiores, ocasionalmente encontram um lar em unidades mercenárias.`,
            images: ['/public/races/vulfen.png'],
            detalhes: {
                Olfato_Aguçado_II: 'Os Vulfen recebem um bônus de +10 em testes de Percepção que envolvam olfato.',
                Audição_Canina: 'Os Vulfen possuem uma audição tão sensível quanto a de um cão, permitindo-lhes localizar sons próximos com alta precisão e ouvir sons até 4 vezes mais distantes que um humano. Isso concede +10 em manobras de Percepção baseadas em som.',
                Armamento_Natural: 'Os Vulfen podem atacar com suas garras, usando a especialização em garras da perícia Treinamento de Combate: Desarmado.',
                Dieta_Restrita: 'Os Vulfen são carnívoros e não obtêm sustento de alimentos que não sejam carne.',
                Frenesi: 'Os Vulfen podem entrar em fúria frenética com uma manobra de Foco Adrenal bem-sucedida. Enquanto em frenesi, recebem +5 em Força, seus ataques são considerados como +1 em Tamanho e não sofrem penalidades por perda de acertos. Em vez de desmaiarem com 0 Pontos de Vida, continuam lutando até atingirem um número negativo igual à sua perícia Desenvolvimento Corporal. Uma vez inconscientes, eles devem fazer um Teste de Resistência Física a cada rodada até falharem (e morrerem) ou serem curados o suficiente para ficarem acima desse limite. Enquanto em frenesi, eles não recebem nenhum Bônus Defensivo além daquele devido à magia e são incapazes de alocar OB para aparar ataques. Além disso, eles sempre atacarão a criatura mais próxima (um teste de Percepção médio é necessário para distinguir amigo de inimigo) e uma manobra de Foco Adrenal é necessária para sair da fúria frenética. Se não houver mais alvos animados para atacar, eles destruirão qualquer outra coisa ao seu alcance até serem nocauteados ou realizarem uma manobra bem-sucedida para sair do frenesi.'
            }
        },
    ], //ok
    'Culturas': [
        {
            nome: 'Overview',
            descricao: `As pessoas com quem o personagem cresceu determinam sua origem cultural. Se o personagem cresceu como filho de um camponês em uma cultura feudal rural, ele será diferente de um personagem que cresceu como filho de um pescador em uma cultura despótica urbana, mesmo que ambos sejam da mesma raça e profissão. Fatores como idioma, preferências de perícias, preferências de armas, religião, visão de mundo, preconceitos e muitas outras características serão afetados pela cultura na qual o personagem foi criado.
                        A cultura do personagem concede níveis que são atribuídos a habilidades anteriores ao Nível 1, representando o aprendizado da infância. Os níveis concedidos são mostrados na Tabela a seguir.`,
            images: ['/public/tabela-culturas.png',],
            detalhes: {
                Descrição: 'A cultura do personagem concede níveis que são atribuídos a habilidades anteriores ao Nível 1, representando o aprendizado da infância.',
                Extras: '* Perícias que necessitam de especialização, exceto idiomas/linguagem, tem o limite de máximo de 2 níveis/ranks por especialização.'
            }
        },
        {
            nome: 'Cosmopolita', descricao: 'Quando uma cidade cresce o suficiente, seus habitantes deixam de ser meramente urbanos em termos de cultura. Grandes cidades tendem a ter artesãos altamente especializados, e a maior parte de sua economia é dedicada ao comércio. A combinação de especialização, acesso a recursos e experiências culturais encontradas apenas em grandes centros urbanos, e a exposição a outras pessoas por meio do comércio e das viagens criam uma cultura cosmopolita.',
            detalhes: {
                Ofícios: 'Cidades grandes e diversificadas fomentam a especialização e sustentam uma ampla gama de ofícios. Qualquer ofício é apropriado.',
                Vocação: 'Contador, guarda, bibliotecário, gerente, comerciante, oficial, escrivão, soldado, mordomo ou qualquer tipo de artesão.'
            }
        },
        {
            nome: 'Marítima',
            descricao: 'Culturas marítimas geralmente se localizam ao longo das margens de um oceano, lago ou rio, e suas economias são normalmente baseadas na pesca e no comércio. Elas obtêm a maior parte de sua subsistência da água, embora também possam se dedicar à pecuária ou à agricultura.',
            detalhes: {
                Ofícios: 'Culinária (cozinheiro, cervejeiro), Artesanato em Tecido (alfaiate, costureira, trançador de cordas), Artesanato em Couro (trabalhador em couro, armeiro), Metalurgia (ferreiro, fundidor, ferreiro de armas, armeiro), Artesanato em Madeira (carpinteiro, construtor naval, tanoeiro).',
                Vocação: 'Marinheiro, soldado, pirata, pescador, comerciante de artigos náuticos, construtor naval, fabricante de velas.'
            }
        },
        {
            nome: 'Nômade',
            descricao: 'Culturas nômades tendem a se concentrar na criação de gado ou na caça, transportando seu suprimento de alimentos consigo ou seguindo suas migrações. Montarias e animais de rebanho são o núcleo de suas vidas, e eles tendem a ser muito mais focados em bens portáteis e menos focados na posse de terras do que os não-nômades.',
            detalhes: {
                Ofícios: 'Culinária (cozinheiro), Artesanato em Tecido (fiandeira, tintureira, alfaiate, tecelã, costureira), Artesanato em Couro (curtidor, artesão de couro, fabricante de tendas, armeiro, fabricante de cintos).',
                Vocação: 'Pastor, batedor, guarda, tecelão, artesão de couro.'
            }
        },
        {
            nome: 'Rural',
            descricao: 'A maioria das culturas acima se desenvolve em ambientes rurais, mas esta cultura se refere especificamente a pessoas que habitam áreas rurais de terras relativamente abertas e povoadas. Os habitantes rurais geralmente são agricultores de algum tipo, ligados à terra que cultivam. Alguns moradores rurais se dedicam ao artesanato, mas tende a ser em pequena escala e voltado para o uso local. Os moradores rurais geralmente têm uma relação simbiótica com os moradores urbanos próximos, trocando alimentos e matérias-primas pela maioria de seus produtos manufaturados.',
            detalhes: {
                Ofícios: 'Culinária (cozinheiro, cervejeiro, açougueiro, queijeiro), Artesanato em Tecido (qualquer tipo), Artesanato em Couro (qualquer tipo), Metalurgia (ferreiro, ferreiro de armas, armeiro), Artesanato em Pedra (pedreiro, lapidador de pedra, oleiro), Artesanato em Madeira (serrador, carpinteiro, fabricante de carroças, tanoeiro).',
                Vocação: 'Agricultor, pastor, miliciano, tecelão, funileiro, pedreiro, carpinteiro.'
            }
        },
        {
            nome: 'Saqueadora',
            descricao: 'Os Saqueadores representam uma sociedade de saqueadores, geralmente encontrados em terras áridas adjacentes a uma cultura mais estabelecida. Eles vivem da exploração da produtividade alheia, embora também possam se dedicar à criaçãode gado ou à agricultura em menor escala.',
            detalhes: {
                Ofícios: 'Culinária (cozinheiro), Artesanato em Couro (curtidor, artesão de couro, armeiro), Metalurgia (ferreiro, ferreiro de armas, armeiro).',
                Vocação: 'Saqueador, curandeiro, xamã, caçador, batedor.'
            }
        },
        {
            nome: 'Severa',
            descricao: 'Essa cultura representa pessoas que vivem em terras devastadas, embora o tipo possa variar. Tundra, plataformas de gelo, campos de lava, desertos verdadeiros ou até mesmo alguma forma de terra devastada quimicamente ou magicamente hostil se aplicam. As pessoas nessas culturas vivem no limite da sobrevivência e tendem a ser muito focadas em habilidades de sobrevivência aplicáveis ao seu ambiente hostil.',
            detalhes: {
                Ofícios: 'Culinária (cozinheiro), Artesanato em Couro (curtidor, artesão em couro, armeiro), Metalurgia (ferreiro, ferreiro de armas, armeiro), Artesanato em Madeira (carpinteiro).',
                Vocação: 'Caçador, armador de armadilhas, xamã, guia.'
            }
        },
        {
            nome: 'Silvestre',
            descricao: 'Os povos silvestres são habitantes das florestas que podem praticar alguma pecuária e/ou agricultura limitadas, mas vivem principalmente da caça e da coleta em seu rico ambiente. Essas culturas tendem a ser dispersas com populações pequenas, já que altas concentrações de pessoas frequentemente resultam no desmatamento da floresta e na mudança da cultura para um novo tipo.',
            detalhes: {
                Ofícios: 'Culinária (qualquer), Artesanato em Tecido (qualquer), Artesanato em Couro (curtidor, artesão de couro, sapateiro, armeiro), Metalurgia (ferreiro, ferreiro de armas), Artesanato em Pedra (oleiro), Artesanato em Madeira (serrador, carpinteiro, tanoeiro).',
                Vocação: 'Caçador, agricultor, explorador, tecelão, carpinteiro, artesão de couro.'
            }
        },
        {
            nome: 'Subterrânea',
            descricao: 'Pessoas que passam a maior parte ou todo o seu tempo no subsolo ou dentro de grandes estruturas pertencem a esta cultura. Algum suprimento constante de alimentos deve estar disponível, seja por meio de rebanhos de animais, cultivo de fungos ou pesca, caso contrário, a cultura se torna totalmente dependente do comércio para obter comida (aqueles que saqueiam em busca de comida se tornam saqueadores).',
            detalhes: {
                Ofícios: 'Culinária (cozinheiro, cervejeiro, açougueiro, queijeiro), Artesanato em Tecido (filhote, tintureiro, alfaiate, tecelão, costureira), Artesanato em Couro (curtidor, artesão de couro, sapateiro, armeiro), Metalurgia (qualquer), Artesanato em Pedra (qualquer).',
                Vocação: 'Mineiro, soldado, ferreiro, cultivador de fungos, explorador, batedor.'
            }
        },
        {
            nome: 'Terras Altas',
            descricao: 'Os habitantes das terras altas vivem em colinas acidentadas ou terrenos montanhosos. Geralmente, são um tanto isolados pela geografia local e têm suas fontes de alimento limitadas pela falta de terras planas. Tendem a se dedicar à agricultura e à criação de animais em pequena escala.',
            detalhes: {
                Ofícios: 'Culinária (cozinheiro, cervejeiro, açougueiro), Artesanato em Tecido (qualquer), Artesanato em Couro (qualquer), Metalurgia (ferreiro, ferreiro de armas, armeiro), Artesanato em Pedra (pedreiro, lapidador de pedra, oleiro), Artesanato em Madeira (serrador, carpinteiro, fabricante de carroças, tanoeiro).',
                Vocação: 'Pastor, agricultor, tecelão, pedreiro, carpinteiro, soldado, mineiro.'
            }
        },
        {
            nome: 'Urbana',
            descricao: 'Os habitantes urbanos são as pessoas que vivem nas vilas e pequenas cidades de uma área povoada. Tendem a ser especialistas qualificados ou artesãos e geralmente vivem uma existência simbiótica com os habitantes rurais de sua região, trocando produtos acabados por alimentos e matérias-primas.',
            detalhes: {
                Ofícios: 'Assim como na cultura cosmopolita, qualquer artesanato é apropriado.',
                Vocação: 'Contador, guarda, bibliotecário, gerente, comerciante, oficial, escrivão, soldado, mordomo, qualquer tipo de artesão.'
            }
        }
    ], //ok
    'Profissões': [
        {
            nome: 'Overview',
            descricao: 'As profissões de Rolemaster não são profissões no sentido típico, ou uma ocupação. Uma profissão engloba as experiências fundamentais de um personagem, determinando a dificuldade de aprender habilidades, facilitando o foco em certas capacidades, enquanto tornam outras mais difíceis de aprender, mas não impossíveis (exceto algumas listas de magias).',
            detalhes: {
                Custo: 'Para cada habilidade, dois números são mostrados, separados por uma barra. O primeiro número é o custo de um nível da habilidade, e o segundo número é o custo do segundo nível. As quatro categorias de treinamento de combate (listadas como “Training 1”, “Training 2”, etc.) são os custos das quatro habilidades de treinamento de combate. Ao criar um personagem, o jogador deve atribuir esses custos às categorias de treinamento de combate (Melee Weapons, Ranged Weapons, Shield, and Unarmed) na ordem que preferir.',
                Perícias_Profissionais: 'Devido ao uso e prática constantes, um personagem escolhe 10 perícias (dentre as 15 listadas) para receber um bônus de +1 por nível nessa perícia, até um máximo de +30. Os personagens também possuem perícias nas quais se mostram particularmente aptos, uma espécie de habilidade natural. Um personagem escolhe 2 perícias (dentre as 15 listadas) que recebem um bônus fixo de +5 cada.',
                Reino: 'Para conjuradores, a profissão determina o reino. Profissões de armas devem escolher um reino (Canalização, Essência ou Mentalismo). O atributo de reino de um personagem é o atributo usado para conjurar magias e é baseado em seu reino. O atributo de reino de um personagem é o atributo usado para conjurar magias e é baseado em seu reino. Para o reino da Canalização, é Intuição; para Essência, é Empatia; e para Mentalismo, é Presença. Para conjuradores híbridos, que usam mais de um reino de magia, o bônus de atributo de reino é o menor dos dois atributos de reino. dos seus bônus de Intuição e Empatia). Todos os personagens (e criaturas) recebem +10 em testes de resistência contra seu próprio reino.',
                Listas_de_Magias: 'Cada profissão de conjurador (semi, puro ou híbrido) recebe seis listas de magias básicas personalizadas para a profissão. As listas de magias são forncidas no Spell Law, ou na seção de Magias.',
                Reino_das_Armas: 'As profissões de combate concentram-se principalmente em habilidades não mágicas, incluindo armas, armaduras, atletismo, subterfúgio e percepção. Consequentemente, terão dificuldade em aprender feitiços e outras habilidades mágicas. Usuários de armas ainda devem selecionar um dos três reinos da magia durante a criação do personagem. Atributos sugeridos: Agilidade, Constituição, Rapidez, Autodisciplina, Força.',
                Reino_da_Canalização: 'Usuários de canalização obtêm seu poder de uma fonte externa específica, geralmente um ou mais deuses ou entidades similares. O atributo de reino para canalização é Intuição, que representa a percepção da orientação de poderes superiores. Atributos sugeridos: Intuição, Memória, Raciocínio.',
                Reino_da_Essência: 'A Essência é o poder que existe em todos e em tudo. Também é conhecida em outras fontes como Tao, Magia, Campo Unificado, Força, etc. Um usuário de Essência acessa esse campo de poder, molda-o e o direciona para feitiços. O Atributo de Domínio para Essência é Empatia, refletindo a capacidade do usuário de se abrir para as sensações sutis ao seu redor. Atributos sugeridos: Empatia, Memória, Raciocínio.',
                Reino_do_MEntalismo: 'Mentalismo é o poder mágico concentrado na mente do conjurador. O atributo de reino para Mentalismo é Presença, o atributo usado para impor a própria vontade sobre os outros. Atributos sugeridos: Memória, Presença, Raciocínio.',
                Reinos_Hibridos: 'Os conjuradores híbridos combinam os poderes de dois reinos mágicos diferentes. Isso proporciona ao conjurador grande flexibilidade, dando acesso a uma vasta gama de magias, embora ao preço de sofrer as limitações de ambos os reinos. O atributo de reino para híbridos é o menor dos dois atributos associados aos reinos aos quais o híbrido tem acesso. Atributos sugeridos: Memória, Raciocínio e os dois atributos de reino apropriados (Empatia, Intuição ou Presença).'
            }
        },
        {
            nome: 'Sem Profissão',
            descricao: 'A opção "Sem Profissão" não se concentra em nenhum conjunto específico de perícias. Embora ofereça um acesso muito amplo, ela não é muito eficiente e ficará para trás se misturada com as outras profissões. Se a opção "Sem Profissão" for usada, o personagem seleciona um conjunto de 6 listas de magias básicas e escolha 10 perícias profissionais de quaisquer categorias (sujeito à aprovação do Mestre).',
            images: ['/public/custos-sem-profissao.png'],
            detalhes: {
                Reino: 'Qualquer um.',
                Perícias_Profissionais: 'Quaisquer 10 perícias aprovadas pelo Mestre.',
                Listas_Base_de_Magias: 'Um conjunto de 6 listas de magias básicas'
            }
        },
        {
            nome: 'Amador',
            descricao: 'Os Amadores são Semi-Conjuradores que aprimoram suas capacidades de subterfúgio usando Essência. As magias básicas de um Amador tendem a aprimorar habilidades naturais em diversas áreas, com as listas mais distintas conferindo-lhe vantagem no comércio e com máquinas. Em um cenário mais avançado, o papel mais natural do Amador pode ser o de mecânico ou engenheiro.',
            images: ['/public/custos-amador.png'],
            detalhes: {
                Reino: 'Essência',
                Perícias_Profissionais: 'Perception, Metalcraft, Attunement, Spell Lore, Climbing, Running, Architecture, Engineering, Influence, Trading, Concealment, Stalking, Locks, Mechanics, Traps.',
                Listas_Base_de_Magias: 'Concealment Mastery, Senses, Influences, Smoke And Mirrors, Movement Mastery, Trade Mastery',
            }
        },
        {
            nome: 'Bardo',
            descricao: 'Bardos são semi-conjuradores de essência. São músicos, artistas, fofoqueiros e mestres do conhecimento. Suas magias básicas aprimoram esses papéis, mas também incorporam música às magias para confundir inimigos e auxiliar aliados, além de proporcionar uma afinidade incomparável com itens mágicos.',
            images: ['/public/custos-bardo.png'],
            detalhes: {
                Reino: 'Essência',
                Perícias_Profissionais: 'Musical Composition, Attunement, Historic Lore, Language, Racial Lore, Region Lore, Religion/Philosophy, Spell Lore, Spell Trickery, Running, Acting, Music, Influence, Social Awareness, Trading.',
                Listas_Base_de_Magias: 'Controlling Songs, Entertaining Ways, Inspiring Songs, Item Lore, Sound Control, Sound Projection',
            }
        },
        {
            nome: 'Clérigo',
            descricao: 'Clérigos são conjuradores puros que se concentraram em magias que exigem o poder mais direto de suas divindades. Suas magias básicas lidam diretamente com a vida, comunhão com divindades, invocação de criaturas vivas, proteção contra servos de divindades opostas e canalização direta de suas próprias divindades. Esses usuários de magia são os mais poderosos entre os usuários de Canalização, mas também devem ser os mais restritos no sentido de acatar os desejos ou o credo de sua divindade ou igreja.',
            images: ['/public/custos-clerigo.png'],
            detalhes: {
                Reino: 'Canalização',
                Perícias_Profissionais: 'Attunement, Religion/Philosophy, Spell Lore, Grace, Medicine, Meditation, Channeling, Power Development, Astronomy, Influence, Leadership, Magical Ritual, Open Spell Lists, Closed Spell Lists, Base Spell Lists.',
                Listas_Base_de_Magias: 'Channels, Communal Ways, Life Mastery, Protections, Repulsions, Summons',
            }
        },
        {
            nome: 'Curandeiro',
            descricao: 'Os curandeiros combinam os domínios da Canalização e do Mentalismo (Atributos dos Domínios da Intuição e da Presença). Eles se concentram em feitiços de autocura e na capacidade de absorver os ferimentos de outros. Assim, um curandeiro pode curar uma pessoa absorvendo o ferimento do paciente e curando-o gradualmente. Eles podem aprender facilmente tanto Desenvolvimento Corporal (para sobreviver a esse processo) quanto habilidades médicas (para ajudar os outros sem precisar absorver seus ferimentos).',
            images: ['/public/custos-curandeiro.png'],
            detalhes: {
                Reino: 'Canalização e Mentalismo',
                Perícias_Profissionais: 'Body Development, Attunement, Racial Lore, Grace, Herbalism, Medicine, Meditation, Mental Focus, Channeling, Power Development, Social Awareness, Magical Ritual, Open Spell Lists, Closed Spell Lists, Base Spell Lists.',
                Listas_Base_de_Magias: 'Blood Ways, Bone Ways, Cleansing, Muscle Ways, Organ Ways, Surface Ways',
            }
        },
        {
            nome: 'Curandeiro Leigo',
            descricao: 'Curandeiros Leigos são Conjuradores Puros de Mentalismo que se concentraram em feitiços para curar pessoas e animais. Seus feitiços básicos lidam com a cura de doenças e ferimentos, bem como com a criação e animação de próteses. Eles também podem aprender habilidades médicas mundanas com facilidade.',
            images: ['/public/custos-leigo.png'],
            detalhes: {
                Reino: 'Mentalismo',
                Perícias_Profissionais: 'Fabric Craft, Woodcraft, Attunement, Racial Lore, Grace, Herbalism, Medicine, Mental Focus, Power Development, Influence, Social Awareness, Magical Ritual,Open Spell Lists, Closed Spell Lists, Base Spell Lists.',
                Listas_Base_de_Magias: 'Blood Mastery, Bone Mastery, Concussion Mastery, Muscle Mastery, Nerve And Organ Mastery, Prosthetics',
            }
        },
        {
            nome: 'Druída',
            descricao: 'Druidas são conjuradores puros que se concentraram em magias relacionadas ao mundo natural. Suas magias básicas lidam com ervas, outras plantas, animais, clima e a natureza em geral. Dependendo do cenário, podem ser ambientalistas modernos, protetores quase históricos de seu povo contra os poderes avassaladores da natureza ou simplesmente cultistas rurais com rituais estranhos.',
            images: ['/public/custos-druida.png'],
            detalhes: {
                Reino: 'Canalização',
                Perícias_Profissionais: 'Animal Handling, Perception, Tracking, Woodcraft, Navigation, Survival, Creature Lore, Region Lore, Grace, Herbalism, Power Development, Open Spell Lists, Closed Spell Lists, Base Spell Lists, Concealment.',
                Listas_Base_de_Magias: 'Animal Mastery, Herb Mastery, Herb Mastery, Nature’s Protections, Nature’s Wrath, Nature’s Wrath',
            }
        },
        {
            nome: 'Estudioso',
            descricao: 'Os eruditos se especializam em vocações intelectuais. Assim como os conjuradores puros, os eruditos não possuem aptidão real para habilidades de combate. Em vez disso, concentram-se nas habilidades acadêmicas utilizadas em suas vocações. São mais aptos a aprender magias do que outros usuários de armas, embora não se comparem às verdadeiras Profissões de conjuração.',
            images: ['/public/custos-estudioso.png'],
            detalhes: {
                Reino: 'Reino das Armas (Reino de magia da sua escolha)',
                Perícias_Profissionais: 'Writing, Creature Lore, Historic Lore, Language, Materials Lore, Racial Lore, Region Lore, Religion/Philosophy, Architecture, Astronomy, Engineering, Mathematics, Administration, Service, Trade.',
                Listas_Base_de_Magias: 'Nenhuma lista base inicial',
            }
        },
        {
            nome: 'Feiticeiro',
            descricao: 'Os feiticeiros combinam o poder bruto do Reino da Essência com o fervor do Domínio da Canalização (Atributos dos Reinos da Intuição e da Empatia). Suas magias básicas lidam com a destruição tanto de seres vivos (corpos, almas e mentes) quanto de matéria inanimada.',
            images: ['/public/custos-feiticeiro.png'],
            detalhes: {
                Reino: 'Essência e Canalização',
                Perícias_Profissionais: 'Attunement, Runes, Creature Lore, Materials Lore, Spell Lore, Grace, Channeling, Directed Spell, Power Development, Architecture, Engineering, Magical Ritual, Open Spell Lists, Closed Spell Lists, Base Spell Lists.',
                Listas_Base_de_Magias: 'Flesh Destruction, Fluid Destruction, Gas Destruction, Mind Destruction, Solid Destruction, Soul Destruction',
            }
        },
        {
            nome: 'Guerreiro',
            descricao: 'Os guerreiros são os principais especialistas em combate. Um guerreiro pode ser um cavaleiro montado com armadura pesada, um mosqueteiro destemido, um brutamontes com um enorme porrete revestido de bronze, um samurai obcecado por honra ou um mestre arqueiro. A face da batalha pode mudar com a tecnologia e a organização social, mas sempre haverá aqueles que se especializam em estar no centro de tudo.',
            images: ['/public/custos-guerreiro.png'],
            detalhes: {
                Reino: 'Reino das Armas (Reino de magia da sua escolha)',
                Perícias_Profissionais: 'Riding, Body Development, Fortitude, Weight-Training, Maneuvering in Armor, Mounted Combat, Protect, Disarm, Multiple Attacks, Melee Weapons, Ranged Weapons, Shield, Metalcraft, Running, Leadership.',
                Listas_Base_de_Magias: 'Nenhuma lista base inicial',
            }
        },
        {
            nome: 'Ilusionista',
            descricao: 'Ilusionistas são Conjuradores Puros de Essência que se concentraram em feitiços de desorientação e ilusão. Seus feitiços básicos lidam principalmente com a manipulação de elementos e forças que afetam os sentidos humanos: visão, audição, tato, paladar, olfato, impulsos mentais e a combinação desses sentidos. Mais sutil que o Mago, o Ilusionista é menos direto, mas não menos poderoso.',
            images: ['/public/custos-ilusionista.png'],
            detalhes: {
                Reino: 'Essência',
                Perícias_Profissionais: 'Perception, Illusion Crafting, Drawing/Painting, Attunement, Spell Lore, Grace, Spell Trickery, Acting, Music, Stage Magic, Power Development, Open Spell Lists, Closed Spell Lists, Base Spell Lists, Trickery.',
                Listas_Base_de_Magias: 'Guises, Illusion Mastery, Light Molding, Mind Sense Molding, Sense Molding, Sound Molding',
            }
        },
        {
            nome: 'Ladino',
            descricao: 'Ladinos são os usuários de armas versáteis e aventureiros. Eles podem aprender a usar diversas armas quase tão facilmente quanto um Guerreiro e habilidades de subterfúgio/mecânica quase tão bem quanto um Ladrão. Ladinos também podem adquirir habilidades atléticas (incluindo Desenvolvimento Corporal), habilidades de combate adicionais e habilidades de sobrevivência na natureza com facilidade. Ladinos são uma boa escolha se você quer ser um bom combatente e também se aventurar em diversas áreas fora do combate',
            images: ['/public/custos-ladino.png'],
            detalhes: {
                Reino: 'Reino das Armas (Reino de magia da sua escolha)',
                Perícias_Profissionais: 'Riding, Perception, Body Development, Maneuvering in Armor, Restricted Quarters, Blind Fighting, Melee Weapons, Ranged Weapons, Survival, Jumping, Poison Mastery, Climbing, Running, Ambush, Stalking.',
                Listas_Base_de_Magias: 'Nenhuma lista base inicial',
            }
        },
        {
            nome: 'Ladrão',
            descricao: 'Ladrões são especialistas em furtividade e sutileza. Aprendem com facilidade habilidadesmecânicas, como abrir fechaduras e desarmar armadilhas, e são bastante habilidosos no manuseio de armas. Também são mestres em subterfúgios e em diversas habilidades atléticas (como escalada). Raramente usam armaduras pesadas, mas armaduras leves não comprometem significativamente suas capacidades profissionais. Um ladrão pode seguir uma vida de furtos, mas também se adapta bem a funções de batedor e espião.',
            images: ['/public/custos-ladrao.png'],
            detalhes: {
                Reino: 'Reino das Armas (Reino de magia da sua escolha)',
                Perícias_Profissionais: 'Perception, Melee Weapons, Ranged Weapons, Acrobatics, Contortions, Climbing, Running, Influence, Social Awareness, Trading, Concealment, Stalking, Trickery, Locks, Traps.',
                Listas_Base_de_Magias: 'Nenhuma lista base inicial',
            }
        },
        {
            nome: 'Magent',
            descricao: 'O Magent é um Semi-Conjurador com habilidades e feitiços de espionagem incomparáveis: um mago-agente. Os Magents se destacam como assassinos mágicos ou agentes secretos com feitiços básicos que lidam com veneno, coleta de informações, assassinato e fuga, tanto física quanto em termos de desviar a culpa.',
            images: ['/public/custos-magent.png'],
            detalhes: {
                Reino: 'Mentalismo',
                Perícias_Profissionais: 'Perception, Melee Weapons, Ranged Weapons, Acrobatics, Contortions, Jumping, Poison Mastery, Mental Focus, Climbing, Running, Swimming, Ambush, Concealment, Stalking, Trickery.',
                Listas_Base_de_Magias: 'Assassination Master, Gathering Secrets, Disguise Mastery, Misdirections, Escapes, Poison Mastery',
            }
        },
        {
            nome: 'Mago',
            descricao: 'Magos são conjuradores puros que se concentraram em magias elementais. Suas magias básicas lidam com os seis elementos de Rolemaster: terra, fogo, gelo, luz (que inclui eletricidade), água e vento. Eles possuem muitas magias que lançam raios e esferas desses elementos com efeitos potencialmente mortais, e por isso os Magos são frequentemente encontrados em campos de batalha. Eles também podem aprender todos os tipos de habilidades mágicas com facilidade.',
            images: ['/public/custos-mago.png'],
            detalhes: {
                Reino: 'Essência',
                Perícias_Profissionais: 'Attunement, Runes, Spell Lore, Grace, Directed Spell, Power Development, Power Projection, Architecture, Astronomy, Engineering, Mathematics, Magical Ritual, Open Spell Lists, Closed Spell Lists, Base Spell Lists.',
                Listas_Base_de_Magias: 'Earth Law, Fire Law, Ice Law, Light Law, Water Law, Wind Law',
            }
        },
        {
            nome: 'Mentalista',
            descricao: 'Mentalistas são conjuradores puros de Mentalismo que se concentram em feitiços que lidam com a mente e os sentidos. Seus feitiços básicos envolvem a leitura de presenças mentais, comunicação mental, controle mental e controle sensorial. Como estudiosos do ser humano, os Mentalistas podem aprender disciplina e habilidades sociais com facilidade. São conspiradores ideais.',
            images: ['/public/custos-mentalista.png'],
            detalhes: {
                Reino: 'Mentalismo',
                Perícias_Profissionais: 'Attunement, Language, Racial Lore, Grace, Meditation, Mental Focus, Power Development, Influence, Leadership, Social Awareness, Magical Ritual, Open Spell Lists, Closed Spell Lists, Base Spell Lists, Administration.',
                Listas_Base_de_Magias: 'Mind Attack, Mind Control, Mind Merge, Mind Speech, Presence, Sense Control',
            }
        },
        {
            nome: 'Místico',
            descricao: 'Os místicos combinam os domínios da Essência e do Mentalismo (Atributos dos Reinos da Empatia e da Presença) para potencializar feitiços sutis de desorientação e modificação. Seus feitiços básicos lidam com ilusões pessoais, bem como com a modificação da matéria.',
            images: ['/public/custos-mistico.png'],
            detalhes: {
                Reino: 'Essência e Mentalismo',
                Perícias_Profissionais: 'Perception, Attunement, Spell Lore, Grace, Spell Trickery, Meditation, Mental Focus, Acting, Directed Spell, Power Development, Open Spell Lists, Closed Spell Lists, Base Spell Lists, Stalking, Trickery.',
                Listas_Base_de_Magias: 'Confusing Ways, Gas Alteration, Hiding, Liquid Alteration, Mystical Change, Solid Alteration',
            }
        },
        {
            nome: 'Monge',
            descricao: 'Monges são semi-conjuradores que combinam habilidade com armas e magia mental. Suas magias básicas são estritamente pessoais, permitindo-lhes realizar grandes feitos físicos e aprimorar seus ataques. O que o cinema de Hong Kong consegue com fios e adereços, o Monge faz com magia.',
            images: ['/public/custos-monge.png'],
            detalhes: {
                Reino: 'Mentalismo',
                Perícias_Profissionais: 'Perception, Adrenal Defense, Adrenal Focus, Adrenal Speed, Adrenal Strength, Body Development, Multiple Attacks, Unarmed, Acrobatics, Jumping, Meditation, Mental Focus, Climbing, Running, Swimming.',
                Listas_Base_de_Magias: 'Body Reins, Combat Mastery, Evasions, Mind Over Matter, Monk’s Bridge, Monk’s Sense',
            }
        },
        {
            nome: 'Monge Guerreiro',
            descricao: 'Monges guerreiros se especializam em combate, disciplina e habilidades atléticas. O monge guerreiro é muito semelhante ao guerreiro, mas com um foco muito maior em habilidades disciplinares e ênfase na manobrabilidade em vez de depender de armadura. Tal personagem pode se assemelhar a um ninja ou a um artista marcial Shao-Lin.',
            images: ['/public/custos-monge-guerreiro.png'],
            detalhes: {
                Reino: 'Reino das Armas (Reino de magia da sua escolha)',
                Perícias_Profissionais: 'Adrenal Defense, Adrenal Speed, Adrenal Strength, Body Development, Blind Fighting, Multiple Attacks, Reverse Strike, Subduing, Unarmed, Acrobatics, Jumping, Meditation, Climbing, Running, Swimming.',
                Listas_Base_de_Magias: 'Nenhuma lista base inicial',
            }
        },
        {
            nome: 'Paladino',
            descricao: 'Defensores fervorosos da fé, os Paladinos são semi-conjuradores que combinam proezas em combate com magias utilitárias. O Paladino é um guerreiro sagrado altamente focado, capaz de desenvolver boas habilidades de luta e magias que sustentam seu papel como guerreiro e líder em combate. O Paladino é um combatente competente em qualquer situação, mas se destaca especialmente contra os inimigos sobrenaturais de sua fé.',
            images: ['/public/custos-paladino.png'],
            detalhes: {
                Reino: 'Canalização',
                Perícias_Profissionais: 'Riding, Body Development, Maneuvering in Armor, Mounted Combat, Protect, Melee Weapons, Shield, Metalcraft, Religion/Philosophy, Transcendence, Mental Focus, Running, Channeling, Influence, Leadership.',
                Listas_Base_de_Magias: 'Cursebreaking, Holy Arms, Holy Healing, Holy Shields, Holy War, Inspiring Ways',
            }
        },
        {
            nome: 'Patrulheiro',
            descricao: 'O Patrulheiro é um semi-conjurador que combina Armas com Canalização, especializando-se em habilidades ao ar livre e magias que influenciam a natureza. Patrulheiros são talentosos em percepção e habilidades ao ar livre e, embora não aprendam a usar armas tão rapidamente quanto o Paladino, possuem custos de combate decentes. As listas básicas de magias de um Patrulheiro têm muitos usos, mas muitas das magias aprimoram suas habilidades em rastreamento, furtividade na natureza, sobrevivência na natureza e movimento. O Patrulheiro pode ser um comando letal.',
            images: ['/public/custos-patrulheiro.png'],
            detalhes: {
                Reino: 'Canalização',
                Perícias_Profissionais: 'Animal Handling, Riding, Perception, Tracking, Melee Weapons, Ranged Weapons, Navigation, Survival, Creature Lore, Region Lore, Climbing, Running, Swimming, Concealment, Stalking.',
                Listas_Base_de_Magias: 'Beastly Ways, Inner Walls, Moving Ways, Nature’s Guises, Path Mastery, Survival’s Way',
            }
        },
        {
            nome: 'Trabalhador Braçal',
            descricao: 'Os trabalhadores braçais se especializam em ofícios e artesanatos físicos. Eles podem aprender habilidades com armas e armaduras com mais facilidade do que a maioria dos conjuradores, mas o combate não é seu forte. Embora possam aprender habilidades atléticas com facilidade, tendem a evitar situações de combate. Eles costumam se concentrar nas habilidades necessárias para uma vocação específica.',
            images: ['/public/custos-trabalhador.png'],
            detalhes: {
                Reino: 'Reino das Armas (Reino de magia da sua escolha)',
                Perícias_Profissionais: 'Animal Handling, Body Development, Weight-training, Culinary, Drawing/Painting, Fabric Craft, Leathercraft, Metalcraft, Stonecraft, Woodcraft, Piloting, Running, Mechanics, Service, Trade.',
                Listas_Base_de_Magias: 'Nenhuma lista base inicial',
            }
        }
    ], //ok
    'Estatísticas': [
        {
            nome: 'Overview',
            descricao: `Os atributos mentais e físicos básicos de um personagem são representados por 10 estatísticas. Os valores das estatísticas variam de 1 a 100, o que fornece uma base para comparação entre personagens da mesma raça. Quanto menor o valor de uma estatística, mais fraco ele é; quanto maior o valor, mais forte. Essas dez estatísticas incluem atributos físicos e mentais como Força, Agilidade, Raciocínio e Autodisciplina. Dois conjuntos de atributos são gerados: atributos temporários representam os atributos atuais de um personagem, e atributos potenciais representam o desenvolvimento máximo possível do personagem.
                        Durante o jogo, os atributos temporários podem aumentar devido à prática e ao treinamento, enquanto os atributos potênciais raramente, ou nunca, mudam. Observe que os atributos de um personagem nem sempre aumentam além do seu valor inicial, pois ainda exigem esforço para serem aprimorados: dois meses de viagens e aventuras não necessariamente alcançam o que 18 anos de exuberância juvenil não conseguiram.`,
            detalhes: {
                Agilidade: '(Ag) Agilidade é uma combinação de destreza manual, graça e controle motor fino. Personagens ágeis movem-se com facilidade e até mesmo com equilíbrio; personagens com baixa agilidade podem ser desajeitados ou imprecisos em seus movimentos.',
                Constituição: '(Co) Constituição representa a saúde e o bem-estar geral, a resistência a doenças e a capacidade de absorver dano físico. Personagens com altos atributos de Constituição são saudáveis e tendem a ter uma constituição robusta. Aqueles com baixa Constituição podem ser excessivamente magros ou obesos e podem ser propensos a resfriados, tosses persistentes, alergias ou outros problemas de saúde menores.',
                Empatia: '(Em) Empatia é a capacidade de perceber os estados emocionais dos outros e a capacidade de formar laços emocionais com pessoas, lugares ou coisas. É também o atributo de domínio da Essência, já que os complexos campos mágicos da Essência são, de certa forma, análogos a um ser vivo. Personagens empáticos costumam ser amigáveis, compreensivos e até protetores com os outros. Aqueles com baixa Empatia são mais propensos a serem indiferentes aos sentimentos dos outros e cruéis, desonestos, antagônicos ou insinceros. Alguns são simplesmente alheios, embora até isso possa ser interpretado como arrogância ou condescendência.',
                Intuição: '(In) Intuição é uma combinação de pensamento subconsciente, sorte, genialidade, precognição e o favor dos deuses, todos incorporados neste atributo. Isso proporciona a capacidade de tirar conclusões ou tomar decisões rapidamente, sem parar para uma reflexão profunda. É o atributo de domínio da Canalização. Personagens intuitivos costumam ser criativos, imaginativos e abertos a novas experiências. Personagens com baixa Intuição tendem a ser mais inflexíveis, desinteressados, reacionários ou teimosos.',
                Memória: '(Me) Memória é a capacidade de reter o que foi vivenciado e aprendido anteriormente. Personagens com boa Memória costumam ser atentos e conscientes, e apreciam estudar e aprender. Aqueles com baixa Memória podem parecer desatentos ou impensados, distraídos ou esquecidos.',
                Presença: '(Pr) Presença é o senso de si mesmo e a capacidade de projetar a própria personalidade para afetar ou controlar os outros. Inclui a projeção de magia focada mentalmente e serve como o atributo de domínio para Mentalismo. Personagens com alta Presença geralmente são extrovertidos e gregários, embora sua assertividade e entusiasmo às vezes possam incomodar as pessoas. Aqueles com baixa Presença são mais propensos à timidez, introversão ou até mesmo insegurança e pessimismo.',
                Rapidez: '(Qu) Rapidez é uma medida de velocidade, reflexos e tempo de reação consciente. Personagens ágeis se movem rapidamente e geralmente são os primeiros a agir, tendendo a ser ativos e enérgicos. Personagens com baixa Rapidez podem ser lentos ou até mesmo letárgicos.',
                Raciocínio: '(Re) Raciocínio é a capacidade de analisar as informações disponíveis e tirar conclusões lógicas. Aqueles que raciocinam bem costumam ser organizados em seu pensamento e podem ser prudentes e cumpridores de seus deveres, perfeccionistas ou orientados a objetivos. Aqueles que raciocinam mal podem ser impacientes e precipitados, distraídos e desorganizados. Na melhor das hipóteses, essas características podem parecer espontâneas e instintivas.',
                Autodisciplina: '(SD) Autodisciplina é o controle da mente sobre o corpo, a capacidade de manter o foco ou se esforçar mais ou por mais tempo na busca de um objetivo, ou de recorrer às reservas internas de força de vontade inerentes a qualquer indivíduo. Personagens com forte Autodisciplina são moderados, confiantes e equilibrados. Podem ser extrovertidos, mas também podem ser reservados e discretos. Aqueles com baixa autodisciplina podem ser indulgentes consigo mesmos, nervosos, irritadiços ou temperamentais.',
                Força: '(St) Força não é apenas musculatura bruta, mas a capacidade de usar os músculos existentes da melhor maneira possível. A força é avaliada em relação ao tamanho; tanto a força quanto o peso de uma pessoa são considerados para determinar o quanto ela pode levantar, por exemplo. Personagens fortes podem ter massa muscular ou podem ser magros e esguios, mas tendem a ser ativos. Personagens fracos podem ser magros ou flácidos, características que podem surgir da genética ou de pura preguiça.'
            }
        },
        {
            nome: 'Inflencia dos Atributos',
            descricao: `O valor do atributo é usado para determinar o bônus de atributo. O atributo em si não é usado no jogo, mas sim o bônus de atributo é usado como um modificador para habilidades e ações. Cada categoria de habilidade tem dois atributos atribuídos cujos bônus são adicionados a um terceiro atributo para a habilidade individual, a fim de determinar o bônus total da habilidade. Diferentes raças podem fornecer um bônus ou uma penalidade ao bônus de atributo (não ao atributo em si). 
                        Os humanos são considerados a referência e, portanto, não possuem modificadores raciais de atributos. Assim, um anão médio com Força 50 é mais forte do que um humano médio com a mesma Força 50, já que o anão recebe +2 em seu bônus de Força. 
                        Além das perícias, os atributos afetam diversas outras qualidades do personagem, como defesa, velocidade, resistência a magias e penalidades de carga.`,
            detalhes: {
                DB: 'Um personagem se beneficia defensivamente de sua Rapidez. Independentemente de possuir ou não perícias defensivas, ele pode adicionar 3 vezes seu bônus de Rapidez ao seu Bônus Defensivo, desde que não esteja completamente imóvel ou surpreso.',
                Carga: 'Carregar e usar equipamentos e armaduras em excesso pode impor penalidades de manobra, que podem ser compensadas por Força.',
                Iniciativa: 'O bônus ou penalidade de Rapidez do personagem modifica as rolagens de iniciativa em combate.',
                BMR: 'Metade do bônus de Rapidez do personagem é adicionada (ou subtraída) à sua Velocidade de Movimento Base de 6 m/rodada. Observe que esse valor é ainda modificado pela raça ou,opcionalmente, pela altura.',
                RR: 'Os testes de resistência contra magias, medo, veneno e doenças são afetados por vários bônus de atributos, dependendo do tipo de ’ataque’. Físico: Constituição; Medo: Autodisciplina; Magia baseada em canalização: Intuição; Magia baseada em essência: Empatia; Magia baseada em mentalismo: Presença'
            }
        },
        {
            nome: 'Gerando Estatísticas',
            descricao: `Para cada um dos 10 atributos, role um d100 três vezes, rolando novamente qualquer valor menor que 11 até obter um valor de pelo menos 11. Para cada atributo, o maior resultado representa o potencial do personagem para esse atributo, enquanto o resultado intermediário representa o atributo inicial temporário do personagem. O menor resultado é descartado.
                        O jogador pode então fazer até duas trocas, trocando o par temporário/potencial de um atributo pelo par temporário/potencial de outro atributo. Isso permite que o jogador jogue com a profissão desejada, mantendo a variabilidade entre os atributos. O mestre pode alterar o número de trocas, desde nenhuma até a possibilidade de colocar qualquer par temporário/potencial em qualquer atributo.
                        Você pode então escolher quaisquer dois dosseguintes bônus (ou escolher um duas vezes):`,
            detalhes: {
                1: 'Substitua o valor temporário e/ou potencial de qualquer atributo por 56 e 78, respectivamente.',
                2: 'Substitua seu atributo temporário mais alto por 90 e aumente seu potencial em 10 (até um máximo de 100). Aumente o potencial para o valor temporário se o potencial for menor.',
                3: 'Substitua seu segundo atributo temporário mais alto por 85 e aumente seu potencial em 10 (até um máximo de 100). Aumente o potencial para o valor temporário se o potencial for menor.',
                4: 'Faça duas rolagens de ganho de atributo (veja a próxima seção) para o mesmo atributo ou para dois atributos diferentes.'
            }
        },
        {
            nome: 'Ganhando Estatísticas',
            descricao: 'Sempre que um personagem sobe de nível, ou a partir do 2º nível ao criar um personagem além do 1º nível, escolha dois atributos para realizar uma rolagem de ganho de atributo (ou um atributo para realizar duas rolagens). Consulte o valor atual (temporário) na Tabela para determinar qual dado é usado na rolagem. Role esse tipo de dado e adicione o resultado ao atributo temporário. Os atributos não podem ser aumentados acima de seu valor potencial. Ganhos de atributo também podem ser adquiridos com Pontos de Desenvolvimento. Rolagens adicionais de ganho de atributo podem ser adquiridas por 4 DP cada.',
            images: ['/public/tabela-ganho-stats.png',]
        }
    ], //ok
    'Perícias': [
        {
            nome: 'Overview',
            descricao: `Um personagem é amplamente definido por suas habilidades, que definem o que ele sabe e o quão bem ele sabe. Habilidades podem ser praticadas e aprimoradas ao longo do tempo, embora eventualmente cheguem a um ponto de retorno decrescente, onde recebem melhorias menores pela mesma quantidade de esforço.
                        As habilidades estão listadas de acordo com categorias temáticas na Tabela 3-0a. Todas as habilidades dentro de uma categoria (exceto Treinamento de Combate e Conjuração) têm o mesmo custo em Pontos de Desenvolvimento, bônus de atributos da categoria e, frequentemente, um método de resolução compartilhado. Além dos bônus de atributos da categoria, cada habilidade possui seu próprio atributo, que também é adicionado ao total da habilidade (por exemplo, Adestramento de Animais adiciona os bônus de Agilidade e Empatia da categoria, além de Presença para a habilidade). Algumas habilidades exigem especialização ao serem desenvolvidas, que pode ser desenvolvida para múltiplas especializações (por exemplo, ’Montaria’ é desenvolvida como ’Montaria: Cavalo’ ou ’Montaria: Águia Gigante’, e cada uma é aprendida como se fosse uma habilidade separada).
                        As habilidades incluídas são aquelas que serão comuns na maioria das campanhas. Algumas ambientações podem ter novas perícias, ou não usar outras, mais comumente nas categorias de Artesanato e Conhecimento, onde artesanato, idiomas e conhecimentos dependem fortemente da ambientação e do ambiente. As perícias em si não pretendem ser uma lista completa ou exaustiva; no entanto, as categorias são suficientemente gerais para que qualquer nova perícia possa ser adicionada a uma categoria existente.`,
            images: ['/public/tabela 3-0A.png'],
        },
        {
            nome: 'Desenvolvimento de Perícias',
            descricao: `Os personagens recebem 60 Pontos de Desenvolvimento (DP) para gastar a cada nível, começando no nível 1. Em níveis mais baixos, bônus adicionais de DP podem estar disponíveis de acordo com a raça do personagem. O custo para desenvolver uma perícia é determinado pela profissão do personagem.
                        Os custos de perícia são fornecidos para cada profissão (Seção 2.4). Cada perícia é listada com dois custos separados por uma barra (por exemplo, “5/7”). O primeiro custo é o preço em Pontos de Desenvolvimento (DP) para aprender um único ponto de uma perícia em um determinado nível. O segundo custo é o preço em DP para aprender um segundo ponto durante o mesmo nível. Não mais do que dois pontos de uma determinada perícia podem ser adquiridos a cada nível. Algumas perícias possuem especializações que são listadas ao final da descrição da perícia. A perícia é aprendida em uma dessas especializações e múltiplas especializações podem ser adquiridas pelo mesmo custo, como se fossem perícias diferentes.`,

        },
        {
            nome: 'Bônus de Perícia',
            descricao: ``
        },
        {
            nome: 'Perícias Similares',
            descricao: ``
        },
        {
            nome: 'Perícias Complementares',
            descricao: ``
        },
        {
            nome: 'Perícias Conflitantes',
            descricao: ``
        },
        {
            nome: 'Animal',
            descricao: ``,
            images: [],
            detalhes: {
                Animal_Handling: '',
                Riding: ''
            }
        },
        {
            nome: 'Awareness',
            descricao: ``,
            images: [],
            detalhes: {
                Perception: '',
                Tracking: ''
            }
        },
        {
            nome: 'Battle Expertise',
            descricao: ``,
            images: [],
            detalhes: {
                Maneuvering_in_Armor: '',
                Mounted_Combat: '',
                Protect: '',
                Restricted_Quarters: '',
                Subduing: ''
            }
        },
        {
            nome: 'Body Discipline',
            descricao: ``,
            images: [],
            detalhes: {
                Adrenal_Defense: '',
                Adrenal_Focus: '',
                Adrenal_Speed: '',
                Adrenal_Strength: '' 
            }
        },
        {
            nome: 'Brawn',
            descricao: ``,
            images: [],
            detalhes: {}
        },
        {
            nome: 'Combat Training',
            descricao: ``,
            images: [],
            detalhes: {}
        },
        {
            nome: 'Composition',
            descricao: ``,
            images: [],
            detalhes: {}
        },
        {
            nome: 'Crafting',
            descricao: ``,
            images: [],
            detalhes: {}
        },
        {
            nome: 'Delving',
            descricao: ``,
            images: [],
            detalhes: {}
        },
        {
            nome: 'Environmental',
            descricao: ``,
            images: [],
            detalhes: {}
        },
        {
            nome: 'Gymnastic',
            descricao: ``,
            images: [],
            detalhes: {}
        },
        {
            nome: 'Lore',
            descricao: ``,
            images: [],
            detalhes: {}
        },
        {
            nome: 'Magical Expertise',
            descricao: ``,
            images: [],
            detalhes: {}
        },
        {
            nome: 'Medical',
            descricao: ``,
            images: [],
            detalhes: {}
        },
        {
            nome: 'Mental Discipline',
            descricao: ``,
            images: [],
            detalhes: {}
        },
        {
            nome: 'Movement',
            descricao: ``,
            images: [],
            detalhes: {}
        },
        {
            nome: 'Performance Art',
            descricao: ``,
            images: [],
            detalhes: {}
        },
        {
            nome: 'Power Manipulation',
            descricao: ``,
            images: [],
            detalhes: {}
        },
        {
            nome: 'Science',
            descricao: ``,
            images: [],
            detalhes: {}
        },
        {
            nome: 'Social',
            descricao: ``,
            images: [],
            detalhes: {}
        },
        {
            nome: 'Spellcasting',
            descricao: ``,
            images: [],
            detalhes: {}
        },
        {
            nome: 'Subterfuge',
            descricao: ``,
            images: [],
            detalhes: {}
        },
        {
            nome: 'Technical',
            descricao: ``,
            images: [],
            detalhes: {}
        },
        {
            nome: 'Vocation',
            descricao: ``,
            images: [],
            detalhes: {}
        }
    ],
    'Talentos': [],
    'Manobras': [],
    'Equipamentos': [],
    'Armas e Armaduras': [],
    'O Combate': [],
    'Ataques': [],
    'Tabelas de Ataques': [],
    'Tabelas de Críticos': [],
    'Listas de Magias': [],
    'Criaturas': []
};