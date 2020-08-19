
<template>
  <div class="row text-left justify-content-center">
    <div class="col-12 col-md-10 col-xl-8 knowledges">
      <h1 class="my-4">Knowledges<img :src="require('@/assets/images/icons/menu/knowledges.png')"/></h1>
      <table>
        <!-- Header -->
        <tr>
          <th>Knowledge</th>
          <th>Bonus</th>
          <th>Effect(s)</th>
        </tr>
        <!-- Knowledges -->
        <tr>
          <td>Alchemy - Transmutation</td>
          <td>+1 to Transmute Checks</td>
          <td>Allows user to perform Alchemy <br>Can only be learned through a special source</td>
        </tr>
        <tr>
          <td>Alchemy - Fire</td>
          <td>+1 Damage with Alchemy Attacks</td>
          <td>Allows user to perform fire Alchemy attacks <br>Can only be learned through a special source</td>
        </tr>
        <tr>
          <td>Ancient</td>
          <td>+2 Damage against ancient creatures</td>
          <td>Allows Reading/Writing in some ancient languages. More capable of identifying ancient objects/creatures</td>
        </tr>
        <tr>
          <td>Armor Crafting</td>
          <td>+1 to Repair Checks when crafting armor</td>
          <td>Allows user to create and repair armor</td>
        </tr>
        <tr>
          <td>Ballistics</td>
          <td>+1 damage while using ballistic weapons</td>
          <td>User more capable of identifying ballistic objects</td>
        </tr>
        <tr>
          <td>Biological</td>
          <td>+1 damage against creatures made of flesh <br/>+2 bonus HP when performing a BioTech check</td>
          <td>More capable of identifying biological creatures and their weaknesses</td>
        </tr>
        <tr>
          <td>Celestial</td>
          <td>+1 damage against creatures of celestial origin</td>
          <td>More capable of identifying celestial creatures and their weaknesses</td>
        </tr>
        <tr>
          <td>Chemical</td>
          <td>+1 to checks to craft simple chemicals</td>
          <td>More capable of identifying simple chemicals and now you can craft them</td>
        </tr>
        <tr>
          <td>Corporate</td>
          <td>+2 to Spot and Sense Motive checks for corporate behavior and patterns</td>
          <td>Knowledge of basic corporate functions/procedures</td>
        </tr>
        <tr>
          <td>Corporate Security</td>
          <td>+4 to Spot checks for identifying and locating Corporate Security devices</td>
          <td>Knowledge of basic corporate security functions/procedures</td>
        </tr>
        <tr>
          <td>Cybernetic</td>
          <td>+1 damage against Cybernetic creatures</td>
          <td>Can now attempt to craft cybernetics with the proper tools and technology</td>
        </tr>
        <tr>
          <td>Demolition</td>
          <td>+2 damage while using explosive weapons</td>
          <td>Can craft simple explosives</td>
        </tr>
        <tr>
          <td>Demonic</td>
          <td>+1 damage against Demonic creatures</td>
          <td>More capable of identifying demonic creatures and their weaknesses</td>
        </tr>
        <tr>
          <td>Draconic</td>
          <td>+1 damage against Dragons</td>
          <td>More capable of identifying draconic creatures and their weaknesses</td>
        </tr>
        <tr>
          <td>Electronic</td>
          <td>+1 to electronic checks</td>
          <td>Can now attempt to craft electronic devices with the proper tools and technology</td>
        </tr>
        <tr>
          <td>Firearms</td>
          <td>+1 to Marksmanship checks while using a firearm</td>
          <td>Can now attempt to craft and repair firearms</td>
        </tr>
        <tr>
          <td>Gang</td>
          <td>+2 to Spot and Sense Motive checks for Gang behavior and patterns</td>
          <td>Knowledge of basic gang functions/procedures</td>
        </tr>
        <tr>
          <td>Geography</td>
          <td>+1 to Survival checks when navigating and traveling</td>
          <td>Knowledge of basic course setting and landscapes</td>
        </tr>
        <tr>
          <td>Hacking</td>
          <td>+1 to Hacking checks</td>
          <td>Allows you to hack non-cybernetic objects with a cyberdeck</td>
        </tr>
        <tr>
          <td>History</td>
          <td>+1 to Examine checks when recalling something historical</td>
          <td>Ability to identify events, cultures and objects of the past</td>
        </tr>
        <tr>
          <td>Legendary</td>
          <td>+2 damage against Legendary creatures</td>
          <td>More capable of identifying Legendary creatures and their weaknesses</td>
        </tr>
        <tr>
          <td>Lockpicking</td>
          <td>+1 to Lockpicking checks</td>
          <td>Allows you to pick locks using more refined methods and tools</td>
        </tr>
        <tr>
          <td>Lycan</td>
          <td>+1 damage against lycanthropic creatures</td>
          <td>More capable of identifying lycanthropic targets and their weaknesses</td>
        </tr>
        <tr>
          <td>Magical</td>
          <td>+1 damage against magical creatures/objects</td>
          <td>More capable of identifying magical objects/creatures and their weaknesses <br>Can now attempt to identify magical properties</td>
        </tr>
        <tr>
          <td>Martial Arts</td>
          <td>+1 damage while using Martial Arts abilities</td>
          <td>May now learn and perform Martial Arts abilities</td>
        </tr>
        <tr>
          <td>Mechanical</td>
          <td>+2 damage against mechanical creatures/objects</td>
          <td>Can now attempt to craft mechanical devices with the proper tools and technology</td>
        </tr>
        <tr>
          <td>Metallurgy</td>
          <td>+1 to Examine checks</td>
          <td>More capable of identifying the properties of metallic & earthen objects/materials</td>
        </tr>
        <tr>
          <td>Mystery</td>
          <td>???</td>
          <td>Can only take this under the right conditions, those of which are a mystery</td>
        </tr>
        <tr>
          <td>Mythological</td>
          <td>+2 damage against mythological creatures</td>
          <td>More capable of identifying mythological creatures and their weaknesses</td>
        </tr>
        <tr>
          <td>Nature</td>
          <td>+1 to Survival checks when predicting the weather and identifying local wildlife</td>
          <td>Ability to identify some plants, animals and weather patterns</td>
        </tr>
        <tr>
          <td>Nobility</td>
          <td>+2 to Spot and Sense Motive checks for noble/royal behavior and patterns</td>
          <td>Knowledge of basic nobility functions/procedures</td>
        </tr>
        <tr>
          <td>Piloting</td>
          <td>+1 to Piloting checks <br>+1 to Control checks while crashing</td>
          <td>Can now more easily pilot complex vehicles and aircraft</td>
        </tr>
        <tr>
          <td>Religion</td>
          <td>+2 to Spot and Sense Motive checks for religious behavior and patterns</td>
          <td>Knowledge of basic religion functions/procedures</td>
        </tr>
        <tr>
          <td>Security</td>
          <td>+2 to Spot checks to identify and locate security devices</td>
          <td>Knowledge of basic security device functions and features</td>
        </tr>
        <tr>
          <td>Street</td>
          <td>+2 to Spot and Sense Motive checks for street behavior and patterns</td>
          <td>Knowledge of basic street functions/procedures</td>
        </tr>
        <tr>
          <td>Surgical</td>
          <td>+2 Max HP bonus <br>+1 to Precision checks while performing surgery</td>
          <td>Can now attempt to perform surgery with the proper tools</td>
        </tr>
        <tr>
          <td>Tracking</td>
          <td>+2 to Survival checks when tracking a target</td>
          <td>More capable of identifying marks and tracks left behind by a target</td>
        </tr>
        <tr>
          <td>Transmutation</td>
          <td>+1 to Forgery checks when creating Transmutation circles</td>
          <td>Allows user to draw transmutation circles and know quantities required for transmutation <br>Can only be learned through a special source</td>
        </tr>
        <tr>
          <td>Vampiric</td>
          <td>+1 damage against vampiric creatures</td>
          <td>More capable of identifying vampiric creatures/objects and their weaknesses</td>
        </tr>
        <tr>
          <td>Weapon Crafting</td>
          <td>+1 to Repair Checks when crafting weapons</td>
          <td>Allows user to create and repair non-firearm weapons</td>
        </tr>
        <br>
      </table>
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
tr:nth-child(even) {
  background-color: rgb(88, 88, 88);
}
</style>
<script>

export default {
  name: 'KnowledgesPage',
  props: {
    app: Object
  },
  computed: {
  }
}
</script>
