
// This static class handles some text transformations to make descriptions prettier
class TextBeautifier {

  // Colorize different keyword types within the text
  static colorize(text) {
    for (let sub of this.substitutions) {
      text = text.replace(sub[0], sub[1]);
    }
    return text;
  }

  // Add the average of multi-die rolls as ruby text
  static addDieAverages(text) {
    for (let match of text.matchAll(/<span class="sx-die">(.*?)<\/span>/g)) {
      const parts = match[1].split("d");
      const amount = parseInt(parts[0]);
      if (!amount || amount < 2) continue;
      const sides = parseInt(parts[1]);
      text = text.replace(match[0], `<span class="sx-die"><ruby>${match[1]}<rt>${amount * (sides + 1) / 2}</rt></ruby></span>`)
    }
    return text;
  }

  // Apply all transformations
  static beautify(text) {
    return this.addDieAverages(this.colorize(text));
  }
}
TextBeautifier.substitutions = [
  [/([\d,]+[- ](f[eo]{2}t|miles?))/g, '<span class="sx-distance">$1</span>'],
  [/((\d+[- ])(rounds?|hours?|minutes?|days?)|(\d*?d\d+[- ])(rounds?|hours?|minutes?|days?))/g, '<span class="sx-time">$1</span>'],
  [/(\d+[- ](pounds?))/g, '<span class="sx-weight">$1</span>'],
  [/([Ff]ocus DC:|(([Ff]ocus|[Ss]trength|[Dd]exterity|[Cc]onstitution|[Ii]ntelligence|[Ww]isdom|[Cc]harisma)? saving throws?)|\w*? \(\w+?\) check)/g, '<span class="sx-focus">$1</span>'],
  [/([^\w](advantage)[^\w])/g, '<span class="sx-advantage">$1</span>'],
  [/([^\w](disadvantage)[^\w])/g, '<span class="sx-disadvantage">$1</span>'],
  [/(([Aa]cid|[Aa]rcane|[Bb]lack [Ee]arth|[Bb]lack [Ff]ire|[Bb]lack [Ii]ce|[Bb]lack [Ll]ightning|[Bb]lack [Ww]ater|[Bb]lack [Ww]ind|[Bb]lood|[Bb]ludgeoning|[Bb]lue [Ff]ire|[Cc]elestial|[Cc]old|[Cc]rushing||[Cc]yclone|[Dd]ragon [Ff]ire|[Dd]rain|[Ff]ire|[Ff]orce|[Ff]rost|[Hh]ellfire|[Hh]ybrid|[Hh]ydro|[Ii]ce|[Ii]mmolation|[Ll]ava|[Ll]ightning|[Mm]agic|[Mm]agic [Cc]rushing|[Mm]agic [Ff]ire|[Mm]agic [Ii]ce|[Mm]agic [Ll]ightning|[Mm]agic [Pp]iercing|[Mm]agic [Pp]oison|[Mm]agic [Ss]lashing|[Nn]ecrotic|[Nn]egative|[Nn]egative [Ee]nergy|[Nn]ightmare|[Nn]ova|[Pp]hysical|[Pp]iercing|[Pp]oison|[Pp]sychic|[Rr]adiant|[Ss]hadow|[Ss]hadowfire|[Ss]hadowfrost|[Ss]lashing|[Ss]onic|[Ss]piritual [Cc]rushing|[Ss]piritual [Ss]lashing|[Tt]ectonic|[Tt]hunder) damage[^s])/g, '<span class="sx-life">$1</span>'],
  [/((melee|ranged)( spell)? attacks?)/g, '<span class="sx-attack">$1</span>'],
  [/(\d*?d\d+)/g, '<span class="sx-die">$1</span>']
];
export default TextBeautifier;
