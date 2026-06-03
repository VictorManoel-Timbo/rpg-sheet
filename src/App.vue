<template>
  <GuiaLateral />

  <div class="bg-slate-100 py-10 px-4 min-h-screen pl-64">
    <div class="max-w-7xl w-full mx-auto space-y-6">
      <FichaHeader :ficha="ficha" />

      <nav class="flex flex-wrap border-b border-slate-300 gap-2">
        <button v-for="tab in tabs" :key="tab.id" @click="abaAtiva = tab.id" :class="[
          'px-6 py-3 font-bold text-sm uppercase tracking-wider transition-all rounded-t-lg',
          abaAtiva === tab.id
            ? 'bg-white text-indigo-600 border-t border-l border-r border-slate-300 shadow-sm'
            : 'text-slate-500 hover:text-indigo-500 hover:bg-slate-200'
        ]">
          {{ tab.nome }}
        </button>
      </nav>

      <div class="mt-6">

        <main v-if="abaAtiva === 'geral'" class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="space-y-6">
            <FichaPerfil :ficha="ficha" />
            <FichaStatus :ficha="ficha" />
            <FichaDefesa :ficha="ficha" />
            <FichaFeitosForca :ficha="ficha" />
          </div>

          <div class="space-y-6 lg:col-span-2">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FichaAtributos :ficha="ficha" />
              <FichaTestes :ficha="ficha" />
            </div>
            <FichaCombate :ficha="ficha" />
            <FichaEquipamentos :ficha="ficha" />
            <FichaItensMagicos :ficha="ficha" />
            <FichaTalentos :ficha="ficha" />
          </div>
        </main>
        
        <div v-if="abaAtiva === 'pericias'">
          <FichaPericias :ficha="ficha" />
        </div>
        
        <div v-if="abaAtiva === 'magias'">
          <FichaMagias :ficha="ficha" />
        </div>
        
        <div v-if="abaAtiva === 'mochila'">
          <FichaMochila :ficha="ficha" />
        </div>
        
        <div v-if="abaAtiva === 'notas'">
          <FichaNotas :ficha="ficha" />
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { FichaPersonagem } from './types/Ficha.ts';
import { calcularDP, updateFichaCalculations } from './utils/rulesEngine.ts';

