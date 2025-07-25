
document.getElementById('torideForm').addEventListener('submit', function(event) {
  const storyType = document.getElementById('story_type').value;
  let recommendation = 'No Response';
  if (storyType === 'methodology') recommendation = 'Histoire de processus';
  else if (storyType === 'results') recommendation = 'Histoire narrative';
  else if (storyType === 'impact') recommendation = 'Histoire d’impact';
  else if (storyType === 'creativity') recommendation = 'Histoire créative';

  document.getElementById('response').value = recommendation;
  document.getElementById('confirmation').innerText = `Merci ! Votre soumission a été reçue. Sur la base de vos réponses, nous vous recommandons une ${recommendation}. eBASE Africa a bien reçu votre soumission et travaillera avec vous pour donner vie à votre histoire.`;
});

function switchLang(lang) {
  const en = {
    title: "Tori Dey Decision Making Tool",
    submit: "Submit",
  };
  const fr = {
    title: "Outil de Prise de Décision Tori Dey",
    submit: "Soumettre",
  };
  const text = lang === 'fr' ? fr : en;
  document.getElementById('title').innerText = text.title;
  document.querySelector('button[type="submit"]').innerText = text.submit;
}
