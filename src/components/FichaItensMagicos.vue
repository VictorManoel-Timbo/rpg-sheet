<template>
    <section class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div
            class="bg-slate-800 text-white px-4 py-2 font-bold text-sm uppercase tracking-widest flex justify-between items-center">
            Itens Mágicos e Tesouros
            <button @click="addItem"
                class="text-sm bg-slate-700 px-2 py-1 rounded hover:bg-slate-600 transition-all">+
                Adicionar</button>
        </div>
        <div class="overflow-x-auto">
            <table class="w-full text-sm">
                <thead class="bg-slate-50 text-slate-500 font-bold uppercase border-b border-slate-200">
                    <tr>
                        <th class="py-2 px-4 text-left w-1/4">Item</th>
                        <th class="text-left">Propriedades</th>
                        <th class="text-center w-20">STR</th>
                        <th class="text-center w-20">DB</th>
                        <th class="text-center w-20">OB</th>
                        <th class="text-center w-16">Peso</th>
                        <th class="text-center w-10"></th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                    <tr v-for="(item, index) in (ficha.itensMagicos || [])" :key="index" class="hover:bg-slate-50">
                        <td class="p-1">
                            <input type="text" v-model="item.nome"
                                class="w-full px-2 py-1 outline-none bg-transparent font-medium"
                                placeholder="Nome...">
                        </td>
                        <td class="p-1">
                            <input type="text" v-model="item.efeito"
                                class="w-full py-1 outline-none bg-transparent font-medium"
                                placeholder="Descrição do efeito...">
                        </td>
                        <td class="p-1">
                            <input type="number" v-model="item.str"
                                class="w-full text-center outline-none bg-transparent font-bold">
                        </td>
                        <td class="p-1">
                            <input type="number" v-model="item.db"
                                class="w-full text-center outline-none bg-transparent font-bold">
                        </td>
                        <td class="p-1">
                            <input type="number" v-model="item.ob"
                                class="w-full text-center outline-none bg-transparent font-bold">
                        </td>
                        <td class="p-1">
                            <input type="number" step="0.1" v-model.number="item.peso"
                                class="w-full text-center outline-none bg-transparent font-bold">
                        </td>
                        <td class="p-1 text-center">
                            <button @click="removeItem(index)"
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
    name: 'FichaItensMagicos',
    props: {
        ficha: { type: Object as PropType<FichaPersonagem>, required: true }
    },
    methods: {
        addItem() {
            if (!this.ficha.itensMagicos) this.ficha.itensMagicos = [];
            this.ficha.itensMagicos.push({ nome: '', str: 0, db: 0, ob: 0, efeito: '', peso: 0 });
        },
        removeItem(index: number) {
            this.ficha.itensMagicos.splice(index, 1);
        }
    }
});
</script>