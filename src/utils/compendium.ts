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
            images: ['public/racas-bonus.png']
        },
        {
            nome: 'Avinarc',
            descricao: `Um capuz retirado de um estranho de manto escuro no canto mais afastado de uma taverna pode revelar um Avinarc, com sua cabeça semelhante à de um falcão e sua pele coberta de penas. As outrora poderosas asas do Avinarc tornaram-se braços com mãos hábeis. Apenas suas cabeças e penas os denunciam como não humanos. Com um manto cobrindo-os, eles têm a forma de humanos de constituição leve.
                        Outrora uma raça orgulhosa e nobre, com terras e nações próprias, esse povo-pássaro viu seu número diminuir lentamente devido a uma poderosa maldição lançada sobre eles em eras passadas. Uma antiga profecia afirma que os Avinarcs um dia superarão a maldição e ressurgirão em número e poder, mas até lá, contentam-se em passar os dias com os destroços da humanidade. Agora são reclusos, misturando-se silenciosamente à sociedade humana, muitas vezes envolvendo-se com o lado mais sombrio da humanidade. Usam sua rapidez e agilidade aviárias para auxiliá-los em roubos e trapaças. Embora não sejam inerentemente maus, os Humanos são uma raça inferior para eles (embora a maioria nunca admitisse isso) e não se importam com o destino dos homens ou de sua sociedade. Os Avinarcs usam uma variedade de pequenas armas de mão ou armas de projéteis facilmente ocultáveis. Se pressionados em combate corpo a corpo, eles até usarão seus bicos.`,
            images: ['public/avinarc.png', 'public/races-physical/avinarc.png'],
            detalhes: {
                Olfato_Aguçado_II: 'Os Avinarcs recebem um bônus de +10 em testes de Percepção envolvendo olfato.',
                Ossos_Leves_I: 'Os Avinarcs são tratados como criaturas Pequenas para fins de seus acertos (determine normalmente e multiplique por 0,75) e ataques contra eles, mas não para outros fins.',
                Armamento_Natural: 'Os Avinarcs podem atacar usando seus bicos, utilizando a especialização Bico da perícia Treinamento de Combate: Desarmado.',
                Dieta_Restrita: 'Os Avinarcs são carnívoros e não obtêm sustento de alimentos que não sejam carne.',
                Visão_de_Águia: 'A visão aguçada de Avinarc permite tanto uma boa visão periférica quanto a capacidade de focar em objetos distantes, como uma lebre a três quilômetros de distância. Eles recebem um bônus de +20 em todas as manobras de Percepção baseadas na visão.',
                Asas_Vestigiais: 'As asas de Avinarc (agora reduzidas a braços densamente emplumados) são pequenas demais para o voo, mas fornecem um bônus de +10 em Salto e ao usar Acrobacias para reduzir o impacto de uma queda.'
            }
        },
        {
            nome: 'Anão',
            descricao: `Provavelmente a raça fisicamente mais resistente, os Anãos são baixos, atarracados e de tez rosada, com olhos profundos e cabelos e barbas escuros e crespos (dos quais se orgulham bastante, cultivando longas e elaboradas tranças). Os Anãos são artesãos exímios e bem adaptados à vida subterrânea; adoram minerar a terra em busca de metais e pedras preciosas, transformando-os em armas e artefatos poderosos. Não tão férteis quanto os humanos, têm poucos filhos, e menos de um terço de sua população é composta por mulheres, que são zelosamente protegidas em seus salões cavernosos.
                        Os Anãos possuem visão no escuro superior, sendo capazes de enxergar excepcionalmente bem na penumbra e a curtas distâncias mesmo na escuridão total. São ligeiramente mais densos que os humanos, o que torna a natação mais difícil, mas não impossível (-25 em testes de Resistência ao nadar). Possuem considerável resistência à magia da Essência e do Mentalismo, artes para as quais não têm talento especial, mas não são menos capazes que as outras raças no domínio da Canalização. Os Anãos são muito resistentes a venenos e doenças, e possuem uma expectativa de vida excepcional, de até 600 anos.`,
            images: ['public/anao-pt1.png', 'public/anao-pt2.png', 'public/races-physical/anao.png'],
            detalhes: {
                Visão_no_Escuro_I: 'Os Anãos podem enxergar a 3 metros de distância sem penalidades, mesmo na escuridão total.',
                Inapto_V: '(Resistência ao nadar) Devido à sua densidade, os Anãos precisam se esforçar muito para não se afogarem. Eles sofrem uma penalidade de -25 nos testes de Resistência enquanto nadam.',
                Visão_Noturna: 'Os Anãos podem enxergar em penumbra, equivalente às condições noturnas, tão bem quanto um humano enxerga à luz do dia. Todas as penalidades por escuridão são reduzidas em 40, exceto em condições de escuridão total.'
            }
        },
        {
            nome: 'Alto Elfo',
            descricao: `Embora semelhantes aos homens mortais na maioria dos aspectos, todos os tipos de elfos compartilham diversas diferenças importantes, ainda que sutis. Como raça, são mais altos que a maioria dos humanos, embora esbeltos. Os homens élficos não possuem pelos faciais e, em geral, têm menos pelos no corpo do que os humanos. De modo geral, os elfos têm uma aparência mais clara do que seus irmãos mortais, com traços mais delicados, pele imaculada e orelhas pontiagudas sem lóbulos.
                        A visão dos elfos é extremamente aguçada; eles conseguem enxergar em uma noite clara como se estivessem em plena luz do dia. Sua visão é correspondentemente limitada com menos luz, e eles não conseguem enxergar nada na escuridão total. Talvez o mais importante seja que os elfos não envelhecem após a idade adulta, e seus corpos são imunes a todas as infecções bacterianas e virais não mágicas. Assim, são virtualmente imortais (exceto em caso de morte violenta).
                        Cabelos negros como azeviche distinguem os Altos Elfos de seus parentes de pele mais clara, e olhos castanhos e avelã são as cores mais comuns de seus olhos. O amor por coisas belas, expresso pela habilidade em construção e artesanato, une-se à curiosidade sobre a natureza de toda a criação, desviando até os mais ambiciosos do caminho natural. Contudo, as armaduras magníficas, as armas brilhantes e as belas joias veneradas em suas graciosas cidades de muralhas de mármore parecem quase justificar o preço. Alguns dos artefatos mais poderosos que se conhece provêm das forjas desses artesãos élficos. Quando vivem entre outros elfos, inspiram-se nos Elfos Belos, mas aceitam de bom grado o fardo diário de governar seu povo.`,
            images: ['', 'public/races-physical/elfo.png'],
            detalhes: {
                Stride: -0.3,
                DP: 10
            }
        },
        {
            nome: 'Elfo Belo',
            descricao: `Embora semelhantes aos homens mortais na maioria dos aspectos, todos os tipos de elfos compartilham diversas diferenças importantes, ainda que sutis. Como raça, são mais altos que a maioria dos humanos, embora esbeltos. Os homens élficos não possuem pelos faciais e, em geral, têm menos pelos no corpo do que os humanos. De modo geral, os elfos têm uma aparência mais clara do que seus irmãos mortais, com traços mais delicados, pele imaculada e orelhas pontiagudas sem lóbulos.
                        A visão dos elfos é extremamente aguçada; eles conseguem enxergar em uma noite clara como se estivessem em plena luz do dia. Sua visão é correspondentemente limitada com menos luz, e eles não conseguem enxergar nada na escuridão total. Talvez o mais importante seja que os elfos não envelhecem após a idade adulta, e seus corpos são imunes a todas as infecções bacterianas e virais não mágicas. Assim, são virtualmente imortais (exceto em caso de morte violenta).
                        Os mais etéreos de todos os elfos, os Elfos Belos, têm cabelos dourados, olhos azuis, pele pálida e preferem vestimentas brancas, prateadas e douradas. Seja por graça divina ou herança feérica, eles possuem uma aura visível que impressiona aliados e intimida inimigos. Raramente são vistos além das fronteiras das terras élficas, onde inspiram seus semelhantes com sua música, magia e sabedoria. Melodia e canções são frequentes em seus encontros, pois até mesmo os menos habilidosos podem tocar harpa ou cantar, enquanto os mais talentosos compõem música ou encantam os ouvidos com sua maestria em diversos instrumentos.`,
            detalhes: {
                Stride: -0.3,
                DP: 10
            }
        },
        {
            nome: 'Elfo Cinzento',
            descricao: `Embora semelhantes aos homens mortais na maioria dos aspectos, todos os tipos de elfos compartilham diversas diferenças importantes, ainda que sutis. Como raça, são mais altos que a maioria dos humanos, embora esbeltos. Os homens élficos não possuem pelos faciais e, em geral, têm menos pelos no corpo do que os humanos. De modo geral, os elfos têm uma aparência mais clara do que seus irmãos mortais, com traços mais delicados, pele imaculada e orelhas pontiagudas sem lóbulos.
                        A visão dos elfos é extremamente aguçada; eles conseguem enxergar em uma noite clara como se estivessem em plena luz do dia. Sua visão é correspondentemente limitada com menos luz, e eles não conseguem enxergar nada na escuridão total. Talvez o mais importante seja que os elfos não envelhecem após a idade adulta, e seus corpos são imunes a todas as infecções bacterianas e virais não mágicas. Assim, são virtualmente imortais (exceto em caso de morte violenta).
                        Os Elfos Cinzentos são quase sempre intermediários entre seus irmãos mais extremos. A maioria tem cabelos loiros e olhos azuis ou cinzentos. Não são tão artísticos quanto os elfos loiros, tão astutos e industriosos quanto os altos elfos, ou tão serenos e rústicos quanto os elfos da floresta. Formam o meio-termo com sua companhia agradável e seu amor pela arte e pelo artesanato. Quando a guerra chama, eles pegam em armas, mas na maior parte do tempo se estabelecem, criam uma família e fazem o que bem entendem. Não constroem cidades de mármore, mas amam cidades abertas em meio a uma bela paisagem que os conecta mais intimamente à natureza. Alguns vivem sob o domínio dos Altos Elfos, enquanto outros se aventuram pelos mares como mercadores e viajantes. Não são os elfos mais mágicos, mas também não lhes são estranhos a magia.`,
            detalhes: {
                Stride: -0.3,
                DP: 10
            }
        },
        {
            nome: 'Elfo da Floresta',
            descricao: `Embora semelhantes aos homens mortais na maioria dos aspectos, todos os tipos de elfos compartilham diversas diferenças importantes, ainda que sutis. Como raça, são mais altos que a maioria dos humanos, embora esbeltos. Os homens élficos não possuem pelos faciais e, em geral, têm menos pelos no corpo do que os humanos. De modo geral, os elfos têm uma aparência mais clara do que seus irmãos mortais, com traços mais delicados, pele imaculada e orelhas pontiagudas sem lóbulos.
                        A visão dos elfos é extremamente aguçada; eles conseguem enxergar em uma noite clara como se estivessem em plena luz do dia. Sua visão é correspondentemente limitada com menos luz, e eles não conseguem enxergar nada na escuridão total. Talvez o mais importante seja que os elfos não envelhecem após a idade adulta, e seus corpos são imunes a todas as infecções bacterianas e virais não mágicas. Assim, são virtualmente imortais (exceto em caso de morte violenta).
                        Os Elfos da Floresta vestem tons de verde e cinza para se camuflarem com o ambiente. Cabelos cor de areia e olhos azuis claros, verdes ou cinzentos complementam sua aparência rústica. Eles são ligeiramente mais baixos que outros elfos, embora mais altos que os humanos. Esses elfos são os mais comuns de toda a raça élfica e podem ser encontrados em quase todas as florestas do mundo. Os Elfos da Floresta costumam ser bastante distantes de outros elfos e são conhecidos por discordar abertamente das políticas dos Altos Elfos e dos Elfos Belos. Mais sintonizados com as sutis marés das florestas, riachos e criaturas que vagam pelo reino silvestre, os Elfos da Floresta são hábeis em se mover silenciosamente, sua presença na floresta frequentemente passando despercebida entre as sombras dos galhos balançando.`,
            detalhes: {
                Stride: -0.3,
                DP: 10
            }
        },
        {
            nome: 'Gnoll',
            descricao: '',
            detalhes: {
                Stride: -0.3,
                DP: 10
            }
        },
        {
            nome: 'Gnomo',
            descricao: '',
            detalhes: {
                Stride: -0.3,
                DP: 10
            }
        },
        {
            nome: 'Goblin',
            descricao: '',
            detalhes: {
                Stride: -0.3,
                DP: 10
            }
        },
        {
            nome: 'Gratar',
            descricao: '',
            detalhes: {
                Stride: -0.3,
                DP: 10
            }
        },
        {
            nome: 'Halfling',
            descricao: '',
            detalhes: {
                Stride: -0.3,
                DP: 10
            }
        },
        {
            nome: 'Hobgoblin',
            descricao: '',
            detalhes: {
                Stride: -0.3,
                DP: 10
            }
        },
        {
            nome: 'Humano Alto',
            descricao: '',
            detalhes: {
                Stride: -0.3,
                DP: 10
            }
        },
        {
            nome: 'Humano Commun',
            descricao: '',
            detalhes: {
                Stride: -0.3,
                DP: 10
            }
        },
        {
            nome: 'Humano da Caverna',
            descricao: '',
            detalhes: {
                Stride: -0.3,
                DP: 10
            }
        },
        {
            nome: 'Humano Mestiço',
            descricao: '',
            detalhes: {
                Stride: -0.3,
                DP: 10
            }
        },
        {
            nome: 'Hvasstonn',
            descricao: '',
            detalhes: {
                Stride: -0.3,
                DP: 10
            }
        },
        {
            nome: 'Idiyva',
            descricao: '',
            detalhes: {
                Stride: -0.3,
                DP: 10
            }
        },
        {
            nome: 'Kobold',
            descricao: '',
            detalhes: {
                Stride: -0.3,
                DP: 10
            }
        },
        {
            nome: 'Nycamerith',
            descricao: '',
            detalhes: {
                Stride: -0.3,
                DP: 10
            }
        },
        {
            nome: 'Meio Elfo',
            descricao: '',
            detalhes: {
                Stride: -0.3,
                DP: 10
            }
        },
        {
            nome: 'Orc Cinzento',
            descricao: '',
            detalhes: {
                Stride: -0.3,
                DP: 10
            }
        },
        {
            nome: 'Orc Maior',
            descricao: '',
            detalhes: {
                Stride: -0.3,
                DP: 10
            }
        },
        {
            nome: 'Orc Menor',
            descricao: '',
            detalhes: {
                Stride: -0.3,
                DP: 10
            }
        },
        {
            nome: 'Orc Scrug',
            descricao: '',
            detalhes: {
                Stride: -0.3,
                DP: 10
            }
        },
        {
            nome: 'Orc Vard',
            descricao: '',
            detalhes: {
                Stride: -0.3,
                DP: 10
            }
        },
        {
            nome: 'Plynos',
            descricao: '',
            detalhes: {
                Stride: -0.3,
                DP: 10
            }
        },
        {
            nome: 'Sea-kral',
            descricao: '',
            detalhes: {
                Stride: -0.3,
                DP: 10
            }
        },
        {
            nome: 'Sibbicai',
            descricao: '',
            detalhes: {
                Stride: -0.3,
                DP: 10
            }
        },
        {
            nome: 'Sohleugir',
            descricao: '',
            detalhes: {
                Stride: -0.3,
                DP: 10
            }
        },
        {
            nome: 'Sstoi’isslythi',
            descricao: '',
            detalhes: {
                Stride: -0.3,
                DP: 10
            }
        },
        {
            nome: 'Troll',
            descricao: '',
            detalhes: {
                Stride: -0.3,
                DP: 10
            }
        },
        {
            nome: 'Vulfen',
            descricao: '',
            detalhes: {
                Stride: -0.3,
                DP: 10
            }
        }
    ],
    'Culturas': [
        {
            nome: 'Overview',
            descricao: `As pessoas com quem o personagem cresceu determinam sua origem cultural. Se o personagem cresceu como filho de um camponês em uma cultura feudal rural, ele será diferente de um personagem que cresceu como filho de um pescador em uma cultura despótica urbana, mesmo que ambos sejam da mesma raça e profissão. Fatores como idioma, preferências de perícias, preferências de armas, religião, visão de mundo, preconceitos e muitas outras características serão afetados pela cultura na qual o personagem foi criado.
                        A cultura do personagem concede níveis que são atribuídos a habilidades anteriores ao Nível 1, representando o aprendizado da infância. Os níveis concedidos são mostrados na Tabela a seguir.`,
            images: ['public/tabela-culturas.png',],
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
            images: ['public/custos-sem-profissao.png'],
            detalhes: {
                Reino: 'Qualquer um.',
                Perícias_Profissionais: 'Quaisquer 10 perícias aprovadas pelo Mestre.',
                Listas_Base_de_Magias: 'Um conjunto de 6 listas de magias básicas'
            }
        },
        {
            nome: 'Amador',
            descricao: 'Os Amadores são Semi-Conjuradores que aprimoram suas capacidades de subterfúgio usando Essência. As magias básicas de um Amador tendem a aprimorar habilidades naturais em diversas áreas, com as listas mais distintas conferindo-lhe vantagem no comércio e com máquinas. Em um cenário mais avançado, o papel mais natural do Amador pode ser o de mecânico ou engenheiro.',
            images: ['public/custos-amador.png'],
            detalhes: {
                Reino: 'Essência',
                Perícias_Profissionais: 'Perception, Metalcraft, Attunement, Spell Lore, Climbing, Running, Architecture, Engineering, Influence, Trading, Concealment, Stalking, Locks, Mechanics, Traps.',
                Listas_Base_de_Magias: 'Concealment Mastery, Senses, Influences, Smoke And Mirrors, Movement Mastery, Trade Mastery',
            }
        },
        {
            nome: 'Bardo',
            descricao: 'Bardos são semi-conjuradores de essência. São músicos, artistas, fofoqueiros e mestres do conhecimento. Suas magias básicas aprimoram esses papéis, mas também incorporam música às magias para confundir inimigos e auxiliar aliados, além de proporcionar uma afinidade incomparável com itens mágicos.',
            images: ['public/custos-bardo.png'],
            detalhes: {
                Reino: 'Essência',
                Perícias_Profissionais: 'Musical Composition, Attunement, Historic Lore, Language, Racial Lore, Region Lore, Religion/Philosophy, Spell Lore, Spell Trickery, Running, Acting, Music, Influence, Social Awareness, Trading.',
                Listas_Base_de_Magias: 'Controlling Songs, Entertaining Ways, Inspiring Songs, Item Lore, Sound Control, Sound Projection',
            }
        },
        {
            nome: 'Clérigo',
            descricao: 'Clérigos são conjuradores puros que se concentraram em magias que exigem o poder mais direto de suas divindades. Suas magias básicas lidam diretamente com a vida, comunhão com divindades, invocação de criaturas vivas, proteção contra servos de divindades opostas e canalização direta de suas próprias divindades. Esses usuários de magia são os mais poderosos entre os usuários de Canalização, mas também devem ser os mais restritos no sentido de acatar os desejos ou o credo de sua divindade ou igreja.',
            images: ['public/custos-clerigo.png'],
            detalhes: {
                Reino: 'Canalização',
                Perícias_Profissionais: 'Attunement, Religion/Philosophy, Spell Lore, Grace, Medicine, Meditation, Channeling, Power Development, Astronomy, Influence, Leadership, Magical Ritual, Open Spell Lists, Closed Spell Lists, Base Spell Lists.',
                Listas_Base_de_Magias: 'Channels, Communal Ways, Life Mastery, Protections, Repulsions, Summons',
            }
        },
        {
            nome: 'Curandeiro',
            descricao: 'Os curandeiros combinam os domínios da Canalização e do Mentalismo (Atributos dos Domínios da Intuição e da Presença). Eles se concentram em feitiços de autocura e na capacidade de absorver os ferimentos de outros. Assim, um curandeiro pode curar uma pessoa absorvendo o ferimento do paciente e curando-o gradualmente. Eles podem aprender facilmente tanto Desenvolvimento Corporal (para sobreviver a esse processo) quanto habilidades médicas (para ajudar os outros sem precisar absorver seus ferimentos).',
            images: ['public/custos-curandeiro.png'],
            detalhes: {
                Reino: 'Canalização e Mentalismo',
                Perícias_Profissionais: 'Body Development, Attunement, Racial Lore, Grace, Herbalism, Medicine, Meditation, Mental Focus, Channeling, Power Development, Social Awareness, Magical Ritual, Open Spell Lists, Closed Spell Lists, Base Spell Lists.',
                Listas_Base_de_Magias: 'Blood Ways, Bone Ways, Cleansing, Muscle Ways, Organ Ways, Surface Ways',
            }
        },
        {
            nome: 'Curandeiro Leigo',
            descricao: 'Curandeiros Leigos são Conjuradores Puros de Mentalismo que se concentraram em feitiços para curar pessoas e animais. Seus feitiços básicos lidam com a cura de doenças e ferimentos, bem como com a criação e animação de próteses. Eles também podem aprender habilidades médicas mundanas com facilidade.',
            images: ['public/custos-leigo.png'],
            detalhes: {
                Reino: 'Mentalismo',
                Perícias_Profissionais: 'Fabric Craft, Woodcraft, Attunement, Racial Lore, Grace, Herbalism, Medicine, Mental Focus, Power Development, Influence, Social Awareness, Magical Ritual,Open Spell Lists, Closed Spell Lists, Base Spell Lists.',
                Listas_Base_de_Magias: 'Blood Mastery, Bone Mastery, Concussion Mastery, Muscle Mastery, Nerve And Organ Mastery, Prosthetics',
            }
        },
        {
            nome: 'Druída',
            descricao: 'Druidas são conjuradores puros que se concentraram em magias relacionadas ao mundo natural. Suas magias básicas lidam com ervas, outras plantas, animais, clima e a natureza em geral. Dependendo do cenário, podem ser ambientalistas modernos, protetores quase históricos de seu povo contra os poderes avassaladores da natureza ou simplesmente cultistas rurais com rituais estranhos.',
            images: ['public/custos-druida.png'],
            detalhes: {
                Reino: 'Canalização',
                Perícias_Profissionais: 'Animal Handling, Perception, Tracking, Woodcraft, Navigation, Survival, Creature Lore, Region Lore, Grace, Herbalism, Power Development, Open Spell Lists, Closed Spell Lists, Base Spell Lists, Concealment.',
                Listas_Base_de_Magias: 'Animal Mastery, Herb Mastery, Herb Mastery, Nature’s Protections, Nature’s Wrath, Nature’s Wrath',
            }
        },
        {
            nome: 'Estudioso',
            descricao: 'Os eruditos se especializam em vocações intelectuais. Assim como os conjuradores puros, os eruditos não possuem aptidão real para habilidades de combate. Em vez disso, concentram-se nas habilidades acadêmicas utilizadas em suas vocações. São mais aptos a aprender magias do que outros usuários de armas, embora não se comparem às verdadeiras Profissões de conjuração.',
            images: ['public/custos-estudioso.png'],
            detalhes: {
                Reino: 'Reino das Armas (Reino de magia da sua escolha)',
                Perícias_Profissionais: 'Writing, Creature Lore, Historic Lore, Language, Materials Lore, Racial Lore, Region Lore, Religion/Philosophy, Architecture, Astronomy, Engineering, Mathematics, Administration, Service, Trade.',
                Listas_Base_de_Magias: 'Nenhuma lista base inicial',
            }
        },
        {
            nome: 'Feiticeiro',
            descricao: 'Os feiticeiros combinam o poder bruto do Reino da Essência com o fervor do Domínio da Canalização (Atributos dos Reinos da Intuição e da Empatia). Suas magias básicas lidam com a destruição tanto de seres vivos (corpos, almas e mentes) quanto de matéria inanimada.',
            images: ['public/custos-feiticeiro.png'],
            detalhes: {
                Reino: 'Essência e Canalização',
                Perícias_Profissionais: 'Attunement, Runes, Creature Lore, Materials Lore, Spell Lore, Grace, Channeling, Directed Spell, Power Development, Architecture, Engineering, Magical Ritual, Open Spell Lists, Closed Spell Lists, Base Spell Lists.',
                Listas_Base_de_Magias: 'Flesh Destruction, Fluid Destruction, Gas Destruction, Mind Destruction, Solid Destruction, Soul Destruction',
            }
        },
        {
            nome: 'Guerreiro',
            descricao: 'Os guerreiros são os principais especialistas em combate. Um guerreiro pode ser um cavaleiro montado com armadura pesada, um mosqueteiro destemido, um brutamontes com um enorme porrete revestido de bronze, um samurai obcecado por honra ou um mestre arqueiro. A face da batalha pode mudar com a tecnologia e a organização social, mas sempre haverá aqueles que se especializam em estar no centro de tudo.',
            images: ['public/custos-guerreiro.png'],
            detalhes: {
                Reino: 'Reino das Armas (Reino de magia da sua escolha)',
                Perícias_Profissionais: 'Riding, Body Development, Fortitude, Weight-Training, Maneuvering in Armor, Mounted Combat, Protect, Disarm, Multiple Attacks, Melee Weapons, Ranged Weapons, Shield, Metalcraft, Running, Leadership.',
                Listas_Base_de_Magias: 'Nenhuma lista base inicial',
            }
        },
        {
            nome: 'Ilusionista',
            descricao: 'Ilusionistas são Conjuradores Puros de Essência que se concentraram em feitiços de desorientação e ilusão. Seus feitiços básicos lidam principalmente com a manipulação de elementos e forças que afetam os sentidos humanos: visão, audição, tato, paladar, olfato, impulsos mentais e a combinação desses sentidos. Mais sutil que o Mago, o Ilusionista é menos direto, mas não menos poderoso.',
            images: ['public/custos-ilusionista.png'],
            detalhes: {
                Reino: 'Essência',
                Perícias_Profissionais: 'Perception, Illusion Crafting, Drawing/Painting, Attunement, Spell Lore, Grace, Spell Trickery, Acting, Music, Stage Magic, Power Development, Open Spell Lists, Closed Spell Lists, Base Spell Lists, Trickery.',
                Listas_Base_de_Magias: 'Guises, Illusion Mastery, Light Molding, Mind Sense Molding, Sense Molding, Sound Molding',
            }
        },
        {
            nome: 'Ladino',
            descricao: 'Ladinos são os usuários de armas versáteis e aventureiros. Eles podem aprender a usar diversas armas quase tão facilmente quanto um Guerreiro e habilidades de subterfúgio/mecânica quase tão bem quanto um Ladrão. Ladinos também podem adquirir habilidades atléticas (incluindo Desenvolvimento Corporal), habilidades de combate adicionais e habilidades de sobrevivência na natureza com facilidade. Ladinos são uma boa escolha se você quer ser um bom combatente e também se aventurar em diversas áreas fora do combate',
            images: ['public/custos-ladino.png'],
            detalhes: {
                Reino: 'Reino das Armas (Reino de magia da sua escolha)',
                Perícias_Profissionais: 'Riding, Perception, Body Development, Maneuvering in Armor, Restricted Quarters, Blind Fighting, Melee Weapons, Ranged Weapons, Survival, Jumping, Poison Mastery, Climbing, Running, Ambush, Stalking.',
                Listas_Base_de_Magias: 'Nenhuma lista base inicial',
            }
        },
        {
            nome: 'Ladrão',
            descricao: 'Ladrões são especialistas em furtividade e sutileza. Aprendem com facilidade habilidadesmecânicas, como abrir fechaduras e desarmar armadilhas, e são bastante habilidosos no manuseio de armas. Também são mestres em subterfúgios e em diversas habilidades atléticas (como escalada). Raramente usam armaduras pesadas, mas armaduras leves não comprometem significativamente suas capacidades profissionais. Um ladrão pode seguir uma vida de furtos, mas também se adapta bem a funções de batedor e espião.',
            images: ['public/custos-ladrao.png'],
            detalhes: {
                Reino: 'Reino das Armas (Reino de magia da sua escolha)',
                Perícias_Profissionais: 'Perception, Melee Weapons, Ranged Weapons, Acrobatics, Contortions, Climbing, Running, Influence, Social Awareness, Trading, Concealment, Stalking, Trickery, Locks, Traps.',
                Listas_Base_de_Magias: 'Nenhuma lista base inicial',
            }
        },
        {
            nome: 'Magent',
            descricao: 'O Magent é um Semi-Conjurador com habilidades e feitiços de espionagem incomparáveis: um mago-agente. Os Magents se destacam como assassinos mágicos ou agentes secretos com feitiços básicos que lidam com veneno, coleta de informações, assassinato e fuga, tanto física quanto em termos de desviar a culpa.',
            images: ['public/custos-magent.png'],
            detalhes: {
                Reino: 'Mentalismo',
                Perícias_Profissionais: 'Perception, Melee Weapons, Ranged Weapons, Acrobatics, Contortions, Jumping, Poison Mastery, Mental Focus, Climbing, Running, Swimming, Ambush, Concealment, Stalking, Trickery.',
                Listas_Base_de_Magias: 'Assassination Master, Gathering Secrets, Disguise Mastery, Misdirections, Escapes, Poison Mastery',
            }
        },
        {
            nome: 'Mago',
            descricao: 'Magos são conjuradores puros que se concentraram em magias elementais. Suas magias básicas lidam com os seis elementos de Rolemaster: terra, fogo, gelo, luz (que inclui eletricidade), água e vento. Eles possuem muitas magias que lançam raios e esferas desses elementos com efeitos potencialmente mortais, e por isso os Magos são frequentemente encontrados em campos de batalha. Eles também podem aprender todos os tipos de habilidades mágicas com facilidade.',
            images: ['public/custos-mago.png'],
            detalhes: {
                Reino: 'Essência',
                Perícias_Profissionais: 'Attunement, Runes, Spell Lore, Grace, Directed Spell, Power Development, Power Projection, Architecture, Astronomy, Engineering, Mathematics, Magical Ritual, Open Spell Lists, Closed Spell Lists, Base Spell Lists.',
                Listas_Base_de_Magias: 'Earth Law, Fire Law, Ice Law, Light Law, Water Law, Wind Law',
            }
        },
        {
            nome: 'Mentalista',
            descricao: 'Mentalistas são conjuradores puros de Mentalismo que se concentram em feitiços que lidam com a mente e os sentidos. Seus feitiços básicos envolvem a leitura de presenças mentais, comunicação mental, controle mental e controle sensorial. Como estudiosos do ser humano, os Mentalistas podem aprender disciplina e habilidades sociais com facilidade. São conspiradores ideais.',
            images: ['public/custos-mentalista.png'],
            detalhes: {
                Reino: 'Mentalismo',
                Perícias_Profissionais: 'Attunement, Language, Racial Lore, Grace, Meditation, Mental Focus, Power Development, Influence, Leadership, Social Awareness, Magical Ritual, Open Spell Lists, Closed Spell Lists, Base Spell Lists, Administration.',
                Listas_Base_de_Magias: 'Mind Attack, Mind Control, Mind Merge, Mind Speech, Presence, Sense Control',
            }
        },
        {
            nome: 'Místico',
            descricao: 'Os místicos combinam os domínios da Essência e do Mentalismo (Atributos dos Reinos da Empatia e da Presença) para potencializar feitiços sutis de desorientação e modificação. Seus feitiços básicos lidam com ilusões pessoais, bem como com a modificação da matéria.',
            images: ['public/custos-mistico.png'],
            detalhes: {
                Reino: 'Essência e Mentalismo',
                Perícias_Profissionais: 'Perception, Attunement, Spell Lore, Grace, Spell Trickery, Meditation, Mental Focus, Acting, Directed Spell, Power Development, Open Spell Lists, Closed Spell Lists, Base Spell Lists, Stalking, Trickery.',
                Listas_Base_de_Magias: 'Confusing Ways, Gas Alteration, Hiding, Liquid Alteration, Mystical Change, Solid Alteration',
            }
        },
        {
            nome: 'Monge',
            descricao: 'Monges são semi-conjuradores que combinam habilidade com armas e magia mental. Suas magias básicas são estritamente pessoais, permitindo-lhes realizar grandes feitos físicos e aprimorar seus ataques. O que o cinema de Hong Kong consegue com fios e adereços, o Monge faz com magia.',
            images: ['public/custos-monge.png'],
            detalhes: {
                Reino: 'Mentalismo',
                Perícias_Profissionais: 'Perception, Adrenal Defense, Adrenal Focus, Adrenal Speed, Adrenal Strength, Body Development, Multiple Attacks, Unarmed, Acrobatics, Jumping, Meditation, Mental Focus, Climbing, Running, Swimming.',
                Listas_Base_de_Magias: 'Body Reins, Combat Mastery, Evasions, Mind Over Matter, Monk’s Bridge, Monk’s Sense',
            }
        },
        {
            nome: 'Monge Guerreiro',
            descricao: 'Monges guerreiros se especializam em combate, disciplina e habilidades atléticas. O monge guerreiro é muito semelhante ao guerreiro, mas com um foco muito maior em habilidades disciplinares e ênfase na manobrabilidade em vez de depender de armadura. Tal personagem pode se assemelhar a um ninja ou a um artista marcial Shao-Lin.',
            images: ['public/custos-monge-guerreiro.png'],
            detalhes: {
                Reino: 'Reino das Armas (Reino de magia da sua escolha)',
                Perícias_Profissionais: 'Adrenal Defense, Adrenal Speed, Adrenal Strength, Body Development, Blind Fighting, Multiple Attacks, Reverse Strike, Subduing, Unarmed, Acrobatics, Jumping, Meditation, Climbing, Running, Swimming.',
                Listas_Base_de_Magias: 'Nenhuma lista base inicial',
            }
        },
        {
            nome: 'Paladino',
            descricao: 'Defensores fervorosos da fé, os Paladinos são semi-conjuradores que combinam proezas em combate com magias utilitárias. O Paladino é um guerreiro sagrado altamente focado, capaz de desenvolver boas habilidades de luta e magias que sustentam seu papel como guerreiro e líder em combate. O Paladino é um combatente competente em qualquer situação, mas se destaca especialmente contra os inimigos sobrenaturais de sua fé.',
            images: ['public/custos-paladino.png'],
            detalhes: {
                Reino: 'Canalização',
                Perícias_Profissionais: 'Riding, Body Development, Maneuvering in Armor, Mounted Combat, Protect, Melee Weapons, Shield, Metalcraft, Religion/Philosophy, Transcendence, Mental Focus, Running, Channeling, Influence, Leadership.',
                Listas_Base_de_Magias: 'Cursebreaking, Holy Arms, Holy Healing, Holy Shields, Holy War, Inspiring Ways',
            }
        },
        {
            nome: 'Patrulheiro',
            descricao: 'O Patrulheiro é um semi-conjurador que combina Armas com Canalização, especializando-se em habilidades ao ar livre e magias que influenciam a natureza. Patrulheiros são talentosos em percepção e habilidades ao ar livre e, embora não aprendam a usar armas tão rapidamente quanto o Paladino, possuem custos de combate decentes. As listas básicas de magias de um Patrulheiro têm muitos usos, mas muitas das magias aprimoram suas habilidades em rastreamento, furtividade na natureza, sobrevivência na natureza e movimento. O Patrulheiro pode ser um comando letal.',
            images: ['public/custos-patrulheiro.png'],
            detalhes: {
                Reino: 'Canalização',
                Perícias_Profissionais: 'Animal Handling, Riding, Perception, Tracking, Melee Weapons, Ranged Weapons, Navigation, Survival, Creature Lore, Region Lore, Climbing, Running, Swimming, Concealment, Stalking.',
                Listas_Base_de_Magias: 'Beastly Ways, Inner Walls, Moving Ways, Nature’s Guises, Path Mastery, Survival’s Way',
            }
        },
        {
            nome: 'Trabalhador Braçal',
            descricao: 'Os trabalhadores braçais se especializam em ofícios e artesanatos físicos. Eles podem aprender habilidades com armas e armaduras com mais facilidade do que a maioria dos conjuradores, mas o combate não é seu forte. Embora possam aprender habilidades atléticas com facilidade, tendem a evitar situações de combate. Eles costumam se concentrar nas habilidades necessárias para uma vocação específica.',
            images: ['public/custos-trabalhador.png'],
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
            images: ['public/tabela-ganho-stats.png',]
        }
    ], //ok
    'Perícias': [],
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