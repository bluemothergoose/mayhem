
<template>
  <div>
    <div class="row text-left justify-content-center">
      <div class="col-12 col-md-10 col-xl-8 rules">
        <h1 class="my-4">Saitorian Race Info<img :src="require('@/assets/images/icons/menu/saitorian.png')"/></h1>
          <p>
            An ancient race of scholarly and magically adept feline-human hybrids. They possess vast amounts of knowledge on most topics and have tried to stay mostly neutral and hidden away from the public eye until recently as the Derathian and Demon conflict becomes more prevalent and dangerous. Saitorians have recently learned to harness the powers of the demons from the Demon dimension to enhance their melee combat skills.
          </p>
      </div>
    </div>
    <div class="row text-left justify-content-center">
      <div class="col-6 col-sm-3 col-md-3 col-xl-2">
        <img :src="require('@/assets/images/races/saitorian.png')" alt="saitorian" class="race-pic" style=""/>
      </div>
      <div class="col-12 col-sm-10 col-md-7 col-xl-6">
        <h1 class="my-4">Saitorian Stat Costs</h1>
        <table class="race-table">
          <th>Stat/Skill</th>
          <th>Cost Per Rank</th>
          <tr>
            <td>Base Stats</td>
            <td>3,000 XP</td>
          </tr>
          <tr>
            <td>Combat Skills</td>
            <td>2,000 XP</td>
          </tr>
          <tr>
            <td>Feats</td>
            <td>4,000 XP</td>
          </tr>
          <tr>
            <td>Abilities</td>
            <td>3,000 XP</td>
          </tr>
          <tr>
            <td>+5 Max HP</td>
            <td>4,000 XP</td>
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
            <td>+2 Max CP/DP</td>
            <td>3,000 XP</td>
          </tr>
          <tr>
            <td>Knowledges</td>
            <td>3,000 XP</td>
          </tr>
          <tr>
            <td>Adventuring Skills</td>
            <td>3,000 XP (per 2 ranks)</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="row text-left justify-content-center">
      <div class="col-12 col-md-10 col-xl-8 rules">
        <h1 class="my-4">Saitorian Starting Stats</h1>
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
            <td>2</td>
          </tr>
          <tr>
            <td>Starting Knowledges</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Size Category</td>
            <td>Medium</td>
          </tr>
          <tr>
            <td>Vision</td>
            <td>Low Light Vision</td>
          </tr>
          <tr>
            <td>Move Speed</td>
            <td>35 feet/move</td>
          </tr>
          <tr>
            <td>Jump</td>
            <td>x2</td>
          </tr>
          <tr>
            <td>Lift/Push/Drag Power</td>
            <td>40 lbs + 15 lbs per Strength</td>
          </tr>
          <tr>
            <td>Immunities</td>
            <td>
              <ul>
                <li>Virus</li>
                <li>Disease</li>
              </ul>
            </td>
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
        <h1 class="my-4">Saitorian Specializations</h1>
        <p>
          Fury Saitorians - (Can be selected during character creation)
          <ul>
            <li>+10 Max HP | +40 Max SP | +2 NEP</li>
            <li>+2 Melee | +2 Focus</li>
            <li>HP Cost reduced by -1,000</li>
            <li>Unlocks DP Energy</li>
          </ul>
        </p>
        <p>
          Caster Saitorians - (Can be selected during character creation)
          <ul>
            <li>+12 Max MP</li>
            <li>+2 Control | +2 Focus</li>
            <li>Caster Proficiency Feat Cost reduced by -1,000</li>
            <li>Unlocks CP Energy | Celestial Spells | Caster Shell Forging</li>
            <li>Grants Caster Shell Forging Knowledge</li>
            <li>Grants 1 Free Spell/Ability</li>
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
  name: 'SaitorianPage',
  props: {
    app: Object
  },
  computed: {
  }
}
</script>
