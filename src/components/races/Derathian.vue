
<template>
  <div>
    <div class="row text-left justify-content-center">
      <div class="col-12 col-md-10 col-xl-8 rules">
        <h1 class="my-4">Derathian Race Info<img :src="require('@/assets/images/icons/menu/derathian.png')"/></h1>
          <p>
            Large and stocky humanoid creatures that strive for battle and conquest. The Derathians splintered into Loyalist and Rogue factions during their galactic conquests and have been at war with each other ever since. They will crush anything in the way of their goals.
          </p>
      </div>
    </div>
    <div class="row text-left justify-content-center">
      <div class="col-6 col-sm-3 col-md-3 col-xl-2">
        <img :src="require('@/assets/images/races/derathian.png')" alt="derathian" class="race-pic" style=""/>
      </div>
      <div class="col-12 col-sm-10 col-md-7 col-xl-6">
        <h1 class="my-4">Derathian Stat Costs</h1>
        <table class="race-table">
          <th>Stat/Skill</th>
          <th>Cost Per Rank</th>
          <tr>
            <td>Base Stats</td>
            <td>2,000 XP</td>
          </tr>
          <tr>
            <td>Combat Skills</td>
            <td>2,000 XP</td>
          </tr>
          <tr>
            <td>Feats</td>
            <td>3,000 XP</td>
          </tr>
          <tr>
            <td>Abilities</td>
            <td>3,000 XP</td>
          </tr>
          <tr>
            <td>+5 Max HP</td>
            <td>3,000 XP</td>
          </tr>
          <tr>
            <td>+20 Max SP</td>
            <td>3,000 XP</td>
          </tr>
          <tr>
            <td>Knowledges</td>
            <td>4,000 XP</td>
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
        <h1 class="my-4">Derathian Starting Stats</h1>
          <table class="race-table">
          <th>Stat/Skill</th>
          <th>Starting Value</th>
          <tr>
            <td>Base HP</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Base SP</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Base MP</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Base DP</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Base CP</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Base NEP</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Base HP Regen</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Starting Feats</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Starting Knowledges</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Size Category</td>
            <td>Large</td>
          </tr>
          <tr>
            <td>Vision</td>
            <td>Darkvision</td>
          </tr>
          <tr>
            <td>Move Speed</td>
            <td>40 feet/move</td>
          </tr>
          <tr>
            <td>Jump</td>
            <td>x2</td>
          </tr>
          <tr>
            <td>Lift/Push/Drag Power</td>
            <td>80 lbs + 25 lbs per Strength</td>
          </tr>
          <tr>
            <td>Immunities</td>
            <td>Virus</td>
          </tr>
          <tr>
            <td>Weaknesses</td>
            <td>x2 damage from Demonic Energy</td>
          </tr>
          <tr>
            <td>Special Conditions for Death</td>
            <td>None</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="row text-left justify-content-center" style="margin-bottom: 30px;">
      <div class="col-12 col-md-10 col-xl-8 rules">
        <h1 class="my-4">Derathian Specializations</h1>
        <p>
          Loyal Derathians - (Can be selected during character creation)
          <ul>
            <li>Start with a Derathian Weapon Band and access to Loyal Derathian abilities</li>
            <li>Gain a Life Element</li>
          </ul>
        </p>
        <p>
          Rogue Derathians - (Can be selected during character creation)
          <ul>
            <li>No access to Loyal Derathian abilities</li>
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
  name: 'DerathianPage',
  props: {
    app: Object
  },
  computed: {
  }
}
</script>
