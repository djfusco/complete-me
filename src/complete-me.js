import { LitElement, html, css } from 'lit';

export class CompleteMe extends LitElement {
  static get properties() {
    return {
      version: { type: String }
    }
  }

  static get styles() {
    return css`
      :host {
        font-size: 2em;
      }
    `;
  }

  constructor() {
    super();
    this.version = null;
  }

  async _callGPT(e) {
    //console.log(e.detail);
    let base = ''; 
    if (
      window.location.origin.startsWith("http://127.0.0.1") ||
      window.location.origin.startsWith("http://localhost")
    ) {
      base = window.location.origin
        .replace(/127.0.0.1:8(.*)/, "localhost:3000")
        .replace(/localhost:8(.*)/, "localhost:3000");
    }
    const topic = this.shadowRoot.querySelector('#startBox').value;
    return await fetch(`${base}/api/finish?search=${topic}`).then((r) => r.ok ? r.json() : []).then((data) => {
      return data;
    });
  }

  firstUpdated() {
    const button = this.shadowRoot.querySelector('#finishButton');
    if (button) {
      button.addEventListener('click', async () => {
        const results = await this._callGPT();
        const box = this.shadowRoot.querySelector('#answerBox');
        if (box) {
         box.value = results; 
        }
      });
    }
  }

  render() {
    return html`
    <input type="text" style="width: 800px; height: 140px;" id="startBox">
    <br>
    <br>
    <button id="finishButton">Complete me</button>
    <br>
    <textarea id="answerBox" rows="20" cols="100" wrap="hard"></textarea>
    `;
  }

}

customElements.define('complete-me', CompleteMe);