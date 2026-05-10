<template>
    <div class="space-y-6">
        <section class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div
                class="bg-slate-800 text-white px-4 py-2 font-bold text-sm uppercase tracking-widest flex items-center justify-between">
                Ataques e Armas
                <button @click="adicionarArma"
                    class="text-sm bg-slate-700 px-2 py-1 rounded hover:bg-slate-600 transition-all">
                    + Adicionar
                </button>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full text-sm">
                    <thead class="bg-slate-50 text-slate-500 font-bold uppercase border-b border-slate-200">
                        <tr>
                            <th class="py-2 px-4 text-left w-1/3">Arma / Ataque</th>
                            <th class="text-center">Fumble</th>
                            <th class="text-center">STR</th>
                            <th class="text-center">Bônus Item</th>
                            <th class="text-center">Perícia</th>
                            <th class="text-center">OB</th>
                            <th class="text-center text-indigo-600 bg-slate-100">Total</th>
                            <th class="text-center w-10"></th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        <tr v-for="(arma, index) in ficha.armas" :key="index"
                            class="hover:bg-slate-50 transition-colors">
                            <td class="p-1">
                                <input type="text" v-model="arma.nome"
                                    class="w-full px-2 py-1 outline-none bg-transparent font-medium"
                                    placeholder="Nome...">
                            </td>
                            <td><input type="number" v-model.number="arma.fumble"
                                    class="w-full text-center font-medium outline-none bg-transparent"></td>
                            <td><input type="number" v-model.number="arma.str"
                                    class="w-full text-center font-medium outline-none bg-transparent"></td>
                            <td><input type="number" v-model.number="arma.bonusItem"
                                    class="w-full text-center font-medium outline-none bg-transparent"></td>
                            <td><input type="text" v-model.number="arma.pericia" placeholder="Perícia..."
                                    class="w-full text-center outline-none bg-transparent font-medium"></td>
                            <td><input type="number" v-model.number="arma.ob"
                                    class="w-full text-center font-medium outline-none bg-transparent"></td>
                            <td class="bg-slate-50">
                                <input type="number" v-model.number="arma.total"
                                    class="w-full text-center font-bold text-indigo-700 outline-none bg-transparent">
                            </td>
                            <td class="p-1 text-center">
                                <button @click="removeArmas(index)"
                                    class="text-slate-500 hover:text-red-500 transition-colors p-1">
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
import type { FichaPersonagem } from '../types/Ficha';

export default defineComponent({
    name: 'FichaCombate',
    props: {
        ficha: { type: Object as PropType<FichaPersonagem>, required: true }
    },
    methods: {
        adicionarArma() {
            this.ficha.armas.push({
                nome: '', fumble: 0, str: 0, bonusItem: 0, pericia: '', ob: 0, total: 0
            });
        },
        removeArmas(index: number) {
            this.ficha.armas.splice(index, 1);
        }
    }
});
</script>