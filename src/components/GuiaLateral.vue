<template>
    <aside
        class="fixed left-0 top-0 h-screen w-52 lg:w-64 bg-slate-800 text-slate-300 shadow-xl z-50 flex flex-col transition-transform overflow-hidden">
        <div
            class="p-4 bg-indigo-600 text-white font-bold uppercase tracking-widest text-sm flex justify-between items-center">
            <span>Compendio</span>
        </div>

        <div class="flex-1 overflow-y-auto custom-scrollbar">
            <div v-for="(itens, categoria) in compendio" :key="categoria" class="border-b border-slate-800">
                <button @click="toggleCategoria(categoria)"
                    class="w-full px-4 py-3 flex justify-between items-center hover:bg-slate-900 transition-colors text-left font-semibold text-sm uppercase"
                    :class="{ 'text-indigo-400 font-bold bg-slate-800': catAberta === categoria }">
                    {{ categoria }}
                    <span class="text-base">{{ catAberta === categoria ? '-' : '+' }}</span>
                </button>

                <div v-if="catAberta === categoria" class="bg-slate-950 py-2">
                    <button v-for="item in itens" :key="item.nome" @click="abrirModal(item)"
                        class="w-full px-6 py-2 text-left text-sm hover:text-white hover:bg-indigo-950 transition-colors">
                        {{ item.nome }}
                    </button>
                </div>
            </div>
        </div>

        <div v-if="itemSelecionado"
            class="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
            <div
                class="bg-white text-slate-800 rounded-xl max-w-4xl w-full max-h-[80vh] overflow-hidden flex flex-col shadow-2xl">
                <div class="p-6 border-b border-slate-200 flex justify-between items-center bg-slate-50">
                    <h2 class="text-2xl font-bold text-indigo-700">{{ itemSelecionado.nome }}</h2>
                    <button @click="itemSelecionado = null"
                        class="text-slate-600 hover:text-red-500 text-3xl">&times;</button>
                </div>
                <div class="p-8 flex flex-col itens-center overflow-y-auto">
                    <p class="leading-relaxed whitespace-pre-line text-justify mb-6 text-slate-600 italic border-l-4 border-indigo-200 pl-4">
                        {{ itemSelecionado.descricao }}
                    </p>
                    <div v-if="itemSelecionado.images" class="grid" :class="itemSelecionado.images.length > 1 ? 'grid-cols-2 gap-4' : 'grid-cols-1'">
                        <img  v-for="image in itemSelecionado.images" :src="image" alt="Imagem" class="mb-6 mx-auto rounded-lg border border-indigo-200">

                    </div>
                    <div v-if="itemSelecionado.detalhes" class="grid grid-cols-2 gap-4">
                        <div v-for="(val, key) in itemSelecionado.detalhes" :key="key"
                            class="bg-slate-50 text-justify p-3 rounded-lg border border-slate-100">
                            <span class="block text-sm font-bold text-slate-500 uppercase">{{ key }}</span>
                            <span class="font-medium whitespace-pre-line">{{ val }}</span>
                        </div>
                    </div>
                </div>
                <div class="p-4 bg-slate-50 text-right">
                    <button @click="itemSelecionado = null"
                        class="px-6 py-2 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-colors">Fechar</button>
                </div>
            </div>
        </div>
    </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { COMPENDIUM_DATA, type CompendiumItem } from '../utils/compendium';

export default defineComponent({
    data() {
        return {
            compendio: COMPENDIUM_DATA,
            catAberta: null as string | null,
            itemSelecionado: null as CompendiumItem | null
        };
    },
    methods: {
        toggleCategoria(cat: string) {
            this.catAberta = this.catAberta === cat ? null : cat;
        },
        abrirModal(item: CompendiumItem) {
            this.itemSelecionado = item;
        }
    }
});
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
    width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: #0f172a;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #334155;
    border-radius: 10px;
}
</style>