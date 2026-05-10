<template>
    <section class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div class="bg-slate-800 text-white px-4 py-2 font-bold text-sm uppercase tracking-widest">
            Armaduras
        </div>
        <table class="w-full text-sm text-center">
            <thead class="bg-slate-50 text-slate-500 font-bold uppercase">
                <tr>
                    <th class="py-2 text-left px-4">Área</th>
                    <th>Armadura</th>
                    <th>AT</th>
                    <th>Penal. Man.</th>
                    <th>Peso</th>
                    <th>STR</th>
                    <th>DB</th>
                    <th>Penal. Conj.</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
                <tr v-for="area in areasArmadura" :key="area"
                    :class="area === 'Total' ? 'bg-indigo-50/50 font-bold' : 'hover:bg-slate-50 transition-colors'">

                    <td class="py-3 px-4 text-left font-bold"
                        :class="area === 'Total' ? 'text-indigo-700' : 'text-slate-600'">
                        {{ area }}
                    </td>
                    <td class="p-1">
                        <input v-if="area !== 'Total'" type="text" v-model="getArmadura(area).nome"
                            class="w-full px-2 py-1 outline-none bg-transparent" placeholder="Ex: Malha, Placa...">
                    </td>
                    <td class="p-1">
                        <input v-if="area !== 'Total'" type="number" min="1" max="10" v-model.number="getArmadura(area).at"
                            class="w-full text-center outline-none bg-transparent font-medium">
                    </td>
                    <td class="p-1">
                        <input type="number" v-model.number="getArmadura(area).penalMan" :readonly="area === 'Total'"
                            class="w-full text-center outline-none bg-transparent"
                            :class="area === 'Total' ? 'text-indigo-700 font-bold' : 'font-medium'">
                    </td>
                    <td class="p-1">
                        <input type="number" step="0.1" v-model.number="getArmadura(area).peso"
                            :readonly="area === 'Total'" class="w-full text-center outline-none bg-transparent"
                            :class="area === 'Total' ? 'text-indigo-700 font-bold' : 'font-medium'">
                    </td>
                    <td class="p-1">
                        <input v-if="area !== 'Total'" type="number" v-model.number="getArmadura(area).str"
                            class="w-full text-center outline-none bg-transparent font-medium">
                    </td>
                    <td class="p-1">
                        <input v-if="area !== 'Cabeça' && area !== 'Braços' && area !== 'Pernas'" type="number"
                            v-model.number="getArmadura(area).db" class="w-full text-center outline-none bg-transparent"
                            :readonly="area === 'Total'"
                            :class="area === 'Total' ? 'text-indigo-700 font-bold' : 'font-medium'">
                    </td>
                    <td class="p-1">
                        <input v-if="area !== 'Escudo'" type="number" v-model.number="getArmadura(area).penalConj"
                            class="w-full text-center outline-none bg-transparent" :readonly="area === 'Total'"
                            :class="area === 'Total' ? 'text-indigo-700 font-bold' : 'font-medium'">
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border-t border-slate-100 bg-white">
            <div>
                <label class="block text-sm font-black uppercase text-slate-500 mb-1">Notas de Combate</label>
                <textarea v-model="ficha.notasCombate" rows="6"
                    class="w-full bg-slate-50 border border-slate-200 rounded p-2 text-sm outline-none focus:ring-2 ring-indigo-100 resize-none"></textarea>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div class="bg-slate-50 p-3 rounded border border-slate-200">
                    <label class="block text-sm font-black uppercase text-slate-500">Percepção (Cabeça)</label>
                    <input type="number" v-model.number="ficha.percepcao" class="w-full text-lg font-bold outline-none">
                </div>
                <div class="bg-slate-50 p-3 rounded border border-slate-200">
                    <label class="block text-sm font-black uppercase text-slate-500">Projéteis (Braços)</label>
                    <input type="number" v-model.number="ficha.projeteis" class="w-full text-lg font-bold outline-none">
                </div>
                <div class="bg-slate-50 p-3 rounded border border-slate-200 col-span-2">
                    <label class="block text-sm font-black uppercase text-slate-500">Número de Ataques (Escudo)</label>
                    <input type="number" min="0" v-model.number="ficha.numAtaques"
                        class="w-full text-lg font-bold outline-none">
                </div>
            </div>
        </div>

    </section>

</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { FichaPersonagem, ArmaduraItem } from '../types/Ficha';

export default defineComponent({
    name: 'FichaEquipamentos',
    props: {
        ficha: { type: Object as PropType<FichaPersonagem>, required: true }
    },
    data() {
        return {
            // Definição das áreas conforme solicitado
            areasArmadura: ['Torso', 'Cabeça', 'Braços', 'Pernas', 'Escudo', 'Total']
        };
    },
    methods: {
        // Função auxiliar para encontrar ou criar o objeto da área na ficha
        getArmadura(area: string): ArmaduraItem {
            let item = this.ficha.armaduras.find(a => a.area === area);
            if (!item) {
                item = { area, nome: '', at: 0, penalMan: 0, peso: 0, str: 0, db: 0, penalConj: 0 } as ArmaduraItem;
                this.ficha.armaduras.push(item);
            }
            return item;
        }
    }
});
</script>