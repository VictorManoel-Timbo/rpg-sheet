<template>
    <section class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <label class="block text-sm font-black uppercase text-slate-500 mb-2">Histórico</label>
            <textarea v-model="ficha.historico" rows="13"
                class="w-full text-sm outline-none resize-none bg-slate-50 p-2 rounded border border-slate-200 focus:ring-1 ring-indigo-200"></textarea>
        </div>
        <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <label class="block text-sm font-black uppercase text-slate-500 mb-2">Personalidade</label>
            <textarea v-model="ficha.personalidade" rows="13"
                class="w-full text-sm outline-none resize-none bg-slate-50 p-2 rounded border border-slate-200 focus:ring-1 ring-indigo-200"></textarea>
        </div>
        <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <label class="block text-sm font-black uppercase text-slate-500 mb-2">Aparência</label>
            <textarea v-model="ficha.aparencia" rows="13"
                class="w-full text-sm outline-none resize-none bg-slate-50 p-2 rounded border border-slate-200 focus:ring-1 ring-indigo-200"></textarea>
        </div>
        <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <label class="block text-sm font-black uppercase text-slate-500 mb-2">Anotações</label>
            <textarea v-model="ficha.anotacoes" rows="13"
                class="w-full text-sm outline-none resize-none bg-slate-50 p-2 rounded border border-slate-200 focus:ring-1 ring-indigo-200"></textarea>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { FichaPersonagem } from '../types/Ficha';

export default defineComponent({
    name: 'FichaNotas',
    props: {
        ficha: { type: Object as PropType<FichaPersonagem>, required: true }
    }
});
</script>