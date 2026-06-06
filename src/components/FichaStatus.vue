<template>
    <div class="space-y-6">
        <div class="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-3 gap-4">
            <div class="bg-white p-3 rounded-xl border text-red-600 border-slate-200 shadow-sm text-center">
                <span class="block text-sm font-bold text-slate-500 uppercase">Vida</span>
                <div class="flex">
                    <input type="number" v-model.number="ficha.vidaAtual"
                        class="w-full text-center text-xl font-black outline-none"> 
                        /
                    <input type="number" v-model.number="ficha.vida" readonly
                        class="w-full text-center text-xl font-black outline-none">
                </div>
            </div>
            <div class="bg-white p-3 rounded-xl border text-teal-600 border-slate-200 shadow-sm text-center">
                <span class="block text-sm font-bold text-slate-500 uppercase">Poder</span>
                <div class="flex">
                    <input type="number" v-model.number="ficha.poderAtual"
                        class="w-full text-center text-xl font-black outline-none"> 
                        /
                    <input type="number" v-model.number="ficha.poder" readonly
                        class="w-full text-center text-xl font-black outline-none">
                </div>
            </div>
            <div class="bg-white p-3 rounded-xl border text-slate-700 border-slate-200 shadow-sm text-center">
                <span class="block text-sm font-bold text-slate-500 uppercase">Vigor</span>
                <div class="flex">
                    <input type="number" v-model.number="ficha.vigorAtual"
                        class="w-full text-center text-xl font-black outline-none">
                    /
                    <input type="number" v-model.number="ficha.vigor" readonly
                        class="w-full text-center text-xl font-black outline-none">
                </div>
            </div>
            <div class="bg-white p-3 rounded-xl border border-slate-200 shadow-sm text-center">
                <span class="block text-sm font-bold text-slate-500 uppercase truncate">Iniciativa</span>
                <input type="number" v-model.number="ficha.iniciativa" readonly
                    class="w-full text-center text-xl font-black text-slate-700 outline-none">
            </div>
            <div class="bg-white p-3 rounded-xl border border-slate-200 shadow-sm text-center">
                <span class="block text-sm font-bold text-slate-500 uppercase">BMR</span>
                <input type="number" step="0.1" min="0" v-model.number="ficha.bmr" readonly
                    class="w-full text-center text-xl font-black text-slate-700 outline-none">
            </div>
        </div>

        <section class="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-4">
            <h3 class="text-sm font-black uppercase text-slate-800 border-b border-slate-100 pb-2">Sobrecarga</h3>
            <div class="grid grid-cols-3 gap-6">
                <div><label class="block text-sm font-semibold text-slate-500 mb-1">Peso Máximo</label><input
                        type="number" step="0.01" v-model.number="ficha.pesoMax" readonly
                        class="w-full bg-slate-50 rounded px-3 py-2 outline-none focus:ring-2 ring-indigo-100"></div>
                <div><label class="block text-sm font-semibold text-slate-500 mb-1">Carregando</label><input
                        type="number" v-model.number="ficha.carga" readonly
                        class="w-full bg-slate-50 rounded px-3 py-2 outline-none focus:ring-2 ring-indigo-100"></div>
                <div><label class="block text-sm font-semibold text-slate-500 mb-1">Ritmo Máximo</label><input
                        type="text" v-model="ficha.ritmoMax" readonly
                        class="w-full bg-slate-50 rounded px-3 py-2 outline-none focus:ring-2 ring-indigo-100"></div>
                <div><label class="block text-sm font-semibold text-slate-500 mb-1">Penal. Total de
                        Manobra</label><input type="number" v-model.number="ficha.penalTotalMan" readonly
                        class="w-full bg-slate-50 rounded px-3 py-2 outline-none focus:ring-2 ring-indigo-100"></div>
                <div><label class="block text-sm font-semibold text-slate-500 mb-1">Penalidade de
                        Sobrecarga</label><input type="number" v-model.number="ficha.penalSobrecarga" readonly
                        class="w-full bg-slate-50 rounded px-3 py-2 outline-none focus:ring-2 ring-indigo-100"></div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { FichaPersonagem } from '../types/Ficha';

export default defineComponent({
    name: 'FichaStatus',
    props: { ficha: { type: Object as PropType<FichaPersonagem>, required: true } },
    data() {
        return {
            vigor: 0,
            vida: 0,
            poder: 0
        }
    }
});
</script>