const makeDom = () => {
    const rootElement = document.querySelector("#root")
    rootElement.insertAdjacentHTML("beforeend", `
    <main>
    <h1>Visszajelzés</h1>

    <input type="text" placeholder= "Tárgy" class="text-input">

    <textarea name="teszt" placeholder= "Megjegyzés"></textarea>
    <div class = "checkbox">
    <input type="checkbox" name="checkbox1">
    <label for="checkbox1">Elolvastam és elfogadom az <span>Adatkezelési Tájékoztatót.</span></label>
    </div>
    <div class = "checkbox">
    <input type="checkbox" name="checkbox2">
    <label for="checkbox2">Szeretnék hírlevelet kapni.</label>
    </div>
    <button>Mentés</button>
    </main>

    `)
}
window.addEventListener("load", () => {
    makeDom();
  });