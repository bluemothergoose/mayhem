
<template>
  <div>
    <div class="row text-left justify-content-center">
      <div class="col-12 col-md-10 col-xl-8 rules">
        <h1 class="my-4">Angel Race Info<img :src="require('@/assets/images/icons/menu/angel.png')"/></h1>
          <p>
            Celestial creatures that embody light and goodness. They are traditional enemies of all manner of demons and serve as warriors of the divine.
          </p>
      </div>
    </div>
    <div class="row text-left justify-content-center">
      <div class="col-6 col-sm-3 col-md-3 col-xl-2">
        <img :src="require('@/assets/images/races/angel.png')" alt="angel" class="race-pic" style=""/>
      </div>
      <div class="col-12 col-sm-10 col-md-7 col-xl-6">
        <h1 class="my-4">Angel Stat Costs</h1>
        <table class="race-table">
          <th>Stat/Skill</th>
          <th>Cost Per Rank</th>
          <tr>
            <td>Base Stats</td>
            <td>3,000 XP</td>
          </tr>
          <tr>
            <td>Combat Skills</td>
            <td>4,000 XP</td>
          </tr>
          <tr>
            <td>Feats</td>
            <td>3,000 XP</td>
          </tr>
          <tr>
            <td>Abilities</td>
            <td>2,000 XP</td>
          </tr>
          <tr>
            <td>+5 Max HP</td>
            <td>3,000 XP</td>
          </tr>
          <tr>
            <td>+20 Max SP</td>
            <td>2,000 XP</td>
          </tr>
          <tr>
            <td>+4 Max MP</td>
            <td>2,000 XP</td>
          </tr>
          <tr>
            <td>+2 Max CP</td>
            <td>3,000 XP</td>
          </tr>
          <tr>
            <td>Knowledges</td>
            <td>3,000 XP</td>
          </tr>
          <tr>
            <td>Adventuring Skills</td>
            <td>4,000 XP (per 2 ranks)</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="row text-left justify-content-center">
      <div class="col-12 col-md-10 col-xl-8 rules">
        <h1 class="my-4">Angel Starting Stats</h1>
          <table class="race-table">
          <th>Stat/Skill</th>
          <th>Starting Value</th>
          <tr>
            <td>Base HP</td>
            <td>40</td>
          </tr>
          <tr>
            <td>Base SP</td>
            <td>40</td>
          </tr>
          <tr>
            <td>Base MP</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Base DP</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Base CP</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Base NEP</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Base HP Regen</td>
            <td>+2/round</td>
          </tr>
          <tr>
            <td>Starting Feats</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Starting Knowledges</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Size Category</td>
            <td>Medium</td>
          </tr>
          <tr>
            <td>Vision</td>
            <td>
              <ul>
                <li>Darkvision</li>
                <li>SP Vision (30 feet)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Move Speed</td>
            <td>35 feet/move</td>
          </tr>
          <tr>
            <td>Jump</td>
            <td>x2 or x3 with Wings (and grants Flying)</td>
          </tr>
          <tr>
            <td>Lift/Push/Drag Power</td>
            <td>60 lbs + 15 lbs per Strength</td>
          </tr>
          <tr>
            <td>Immunities</td>
            <td>
              <ul>
                <li>Virus</li>
                <li>Disease</li>
                <li>Poison</li>
                <li>Space</li>
                <li>Celestial</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Weaknesses</td>
            <td>
              x2 damage from Hellfire and Demonic Energy
            </td>
          </tr>
          <tr>
            <td>Special Conditions for Death</td>
            <td>
              <ul>
                <li>Decapitation</li>
                <li>Disintegration</li>
                <li>Max HP reduced to 0</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="row text-left justify-content-center">
      <div class="col-12 col-md-10 col-xl-8 rules">
        <h1 class="my-4">Angel Abilities</h1>
        <p>
          All Angels can learn Summon Monster, Summoner Caster Proficiency and Celestial Caster Proficiency
        </p>
      </div>
    </div>
    <div class="row text-left justify-content-center" style="margin-bottom: 30px;">
      <div class="col-12 col-md-10 col-xl-8 rules">
        <h1 class="my-4">Angel Specializations</h1>
        <p>
          Archangel - (Cannot be selected during character creation)
          <ul>
            <li>+3 HP Regen | +3 Magic Resistance | +3 NEP</li>
            <li>Can now only die from decapitation by a legendary weapon or having their Max HP reduced to 0</li>
          </ul>
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.rules > h2 {
  margin-top: 20px;
}


</style>

<script>
export default {
  name: 'AngelPage',
  props: {
    app: Object
  },
  computed: {
  }
}
</script>
