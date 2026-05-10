import type { FichaPersonagem } from '../types/Ficha';
import { RACES, PROFESSIONS } from './constantes';

const getStatBonus = (value: number): number => {
    if (value >= 101) return 20 + (value - 100) * 5;
    if (value === 100) return 15;
    if (value >= 99) return 14;
    if (value >= 98) return 13;
    if (value >= 97) return 12;
    if (value >= 96) return 11;
    if (value >= 95) return 10;
    if (value >= 93) return 9;
    if (value >= 90) return 8;
    if (value >= 87) return 7;
    if (value >= 84) return 6;
    if (value >= 78) return 5;
    if (value >= 72) return 4;
    if (value >= 66) return 3;
    if (value >= 60) return 2;
    if (value >= 54) return 1;
    if (value >= 48) return 0;
    if (value >= 42) return -1;
    if (value >= 36) return -2;
    if (value >= 30) return -3;
    if (value >= 24) return -4;
    if (value >= 18) return -5;
    if (value >= 15) return -6;
    if (value >= 12) return -7;
    if (value >= 9) return -8;
    if (value >= 7) return -9;
    if (value >= 6) return -10;
    if (value >= 5) return -11;
    if (value >= 4) return -12;
    if (value >= 3) return -13;
    if (value >= 2) return -14;
    if (value >= 1) return -15;
    return -20;
};

const parseAtribBonus = (ficha: any, atribString: string): number => {
    if (!atribString || atribString === '--' || atribString.toUpperCase() === 'RS+RS') {
        return 0;
    }
    const parts = atribString.split('+');
    let total = 0;
    parts.forEach(p => {
        const key = p.trim().toLowerCase();
        const totalKey = `${key}Total`;
        if (typeof ficha[totalKey] === 'number') {
            total += ficha[totalKey];
        }
    });
    return total;
};

const calcularBonusNivel = (niveis: number): number => {
    if (niveis <= 0) return -25;
    if (niveis <= 10) return niveis * 5;
    if (niveis <= 20) return 50 + (niveis - 10) * 3;
    if (niveis <= 30) return 80 + (niveis - 20) * 2;
    return 100 + (niveis - 30);
};

export const calcularDP = (ficha: FichaPersonagem) => {

    const nivelPersonagem = ficha.nivel || 1;

    // 1. CALCULAR DP TOTAL DISPONÍVEL (Ex: 10 da raça + 60 por nível)
    const racaInfo = RACES[ficha.raca as keyof typeof RACES];
    const dpInicialRaca = racaInfo?.info?.dp || 0;
    const totalDPGanhos = dpInicialRaca + (nivelPersonagem * 60);

    ficha.dp = totalDPGanhos - (ficha.dpGasto || 0);
};

