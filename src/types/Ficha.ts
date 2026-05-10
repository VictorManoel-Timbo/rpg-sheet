export interface Pericia {
    id: string;
    prof: boolean;
    nome: string;
    nvsCult: number;
    atribMod: string;
    atribBonus: number;
    totalNiveis: number;
    bonusNivel: number;
    bonusProf: number;
    especApt: number;
    bonusTotal: number;
    custo: string;
    isEspecializacao?: boolean;
    canDelete?: boolean;
}

export interface CategoriaPericia {
    nome: string;
    atribs: string;
    atribBonus: number;
    custo: string;
    pericias: Pericia[];
}

export interface PericiaMagia {
    id: string;
    nome: string;
    prof: boolean;
    atribMod: string;
    atribBonus: number;
    totalNiveis: number;
    bonusNivel: number;
    bonusProf: number;
    especApt: number;
    bonusTotal: number;
    custo: string;
    isEspecializacao: boolean;
    parentId?: string; // ID da perícia pai (ex: 'ba' para uma lista de Base)
    maxEspec?: number; // Limite de listas (apenas para perícias base)
    canDelete?: boolean;
}

export interface CategoriaMagia {
    nome: string;
    atribs: string;     // Definido pelo utilizador (ex: "In+Pr")
    atribBonus: number;
    custo: string;      // "Vária"
    pericias: PericiaMagia[];
}

export interface ArmaduraItem {
    area: string;
    nome: string;
    at: number;
    penalMan: number;
    peso: number;
    str: number;
    db: number;
    penalConj: number;
}

export interface ItemMagico {
    nome: string;
    str: number;
    ob: number;
    db: number;
    efeito: string;
    peso: number;
}

export interface Talento {
    nome: string;
    tier: number;
    nivel: string;
    custo: number;
    efeito: string;
}

export interface ItemMochila {
    id: string;
    nome: string;
    descricao: string;
    quantidade: number;
    peso: number;        // Peso unitário
    localizacao: string; // Ex: "Costas", "Cinto", "Bolsa de Cintura"
}

export interface FichaPersonagem {
    // Cabeçalho
    nomePersonagem: string;
    nomeJogador: string;
    campanha: string;
    nivel: number;
    dp: number;
    dpGasto?: number;
    
    strideMod: number;

    imagemUrl?: string;

    // Aparência e Background
    idade: number;
    sexo: string;
    altura: number;
    peso: number;
    raca: string;
    cultura: string;
    profissao: string;
    reino: string;

    // Atributos (Ag, Co, Em, In, Me, Pr, Qu, Re, SD, St)
    agPot: number; agTemp: number; agBonus: number; agRacial: number; agEspecial: number; agTotal: number;
    coPot: number; coTemp: number; coBonus: number; coRacial: number; coEspecial: number; coTotal: number;
    emPot: number; emTemp: number; emBonus: number; emRacial: number; emEspecial: number; emTotal: number;
    inPot: number; inTemp: number; inBonus: number; inRacial: number; inEspecial: number; inTotal: number;
    mePot: number; meTemp: number; meBonus: number; meRacial: number; meEspecial: number; meTotal: number;
    prPot: number; prTemp: number; prBonus: number; prRacial: number; prEspecial: number; prTotal: number;
    quPot: number; quTemp: number; quBonus: number; quRacial: number; quEspecial: number; quTotal: number;
    rePot: number; reTemp: number; reBonus: number; reRacial: number; reEspecial: number; reTotal: number;
    sdPot: number; sdTemp: number; sdBonus: number; sdRacial: number; sdEspecial: number; sdTotal: number;
    stPot: number; stTemp: number; stBonus: number; stRacial: number; stEspecial: number; stTotal: number;

    // Defesa
    quDB: number; outrosDB: number; passiveDodge: number; blockDodge: number; partialDodge: number; partialBlock: number; completeDodge: number; completeBlock: number; totalCSShield: number; totalCShield: number;

    // Vitals e Sobrecarga
    vida: number; poder: number; vigor: number; iniciativa: number; bmr: number;
    pesoMax: number; carga: number; ritmoMax: string; penalTotalMan: number; penalSobrecarga: number;

    // Resistências
    chNvl: number; chRacial: number; chEspecial: number; chTotal: number;
    esNvl: number; esRacial: number; esEspecial: number; esTotal: number;
    mtNvl: number; mtRacial: number; mtEspecial: number; mtTotal: number;
    phNvl: number; phRacial: number; phEspecial: number; phTotal: number;
    feNvl: number; feRacial: number; feEspecial: number; feTotal: number;

    // Ritmo
    ritmoRastejarRodada: number; ritmoRastejarFase: number;
    ritmoAndarRodada: number; ritmoAndarFase: number;
    ritmoTrotarRodada: number; ritmoTrotarFase: number;
    ritmoCorrerRodada: number; ritmoCorrerFase: number;
    ritmoSprintRodada: number; ritmoSprintFase: number;
    ritmoDispararRodada: number; ritmoDispararFase: number;

    armas: Array<{
        nome: string;
        fumble: number;
        str: number;
        bonusItem: number;
        pericia: string;
        ob: number;
        total: number;
    }>;

    // Adicione estes campos que o componente FichaCombate utiliza:
    notasCombate: string;
    percepcao: number;
    projeteis: number;
    numAtaques: number;

    // Campos para "Feitos de Força" (vistos no PDF, página 1)
    feitosForca: {
        r30: number;
        f20: number;
        l10: number;
        m0: number;
        d10: number;
        md20: number;
        ed30: number;
        pl50: number;
        a70: number;
        qi100: number;
    };

    // Armaduras
    armaduras: ArmaduraItem[];

    // Perícias (Sugerido agrupar por categoria como no PDF)
    pericias: CategoriaPericia[];

    magias: CategoriaMagia[];

    // Talentos
    talentos: Talento[];

    // Background Expandido
    historico: string;
    personalidade: string;
    anotacoes: string;
    aparencia: string;
    itensMagicos: ItemMagico[];

    mochila: ItemMochila[];
}