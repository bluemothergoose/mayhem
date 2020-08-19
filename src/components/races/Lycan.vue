
<template>
  <div>
    <div class="row text-left justify-content-center">
      <div class="col-12 col-md-10 col-xl-8 rules">
        <h1 class="my-4">Lycan Race Info<img :src="require('@/assets/images/icons/menu/lycan.png')"/></h1>
          Lycans are shapechangers with at least two forms, that of a humanoid and that of a particular kind of animal-human hybrid.  
          <br/>Lycans exist due to the following reasons:
          <ul>
            <li>Infection chance from the Lycan virus through a bite or scratch</li>
            <li>From a magical item/effect (which makes them unable to transmit the virus)</li>
            <li>By inheriting it from their parents who were also Lycans</li>
          </ul>
      </div>
    </div>
    <div class="row text-left justify-content-center">
      <div class="col-6 col-sm-3 col-md-3 col-xl-2">
        <img :src="require('@/assets/images/races/lycan.png')" alt="lycan" class="race-pic" style=""/>
      </div>
      <div class="col-12 col-sm-10 col-md-7 col-xl-6">
        <h1 class="my-4">Lycan Stat Costs</h1>
        <table class="race-table">
          <th>Stat/Skill</th>
          <th>Cost Per Rank</th>
          <tr>
            <td>Base Stats</td>
            <td>2,000 XP</td>
          </tr>
          <tr>
            <td>Combat Skills</td>
            <td>3,000 XP</td>
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
            <td>+4 Max MP</td>
            <td>3,000 XP</td>
          </tr>
          <tr>
            <td>Knowledges</td>
            <td>4,000 XP</td>
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
        <h1 class="my-4">Lycan Starting Stats</h1>
          <table class="race-table">
          <th>Stat/Skill</th>
          <th>Starting Value</th>
          <tr>
            <td>Base HP - Human Form</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Base SP</td>
            <td>60</td>
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
            <td>0</td>
          </tr>
          <tr>
            <td>Base NEP</td>
            <td>
              Human Form: 1
              <br/>
              Lycan Form: 2
            </td>
          </tr>
          <tr>
            <td>Base HP Regen</td>
            <td>
              Human Form: +1/round
              <br/>
              Lycan Form: +2/round
            </td>
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
            <td>
              Human Form: Medium 
              <br/> 
              Lycan Form: Large
            </td>
          </tr>
          <tr>
            <td>Vision</td>
            <td>
              Human Form: Low Light Vision
              <br/>
              Lycan Form: Darkvision
            </td>
          </tr>
          <tr>
            <td>Move Speed</td>
            <td>
              Human Form: 30 feet/move
              <br/>
              Lycan Form: 40 feet/move
            </td>
          </tr>
          <tr>
            <td>Jump</td>
            <td>
              Human Form: 10 feet
              <br/>
              Lycan Form: x2
            </td>
          </tr>
          <tr>
            <td>Lift/Push/Drag Power</td>
            <td>
              Human Form: 50 lbs + 15 lbs per Strength
              <br/>
              Lycan Form: 70 lbs + 20 lbs per Strength
            </td>
          </tr>
          <tr>
            <td>Immunities</td>
            <td>
              <ul>
                <li>Virus</li>
                <li>Disease</li>
                <li>Poison</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Weaknesses</td>
            <td>
              x2 damage from Silver
            </td>
          </tr>
          <tr>
            <td>Special Conditions for Death</td>
            <td>
              <ul>
                <li>Decapitation</li>
                <li>Silver stake through the heart</li>
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
        <h1 class="my-4">Lycan Abilities</h1>
        <ul>
          <li>Claw Attack
            <ul>
              <li>Deals 1d12 Slashing Damage</li>
              <li>9 Miss</li>
              <li>19 Crit</li>
            </ul>
          </li>
          <li>Bite Attack
            <ul>
              <li>Deals 1d12 Piercing Damage at x2 Strength</li>
              <li>11 Miss</li>
              <li>20 Crit</li>
            </ul>
          </li>
          <li>Lycan Transformation
            <ul>
              <li>Costs 20 SP for 3 rounds</li>
              <li>Focus DC: 7</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="row text-left justify-content-center" style="margin-bottom: 30px;">
      <div class="col-12 col-md-10 col-xl-8 rules">
        <h1 class="my-4">Lycan Specializations</h1>
        <p>
          Feral Lycan - (Can be selected during character creation)
          <ul>
            <li>+20 Max HP | +2 HP regen | +3 NEP</li>
            <li>+2 Unarmed | +2 Melee</li>
            <li>Bite and Claw attack crit threat range is 18-20</li>
            <li>Grants Feral Transformation</li>
          </ul>
        </p>
        <p>
          Elemental Lycan - (Can be selected during character creation)
          <ul>
            <li>+40 Max SP | +6 Max MP | +3 Magic Resistance</li>
            <li>+2 Focus</li>
            <li>Gain a Life Element, Life Element Transformation and immunity to that element while transformed</li>
            <li>Add +1d6 Life Element damage to all natural melee attacks during Life Element Transformation</li>
            <li>Grants Bolt Spell Rank 1 and Caster Proficiency Rank 1 of your Life Element</li>
          </ul>
        </p>
        <p>
          Summoner Lycan - (Can be selected during character creation)
          <ul>
            <li>+40 Max SP | +10 Max MP</li>
            <li>+2 Focus | +2 Control</li>
            <li>Gain immunity to Mind Control</li>
            <li>Grants Summon Beast Rank 1, Summoner Transformation and Summoner Caster Proficiency Rank 1</li>
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
  name: 'LycanPage',
  props: {
    app: Object
  },
  computed: {
  }
}
</script>
