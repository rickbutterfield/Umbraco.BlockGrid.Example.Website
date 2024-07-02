import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';

const template = document.createElement('template');
template.innerHTML = `
    <uui-box>
        <p>Block</p>
    </uui-box>
`
export default class RichTextBlock extends UmbLitElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('rich-text-block', RichTextBlock);