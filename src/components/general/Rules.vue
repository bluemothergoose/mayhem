
<template>
  <div class="row text-left justify-content-center">
    <div class="col-12 col-md-10 col-xl-8 rules">
      <h1 class="my-4">Rules<img :src="require('@/assets/images/icons/menu/rules.png')"/></h1>
      <h1>Purchasing Stats/Skills</h1>
      <p>This is for Adventuring Skills, Combat Skills and Base Stats
        <ul>
          <li>For Ranks 1-5: Base Cost</li>
          <li>For Ranks 6-7: Base Cost + 1,000</li>
          <li>For Ranks 8-9: Base Cost + 2,000</li>
          <li>For Ranks 10-12: Base Cost + 3,000</li>
          <li>For Ranks 13-15: Base Cost + 4,000</li>
          <li>For Ranks 16-18: Base Cost + 5,000</li>
          <li>For Ranks 19-20: Base Cost + 6,000</li>
        </ul>
      </p>
      <h1>Learning Spells</h1>
      <p>In order to learn a spell in a certain school of magic, you must first learn the requisite caster level and all prerequisites. To obtain a higher rank of a spell, you must first get the caster level of the same rank. This stops applying once you get Caster Level 9 for that school of magic.</p>
      <p>For example: If you want to learn Fire Bolt Rank 2, you must first get Fire Caster Level 2. If you want to learn Fire Ball Rank 6, you must first get Fire Caster Level 6.
      <h1>Purchasing Spells</h1>
      <p>Base ability cost for purchasing spells. (-1,000 XP for Sorcerers)</p>
      <h1>Casting Spells</h1>
      <p>First you must roll a d20 to determine if your spellcast is successful. Add your Focus bonus to the result of the roll and any other bonuses. If that value exceeds the Focus DC on the spell, the cast is successful. If the spell is ranged, subtract 1/2 of the target's agility from your total roll, if it still exceeds the Focus DC it hits the target, if not, the spell misses the target.</p>
      <p>Cast range = 15 feet x 5 per Focus</p>
      <ul><u>Example Scenario</u>
        <li>Fire Bolt Rank 1 Focus DC: 10</li>
        <li>You make a d20 roll. Your d20 Roll = 8</li>
        <li>Add your Focus bonus, which is 3, to your roll. 3 + 8 = 11</li>
        <li>Subtract 1/2 of the target's agility, in this case 0</li>
        <li>Your total score would be 8 + 3 - 0 = 11. Since 11 > 10 the spell hits the target.</li>
      </ul>
      <h1>Focus & Damage</h1>
      <p>For caster levels 1 - 3 of a certain school of magic, spellcasters may add 1/2 of their Focus to their damage.</p>
      <p>For caster levels 4 and up or a certain school of magic, spellcasters may add their full Focus to their damage.</p>
      <p>This applies for each individual school of magic you know. Getting to caster level 4 of fire does not allow you to apply your full Focus to a wind attack.</p>
    </div>
  </div>
</template>
<style>
.rules > h2 {
  margin-top: 20px;
}
.caster {
  color: #32a8a6;
}
</style>
<script>

export default {
  name: 'RulesPage',
  props: {
    app: Object
  },
  computed: {
  }
}
</script>
