import Article from './_Article';

export default function component(articles) {
  const element = document.createElement('main');

  element.innerHTML = `
    <main>
      <div class="container-fluid">
        <div class="my-5 p-2 articles-container d-flex align-items-center">
          ${[...articles.map(title => Article(title).outerHTML)]}
        </div>
      </div>
    </main>
  `;

  return element;
}