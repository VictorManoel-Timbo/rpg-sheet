import FichaAtributos from "@/components/FichaAtributos.vue";
import FichaHeader from '@/components/FichaHeader.vue';
import FichaPerfil from '@/components/FichaPerfil.vue';
import FichaDefesa from '@/components/FichaDefesa.vue';
import FichaStatus from '@/components/FichaStatus.vue';
import FichaTestes from '@/components/FichaTestes.vue';
import FichaCombate from '@/components/FichaCombate.vue';
import FichaEquipamentos from '@/components/FichaEquipamentos.vue';
import FichaPericias from '@/components/FichaPericias.vue';
import FichaItensMagicos from '@/components/FichaItensMagicos.vue';
import FichaTalentos from '@/components/FichaTalentos.vue';
import FichaFeitosForca from '@/components/FichaFeitosForca.vue';
import FichaMagias from '@/components/FichaMagias.vue';
import FichaMochila from '@/components/FichaMochila.vue';
import GuiaLateral from "@/components/GuiaLateral.vue";
import FichaNotas from "@/components/FichaNotas.vue";
import type { App } from "vue";

export default function setCompoent(app: App) {
    app.component("FichaAtributos", FichaAtributos),
    app.component("FichaCombate", FichaCombate),
    app.component("FichaDefesa", FichaDefesa),
    app.component("FichaEquipamentos", FichaEquipamentos),
    app.component("FichaFeitosForca", FichaFeitosForca),
    app.component("FichaHeader", FichaHeader),
    app.component("FichaItensMagicos", FichaItensMagicos),
    app.component("FichaMagias", FichaMagias),
    app.component("FichaMochila", FichaMochila),
    app.component("FichaPerfil", FichaPerfil),
    app.component("FichaPericias", FichaPericias),
    app.component("FichaStatus", FichaStatus),
    app.component("FichaTalentos", FichaTalentos),
    app.component("FichaTestes", FichaTestes),
    app.component("GuiaLateral", GuiaLateral),
    app.component("FichaNotas", FichaNotas)
}