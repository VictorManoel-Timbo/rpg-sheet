<template>
    <header class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div class="p-6 grid grid-cols-1 md:grid-cols-5 gap-6">
            <div class="space-y-4 md:col-span-3">
                <div class="grid grid-cols-2 gap-4">
                    <div class="group">
                        <label class="block text-sm font-semibold text-slate-500 uppercase mb-1">Nome do
                            Personagem</label>
                        <input type="text" v-model="ficha.nomePersonagem"
                            class="w-full border-b-2 border-slate-200 focus:border-indigo-500 outline-none py-1 transition-colors">
                    </div>
                    <div class="group">
                        <label class="block text-sm font-semibold text-slate-500 uppercase mb-1">Nome do Jogador</label>
                        <input type="text" v-model="ficha.nomeJogador"
                            class="w-full border-b-2 border-slate-200 focus:border-indigo-500 outline-none py-1 transition-colors">
                    </div>
                </div>
                <div class="group">
                    <label class="block text-sm font-semibold text-slate-500 uppercase mb-1">Campanha</label>
                    <input type="text" v-model="ficha.campanha"
                        class="w-full border-b-2 border-slate-200 focus:border-indigo-500 outline-none py-1 transition-colors">
                </div>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 bg-slate-100 p-4 rounded-lg border border-slate-100">
                <div>
                    <label class="block text-sm font-bold text-indigo-600 uppercase">Nível</label>
                    <input type="number" min="1" v-model.number="ficha.nivel"
                        class="w-full bg-transparent text-xl font-bold outline-none">
                </div>
                <div>
                    <label class="block text-sm font-bold text-indigo-600 uppercase">DP</label>
                    <input type="number" min="0" v-model.number="ficha.dp"
                        class="w-full bg-transparent text-xl font-bold outline-none">
                </div>
                <div>
                    <label class="block text-sm font-bold text-indigo-600 uppercase">DP Gastos</label>
                    <input type="number" min="0" v-model.number="ficha.dpGasto"
                        class="w-full bg-transparent text-xl font-bold outline-none">
                </div>
            </div>

            <div
                class="relative group w-28 h-36 lg:w-32 lg:h-40 shrink-0 bg-slate-100 rounded-lg border-2 border-dashed border-slate-300 overflow-hidden transition-all hover:border-teal-400">
                <img v-if="ficha.imagemUrl" :src="ficha.imagemUrl" class="w-full h-full object-cover"
                    alt="Avatar do Personagem">

                <div v-else class="flex flex-col items-center justify-center h-full text-slate-400 p-2 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mb-2 opacity-50" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span class="text-xs uppercase font-bold tracking-tighter">Sem Imagem</span>
                </div>

                <div
                    class="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-2">
                    <input type="text" v-model="ficha.imagemUrl" placeholder="Cole a URL da imagem aqui"
                        class="text-xs w-full bg-white rounded px-1 py-1 outline-none text-slate-800">
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { FichaPersonagem } from '../types/Ficha.ts';

export default defineComponent({
    name: 'FichaHeader',
    props: {
        ficha: { type: Object as PropType<FichaPersonagem>, required: true }
    }
});
</script>