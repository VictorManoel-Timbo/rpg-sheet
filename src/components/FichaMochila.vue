<template>
    <section class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div
            class="bg-slate-800 text-white px-4 py-2 font-bold text-sm uppercase tracking-widest flex justify-between items-center">
            <div class="flex items-center gap-2">
                <span>Mochila</span>
            </div>

            <div class="text-xs bg-slate-700 px-2 py-1 rounded flex gap-2">
                <span class="text-white">Peso Total:</span>
                <span class="font-black">{{ pesoTotalMochila.toFixed(2) }} kg</span>
            </div>

            <button @click="adicionarItem"
                class="text-xs bg-slate-700 px-2 py-1 rounded hover:bg-slate-600 transition-all">
                + Adicionar
            </button>
        </div>

        <div class="overflow-x-auto">
            <table class="w-full text-sm">
                <thead class="bg-slate-50 text-slate-500 font-black uppercase text-xs border-b border-slate-200">
                    <tr>
                        <th class="py-2 px-3 text-center w-16">Qtd</th>
                        <th class="text-left px-2 w-64">Item</th>
                        <th class="text-left px-2">Descrição</th>
                        <th class="text-left px-2 w-40">Localização</th>
                        <th class="text-center w-20">Peso (Un)</th>
                        <th class="text-center text-indigo-700 w-20 bg-indigo-50">Total</th>
                        <th class="w-10"></th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                    <tr v-for="(item, idx) in ficha.mochila" :key="item.id"
                        class="group hover:bg-amber-50/30 transition-colors">

                        <td class="p-2 text-center align-middle">
                            <input type="number" v-model.number="item.quantidade" min="0"
                                class="w-full text-center font-bold text-slate-700 bg-slate-100 border border-transparent rounded focus:border-slate-700 focus:bg-white outline-none py-1">
                        </td>

                        <td class="p-2 align-middle">
                            <div class="flex flex-col gap-1">
                                <input type="text" v-model="item.nome" placeholder="Nome do Item"
                                    class="w-full font-bold text-slate-700 bg-transparent outline-none focus:border-b focus:border-slate-400 placeholder:text-slate-500">
                            </div>
                        </td>

                        <td class="p-2 align-middle">
                            <div class="flex flex-col gap-1">
                                <input type="text" v-model="item.descricao" placeholder="Descrição / Efeitos..."
                                    class="w-full text-xs text-slate-700 italic font-bold bg-transparent outline-none focus:border-b focus:border-dashed focus:border-slate-400 placeholder:text-slate-500">
                            </div>
                        </td>

                        <td class="p-2 align-middle">
                            <input type="text" v-model="item.localizacao" placeholder="Ex: Cinto"
                                class="w-full text-sm font-medium text-slate-700 bg-transparent outline-none focus:border-b focus:border-slate-400 py-1">
                        </td>

                        <td class="p-2 text-center align-middle">
                            <input type="number" step="0.1" v-model.number="item.peso" min="0"
                                class="w-full text-center font-medium text-slate-700 bg-transparent outline-none focus:border-b focus:border-slate-400 py-1">
                        </td>

                        <td class="p-2 text-center align-middle font-bold text-indigo-700 bg-indigo-50">
                            {{ (item.quantidade * item.peso).toFixed(2) }}
                        </td>

                        <td class="p-2 text-center align-middle">
                            <button @click="removerItem(idx)"
                                class="text-slate-500 hover:text-red-500 transition-colors p-1" title="Remover Item">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-auto" fill="none"
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
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { FichaPersonagem } from '@/types/Ficha';

export default defineComponent({
    name: 'FichaMochila',
    props: {
        ficha: { type: Object as PropType<FichaPersonagem>, required: true }
    },
    computed: {
        pesoTotalMochila(): number {
            if (!this.ficha.mochila || this.ficha.mochila.length === 0) return 0;

            return this.ficha.mochila.reduce((total, item) => {
                // Previne NaN caso os campos estejam vazios durante a digitação
                const qtd = item.quantidade || 0;
                const peso = item.peso || 0;
                return total + (qtd * peso);
            }, 0);
        }
    },
    methods: {
        adicionarItem() {
            // Garante que o array existe antes de dar o push
            if (!this.ficha.mochila) {
                this.ficha.mochila = [];
            }

            this.ficha.mochila.push({
                id: Date.now().toString(),
                nome: '',
                descricao: '',
                quantidade: 1,
                peso: 0,
                localizacao: 'Mochila' // Valor padrão para facilitar a vida do jogador
            });
        },
        removerItem(idx: number) {
            if (this.ficha.mochila) {
                this.ficha.mochila.splice(idx, 1);
            }
        }
    }
});
</script>