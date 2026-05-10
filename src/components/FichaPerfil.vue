<template>
    <div class="space-y-6">
        <section class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div class="grid grid-cols-2">
                <div class="border-r border-slate-200">
                    <div class="bg-slate-800 text-white px-4 py-1 text-sm uppercase font-bold">Fisico</div>
                    <div class="p-4 grid grid-cols-2 gap-3 text-sm">
                        <div>
                            <span class="text-slate-500 block text-xs uppercase font-bold">Idade</span>
                            <input type="number" v-model.number="ficha.idade"
                                class="w-full font-medium outline-none border-b border-slate-200 focus:border-indigo-300">
                        </div>
                        <div>
                            <label class="block text-xs font-bold uppercase text-slate-500 mb-2">Sexo</label>
                            <div class="flex gap-4">
                                <label class="flex items-center gap-2 text-sm cursor-pointer">
                                    <input type="radio" v-model="ficha.sexo" value="Feminino"
                                        @change="aplicarMediasRaciais" class="text-indigo-600 focus:ring-indigo-500">
                                    F
                                </label>
                                <label class="flex items-center gap-2 text-sm cursor-pointer">
                                    <input type="radio" v-model="ficha.sexo" value="Masculino"
                                        @change="aplicarMediasRaciais" class="text-indigo-600 focus:ring-indigo-500">
                                    M
                                </label>
                            </div>
                        </div>
                        <div>
                            <span class="text-slate-500 block text-xs uppercase font-bold">Altura</span>
                            <input type="number" step="0.1" min="0.3" v-model="ficha.altura"
                                class="w-full font-medium outline-none border-b border-slate-200 focus:border-indigo-300">
                        </div>
                        <div>
                            <span class="text-slate-500 block text-xs uppercase font-bold">Peso</span>
                            <input type="number" step="0.10" min="0.5" v-model="ficha.peso"
                                class="w-full font-medium outline-none border-b border-slate-200 focus:border-indigo-300">
                        </div>
                    </div>
                </div>

                <div>
                    <div class="bg-slate-800 text-white px-4 py-1 text-sm uppercase font-bold">Background</div>
                    <div class="p-4 space-y-3 text-sm">
                        <div class="flex items-center justify-center gap-1">
                            <label class="text-slate-500 text-xs uppercase font-bold">Raça</label>
                            <select v-model="ficha.raca"
                                class="w-full border-b border-slate-200 outline-none bg-transparent py-1">
                                <option v-for="r in listaRacas" :key="r" :value="r">{{ r}}</option>
                            </select>
                        </div>

                        <div class="flex items-center justify-center gap-1">
                            <label class="text-slate-500 text-xs uppercase font-bold">Cultura</label>
                            <select v-model="ficha.cultura"
                                class="w-full border-b border-slate-200 outline-none bg-transparent py-1">
                                <option v-for="c in listaCulturas" :key="c" :value="c">{{ c }}</option>
                            </select>
                        </div>

                        <div class="flex items-center justify-center gap-1">
                            <label class="text-slate-500 text-xs uppercase font-bold">Prof.</label>
                            <select v-model="ficha.profissao"
                                class="w-full border-b border-slate-200 outline-none bg-transparent py-1">
                                <option v-for="p in listaProfissoes" :key="p" :value="p">{{ p }}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div class="bg-slate-800 text-white text-center px-4 py-1 text-sm uppercase font-bold">Reino(s)</div>
            <div class="p-4 pt-2 text-sm">
                <input type="text" v-model="ficha.reino"
                    class="w-full font-medium outline-none border-b border-slate-200 focus:border-indigo-300">
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { FichaPersonagem } from '../types/Ficha';
import { RACES, PROFESSIONS, CULTURES } from '@/utils/constantes';

export default defineComponent({
    name: 'FichaPerfil',
    props: {
        ficha: { type: Object as PropType<FichaPersonagem>, required: true }
    },
    data() {
        return {
            listaRacas: Object.keys(RACES),
            listaProfissoes: Object.keys(PROFESSIONS),
            listaCulturas: CULTURES
        }
    },
    methods: {
        aplicarMediasRaciais() {
            const raca = this.ficha.raca || 'Humano Comum';
            const sexo = this.ficha.sexo === 'Masculino' ? 'M' : 'F';

            // @ts-ignore
            const medias = RACES[raca].averages[sexo];

            // Define os valores padrão, mas o usuário ainda pode editar nos inputs
            this.ficha.altura = medias.height;
            this.ficha.peso = medias.weight;

            // Força a atualização dos cálculos de Stride e Peso na engine
            // (Assumindo que você emite um evento ou chama a função de cálculo)
            this.$emit('update');
        }
    }
});
</script>