import { resolve } from 'path';

function markdownToHtml(markdown) {
  const replacements = [
    { regex: /(?:^|\n)###### (.+?)(?:\n|$)/g, replacement: '<h6>$1</h6>' },
    { regex: /(?:^|\n)##### (.+?)(?:\n|$)/g, replacement: '<h5>$1</h5>' },
    { regex: /(?:^|\n)#### (.+?)(?:\n|$)/g, replacement: '<h4>$1</h4>' },
    { regex: /(?:^|\n)### (.+?)(?:\n|$)/g, replacement: '<h3>$1</h3>' },
    { regex: /(?:^|\n)## (.+?)(?:\n|$)/g, replacement: '<h2>$1</h2>' },
    { regex: /(?:^|\n)# (.+?)(?:\n|$)/g, replacement: '<h1>$1</h1>' },
    { regex: /\*\*(.+?)\*\*/g, replacement: '<strong>$1</strong>' },
    { regex: /```([\s\S]*?)```/g, replacement: '<pre><code>$1</code></pre>' },
    { regex: /`(.+?)`/g, replacement: '<code>$1</code>' },
    { regex: /\*(.+?)\*/g, replacement: '<em>$1</em>' },
    { regex: /\[(.+?)\]\((.+?)\)/g, replacement: '<a href="$2">$1</a>' },
    { regex: /\n/g, replacement: '<br />' }
  ];

  let html = markdown;
  for (const { regex, replacement } of replacements) {
    html = html.replace(regex, replacement);
  }

  return html;
}

const readmePath = resolve('./README.md');
const readme = await Bun.file(readmePath);
const readmeContent = await readme.text();
const html = markdownToHtml(readmeContent);

function About() {
  return (
    <section>
      <div>
        <h1>About</h1>
        <hr />
        <div dangerouslySetInnerHTML={{__html: html}}></div>
      </div>
    </section>
  );
}

export default About;