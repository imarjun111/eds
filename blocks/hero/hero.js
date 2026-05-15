export default function decorate(block) {

  // saare child elements lo
  const rows = [...block.children];

  // content wrapper banao
  const content = document.createElement('div');
  content.className = 'hero-content';

  // first row image hoti hai
  // baki heading + paragraph ko content me daal do
  for (let i = 1; i < rows.length; i += 1) {
    content.append(rows[i]);
  }

  // content ko hero me add karo
  block.append(content);
}