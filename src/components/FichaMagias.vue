<template>
    <section class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div
            class="bg-indigo-600 text-white px-4 py-2 font-bold text-sm uppercase tracking-widest flex justify-between items-center">
            <span>Listas de Magias</span>
        </div>

        <div v-for="(cat, catIdx) in ficha.magias" :key="cat.nome" class="mb-6 last:mb-0">
            <div class="bg-slate-100 px-4 py-1.5 grid grid-cols-12 gap-2 items-center border-b border-slate-200">
                <div class="col-span-4 font-black text-slate-700 uppercase text-sm">{{ cat.nome }}</div>
                <div class="col-span-3 flex items-center gap-2">
                    <span class="text-sm font-bold text-slate-500 uppercase">Atributos:</span>
                    <input type="text" v-model="cat.atribs"
                        class="bg-white border border-slate-300 font-medium rounded px-1 text-sm w-16 text-center focus:ring-1 ring-indigo-600 outline-none">
                </div>
                <div class="col-span-2 text-center">
                    <span class="text-sm font-bold text-slate-500 uppercase mr-1">Bônus Atributo:</span>
                    <span class="text-sm font-bold text-slate-600">{{ cat.atribBonus }}</span>
                </div>
                <div class="col-span-3 text-right">
                    <span class="text-sm font-bold text-slate-500 uppercase mr-1">Custo:</span>
                    <span class="text-sm font-bold text-slate-600">{{ cat.custo }}</span>
                </div>
            </div>

            <table class="w-full text-sm">
                <thead class="bg-slate-50 text-slate-500 font-black uppercase border-b border-slate-200">
                    <tr class="text-center text-xs">
                        <th class="py-2 px-2 text-center w-8">Prof</th>
                        <th class="text-left px-2">Perícia / Lista</th>
                        <th class="text-center w-18">Atrib</th>
                        <th class="text-center w-18">Bônus Atrib</th>
                        <th class="text-center w-18">Total Níveis</th>
                        <th class="text-center w-18">Bônus Níveis</th>
                        <th class="text-center w-18">Bônus Prof</th>
                        <th class="text-center w-18">Espec/Apto</th>
                        <th class="text-center text-indigo-600 w-18 bg-indigo-60">Total</th>
                        <th class="text-center w-18">Custo</th>
                        <th class="w-8"></th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                    <tr v-for="(p, pIdx) in cat.pericias" :key="p.id"
                        class="group hover:bg-indigo-60/30 transition-colors"
                        :class="{ 'bg-slate-50/50': p.isEspecializacao }">

                        <td class="p-1 text-center">
                            <input type="checkbox" v-model="p.prof"
                                class="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600">
                        </td>

                        <td class="p-1 px-2 flex items-center gap-2">
                            <div v-if="p.isEspecializacao"
                                class="w-3 h-3 border-l-2 border-b-2 border-slate-200 ml-1 -mt-1"></div>

                            <input type="text" v-model="p.nome" :readonly="!p.isEspecializacao" :class="[
                                p.isEspecializacao
                                    ? 'italic border-b border-dashed border-slate-200 focus:border-indigo-600'
                                    : 'font-bold text-slate-700 pointer-events-none'
                            ]" class="w-full bg-transparent outline-none transition-colors">

                            <button
                                v-if="!p.isEspecializacao && p.maxEspec !== undefined && contarEspecializacoes(p.id) < p.maxEspec"
                                @click="addEspecializacao(catIdx, pIdx, p.id)"
                                class="hidden group-hover:block text-indigo-600 hover:text-indigo-600 font-black text-[14px]"
                                :title="`Adicionar Lista (Máx: ${p.maxEspec})`">
                                +
                            </button>
                        </td>

                        <td class="p-1 text-center font-bold text-slate-700">{{ p.atribMod }}</td>
                        <td class="p-1 text-center"><input type="number" v-model="p.atribBonus" readonly
                                class="w-full text-center bg-transparent outline-none"></td>
                        <td class="p-1"><input type="number" v-model.number="p.totalNiveis"
                                class="w-full text-center font-bold bg-transparent outline-none"></td>
                        <td class="p-1 text-center">{{ p.bonusNivel }}</td>
                        <td class="p-1 text-center">{{ p.bonusProf }}</td>
                        <td class="p-1"><input type="number" v-model.number="p.especApt"
                                class="w-full text-center bg-transparent outline-none"></td>
                        <td class="p-1 text-center font-black text-indigo-600 bg-indigo-60/50">{{ p.bonusTotal }}</td>
                        <td class="p-1"><input type="text" v-model="p.custo" :placeholder="cat.custo"
                                class="w-full text-center text-slate-700 bg-transparent outline-none text-sm font-medium placeholder:text-slate-700">
                        </td>
                        <td class="p-1 text-center">
                            <button v-if="p.isEspecializacao || p.canDelete" @click="removeLista(catIdx, pIdx)"
                                class="text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
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
</template>

<script lang="ts">
import type { FichaPersonagem } from '@/types/Ficha';
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
    name: 'FichaMagias',
    props: {
        ficha: { type: Object as PropType<FichaPersonagem>, required: true }
    },
    methods: {
        contarEspecializacoes(parentId: string): number {
            // 1. Criamos uma referência constante (o TS confia mais em constantes locais)
            const magias = this.ficha.magias;

            // 2. Verificamos se o array existe e tem conteúdo
            if (!magias || magias.length === 0) return 0;

            // 3. Verificamos se o primeiro item realmente existe
            const primeiraCategoria = magias[0];
            if (!primeiraCategoria) return 0;

            // 4. Agora o TS tem certeza que 'pericias' pode ser acessado
            return primeiraCategoria.pericias.filter(p => p.parentId === parentId).length;
        },
        addEspecializacao(catIdx: number, pIdx: number, parentId: string) {
            const novaEspec = {
                id: Date.now().toString(),
                parentId: parentId, // Vincula a especialização à perícia pai
                nome: '↳ Nova Lista',
                isEspecializacao: true,
                prof: false,
                atribMod: 'Me',
                atribBonus: 0,
                totalNiveis: 0,
                bonusNivel: 0,
                bonusProf: 0,
                especApt: 0,
                bonusTotal: 0,
                custo: '',
                canDelete: true
            };
            // Insere logo abaixo da perícia pai ou da última especialização dela
            this.ficha.magias[catIdx]!.pericias.splice(pIdx + 1, 0, novaEspec);
        },
        removeLista(catIdx: number, pIdx: number) {
            const categoria = this.ficha.magias[catIdx];
            if (categoria) {
                categoria.pericias.splice(pIdx, 1);
            }
        }
    }
});
</script>