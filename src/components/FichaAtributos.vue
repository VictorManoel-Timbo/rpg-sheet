<template>
    <section class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div class="bg-indigo-600 text-white px-4 py-2 font-bold text-sm uppercase tracking-widest">
            Estatísticas
        </div>
        <table class="w-full text-sm">
            <thead class="bg-slate-50 text-slate-500 font-bold uppercase text-xs">
                <tr>
                    <th class="py-2 px-4 text-left">Atributo</th>
                    <th class="text-center">Pot.</th>
                    <th class="text-center">Temp.</th>
                    <th class="text-center">Bônus</th>
                    <th class="text-center">Racial</th>
                    <th class="text-center">Espec.</th>
                    <th class="text-center">Total</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
                <tr class="hover:bg-indigo-50/30 transition-colors">
                    <td class="py-3 px-4 text-sm font-bold text-slate-700">Agilidade (Ag)</td>
                    <td><input type="number" min="1" max="100" v-model.number="ficha.agPot"
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" min="1" max="100" v-model.number="ficha.agTemp"
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.agBonus" readonly
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.agRacial" readonly
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.agEspecial"
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td class="font-bold text-indigo-600 text-center"><input type="number"
                            v-model.number="ficha.agTotal" readonly
                            class="w-full text-center outline-none bg-transparent"></td>
                </tr>
                <tr class="hover:bg-indigo-50/30 transition-colors">
                    <td class="py-3 px-4 text-sm font-bold text-slate-700">Constituição (Co)</td>
                    <td><input type="number" v-model.number="ficha.coPot"
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.coTemp"
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.coBonus" readonly
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.coRacial" readonly
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.coEspecial"
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td class="font-bold text-indigo-600 text-center"><input type="number"
                            v-model.number="ficha.coTotal" readonly
                            class="w-full text-center outline-none bg-transparent"></td>
                </tr>
                <tr class="hover:bg-indigo-50/30 transition-colors">
                    <td class="py-3 px-4 text-sm font-bold text-slate-700">Empatia (Em)</td>
                    <td><input type="number" v-model.number="ficha.emPot"
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.emTemp"
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.emBonus" readonly
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.emRacial" readonly
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.emEspecial"
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td class="font-bold text-indigo-600 text-center"><input type="number"
                            v-model.number="ficha.emTotal" readonly
                            class="w-full text-center outline-none bg-transparent"></td>
                </tr>
                <tr class="hover:bg-indigo-50/30 transition-colors">
                    <td class="py-3 px-4 text-sm font-bold text-slate-700">Intuição (In)</td>
                    <td><input type="number" v-model.number="ficha.inPot"
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.inTemp"
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.inBonus" readonly
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.inRacial" readonly
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.inEspecial"
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td class="font-bold text-indigo-600 text-center"><input type="number"
                            v-model.number="ficha.inTotal" readonly
                            class="w-full text-center outline-none bg-transparent"></td>
                </tr>
                <tr class="hover:bg-indigo-50/30 transition-colors">
                    <td class="py-3 px-4 text-sm font-bold text-slate-700">Memória (Me)</td>
                    <td><input type="number" v-model.number="ficha.mePot"
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.meTemp"
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.meBonus" readonly
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.meRacial" readonly
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.meEspecial"
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td class="font-bold text-indigo-600 text-center"><input type="number"
                            v-model.number="ficha.meTotal" readonly
                            class="w-full text-center outline-none bg-transparent"></td>
                </tr>
                <tr class="hover:bg-indigo-50/30 transition-colors">
                    <td class="py-3 px-4 text-sm font-bold text-slate-700">Presença (Pr)</td>
                    <td><input type="number" v-model.number="ficha.prPot"
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.prTemp"
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.prBonus" readonly
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.prRacial" readonly
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.prEspecial"
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td class="font-bold text-indigo-600 text-center"><input type="number"
                            v-model.number="ficha.prTotal" readonly
                            class="w-full text-center outline-none bg-transparent"></td>
                </tr>
                <tr class="hover:bg-indigo-50/30 transition-colors">
                    <td class="py-3 px-4 text-sm font-bold text-slate-700">Rapidez (Qu)</td>
                    <td><input type="number" v-model.number="ficha.quPot"
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.quTemp"
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.quBonus" readonly
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.quRacial" readonly
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.quEspecial"
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td class="font-bold text-indigo-600 text-center"><input type="number"
                            v-model.number="ficha.quTotal" readonly
                            class="w-full text-center outline-none bg-transparent"></td>
                </tr>
                <tr class="hover:bg-indigo-50/30 transition-colors">
                    <td class="py-3 px-4 text-sm font-bold text-slate-700">Raciocínio (Re)</td>
                    <td><input type="number" v-model.number="ficha.rePot"
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.reTemp"
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.reBonus" readonly
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.reRacial" readonly
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.reEspecial"
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td class="font-bold text-indigo-600 text-center"><input type="number"
                            v-model.number="ficha.reTotal" readonly
                            class="w-full text-center outline-none bg-transparent"></td>
                </tr>
                <tr class="hover:bg-indigo-50/30 transition-colors">
                    <td class="py-3 px-4 text-sm font-bold text-slate-700">Autodisciplina (SD)</td>
                    <td><input type="number" v-model.number="ficha.sdPot"
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.sdTemp"
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.sdBonus" readonly
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.sdRacial" readonly
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.sdEspecial"
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td class="font-bold text-indigo-600 text-center"><input type="number"
                            v-model.number="ficha.sdTotal" readonly
                            class="w-full text-center outline-none bg-transparent"></td>
                </tr>
                <tr class="hover:bg-indigo-50/30 transition-colors">
                    <td class="py-3 px-4 text-sm font-bold text-slate-700">Força (St)</td>
                    <td><input type="number" v-model.number="ficha.stPot"
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.stTemp"
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.stBonus" readonly
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.stRacial" readonly
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td><input type="number" v-model.number="ficha.stEspecial"
                            class="w-full text-center outline-none bg-transparent"></td>
                    <td class="font-bold text-indigo-600 text-center"><input type="number"
                            v-model.number="ficha.stTotal" readonly
                            class="w-full text-center outline-none bg-transparent"></td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { FichaPersonagem } from '../types/Ficha';

export default defineComponent({
    name: 'FichaAtributos',
    props: {
        ficha: {
            type: Object as PropType<FichaPersonagem>,
            required: true
        }
    }
});
</script>