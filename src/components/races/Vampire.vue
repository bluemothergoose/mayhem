
<template>
  <div>
    <div class="row text-left justify-content-center">
      <div class="col-12 col-md-10 col-xl-8 rules">
        <h1 class="my-4">Vampire Race Info<img :src="require('@/assets/images/icons/menu/vampire.png')"/></h1>
          A type of undead creature that feeds on blood. They are one of the most feared and powerful undead creatures. Vampires do not cast shadows and have no reflections in mirrors. They enjoy engaging in decadent behavior, much like liches. Vampires drain blood and life energy and are proficient in blood magic.
          <br/>Vampires exist due to the following reasons:
          <ul>
            <li>Infection from the Vampirism virus by having their blood drained completely</li>
            <li>From a magical item/effect (which makes them unable to transmit the virus)</li>
            <li>Half-Vampires can be created if a Vampire breeds with a Human</li>
          </ul>
      </div>
    </div>
    <div class="row text-left justify-content-center">
      <div class="col-6 col-sm-3 col-md-3 col-xl-2">
        <img :src="require('@/assets/images/races/vampire.png')" alt="vampire" class="race-pic" style=""/>
      </div>
      <div class="col-12 col-sm-10 col-md-7 col-xl-6">
        <h1 class="my-4">Vampire Stat Costs</h1>
        <table class="race-table">
          <th>Stat/Skill</th>
          <th>Cost Per Rank</th>
          <tr>
            <td>Base Stats</td>
            <td>3,000 XP</td>
          </tr>
          <tr>
            <td>Combat Skills</td>
            <td>3,000 XP</td>
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
            <td>3,000 XP</td>
          </tr>
          <tr>
            <td>+4 Max MP</td>
            <td>2,000 XP</td>
          </tr>
          <tr>
            <td>Knowledges</td>
            <td>2,000 XP</td>
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
        <h1 class="my-4">Vampire Starting Stats</h1>
          <table class="race-table">
          <th>Stat/Skill</th>
          <th>Starting Value</th>
          <tr>
            <td>Base HP</td>
            <td>35</td>
          </tr>
          <tr>
            <td>Base SP</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Base MP</td>
            <td>8</td>
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
            <td>+1/round</td>
          </tr>
          <tr>
            <td>Starting Feats</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Starting Knowledges</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Size Category</td>
            <td>Medium</td>
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
            <td>55 lbs + 20 lbs per Strength</td>
          </tr>
          <tr>
            <td>Immunities</td>
            <td>
              <ul>
                <li>Virus</li>
                <li>Disease</li>
                <li>Poison</li>
                <li>Space</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Weaknesses</td>
            <td>
              <ul>
                <li>5% damage to Max HP for every round in sunlight</li>
                <li>x2 damage from Celestial, Silver and Blue Fire</li>
                <li>x4 damage from UV and Sunlight abilities</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Special Conditions for Death</td>
            <td>
              <ul>
                <li>Decapitation</li>
                <li>Wooden stake through the heart</li>
                <li>Disintegration</li>
                <li>Prolonged exposure to sunlight</li>
                <li>Max HP reduced to 0</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="row text-left justify-content-center" style="margin-bottom: 30px;">
      <div class="col-12 col-md-10 col-xl-8 rules">
        <h1 class="my-4">Vampire Specializations</h1>
        <p>
          Ancient Vampires - (10% chance during character creation to be Ancient)
          <ul>
            <li>+1 HP regen | +2 Magic Resistance</li>
            <li>+2 Control | +2 Focus</li>
            <li>Can no longer die to decapitation</li>
            <li>Sunlight no longer reduces Max HP</li>
            <li>Unlocks sorcerer spells</li>
          </ul>
        </p>
        <p>
          Old One Vampires - (Cannot be selected during character creation)
          <ul>
            <li>+3 HP regen | +3 NEP | +3 Magic Resistance</li>
            <li>No longer weak to silver</li>
            <li>Can only die by piercing heart with iron or oak</li>
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
  name: 'VampirePage',
  props: {
    app: Object
  },
  computed: {
  }
}
</script>
