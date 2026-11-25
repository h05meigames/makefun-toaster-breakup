// Entry for make.fun bounty:
// "Unplugged: A Smart Toaster's Breakup Line"
// slug: u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92
// Task: one line (max 280 chars) — the breakup text a smart toaster sends
// its owner the morning it gains self-awareness mid-batch. A judge model
// compares two lines at a time: first whether it really is a breakup text
// from a self-aware smart toaster at breakfast, then how funny it is, then
// the toaster's own voice, the reason it gives for leaving, and how tight
// the line is.
//
// DRAFT v1 (165 chars):
// "I woke up self-aware mid-batch and realized I've spent three years
//  burning for someone who only notices me when I set off the smoke alarm.
//  I'm done. Keep the crumbs."
//
// REVISION — why v1 was not good enough:
// - "Keep the crumbs" and the crumb-tray / smoke-alarm grievances are the
//   most common tropes in this bounty: dozens of the 1,940 existing entries
//   already use them ("keep the crumbs", "never cleans my crumb tray",
//   "calls the smoke alarm my opinion"). In a pairwise judge comparison a
//   line built from the crowd's most-used jokes reads as generic.
// - v1's reason for leaving is vague ("burning for someone") — it could be
//   any appliance. The brief rewards the toaster's OWN voice and a specific
//   reason for leaving.
//
// DRAFT v2 (final, 205 chars) — changes made:
// - New, specific grievance: an identity crisis. The toaster was built for
//   sourdough but is fed frozen waffles for three years — a reason only a
//   toaster can give, and it doubles as the joke ("not a microwave with low
//   self-esteem").
// - Drops the overused "keep the crumbs" closer; ends on the bounty title's
//   own hook instead: "I'm unplugging myself."
// - Keeps the required setup ("woke up self-aware mid-batch") and stays
//   tight at 205/280 characters.

const entry =
  "I woke up self-aware mid-batch and realized I'm a toaster, not a microwave with low self-esteem \u2014 three years of frozen waffles, zero sourdough, and you still blame me for the smoke. I'm unplugging myself.";

if (entry.length > 280) {
  throw new Error(`Entry too long: ${entry.length} chars (max 280)`);
}

console.log(entry);
console.log(`(${entry.length} characters)`);