export const updateFichaCalculations = (ficha: FichaPersonagem) => {
    // --- 1. APLICAR BÔNUS RACIAIS ---
    const racaData = RACES[ficha.raca as keyof typeof RACES] || RACES['Humano Comum'];
    const hitsBase = racaData.info.hits;
    const encBase = racaData.info.encumbrance;
    const sexoKey = ficha.sexo === 'Masculino' ? 'M' : 'F';
    const medias = racaData.averages[sexoKey];

    if (racaData) {
        // Stats
        ficha.agRacial = racaData.stats.ag;
        ficha.coRacial = racaData.stats.co;
        ficha.emRacial = racaData.stats.em;
        ficha.inRacial = racaData.stats.in;
        ficha.meRacial = racaData.stats.me;
        ficha.prRacial = racaData.stats.pr;
        ficha.quRacial = racaData.stats.qu;
        ficha.reRacial = racaData.stats.re;
        ficha.sdRacial = racaData.stats.sd;
        ficha.stRacial = racaData.stats.st;
        // Resistências
        ficha.phRacial = racaData.resists.ph;
        ficha.mtRacial = racaData.resists.mt;
        ficha.feRacial = racaData.resists.fe;
        ficha.esRacial = racaData.resists.es;
        ficha.chRacial = racaData.resists.ch;
    }

    // --- 2. APLICAR CUSTOS DE PROFISSÃO ---
    // 1. Obtemos os dados da profissão ou um fallback seguro
    const profData = PROFESSIONS[ficha.profissao as keyof typeof PROFESSIONS];

    if (profData) {
        // Atualização das Perícias Gerais
        ficha.pericias.forEach(cat => {
            const custoGeral = profData.costs[cat.nome as keyof typeof profData.costs];
            if (custoGeral) {
                cat.custo = custoGeral;
            }
        });

        // Atualização das Magias (Listas)
        // ficha.magias é um array, então precisamos de um forEach duplo
        ficha.magias.forEach(categoria => {
            categoria.pericias.forEach(p => {
                // Acessamos o caminho: spells_cost -> Spells -> Vária
                const tabelaSpells = profData.spells_cost?.Spells?.Vária;

                if (tabelaSpells) {
                    // Verificamos se o nome da perícia (ex: "Open", "Base") existe na tabela
                    const custoMagia = tabelaSpells[p.nome as keyof typeof tabelaSpells];

                    if (custoMagia) {
                        p.custo = custoMagia;
                    }
                }
            });
        });
    }

    // 1. CÁLCULO DE STRIDE (Passo)
    // Regra: +/- 1 para cada 6 polegadas (15.24 cm) de diferença da média racial
    const diferencaAltura = ficha.altura - medias.height;
    const ajusteStride = Math.floor(diferencaAltura / 15.24);

    // O stride final é o base da raça + ajuste individual (convertido para o formato de bmr)
    // Nota: RMU costuma usar modificadores inteiros ou decimais, aqui ajustamos o bmrBase
    ficha.strideMod = racaData.info.stride + (ajusteStride * 0.3);

    // 1. ATRIBUTOS
    // Recalcular bônus totais de atributos após aplicar racial
    const stats = ['ag', 'co', 'em', 'in', 'me', 'pr', 'qu', 're', 'sd', 'st'];
    stats.forEach(s => {
        const temp = (ficha as any)[`${s}Temp`] || 0;
        const racial = (ficha as any)[`${s}Racial`] || 0;
        const especial = (ficha as any)[`${s}Especial`] || 0;
        const bonus = getStatBonus(temp);
        (ficha as any)[`${s}Bonus`] = bonus;
        (ficha as any)[`${s}Total`] = bonus + racial + especial;
    });

    // 2. MOVIMENTAÇÃO
    const bmr = parseFloat((6 + ficha.strideMod + (ficha.quTotal / 2) * 0.3048).toFixed(2));
    ficha.bmr = bmr;

    ficha.ritmoRastejarRodada = parseFloat((bmr * 0.5).toFixed(2));
    ficha.ritmoRastejarFase = parseFloat((bmr * 0.125).toFixed(2));
    ficha.ritmoAndarRodada = bmr;
    ficha.ritmoAndarFase = parseFloat((bmr * 0.25).toFixed(2));
    ficha.ritmoTrotarRodada = parseFloat((bmr * 2).toFixed(2));
    ficha.ritmoTrotarFase = parseFloat((bmr * 0.5).toFixed(2));
    ficha.ritmoCorrerRodada = parseFloat((bmr * 3).toFixed(2));
    ficha.ritmoCorrerFase = parseFloat((bmr * 0.75).toFixed(2));
    ficha.ritmoSprintRodada = parseFloat((bmr * 4).toFixed(2));
    ficha.ritmoSprintFase = bmr;
    ficha.ritmoDispararRodada = parseFloat((bmr * 5).toFixed(2));
    ficha.ritmoDispararFase = parseFloat((bmr * 1.25).toFixed(2));

    let somaPenalMan = 0;
    let somaPesoArmadura = 0;
    let somaDB = 0;
    let somaPenalConj = 0;

    // 1. Somar apenas os itens reais (ignorando a linha de "Total")
    ficha.armaduras.forEach(a => {
        if (a.area !== 'Total') {
            somaPenalMan += Number(a.penalMan || 0);
            somaPesoArmadura += Number(a.peso || 0);
            somaDB += Number(a.db || 0);
            somaPenalConj += Number(a.penalConj || 0);
        }
    });

    ficha.quDB = 3 * ficha.quTotal;
    ficha.iniciativa = ficha.quTotal;

    // 2. Atualizar o objeto "Total" dentro do array de armaduras para refletir no componente
    const itemTotal = ficha.armaduras.find(a => a.area === 'Total');
    if (itemTotal) {
        itemTotal.penalMan = somaPenalMan;
        itemTotal.peso = Number(somaPesoArmadura.toFixed(2));
        itemTotal.db = somaDB;
        itemTotal.penalConj = somaPenalConj;
    }

    // 2. CÁLCULO DE PESO E ENCUMBRANCE
    // Regra: Peso > 130% da média conta como carga carregada
    const limitePesoSaudavel = medias.weight * 1.3;
    let pesoExcedente = 0;
    if (ficha.peso > limitePesoSaudavel) {
        pesoExcedente = ficha.peso - limitePesoSaudavel;
    }

    // 3. CARGA E SOBRECARGA
    const pesoMochila = (ficha.mochila || []).reduce((acc, item) => acc + (Number(item.peso || 0) * Number(item.quantidade || 1)), 0);

    const pesoItensMagicos = (ficha.itensMagicos || []).reduce((acc, item) => acc + Number(item.peso || 0), 0);

    ficha.carga = parseFloat((pesoMochila + somaPesoArmadura + pesoItensMagicos + pesoExcedente).toFixed(2));
    ficha.peso = ficha.peso === 0 ? 0.5 : ficha.peso;

    // Weight Allowance (WA)
    const wa = ((ficha.peso || 70) * 0.15 + (ficha.stTotal * 2)) * (ficha.peso / 100);
    ficha.pesoMax = wa > 0 ? parseFloat(wa.toFixed(2)) : 0;

    const excesso = ficha.carga - wa;
    const umPorcentoWA = wa * 0.01;
    const penalSobrecarga = excesso > 0 ? Math.ceil(excesso / umPorcentoWA) : 0;
    ficha.penalSobrecarga = penalSobrecarga > 0 ? penalSobrecarga : 0;

    const somaPenal = ficha.penalSobrecarga + somaPenalMan;
    ficha.penalTotalMan = somaPenal > 0 ? somaPenal : 0;

    let pesoPorcento = ficha.carga / wa;
    pesoPorcento = parseFloat((pesoPorcento).toFixed(2));
    if (pesoPorcento >= 0) { ficha.ritmoMax = "Disparar"; }
    if (pesoPorcento > 0.15) { ficha.ritmoMax = "Sprint"; }
    if (pesoPorcento > 0.30) { ficha.ritmoMax = "Correr"; }
    if (pesoPorcento > 0.45) { ficha.ritmoMax = "Trotar"; }
    if (pesoPorcento > 0.60) { ficha.ritmoMax = "Andar"; }
    if (pesoPorcento > 0.90) { ficha.ritmoMax = "Rastejar"; }

    // 4. FEITOS DE FORÇA 
    ficha.feitosForca.r30 = parseFloat((ficha.peso * 0.2).toFixed(2));
    ficha.feitosForca.f20 = parseFloat((ficha.peso * 0.3).toFixed(2));
    ficha.feitosForca.l10 = parseFloat((ficha.peso * 0.4).toFixed(2));
    ficha.feitosForca.m0 = parseFloat((ficha.peso * 0.5).toFixed(2));
    ficha.feitosForca.d10 = parseFloat((ficha.peso * 0.75).toFixed(2));
    ficha.feitosForca.md20 = parseFloat((ficha.peso).toFixed(2));
    ficha.feitosForca.ed30 = parseFloat((ficha.peso * 1.5).toFixed(2));
    ficha.feitosForca.pl50 = parseFloat((ficha.peso * 2).toFixed(2));
    ficha.feitosForca.a70 = parseFloat((ficha.peso * 3).toFixed(2));
    ficha.feitosForca.qi100 = parseFloat((ficha.peso * 4).toFixed(2));

    // 5. PERÍCIAS (Recalcula as categorias dinamicamente)
    ficha.pericias.forEach(cat => {
        // Aqui o bônus da categoria é recalculado baseado no que está escrito em cat.atribs
        cat.atribBonus = parseAtribBonus(ficha, cat.atribs);

        cat.pericias.forEach(p => {
            // Perícias individuais somam o bônus da categoria + o bônus do seu próprio atributo (se houver)
            const bAtribIndividual = p.atribMod !== '--' ? parseAtribBonus(ficha, p.atribMod) : 0;

            p.atribBonus = bAtribIndividual + cat.atribBonus;

            p.bonusProf = p.prof ? Math.min(p.totalNiveis, 30) : 0;

            p.bonusNivel = calcularBonusNivel(p.totalNiveis);

            p.bonusTotal = p.atribBonus + p.bonusNivel + p.bonusProf + p.especApt;
        });
    });

    // 6. MAGIAS (Mesma lógica para categorias de magia)
    if (ficha.magias) {
        ficha.magias.forEach(cat => {
            cat.atribBonus = parseAtribBonus(ficha, cat.atribs);
            cat.pericias.forEach(p => {
                const bAtribIndividual = p.atribMod !== '--' ? parseAtribBonus(ficha, p.atribMod) : 0;
                p.atribBonus = bAtribIndividual + cat.atribBonus;

                p.bonusProf = p.prof ? Math.min(p.totalNiveis, 30) : 0;

                p.bonusNivel = calcularBonusNivel(p.totalNiveis);

                p.bonusTotal = p.atribBonus + p.bonusNivel + p.bonusProf + p.especApt;
            });
        });
    }

    const bodyDev = ficha.pericias
        .flatMap(cat => cat.pericias)
        .find(p => p.nome.trim() === "Body Development");

    // Busca o bônus de Power Development
    const powerDev = ficha.pericias
        .flatMap(cat => cat.pericias)
        .find(p => p.nome.trim() === "Power Development");

    const bônusVida = bodyDev ? bodyDev.bonusTotal : 0;
    ficha.vida = Math.max(0, hitsBase + bônusVida);
    ficha.vigor = Math.max(0, encBase + bônusVida);

    // Poder (Power)
    const bônusPoder = powerDev ? powerDev.bonusTotal : 0;
    ficha.poder = Math.max(0, bônusPoder);

    // 6. RESISTÊNCIAS
    const nvlMod = (ficha.nivel || 1) * 2;
    const res = [
        { b: 'ch', s: 'in' }, { b: 'es', s: 'em' }, { b: 'mt', s: 'pr' },
        { b: 'ph', s: 'co' }, { b: 'fe', s: 'sd' }
    ];
    res.forEach(r => {
        (ficha as any)[`${r.b}Bonus`] = (ficha as any)[`${r.s}Total`];
        (ficha as any)[`${r.b}Nvl`] = nvlMod;
        (ficha as any)[`${r.b}Total`] = (ficha as any)[`${r.b}Bonus`] + nvlMod + (ficha as any)[`${r.b}Racial`] + (ficha as any)[`${r.b}Especial`];
    });
};