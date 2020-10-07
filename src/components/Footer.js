export default function component() {
  const element = document.createElement('footer');

  element.innerHTML = `
    <div class="container-fluid text-center py-2 bg-light text-dark border-top">
      Icons made by <a href = "https://www.flaticon.com/authors/freepik"
      title = "Freepik" >Freepik</a> from <a href="https:/ / www.flaticon.com / " title="
      Flaticon "> www.flaticon.com</a>
    </div>
  `;

  return element;
}