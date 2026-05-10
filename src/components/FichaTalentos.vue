<template>
    <section class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div
            class="bg-slate-800 text-white px-4 py-2 font-bold text-sm uppercase tracking-widest flex justify-between items-center">
            Talentos
            <button @click="addTalento"
                class="text-sm bg-slate-700 hover:bg-slate-600 px-2 py-1 rounded transition-colors font-black">
                + Adicionar
            </button>
        </div>
        <div class="overflow-x-auto">
            <table class="w-full text-sm">
                <thead class="bg-slate-50 text-slate-500 font-bold uppercase border-b border-slate-200 text-sm">
                    <tr>
                        <th class="py-2 px-4 text-left w-1/4">Nome</th>
                        <th class="text-center w-16">Tier</th>
                        <th class="text-center w-16">Nível</th>
                        <th class="text-center w-20">Custo DP</th>
                        <th class="text-left px-4">Efeito</th>
                        <th class="text-center w-10"></th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                    <tr v-for="(talento, index) in (ficha.talentos || [])" :key="index"
                        class="hover:bg-slate-50 transition-colors">
                        <td class="p-1">
                            <input type="text" v-model="talento.nome"
                                class="w-full px-3 py-1 outline-none bg-transparent font-medium"
                                placeholder="Nome...">
                        </td>
                        <td class="p-1">
                            <input type="number" v-model.number="talento.tier"
                                class="w-full text-center outline-none bg-transparent font-bold">
                        </td>
                        <td class="p-1">
                            <input type="text" v-model.number="talento.nivel"
                                class="w-full text-center outline-none bg-transparent font-bold">
                        </td>
                        <td class="p-1">
                            <input type="number" v-model.number="talento.custo"
                                class="w-full text-center outline-none bg-transparent font-bold">
                        </td>
                        <td class="p-1">
                            <input type="text" v-model="talento.efeito"
                                class="w-full px-3 py-1 outline-none bg-transparent font-medium"
                                placeholder="Descrição do efeito...">
                        </td>
                        <td class="p-1 text-center">
                            <button @click="removeTalento(index)"
                                class="text-slate-500 hover:text-red-500 transition-colors p-1">
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
import { defineComponent, type PropType } from 'vue';
import type { FichaPersonagem } from '../types/Ficha';

export default defineComponent({
    name: 'FichaTalentos',
    props: {
        ficha: { type: Object as PropType<FichaPersonagem>, required: true }
    },
    methods: {
        addTalento() {
            if (!this.ficha.talentos) this.ficha.talentos = [];
            this.ficha.talentos.push({ nome: '', tier: 0, nivel: '', custo: 0, efeito: '' });
        },
        removeTalento(index: number) {
            this.ficha.talentos.splice(index, 1);
        }
    }
});
</script>