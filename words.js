// Whole-word vocabulary list (the easier "Vocabulary Words" set).
//
// Each entry maps a word to the meanings that count as correct. Any one of them
// is accepted when the game asks "What is the definition of 'X'?", and each one
// can be asked in reverse as "What word means 'Y'?".
//
// Parentheses hold context that helps a reader but is ignored when matching, so
// "mean-spirited (dialogue)" is answered by typing just "mean-spirited".
// Meanings shared by several words should be written identically (e.g. "tired")
// so that any of those words is accepted for the reverse question.
const WORDS = {
  abundant: ["plentiful", "more than enough", "in large amounts"],
  ancient: ["very old", "from long ago"],
  acrimonious: ["bitter", "angry", "mean-spirited (dialogue)"],
  brave: ["courageous", "not afraid", "bold"],
  brittle: ["easily broken", "snaps instead of bending"],
  cautious: ["careful", "watchful", "avoiding danger"],
  clumsy: ["awkward", "always dropping things", "not graceful"],
  courteous: ["polite", "well-mannered", "respectful"],
  curious: ["wanting to know more", "full of questions"],
  delicate: ["fragile", "easily damaged", "gentle (touch)"],
  drowsy: ["sleepy", "tired", "half awake"],
  eager: ["excited to do something", "enthusiastic", "keen"],
  enormous: ["huge", "gigantic", "very large"],
  exhausted: ["worn out", "very tired", "out of energy"],
  fierce: ["savage", "wild and dangerous", "very intense"],
  generous: ["giving", "unselfish", "happy to share"],
  grumpy: ["cranky", "bad-tempered", "easily annoyed"],
  hasty: ["hurried", "rushed", "done too quickly"],
  honest: ["truthful", "not lying", "sincere"],
  humble: ["modest", "not boastful", "not thinking too highly of yourself"],
  loyal: ["faithful", "devoted", "sticking by a friend"],
  observant: ["watchful", "quick to notice things", "paying close attention"],
  peculiar: ["strange", "odd", "unusual"],
  rapid: ["fast", "quick", "speedy"],
  reluctant: ["unwilling", "hesitant", "not wanting to do something"],
  scarce: ["rare", "hard to find", "in short supply"],
  stubborn: ["refusing to change your mind", "hardheaded", "not giving in"],
  timid: ["shy", "easily frightened", "lacking confidence"],
  vast: ["huge", "wide open (space)", "spreading out very far"],
  weary: ["tired", "worn out", "wanting a rest"],
  wise: ["having good judgment", "smart from experience", "sensible"]
};
