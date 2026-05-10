<template>
    <section class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div
            class="bg-slate-800 text-white px-4 py-2 font-bold text-sm uppercase tracking-widest flex justify-between items-center">
            Feitos de Força
        </div>

        <div class="px-4 py-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-2">
            <div v-for="item in configuracaoCampos" :key="item.key"
                class="flex flex-row items-start lg:justify-between border-b border-slate-100 py-2 lg:py-1 text-center lg:text-left">

                <div class="flex flex-row items-center gap-2">
                    <span class="text-sm font-black uppercase text-slate-500 lg:w-32 truncate">
                        {{ item.label }}
                    </span>
                    <span class="text-sm font-bold text-slate-500 lg:w-10 lg:text-right">
                        {{ item.mod }}
                    </span>
                </div>

                <div class="flex items-center gap-0.5">
                    <input type="number" v-model.number="ficha.feitosForca[item.key]" readonly
                        class="w-full text-right lg:text-center text-sm outline-none bg-transparent font-medium text-slate-700"
                        placeholder="0">
                    <span class="text-sm lg:text-sm font-bold text-slate-700">Kg</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { FichaPersonagem } from '../types/Ficha';

type ChaveFeitoForca = keyof FichaPersonagem['feitosForca'];

interface ConfigCampo {
    key: ChaveFeitoForca;
    label: string;
    mod: string;
}

export default defineComponent({
    name: 'FichaFeitosForca',
    props: {
        ficha: { type: Object as PropType<FichaPersonagem>, required: true }
    },
    data() {
        return {
            configuracaoCampos: [
                { key: 'r30', label: 'Rotina', mod: '+30' },
                { key: 'f20', label: 'Fácil', mod: '+20' },
                { key: 'l10', label: 'Leve', mod: '+10' },
                { key: 'm0', label: 'Médio', mod: '+0' },
                { key: 'd10', label: 'Difícil', mod: '-10' },
                { key: 'md20', label: 'Muito Dif.', mod: '-20' },
                { key: 'ed30', label: 'Extrem. Dif.', mod: '-30' },
                { key: 'pl50', label: 'Loucura', mod: '-50' },   // Abreviei
                { key: 'a70', label: 'Absurdo', mod: '-70' },
                { key: 'qi100', label: 'Impossív.', mod: '-100' }, // Abreviei
            ] as ConfigCampo[]
        }
    }
});
</script>