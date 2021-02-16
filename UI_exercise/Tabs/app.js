const fetchTabsData = () => {
  return new Promise(resolve => {
    setTimeout(
      () =>
      resolve([{
          id: 1,
          title: 'HTML',
          content: `HTML(HyperText Markup Language) is the most basic building block of the Web. It describes and defines the content of a webpage along with the basic layout of the webpage. Other technologies besides HTML are generally used to describe a web page's appearance/presentation(CSS) or functionality/ behavior(JavaScript).`
        },
        {
          id: 2,
          title: 'CSS',
          content: `Cascading Style Sheets(CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.`
        },
        {
          id: 3,
          title: 'JavaScript',
          content: `JavaScript(JS) is a lightweight interpreted or JIT-compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.`
        },
        {
          id: 4,
          title: 'React',
          content: `hello.`
        }
      ]),
      1000
    );
  });
};

document.addEventListener('DOMContentLoaded', async () => {
  const tabsData = await fetchTabsData();

  document.querySelector('.spinner').style.display = 'none';
  document.documentElement.style.setProperty('--tabs-length', tabsData.length);

  //  <nav>
  //   <input type="radio" id="1" name="tab" checked />
  //   <label class="tab" for="1">HTML</label>
  //   <input type="radio" id="2" name="tab" />
  //   <label class="tab" for="2">CSS</label>
  //   <input type="radio" id="3" name="tab" />
  //   <label class="tab" for="3">JavaScript</label>
  //   <span class="glider"></span>
  // </nav>
  const navs = tabsData.map(
    ({
      id,
      title
    }, i) => `
    ${i === 0 ? '<nav>' : ''}
    <input type="radio" id="${id}" name="tab" ${i === 0 ? 'checked' : ''} />
    <label class="tab" for="${id}">${title}</label>
    ${i === tabsData.length - 1 ? '<span class="glider"></span></nav>' : ''}`
  );

  const contents = tabsData.map(
    ({
      content
    }, i) => `<div class="tab-content ${i === 0 ? 'active' : ''}">${content}</div>`
  );

  document.querySelector('.tabs').innerHTML = [...navs, ...contents].join('');

  const $nav = document.querySelector('nav');
  const $glider = document.querySelector('.glider');
  const $content = document.querySelectorAll('.tab-content');

  $nav.onclick = e => {
    if (!e.target.matches('label')) return;
    const id = e.target.htmlFor - 1;

    $glider.style.transform = `translate3d(${100 * id}%, 0, 0)`;

    $content.forEach((v, i) => {
      v.classList.remove('active');

      if (i === id) {
        v.classList.add('active');
      }
    });
  };
});
