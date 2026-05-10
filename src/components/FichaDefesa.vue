<template>
    <section class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div class="bg-slate-800 text-white px-4 py-2 text-sm font-bold uppercase tracking-widest text-center">Defesa
        </div>
        <div class="grid grid-cols-4 lg:grid-cols-2 p-6 gap-6">
            <div><label class="block text-sm font-semibold text-slate-500 mb-1">Rapidez DB</label><input type="number"
                    v-model.number="ficha.quDB"
                    class="w-full bg-slate-50 rounded px-3 py-2 outline-none focus:ring-2 ring-indigo-100"></div>
            <div><label class="block text-sm font-semibold text-slate-500 mb-1">Outros DB</label><input type="number"
                    v-model.number="ficha.outrosDB"
                    class="w-full bg-slate-50 rounded px-3 py-2 outline-none focus:ring-2 ring-indigo-100"></div>
            <div><label class="block text-sm font-semibold text-slate-500 mb-1">Esquiva Passiva</label><input
                    type="number" v-model.number="ficha.passiveDodge"
                    class="w-full bg-slate-50 rounded px-3 py-2 outline-none focus:ring-2 ring-indigo-100"></div>
            <div><label class="block text-sm font-semibold text-slate-500 mb-1">Bloqueio Passivo</label><input
                    type="number" v-model.number="ficha.blockDodge"
                    class="w-full bg-slate-50 rounded px-3 py-2 outline-none focus:ring-2 ring-indigo-100"></div>
            <div><label class="block text-sm font-semibold text-slate-500 mb-1">Esquiva Parcial (C)</label><input
                    type="number" v-model.number="ficha.partialDodge"
                    class="w-full bg-slate-50 rounded px-3 py-2 outline-none focus:ring-2 ring-indigo-100"></div>
            <div><label class="block text-sm font-semibold text-slate-500 mb-1">Bloqueio Parcial (C)</label><input
                    type="number" v-model.number="ficha.partialBlock"
                    class="w-full bg-slate-50 rounded px-3 py-2 outline-none focus:ring-2 ring-indigo-100"></div>
            <div><label class="block text-sm font-semibold text-slate-500 mb-1">Esquiva Completa</label><input
                    type="number" v-model.number="ficha.completeDodge"
                    class="w-full bg-slate-50 rounded px-3 py-2 outline-none focus:ring-2 ring-indigo-100"></div>
            <div><label class="block text-sm font-semibold text-slate-500 mb-1">Bloqueio Completo</label><input
                    type="number" v-model.number="ficha.completeBlock"
                    class="w-full bg-slate-50 rounded px-3 py-2 outline-none focus:ring-2 ring-indigo-100"></div>
            <div><label class="block text-sm font-semibold text-slate-500 mb-1">Total sem Escudo</label><input
                    type="number" v-model.number="ficha.totalCSShield"
                    class="w-full bg-slate-50 rounded px-3 py-2 outline-none focus:ring-2 ring-indigo-100"></div>
            <div><label class="block text-sm font-semibold text-slate-500 mb-1">Total com Escudo</label><input
                    type="number" v-model.number="ficha.totalCShield"
                    class="w-full bg-slate-50 rounded px-3 py-2 outline-none focus:ring-2 ring-indigo-100"></div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { FichaPersonagem } from '../types/Ficha';

export default defineComponent({
    name: 'FichaDefesa',
    props: { ficha: { type: Object as PropType<FichaPersonagem>, required: true } }
});
</script>