export default defineComponent({
  name: 'App',
  data() {
    return {
      isUpdating: false,
      abaAtiva: 'geral', // Define a aba inicial
      tabs: [
        { id: 'geral', nome: 'Personagem' },
        { id: 'pericias', nome: 'Perícias' },
        { id: 'magias', nome: 'Magias' },
        { id: 'mochila', nome: 'Mochila' },
        { id: 'notas', nome: "Notas" }
      ],
      ficha: {
        nomePersonagem: '', nomeJogador: '', campanha: '', nivel: 1, dp: 0, dpGasto: 0,
        idade: 0, sexo: '', altura: 0.3, peso: 0.5, raca: '', cultura: '', profissao: '', reino: '',
        agPot: 1, agTemp: 1, agBonus: 0, agRacial: 0, agEspecial: 0, agTotal: 0,
        coPot: 1, coTemp: 1, coBonus: 0, coRacial: 0, coEspecial: 0, coTotal: 0,
        emPot: 1, emTemp: 1, emBonus: 0, emRacial: 0, emEspecial: 0, emTotal: 0,
        inPot: 1, inTemp: 1, inBonus: 0, inRacial: 0, inEspecial: 0, inTotal: 0,
        mePot: 1, meTemp: 1, meBonus: 0, meRacial: 0, meEspecial: 0, meTotal: 0,
        prPot: 1, prTemp: 1, prBonus: 0, prRacial: 0, prEspecial: 0, prTotal: 0,
        quPot: 1, quTemp: 1, quBonus: 0, quRacial: 0, quEspecial: 0, quTotal: 0,
        rePot: 1, reTemp: 1, reBonus: 0, reRacial: 0, reEspecial: 0, reTotal: 0,
        sdPot: 1, sdTemp: 1, sdBonus: 0, sdRacial: 0, sdEspecial: 0, sdTotal: 0,
        stPot: 1, stTemp: 1, stBonus: 0, stRacial: 0, stEspecial: 0, stTotal: 0,
        quDB: 0, outrosDB: 0, passiveDodge: 0, blockDodge: 0, partialDodge: 0, partialBlock: 0, completeDodge: 0, completeBlock: 0, totalCSShield: 0, totalCShield: 0,
        vida: 0, poder: 0, vigor: 0, iniciativa: 0, bmr: 0,
        pesoMax: 0, carga: 0, ritmoMax: '', penalTotalMan: 0, penalSobrecarga: 0,
        chNvl: 0, chRacial: 0, chEspecial: 0, chTotal: 0,
        esNvl: 0, esRacial: 0, esEspecial: 0, esTotal: 0,
        mtNvl: 0, mtRacial: 0, mtEspecial: 0, mtTotal: 0,
        phNvl: 0, phRacial: 0, phEspecial: 0, phTotal: 0,
        feNvl: 0, feRacial: 0, feEspecial: 0, feTotal: 0,
        ritmoRastejarRodada: 0, ritmoRastejarFase: 0,
        ritmoAndarRodada: 0, ritmoAndarFase: 0,
        ritmoTrotarRodada: 0, ritmoTrotarFase: 0,
        ritmoCorrerRodada: 0, ritmoCorrerFase: 0,
        ritmoSprintRodada: 0, ritmoSprintFase: 0,
        ritmoDispararRodada: 0, ritmoDispararFase: 0,
        armas: [
          { nome: '', fumble: 0, str: 0, bonusItem: 0, pericia: '', ob: 0, total: 0 }
        ],
        notasCombate: '',
        percepcao: 0,
        projeteis: 0,
        numAtaques: 0,
        armaduras: [
          { area: 'Torso', nome: '', at: 1, penalMan: 0, peso: 0, str: 0, db: 0, penalConj: 0 },
          { area: 'Cabeça', nome: '', at: 1, penalMan: 0, peso: 0, str: 0, db: 0, penalConj: 0 },
          { area: 'Braços', nome: '', at: 1, penalMan: 0, peso: 0, str: 0, db: 0, penalConj: 0 },
          { area: 'Pernas', nome: '', at: 1, penalMan: 0, peso: 0, str: 0, db: 0, penalConj: 0 },
          { area: 'Escudo', nome: '', at: 1, penalMan: 0, peso: 0, str: 0, db: 0, penalConj: 0 },
          { area: 'Total', nome: '', at: 1, penalMan: 0, peso: 0, str: 0, db: 0, penalConj: 0 },
        ],
        feitosForca: {
          r30: 0,
          f20: 0,
          l10: 0,
          m0: 0,
          d10: 0,
          md20: 0,
          ed30: 0,
          pl50: 0,
          a70: 0,
          qi100: 0
        },
        pericias: [
          {
            nome: 'Animal', atribs: 'Ag+Em', atribBonus: 0, custo: '', pericias: [
              { id: 'an1', prof: false, nome: 'Animal Handling', nvsCult: 0, atribMod: 'Pr', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'an2', prof: false, nome: 'Riding', nvsCult: 0, atribMod: 'Pr', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false }
            ]
          },
          {
            nome: 'Awareness', atribs: 'In+Re', atribBonus: 0, custo: '', pericias: [
              { id: 'aw1', prof: false, nome: 'Perception', nvsCult: 0, atribMod: 'SD', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'aw2', prof: false, nome: 'Tracking', nvsCult: 0, atribMod: 'SD', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false }
            ]
          },
          {
            nome: 'Battle Expertise', atribs: '--', atribBonus: 0, custo: '', pericias: [
              { id: 'be1', prof: false, nome: 'Maneuver in Armor', nvsCult: 0, atribMod: '--', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'be2', prof: false, nome: 'Mounted Combat', nvsCult: 0, atribMod: '--', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'be3', prof: false, nome: 'Protect', nvsCult: 0, atribMod: '--', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'be4', prof: false, nome: 'Subduing', nvsCult: 0, atribMod: '--', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false }
            ]
          },
          {
            nome: 'Body Discipline', atribs: 'Co+SD', atribBonus: 0, custo: '', pericias: [
              { id: 'bd1', prof: false, nome: 'Adrenal Defense', nvsCult: 0, atribMod: 'Ag', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'bd2', prof: false, nome: 'Adrenal Focus', nvsCult: 0, atribMod: 'SD', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'bd3', prof: false, nome: 'Adrenal Speed', nvsCult: 0, atribMod: 'Qu', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'bd4', prof: false, nome: 'Adrenal Strength', nvsCult: 0, atribMod: 'St', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false }
            ]
          },
          {
            nome: 'Brawn', atribs: 'Co+SD', atribBonus: 0, custo: '', pericias: [
              { id: 'br1', prof: false, nome: 'Body Development', nvsCult: 0, atribMod: 'Co', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'br2', prof: false, nome: 'Fortitude', nvsCult: 0, atribMod: 'St', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'br3', prof: false, nome: 'Weight Training', nvsCult: 0, atribMod: 'St', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false }
            ]
          },
          {
            nome: 'Combat Expertise', atribs: '--', atribBonus: 0, custo: '', pericias: [
              { id: 'ce1', prof: false, nome: 'Blind Fighting', nvsCult: 0, atribMod: '--', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'ce2', prof: false, nome: 'Disarm', nvsCult: 0, atribMod: '--', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'ce3', prof: false, nome: 'Footwork', nvsCult: 0, atribMod: '--', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'ce4', prof: false, nome: 'Multiple Attacks', nvsCult: 0, atribMod: '--', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'ce5', prof: false, nome: 'Reverse Strike', nvsCult: 0, atribMod: '--', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false }
            ]
          },
          {
            nome: 'Combat Training', atribs: 'Ag+St', atribBonus: 0, custo: 'Vária', pericias: [
              { id: 'ct1', prof: false, nome: 'Melee', nvsCult: 0, atribMod: 'St', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'ct2', prof: false, nome: 'Unarmed', nvsCult: 0, atribMod: 'St', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'ct3', prof: false, nome: 'Ranged', nvsCult: 0, atribMod: 'Ag', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'ct4', prof: false, nome: 'Shield', nvsCult: 0, atribMod: 'St', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false }
            ]
          },
          {
            nome: 'Composition', atribs: 'Em+In', atribBonus: 0, custo: '', pericias: [
              { id: 'cp1', prof: false, nome: 'Illusion Crafting', nvsCult: 0, atribMod: 'Pr', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'cp2', prof: false, nome: 'Musical Composition', nvsCult: 0, atribMod: 'Pr', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'cp3', prof: false, nome: 'Writing', nvsCult: 0, atribMod: 'Re', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false }
            ]
          },
          {
            nome: 'Crafting', atribs: 'Ag+Me', atribBonus: 0, custo: '', pericias: [
              { id: 'cr1', prof: false, nome: 'Culinary', nvsCult: 0, atribMod: 'SD', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'cr2', prof: false, nome: 'Drawing/Painting', nvsCult: 0, atribMod: 'In', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'cr3', prof: false, nome: 'Fabric Craft', nvsCult: 0, atribMod: 'SD', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'cr4', prof: false, nome: 'Leathercraft', nvsCult: 0, atribMod: 'SD', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'cr5', prof: false, nome: 'Metalcraft', nvsCult: 0, atribMod: 'St', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'cr6', prof: false, nome: 'Stonecraft', nvsCult: 0, atribMod: 'St', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'cr7', prof: false, nome: 'Woodcraft', nvsCult: 0, atribMod: 'SD', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false }
            ]
          },
          {
            nome: 'Delving', atribs: 'Em+In', atribBonus: 0, custo: '', pericias: [
              { id: 'dl1', prof: false, nome: 'Attunement', nvsCult: 0, atribMod: 'Pr', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'dl2', prof: false, nome: 'Runes', nvsCult: 0, atribMod: 'Pr', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false }
            ]
          },
          {
            nome: 'Environmental', atribs: 'In+Me', atribBonus: 0, custo: '', pericias: [
              { id: 'ev1', prof: false, nome: 'Navigation', nvsCult: 0, atribMod: 'Re', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'ev2', prof: false, nome: 'Piloting', nvsCult: 0, atribMod: 'Ag', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'ev3', prof: false, nome: 'Survival', nvsCult: 0, atribMod: 'Re', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false }
            ]
          },
          {
            nome: 'Gymnastic', atribs: 'Ag+Qu', atribBonus: 0, custo: '', pericias: [
              { id: 'gy1', prof: false, nome: 'Acrobatics', nvsCult: 0, atribMod: 'St', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'gy2', prof: false, nome: 'Contortions', nvsCult: 0, atribMod: 'SD', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'gy3', prof: false, nome: 'Jumping', nvsCult: 0, atribMod: 'St', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false }
            ]
          },
          {
            nome: 'Lore', atribs: 'Me+Me', atribBonus: 0, custo: '', pericias: [
              { id: 'lr1', prof: false, nome: 'Creature Lore', nvsCult: 0, atribMod: 'Re', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'lr2', prof: false, nome: 'Historic Lore', nvsCult: 0, atribMod: 'Re', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'lr3', prof: false, nome: 'Materials Lore', nvsCult: 0, atribMod: 'Re', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'lr4', prof: false, nome: 'Racial Lore', nvsCult: 0, atribMod: 'Re', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'lr5', prof: false, nome: 'Region Lore', nvsCult: 0, atribMod: 'Re', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'lr6', prof: false, nome: 'Religion/Philosophy', nvsCult: 0, atribMod: 'Re', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'lr7', prof: false, nome: 'Spell Lore', nvsCult: 0, atribMod: 'Re', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false }
            ]
          },
          {
            nome: 'Lore: Languages', atribs: 'Me+Me', atribBonus: 0, custo: '', pericias: [
              { id: 'la1', prof: false, nome: 'Spoken', nvsCult: 0, atribMod: 'Re', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'la2', prof: false, nome: 'Written', nvsCult: 0, atribMod: 'Re', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false }
            ]
          },
          {
            nome: 'Magical Expertise', atribs: '--', atribBonus: 0, custo: '5/10', pericias: [
              { id: 'me1', prof: false, nome: 'Grace', nvsCult: 0, atribMod: '--', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'me2', prof: false, nome: 'Spell Trickery', nvsCult: 0, atribMod: '--', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'me3', prof: false, nome: 'Transcendence', nvsCult: 0, atribMod: '--', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false }
            ]
          },
          {
            nome: 'Medical', atribs: 'In+Me', atribBonus: 0, custo: '', pericias: [
              { id: 'md1', prof: false, nome: 'Herbalism', nvsCult: 0, atribMod: 'Re', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'md2', prof: false, nome: 'Medicine', nvsCult: 0, atribMod: 'Re', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'md3', prof: false, nome: 'Poison Mastery', nvsCult: 0, atribMod: 'Re', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false }
            ]
          },
          {
            nome: 'Mental Discipline', atribs: 'Pr+SD', atribBonus: 0, custo: '', pericias: [
              { id: 'mn1', prof: false, nome: 'Control Lycanthropy', nvsCult: 0, atribMod: 'SD', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'mn2', prof: false, nome: 'Meditation', nvsCult: 0, atribMod: 'SD', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'mn3', prof: false, nome: 'Mental Focus', nvsCult: 0, atribMod: 'SD', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false }
            ]
          },
          {
            nome: 'Movement', atribs: 'Ag+St', atribBonus: 0, custo: '', pericias: [
              { id: 'mv1', prof: false, nome: 'Climbing', nvsCult: 0, atribMod: 'Co', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'mv2', prof: false, nome: 'Flying', nvsCult: 0, atribMod: 'Co', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'mv3', prof: false, nome: 'Running', nvsCult: 0, atribMod: 'Co', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'mv4', prof: false, nome: 'Swimming', nvsCult: 0, atribMod: 'Co', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false }
            ]
          },
          {
            nome: 'Performance Art', atribs: 'Em+Pr', atribBonus: 0, custo: '', pericias: [
              { id: 'pa1', prof: false, nome: 'Acting', nvsCult: 0, atribMod: 'Me', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'pa2', prof: false, nome: 'Music', nvsCult: 0, atribMod: 'Me', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'pa3', prof: false, nome: 'Stage Magic', nvsCult: 0, atribMod: 'Me', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false }
            ]
          },
          {
            nome: 'Power Manipulation', atribs: 'RS+RS', atribBonus: 0, custo: '', pericias: [
              { id: 'pm1', prof: false, nome: 'Channeling', nvsCult: 0, atribMod: 'Me', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'pm2', prof: false, nome: 'Directed Spells', nvsCult: 0, atribMod: 'Ag', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'pm3', prof: false, nome: 'Power Development', nvsCult: 0, atribMod: 'Co', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'pm4', prof: false, nome: 'Power Projection', nvsCult: 0, atribMod: 'SD', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false }
            ]
          },
          {
            nome: 'Science', atribs: 'Me+Re', atribBonus: 0, custo: '', pericias: [
              { id: 'sc1', prof: false, nome: 'Architecture', nvsCult: 0, atribMod: 'Re', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'sc2', prof: false, nome: 'Astronomy', nvsCult: 0, atribMod: 'Re', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'sc3', prof: false, nome: 'Engineering', nvsCult: 0, atribMod: 'Re', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'sc4', prof: false, nome: 'Mathematics', nvsCult: 0, atribMod: 'Re', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false }
            ]
          },
          {
            nome: 'Social', atribs: 'Em+In', atribBonus: 0, custo: '', pericias: [
              { id: 'so1', prof: false, nome: 'Influence', nvsCult: 0, atribMod: 'Pr', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'so1_1', prof: false, nome: '↳ Charm', nvsCult: 0, atribMod: 'Pr', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: true },
              { id: 'so1_2', prof: false, nome: '↳ Duping', nvsCult: 0, atribMod: 'Pr', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: true },
              { id: 'so1_3', prof: false, nome: '↳ Intimidation', nvsCult: 0, atribMod: 'Pr', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: true },
              { id: 'so2', prof: false, nome: 'Leadership', nvsCult: 0, atribMod: 'Pr', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'so3', prof: false, nome: 'Social Awareness', nvsCult: 0, atribMod: 'Pr', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'so4', prof: false, nome: 'Trading', nvsCult: 0, atribMod: 'Pr', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false }
            ]
          },
          {
            nome: 'Subterfuge', atribs: 'Ag+SD', atribBonus: 0, custo: '', pericias: [
              { id: 'sb1', prof: false, nome: 'Ambush', nvsCult: 0, atribMod: 'In', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'sb2', prof: false, nome: 'Stalking', nvsCult: 0, atribMod: 'In', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'sb3', prof: false, nome: 'Concealment', nvsCult: 0, atribMod: 'In', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'sb4', prof: false, nome: 'Stalking', nvsCult: 0, atribMod: 'In', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'sb5', prof: false, nome: 'Trickery', nvsCult: 0, atribMod: 'In', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false }
            ]
          },
          {
            nome: 'Technical', atribs: 'In+Re', atribBonus: 0, custo: '', pericias: [
              { id: 'tk1', prof: false, nome: 'Locks', nvsCult: 0, atribMod: 'Ag', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'tk2', prof: false, nome: 'Mechanics', nvsCult: 0, atribMod: 'Me', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'tk3', prof: false, nome: 'Traps', nvsCult: 0, atribMod: 'Ag', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false }
            ]
          },
          {
            nome: 'Vocation', atribs: 'Em+Me', atribBonus: 0, custo: '', pericias: [
              { id: 'vo1', prof: false, nome: 'Administration', nvsCult: 0, atribMod: 'Re', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'vo2', prof: false, nome: 'Service', nvsCult: 0, atribMod: 'Pr', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false },
              { id: 'vo3', prof: false, nome: 'Trade', nvsCult: 0, atribMod: 'Re', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '', isEspecializacao: false }
            ]
          }
        ],
        magias: [
          {
            nome: 'Spells',
            atribs: 'RS+RS',
            atribBonus: 0,
            custo: 'Vária',
            pericias: [
              { id: 'mr', nome: 'Ritual Magic', maxEspec: 4, isEspecializacao: false, prof: false, atribMod: 'Me', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '' },
              { id: 'ba', nome: 'Base', maxEspec: 6, isEspecializacao: false, prof: false, atribMod: 'Me', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '' },
              { id: 'op', nome: 'Open', maxEspec: 9, isEspecializacao: false, prof: false, atribMod: 'Me', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '' },
              { id: 'cl', nome: 'Closed', maxEspec: 8, isEspecializacao: false, prof: false, atribMod: 'Me', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '' },
              { id: 'ar', nome: 'Arcane', maxEspec: 6, isEspecializacao: false, prof: false, atribMod: 'Me', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '' },
              { id: 're', nome: 'Restricted', maxEspec: 3, isEspecializacao: false, prof: false, atribMod: 'Me', atribBonus: 0, totalNiveis: 0, bonusNivel: 0, bonusProf: 0, especApt: 0, bonusTotal: 0, custo: '' }
            ]
          }
        ]
      } as FichaPersonagem
    };
  },
  watch: {
    ficha: {
      handler(novaFicha) {
        if (this.isUpdating) return;

        // Ativa a trava
        this.isUpdating = true;

        // Faz todos os cálculos
        updateFichaCalculations(novaFicha);
        calcularDP(this.ficha);

        // Libera a trava apenas depois que o Vue renderizar a tela
        this.$nextTick(() => {
          this.isUpdating = false;
        });
      },
      deep: true,
      immediate: true
    }
  }
});
</script>

<style scoped>
/* Estilo opcional para suavizar a transição entre abas */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>