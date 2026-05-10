<template>
    <div class="space-y-4">
        <section v-for="(cat, catIdx) in ficha.pericias" :key="cat.nome"
            class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">

            <div class="bg-indigo-600 px-4 py-1.5 grid grid-cols-12 gap-2 items-center border-b border-slate-200">
                <div class="col-span-4 font-black text-white uppercase text-sm">{{ cat.nome }}</div>
                <div class="col-span-3 flex items-center gap-2">
                    <span class="text-sm font-bold text-white uppercase">Atributos:</span>
                    <input type="text" v-model="cat.atribs"
                        class="bg-indigo-700 border border-indigo-600 font-semibold text-center text-white rounded px-1 text-sm w-16 text-outline-none">
                </div>
                <div class="col-span-2 text-center">
                    <span class="text-sm font-bold text-white uppercase mr-1">Bônus Atributo:</span>
                    <span class="text-sm font-bold text-white">{{ cat.atribBonus }}</span>
                </div>
                <div class="col-span-3 text-right">
                    <span class="text-sm font-bold text-white uppercase mr-1">Custo:</span>
                    <span class="text-sm font-bold text-white">{{ cat.custo }}</span>
                </div>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full text-sm">
                    <thead class="bg-slate-50 text-slate-500 font-black uppercase border-b border-slate-200">
                        <tr class="text-center text-xs">
                            <th class="py-2 px-2 w-10">Prof.</th>
                            <th class="text-left px-2">Perícia / Especialização</th>
                            <th class="w-18">Níveis Cult.</th>
                            <th class="w-18">Atrib.</th>
                            <th class="w-20">Bônus Atrib.</th>
                            <th class="w-16">Total Níveis</th>
                            <th class="w-16">Bônus Nível</th>
                            <th class="w-18">Bônus Prof</th>
                            <th class="w-18">Espec/Apto</th>
                            <th class="w-18 bg-indigo-50">Total</th>
                            <th class="w-18">Custo</th>
                            <th class="w-8"></th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        <tr v-for="(p, pIdx) in cat.pericias" :key="p.id"
                            :class="[p.isEspecializacao ? 'bg-slate-50/50' : 'hover:bg-slate-50']"
                            class="transition-colors group">

                            <td class="p-1 text-center">
                                <input type="checkbox" v-model="p.prof" class="accent-indigo-600">
                            </td>

                            <td class="p-1 px-2 flex items-center gap-2">
                                <div v-if="p.isEspecializacao"
                                    class="w-4 h-4 border-l-2 border-b-2 border-slate-200 ml-1 -mt-2"></div>

                                <input type="text" v-model="p.nome" :readonly="!p.isEspecializacao" :class="[
                                    p.isEspecializacao
                                        ? 'italic border-b border-dashed border-slate-200 focus:border-indigo-400'
                                        : 'font-bold text-slate-700 pointer-events-none'
                                ]" class="w-full bg-transparent outline-none transition-colors">

                                <button v-if="podeAdicionarEspecializacao(cat.nome, p.nome) && !p.isEspecializacao"
                                    @click="addEspecializacao(catIdx, pIdx)"
                                    class="hidden group-hover:block text-indigo-500 hover:text-indigo-700 font-black text-sm"
                                    title="Adicionar Especialização">+
                                </button>
                            </td>

                            <td class="p-1"><input type="number" v-model.number="p.nvsCult"
                                    class="w-full text-center bg-transparent outline-none"></td>
                            <td class="p-1"><input type="text" v-model="p.atribMod" 
                                    class="w-full text-center bg-transparent outline-none font-bold text-slate-700"></td>
                            <td class="p-1"><input type="number" v-model="p.atribBonus" readonly
                                    class="w-full text-center bg-transparent outline-none"></td>
                            <td class="p-1"><input type="number" v-model.number="p.totalNiveis"
                                    class="w-full text-center bg-transparent outline-none font-bold"></td>
                            <td class="p-1"><input type="number" v-model.number="p.bonusNivel" readonly
                                    class="w-full text-center bg-transparent outline-none"></td>
                            <td class="p-1"><input type="number" v-model.number="p.bonusProf" readonly
                                    class="w-full text-center bg-transparent outline-none"></td>
                            <td class="p-1"><input type="number" v-model.number="p.especApt"
                                    class="w-full text-center bg-transparent outline-none"></td>

                            <td class="p-1 bg-indigo-50/30">
                                <input type="number" v-model.number="p.bonusTotal" readonly
                                    class="w-full text-center bg-transparent outline-none font-black text-indigo-600">
                            </td>

                            <td class="p-1">
                                <input type="text" v-model="p.custo" :placeholder="cat.custo"
                                    class="w-full text-center bg-transparent outline-none text-sm font-medium text-slate-700 placeholder:text-slate-700">
                            </td>

                            <td class="p-1 text-center">
                                <button v-if="p.isEspecializacao || p.canDelete" @click="removePericia(catIdx, pIdx)"
                                    class="text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { FichaPersonagem, Pericia } from '../types/Ficha';

export default defineComponent({
    name: 'FichaPericias',
    props: {
        ficha: { type: Object as PropType<FichaPersonagem>, required: true }
    },
    methods: {
        podeAdicionarEspecializacao(categoria: string, pericia: string): boolean {
            const skillsComEspec = [
                'Animal Handling', 'Riding', 'Piloting', 'Survival',
                'Creature Lore', 'Historic Lore', 'Materials Lore', 'Racial Lore',
                'Region Lore', 'Religion/Philosophy', 'Spell Lore',
                'Spoken', 'Written', 'Grace', 'Spell Trickery',
                'Music', 'Directed Spells', 'Ambush', 'Mechanics',
                'Administration', 'Service', 'Trade',
                'Melee', 'Unarmed', 'Ranged'
            ];
            // Influence não permite adicionar via botão pois são fixas
            if (pericia === 'Influence') return false;
            return skillsComEspec.some(s => pericia.includes(s));
        },

        addEspecializacao(catIdx: number, pIdx: number) {
            // Validação de segurança
            const categoria = this.ficha.pericias[catIdx];
            if (!categoria) return;

            const parent = categoria.pericias[pIdx];
            if (!parent) return;

            const novaEspec: Pericia = {
                id: Math.random().toString(36).substr(2, 9),
                prof: false,
                nome: `↳ Nova Especialização`,
                nvsCult: 0,
                atribMod: parent.atribMod,
                atribBonus: 0,
                totalNiveis: 0,
                bonusNivel: 0,
                bonusProf: 0,
                especApt: 0,
                bonusTotal: 0,
                custo: '',
                isEspecializacao: true,
                canDelete: true
            };

            categoria.pericias.splice(pIdx + 1, 0, novaEspec);
        },

        removePericia(catIdx: number, pIdx: number) {
            const categoria = this.ficha.pericias[catIdx];
            if (categoria) {
                categoria.pericias.splice(pIdx, 1);
            }
        }
    }
});
</script>