<template>
    <div class="space-y-6">
        <section class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div class="bg-slate-800 text-white px-4 py-2 font-bold text-sm uppercase tracking-widest">
                Resistências
            </div>
            <table class="w-full text-sm">
                <thead class="bg-slate-50">
                    <tr class="text-slate-500 uppercase text-xs">
                        <th class="py-2 text-left px-4">Teste</th>
                        <th>Atrib.</th>
                        <th>Bônus</th>
                        <th>Nvl*2</th>
                        <th>Racial</th>
                        <th>Especial</th>
                        <th class="text-indigo-700">Total</th>
                    </tr>
                </thead>
                <tbody class="text-center divide-y divide-slate-50">
                    <tr>
                        <td class="text-left px-4 py-2 font-bold text-slate-600">Canalização</td>
                        <td class="font-bold">In</td>
                        <td><input type="number" v-model.number="ficha.inTotal" readonly
                                class="w-full text-center outline-none bg-transparent"></td>
                        <td><input type="number" v-model.number="ficha.chNvl" readonly
                                class="w-full text-center outline-none bg-transparent"></td>
                        <td><input type="number" v-model.number="ficha.chRacial" readonly
                                class="w-full text-center outline-none bg-transparent"></td>
                        <td><input type="number" v-model.number="ficha.chEspecial"
                                class="w-full text-center outline-none bg-transparent"></td>
                        <td class="font-bold text-center"><input type="number"
                                v-model.number="ficha.chTotal" readonly
                                class="w-full text-center text-indigo-700 outline-none bg-transparent"></td>
                    </tr>
                    <tr>
                        <td class="text-left px-4 py-2 font-bold text-slate-600">Essência</td>
                        <td class="font-bold">Em</td>
                        <td><input type="number" v-model.number="ficha.emTotal" readonly
                                class="w-full text-center outline-none bg-transparent"></td>
                        <td><input type="number" v-model.number="ficha.esNvl" readonly
                                class="w-full text-center outline-none bg-transparent"></td>
                        <td><input type="number" v-model.number="ficha.esRacial" readonly
                                class="w-full text-center outline-none bg-transparent"></td>
                        <td><input type="number" v-model.number="ficha.esEspecial"
                                class="w-full text-center outline-none bg-transparent"></td>
                        <td class="font-bold text-center"><input type="number"
                                v-model.number="ficha.esTotal" readonly
                                class="w-full text-center text-indigo-700 outline-none bg-transparent"></td>
                    </tr>
                    <tr>
                        <td class="text-left px-4 py-2 font-bold text-slate-600">Mentalismo</td>
                        <td class="font-bold">Pr</td>
                        <td><input type="number" v-model.number="ficha.prTotal" readonly
                                class="w-full text-center outline-none bg-transparent"></td>
                        <td><input type="number" v-model.number="ficha.mtNvl" readonly
                                class="w-full text-center outline-none bg-transparent"></td>
                        <td><input type="number" v-model.number="ficha.mtRacial" readonly
                                class="w-full text-center outline-none bg-transparent"></td>
                        <td><input type="number" v-model.number="ficha.mtEspecial"
                                class="w-full text-center outline-none bg-transparent"></td>
                        <td class="font-bold text-center"><input type="number"
                                v-model.number="ficha.mtTotal" readonly
                                class="w-full text-center text-indigo-700 outline-none bg-transparent"></td>
                    </tr>
                    <tr>
                        <td class="text-left px-4 py-2 font-bold text-slate-600">Física</td>
                        <td class="font-bold">Co</td>
                        <td><input type="number" v-model.number="ficha.coTotal" readonly
                                class="w-full text-center outline-none bg-transparent"></td>
                        <td><input type="number" v-model.number="ficha.phNvl" readonly
                                class="w-full text-center outline-none bg-transparent"></td>
                        <td><input type="number" v-model.number="ficha.phRacial" readonly
                                class="w-full text-center outline-none bg-transparent"></td>
                        <td><input type="number" v-model.number="ficha.phEspecial"
                                class="w-full text-center outline-none bg-transparent"></td>
                        <td class="font-bold text-center"><input type="number"
                                v-model.number="ficha.phTotal" readonly
                                class="w-full text-center text-indigo-700 outline-none bg-transparent"></td>
                    </tr>
                    <tr>
                        <td class="text-left px-4 py-2 font-bold text-slate-600">Medo</td>
                        <td class="font-bold">SD</td>
                        <td><input type="number" v-model.number="ficha.sdTotal" readonly
                                class="w-full text-center outline-none bg-transparent"></td>
                        <td><input type="number" v-model.number="ficha.feNvl" readonly
                                class="w-full text-center outline-none bg-transparent"></td>
                        <td><input type="number" v-model.number="ficha.feRacial" readonly
                                class="w-full text-center outline-none bg-transparent"></td>
                        <td><input type="number" v-model.number="ficha.feEspecial"
                                class="w-full text-center outline-none bg-transparent"></td>
                        <td class="font-bold text-center"><input type="number"
                                v-model.number="ficha.feTotal" readonly
                                class="w-full text-center text-indigo-700 outline-none bg-transparent"></td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div class="bg-slate-800 text-white px-4 py-2 text-sm font-bold uppercase tracking-widest text-center">
                Ritmo (Metros)
            </div>
            <table class="w-full text-sm">
                <thead class="bg-slate-50">
                    <tr class="text-slate-700 uppercase text-xs">
                        <th class="py-2 text-left px-4">Ritmo</th>
                        <th>Rodada</th>
                        <th>Fase</th>
                        <th>Penalidade</th>
                        <th>Limite de Carga</th>
                    </tr>
                </thead>
                <tbody class="text-center divide-y divide-slate-50">
                    <tr>
                        <td class="text-left px-4 py-2 font-bold text-slate-600">Rastejar</td>
                        <td><input type="number" v-model.number="ficha.ritmoRastejarRodada" readonly
                                class="w-12 text-center outline-none font-medium"></td>
                        <td><input type="number" v-model.number="ficha.ritmoRastejarFase" readonly
                                class="w-12 text-center outline-none font-medium"></td>
                        <td class="text-slate-600 font-medium">--</td>
                        <td class="text-slate-600 font-medium">--</td>
                    </tr>
                    <tr>
                        <td class="text-left px-4 py-2 font-bold text-slate-600">Andar</td>
                        <td><input type="number" v-model.number="ficha.ritmoAndarRodada" readonly
                                class="w-12 text-center outline-none font-medium"></td>
                        <td><input type="number" v-model.number="ficha.ritmoAndarFase" readonly
                                class="w-12 text-center outline-none font-medium"></td>
                        <td class="text-slate-600 font-medium">-25 / 1AP</td>
                        <td class="text-slate-600 font-medium">90%</td>
                    </tr>
                    <tr>
                        <td class="text-left px-4 py-2 font-bold text-slate-600">Trotar</td>
                        <td><input type="number" v-model.number="ficha.ritmoTrotarRodada" readonly
                                class="w-12 text-center outline-none font-medium"></td>
                        <td><input type="number" v-model.number="ficha.ritmoTrotarFase" readonly
                                class="w-12 text-center outline-none font-medium"></td>
                        <td class="text-slate-600 font-medium">-50 / 2AP</td>
                        <td class="text-slate-600 font-medium">60%</td>
                    </tr>
                    <tr>
                        <td class="text-left px-4 py-2 font-bold text-slate-600">Correr</td>
                        <td><input type="number" v-model.number="ficha.ritmoCorrerRodada" readonly
                                class="w-12 text-center outline-none font-medium"></td>
                        <td><input type="number" v-model.number="ficha.ritmoCorrerFase" readonly
                                class="w-12 text-center outline-none font-medium"></td>
                        <td class="text-slate-600 font-medium">-75 / 3AP</td>
                        <td class="text-slate-600 font-medium">45%</td>
                    </tr>
                    <tr>
                        <td class="text-left px-4 py-2 font-bold text-slate-600">Sprint</td>
                        <td><input type="number" v-model.number="ficha.ritmoSprintRodada" readonly
                                class="w-12 text-center outline-none font-medium"></td>
                        <td><input type="number" v-model.number="ficha.ritmoSprintFase" readonly
                                class="w-12 text-center outline-none font-medium"></td>
                        <td class="text-slate-600 font-medium">4AP</td>
                        <td class="text-slate-600 font-medium">30%</td>
                    </tr>
                    <tr>
                        <td class="text-left px-4 py-2 font-bold text-slate-600">Disparar</td>
                        <td><input type="number" v-model.number="ficha.ritmoDispararRodada" readonly
                                class="w-12 text-center outline-none font-medium"></td>
                        <td><input type="number" v-model.number="ficha.ritmoDispararFase" readonly
                                class="w-12 text-center outline-none font-medium"></td>
                        <td class="text-slate-600 font-medium">4+ AP</td>
                        <td class="text-slate-600 font-medium">15%</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { FichaPersonagem } from '../types/Ficha';

export default defineComponent({
    name: 'FichaTestes',
    props: {
        ficha: {
            type: Object as PropType<FichaPersonagem>,
            required: true
        }
    }
});
</script>