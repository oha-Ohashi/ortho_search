<script setup lang="ts">
import * as vali from "../../my_scripts/vali"
import * as koku from "../../my_scripts/koku"
import * as search from "../../my_scripts/ts_ideal/search"
import { reactive, ref, watch } from 'vue'
const flag = reactive({
  mode_switch: 0,
  go_btn:false
})
const input = reactive({
  layout: "",
  text: ""
})
const warn = reactive({
  layout: "Please try presets first!",
  text: "Please input sentences for evaluation!"
})
const radio1 = ref()
const radio2 = ref()
const k = ref(0)
setInterval(() => {k.value += 1}, 10)
const onInputLayout = (e: any) => {
  input.layout = (e.target.value).replaceAll("\n", "")
  //const arg = (e.target.value).replaceAll("\n", "")
}
const onInputText = (e: any) => {
  input.text = (e.target.value).replaceAll("\n", "")
  //const arg = (e.target.value).replaceAll("\n", "")
}
watch(input, (newInput) => {
  const lat = vali.validationLayout(newInput.layout)
  warn.layout = lat
  const txt = vali.validationText(newInput.text)
  warn.text = txt
  flag.go_btn = (lat === "")
})
watch(radio1, (newRadio1) => {
  input.layout = newRadio1
  console.log(newRadio1)
})
watch(radio2, (newRadio2) => {
  input.text = newRadio2
})
const handleGo = () => {
  flag.mode_switch = 1
  generate_layouts(input.layout, input.text)
}
defineProps<{
  msg: string
}>()
////////////////////////////////////////////////
interface LayoutProps{
  result: string,
  position: number,
  movement: number,
  sum: number
}
const n_search = 10
const gened_layouts = ref<LayoutProps[]>([])
const generate_layouts = (layout: string, text: string) => {
  let s = new search.Search(layout, text)
  for(let i = 0; i < n_search; i++){
    setTimeout(() => {
    //new Promise(() => {
      s.doit()
      gened_layouts.value.push({
          result: s.result,
          position: s.calc.costs.position,
          movement: s.calc.costs.movement,
          sum: s.calc.cost_sum
      })
    }, 20)
    //})
  }
}
/*setInterval(() => {
  console.log(gened_layouts.value[0])
}, 1000)*/
watch(gened_layouts, (new_gened_layouts) => {
  console.log("change!!")
})
const handleSync = () => {
  console.log(gened_layouts.value)
}

let kk = new koku.Koku()

</script>

