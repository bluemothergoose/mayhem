
<template>
  <div>
    <div class="row text-left justify-content-center">
      <div class="col-12 col-md-10 col-xl-8 rules">
        <h1 class="my-4">Human Race Info<img :src="require('@/assets/images/icons/menu/human.png')"/></h1>
          <p>
            A relatively young race in the universe. They are very adaptable and capable creatures with enough experience but can succumb to things like old age and disease.
          </p>
      </div>
    </div>
    <div class="row text-left justify-content-center">
      <div class="col-6 col-sm-3 col-md-3 col-xl-2">
        <img :src="require('@/assets/images/races/human.png')" alt="human" class="race-pic" style=""/>
      </div>
      <div class="col-12 col-sm-10 col-md-7 col-xl-6">
        <h1 class="my-4">Human Stat Costs</h1>
        <table class="race-table">
          <th>Stat/Skill</th>
          <th>Cost Per Rank</th>
          <tr>
            <td>Base Stats</td>
            <td>4,000 XP</td>
          </tr>
          <tr>
            <td>Combat Skills</td>
            <td>3,000 XP</td>
          </tr>
          <tr>
            <td>Feats</td>
            <td>2,000 XP</td>
          </tr>
          <tr>
            <td>Abilities</td>
            <td>4,000 XP</td>
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
            <td>+4 Max MP</td>
            <td>3,000 XP</td>
          </tr>
          <tr>
            <td>+2 Max CP/DP</td>
            <td>4,000 XP</td>
          </tr>
          <tr>
            <td>Knowledges</td>
            <td>3,000 XP</td>
          </tr>
          <tr>
            <td>Adventuring Skills</td>
            <td>2,000 XP (per 2 ranks)</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="row text-left justify-content-center">
      <div class="col-12 col-md-10 col-xl-8 rules">
        <h1 class="my-4">Human Starting Stats</h1>
          <table class="race-table">
          <th>Stat/Skill</th>
          <th>Starting Value</th>
          <tr>
            <td>Base HP</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Base SP</td>
            <td>20</td>
          </tr>
          <tr>
            <td>Base MP</td>
            <td>4</td>
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
            <td>3</td>
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
            <td>Normal</td>
          </tr>
          <tr>
            <td>Move Speed</td>
            <td>30 feet/move</td>
          </tr>
          <tr>
            <td>Jump</td>
            <td>10 feet</td>
          </tr>
          <tr>
            <td>Lift/Push/Drag Power</td>
            <td>30 lbs + 10 lbs per Strength</td>
          </tr>
          <tr>
            <td>Immunities</td>
            <td>None</td>
          </tr>
          <tr>
            <td>Weaknesses</td>
            <td>None</td>
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
        <h1 class="my-4">Human Specializations</h1>
        <p>
          Attuned Human - (Can be selected during character creation)
          <ul>
            <li>+40 Max SP</li>
            <li>+2 Melee | +2 Unarmed | +2 Focus</li>
            <li>Spiritual Ability Cost reduced by -1,000</li>
            <li>Grants 2 free Feats and 1 free Ability</li>
          </ul>
        </p>
        <p>
          Summoner Human - (Can be selected during character creation)
          <ul>
            <li>+8 Max MP | +40 Max SP</li>
            <li>+2 Control | +2 Focus</li>
            <li>Spell Ability Cost reduced by -1,000</li>
            <li>Immunity to Mind Control</li>
            <li>Grants 1 free Knowledge</li>
          </ul>
        </p>
        <p>
          Sorcerer Human - (Can be selected during character creation)
          <ul>
            <li>+8 Max MP | +40 Max SP | +2 Magic Resistance</li>
            <li>+2 Focus</li>
            <li>Spell Ability Cost reduced by -1,000</li>
            <li>Unlocks Sorcerer spells</li>
            <li>Grants 1 free Knowledge</li>
          </ul>
        </p>
        <p>
          Tech Human - (Can be selected during character creation)
          <ul>
            <li>+10 Max HP</li>
            <li>+2 Marksmanship | +2 to any 2 Adventuring Skills</li>
            <li>Grants 2 free Feats and 2 free Knowledges</li>
          </ul>
        </p>
        <p>
          Holy Human - (Can be selected during character creation)
          <ul>
            <li>+8 Max MP | +2 Max CP</li>
            <li>+2 BioTech | +2 Focus</li>
            <li>Grants 3 free Knowledges and 1 free Spell/Ability</li>
            <li>Unlocks CP Energy and Celestial Spells</li>
          </ul>
        </p>
        <p>
          Cultist Human - (Can be selected during character creation)
          <ul>
            <li>+8 Max MP | +2 Max DP</li>
            <li>+2 Bluff | +2 Focus</li>
            <li>Grants 3 free Knowledges and 1 free Spell/Ability</li>
            <li>Unlocks DP Energy and Shadow and Blood Spells</li>
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
  name: 'HumanPage',
  props: {
    app: Object
  },
  computed: {
  }
}
</script>
