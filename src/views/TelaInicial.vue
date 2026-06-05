<template>
    <div class="bg-slate-100 min-h-screen py-12 px-6 flex flex-col items-center">
        <div class="max-w-4xl w-full space-y-8">

            <div class="text-center space-y-2">
                <h1 class="text-4xl font-extrabold text-slate-800 tracking-tight">Gerenciador de Personagens</h1>
                <p class="text-slate-500">Crie, gerencie e salve as suas fichas de RPG localmente.</p>
            </div>

            <div class="flex justify-end">
                <button @click="criarNovaFicha"
                    class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                    Criar Nova Ficha
                </button>
            </div>

            <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div class="bg-slate-800 px-6 py-4">
                    <h2 class="text-lg font-bold text-white uppercase tracking-wider">Seus Personagens</h2>
                </div>

                <div v-if="fichasSalvas.length === 0" class="p-12 text-center text-slate-400 space-y-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto stroke-current text-slate-300"
                        fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p class="font-medium text-slate-500">Nenhum personagem encontrado.</p>
                    <p class="text-sm">Clique em "Criar Nova Ficha" para começar sua jornada.</p>
                </div>

                <ul v-else class="divide-y divide-slate-100">
                    <li v-for="f in fichasSalvas" :key="f.id"
                        class="p-6 hover:bg-slate-50 transition-colors flex items-center justify-between">
                        <div class="space-y-1 cursor-pointer flex-1" @click="abrirFicha(f.id)">
                            <h3 class="text-xl font-bold text-slate-700">{{ f.nomePersonagem || 'Personagem sem Nome' }}
                            </h3>
                            <div class="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
                                <span><strong class="text-slate-600">Nível:</strong> {{ f.nivel }}</span>
                                <span v-if="f.raca"><strong class="text-slate-600">Raça:</strong> {{ f.raca }}</span>
                                <span v-if="f.profissao"><strong class="text-slate-600">Classe:</strong> {{ f.profissao
                                    }}</span>
                                <span v-if="f.campanha"><strong class="text-slate-600">Campanha:</strong> {{ f.campanha
                                    }}</span>
                            </div>
                        </div>

                        <div class="flex items-center gap-3">
                            <button @click="abrirFicha(f.id)"
                                class="text-indigo-600 hover:text-indigo-800 font-bold text-sm px-4 py-2 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-colors">
                                Editar
                            </button>
                            <button @click="deletarFicha(f.id)"
                                class="text-red-600 hover:text-red-800 font-bold text-sm px-4 py-2 rounded-lg bg-red-50 hover:bg-red-100 transition-colors">
                                Excluir
                            </button>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface ResumoFicha {
    id: string;
    nomePersonagem: string;
    nivel: number;
    raca: string;
    profissao: string;
    campanha: string;
}

export default defineComponent({
    name: 'TelaInicial',
    data() {
        return {
            fichasSalvas: [] as ResumoFicha[]
        };
    },
    mounted() {
        this.carregarFichas();
    },
    methods: {
        carregarFichas() {
            const bancoGeral = localStorage.getItem('rpg_fichas_index');
            if (bancoGeral) {
                this.fichasSalvas = JSON.parse(bancoGeral);
            }
        },
        criarNovaFicha() {
            const novaId = crypto.randomUUID();
            // Envia para a rota da ficha com ID 'nova' ou com a ID gerada
            this.$router.push({ name: 'ficha', params: { id: novaId } });
        },
        abrirFicha(id: string) {
            this.$router.push({ name: 'ficha', params: { id } });
        },
        deletarFicha(id: string) {
            if (confirm('Tem certeza que deseja excluir esta ficha permanentemente?')) {
                // Remove a ficha específica
                localStorage.removeItem(`rpg_ficha_${id}`);

                // Atualiza o índice global
                this.fichasSalvas = this.fichasSalvas.filter(f => f.id !== id);
                localStorage.setItem('rpg_fichas_index', JSON.stringify(this.fichasSalvas));
            }
        }
    }
});
</script>