<template>
  <div v-if="flag.mode_switch === 0">
    <!--<h1>{{ msg }}</h1>-->
    <p>Layout: {{input.layout}}</p>
    <textarea class="area-layout form-control" :value="input.layout" @input="onInputLayout" cols="10" rows="3"></textarea>
    <div v-if="warn.layout!== ''" class="alert alert-danger">{{warn.layout}}</div>
    <div class="form-check form-check-inline">
      <input v-model="radio1" class="form-check-input" type="radio" name="radioName01" value="xxxx__xxxxxxxxxxxKxxxxxx__HJLx">
      <label class="form-check-label" for="inlineRadio1">Preset 1</label>
    </div>
    <div class="form-check form-check-inline">
      <input v-model="radio1" class="form-check-input" type="radio" name="radioName01" value="xxxxxxxxxxxxxxxxxxx_ZXCVxxx___">
      <label class="form-check-label" for="inlineRadio2">Preset 2</label>
    </div>
    
    <textarea class="mt-5 area-text form-control" :value="input.text" @input="onInputText" rows="12" maxlength="1000000"></textarea>
    <div v-if="warn.text!== ''" class="alert alert-danger">{{warn.text}}</div>
    <div class="form-check form-check-inline">
      <input v-model="radio2" class="form-check-input" type="radio" name="radioName02" value="It was on a dreary night of November that I beheld the accomplishment of my toils. With an anxiety that almost amounted to agony, I collected the instruments of life around me, that I might infuse a spark of being into the lifeless thing that lay at my feet. It was already one in the morning; the rain pattered dismally against the panes, and my candle was nearly burnt out, when, by the glimmer of the half-extinguished light, I saw the dull yellow eye of the creature open; it breathed hard, and a convulsive motion agitated its limbs.How can I describe my emotions at this catastrophe, or how delineate the wretch whom with such infinite pains and care I had endeavoured to form? His limbs were in proportion, and I had selected his features as beautiful. Beautiful! Great God! His yellow skin scarcely covered the work of muscles and arteries beneath; his hair was of a lustrous black, and flowing; his teeth of a pearly whiteness; but these luxuriances only formed a more horrid contrast with h konaida roan roan kun ni a xtu ta toki 、 maruzen no mise de 一 niti ni mannenhitu ga nani honi u reru daro u to tazu ne tara 、 roan kun ha oo i toki ha hyakumoto kurai de ru sou da to kota e ta 。 otto sore de ha 一 hon no mannenhitu ga dono kurai naga ku tuka eru daro u to ki i tara 、 konaida yokohama no mono de 、 pen ha mada ka nari da ga 、 ziku zi kuga he xtu ta kara ziku take dake kae kae te kure kure to i xtu te mo xtu te ki ta no ga aru ga 、 konohito ha 十三 nen mae ni 一 hon ka xtu ta giri de 、 sono 一 hon wo kyou made ta e zu siyou si te i ta no da to iu kara 、 kore kore ga maa itiban naga i rei rasii to hana si ta 。 si te mi ru to hutuu no baai de ha ikura zankoku ni tuka xtu te mo taitei 六七 nen no hosyou ha tu ke rareru no ga 、 ippan no mannenhitu no unmei rasii 。 一 hon de otto hodo sorehodo naga ku tuka eru mono ga hi ni hyakumoto mo de ru to i e ba mannenhitu wo zyuyou suru hito no hani ha hizyou na ikioi wo omonmi moxtu te hiro gari tutu aru to mi te mo manzara manzara kentoutiga">
      <label class="form-check-label" for="inlineRadio1">EN+JA</label>
    </div>
    <div class="form-check form-check-inline">
      <input v-model="radio2" class="form-check-input" type="radio" name="radioName02" value="It was on a dreary night of November that I beheld the accomplishment of my toils. With an anxiety that almost amounted to agony, I collected the instruments of life around me, that I might infuse a spark of being into the lifeless thing that lay at my feet. It was already one in the morning; the rain pattered dismally against the panes, and my candle was nearly burnt out, when, by the glimmer of the half-extinguished light, I saw the dull yellow eye of the creature open; it breathed hard, and a convulsive motion agitated its limbs.How can I describe my emotions at this catastrophe, or how delineate the wretch whom with such infinite pains and care I had endeavoured to form? His limbs were in proportion, and I had selected his features as beautiful. Beautiful! Great God! His yellow skin scarcely covered the work of muscles and arteries beneath; his hair was of a lustrous black, and flowing; his teeth of a pearly whiteness; but these luxuriances only formed a more horrid contrast with h">
      <label class="form-check-label" for="inlineRadio2">EN</label>
    </div>
    <div class="form-check form-check-inline">
      <input v-model="radio2" class="form-check-input" type="radio" name="radioName02" value="konaida roan roan kun ni a xtu ta toki 、 maruzen no mise de 一 niti ni mannenhitu ga nani honi u reru daro u to tazu ne tara 、 roan kun ha oo i toki ha hyakumoto kurai de ru sou da to kota e ta 。 otto sore de ha 一 hon no mannenhitu ga dono kurai naga ku tuka eru daro u to ki i tara 、 konaida yokohama no mono de 、 pen ha mada ka nari da ga 、 ziku zi kuga he xtu ta kara ziku take dake kae kae te kure kure to i xtu te mo xtu te ki ta no ga aru ga 、 konohito ha 十三 nen mae ni 一 hon ka xtu ta giri de 、 sono 一 hon wo kyou made ta e zu siyou si te i ta no da to iu kara 、 kore kore ga maa itiban naga i rei rasii to hana si ta 。 si te mi ru to hutuu no baai de ha ikura zankoku ni tuka xtu te mo taitei 六七 nen no hosyou ha tu ke rareru no ga 、 ippan no mannenhitu no unmei rasii 。 一 hon de otto hodo sorehodo naga ku tuka eru mono ga hi ni hyakumoto mo de ru to i e ba mannenhitu wo zyuyou suru hito no hani ha hizyou na ikioi wo omonmi moxtu te hiro gari tutu aru to mi te mo manzara manzara kentoutiga">
      <label class="form-check-label" for="inlineRadio2">JA</label>
    </div>
    <!--<span>Picked: {{radio1}}</span>-->
    <br>
    <button class="mt-3 btn btn-primary" v-if="flag.go_btn" @click="handleGo">Go</button>

  </div>
  <div v-if="flag.mode_switch === 1">
    <!--<button class="mt-3 btn btn-primary" @click="">Reset</button>-->
    <div class="show-cont">
    <div v-for="layout in gened_layouts" class="show-box">
      <div v-for="c in layout.result" class="show-c">
        {{c}}
      </div>
      <div class="props-cont">
        <p>{{layout.result}}</p>
        <p>Cost: <h4>{{layout.sum}}</h4></p>
        <p>(Position: {{layout.position}}, Movement: {{layout.movement}})</p>
      </div>
    </div>
    </div>
    <a href="./my01" class="mb-5">Reset</a>
  </div>
  <!--<p>{{kk.i}}</p>-->
  <div class="none">{{k}}  </div> 
</template>

<style scoped>
.area-layout{
  width: 9rem;
	height: 140px;
  overflow: hidden;
	font-family: 'Courier New', Courier, monospace;
	font-size: large;
  resize: none;
}
.show-cont{
  display: flex;
  flex-wrap: wrap;
}
.show-box{
  display: flex;
  flex-wrap: wrap;
  width: 392px;
  margin: 20px;
  padding: 20px;
  border: solid 1px black;
}
.show-c{
  font-size: 1.2rem;
  text-align: center;
  line-height: 31px;
  width: 31px;
  height: 31px;
  margin: 2px;
  border: solid 1px black;
  border-radius: 3px;
}
.props-cont p{
  margin-bottom: 3px;
}
.none{
  display: none;
}
</style>