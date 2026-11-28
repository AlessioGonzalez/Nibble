// Entrada del paquete de CodeMirror que genera scripts/build-vendor.mjs. Expone window.NibbleCM.
import { EditorState } from '@codemirror/state';
import { EditorView, keymap, lineNumbers, highlightActiveLine, highlightActiveLineGutter, drawSelection } from '@codemirror/view';
import { defaultKeymap, history, historyKeymap, indentWithTab } from '@codemirror/commands';
import { indentOnInput, bracketMatching, indentUnit, syntaxHighlighting } from '@codemirror/language';
import { closeBrackets, closeBracketsKeymap } from '@codemirror/autocomplete';
import { classHighlighter } from '@lezer/highlight';
import { python } from '@codemirror/lang-python';
import { javascript } from '@codemirror/lang-javascript';
import { java } from '@codemirror/lang-java';
import { cpp } from '@codemirror/lang-cpp';

const LANGS = { python, javascript, java, cpp };
// Sangría por lenguaje: 4 espacios salvo JavaScript (2), como en los ejemplos de las lecciones.
const UNIT = { python: '    ', javascript: '  ', java: '    ', cpp: '    ' };

// parent: elemento donde se monta; doc: texto inicial; lang: curso; onChange(texto); label: nombre accesible.
function create(parent, { doc = '', lang = 'python', onChange, label = '' } = {}) {
  const unit = UNIT[lang] || '    ';
  const view = new EditorView({
    parent,
    state: EditorState.create({
      doc,
      extensions: [
        lineNumbers(), highlightActiveLine(), highlightActiveLineGutter(), drawSelection(), history(),
        indentOnInput(), bracketMatching(), closeBrackets(), indentUnit.of(unit), EditorState.tabSize.of(unit.length),
        (LANGS[lang] || python)(), syntaxHighlighting(classHighlighter),
        keymap.of([...closeBracketsKeymap, ...defaultKeymap, ...historyKeymap, indentWithTab]),
        EditorView.contentAttributes.of({ 'aria-label': label, autocapitalize: 'off', autocorrect: 'off', spellcheck: 'false' }),
        EditorView.updateListener.of(u => { if (u.docChanged && onChange) onChange(u.state.doc.toString()); }),
      ],
    }),
  });
  return {
    view,
    get: () => view.state.doc.toString(),
    set: text => view.dispatch({ changes: { from: 0, to: view.state.doc.length, insert: text } }),
    // Inserta en el cursor (barra de símbolos del móvil); "\t" pone la sangría del lenguaje.
    insert(text) {
      view.dispatch(view.state.replaceSelection(text === '\t' ? unit : text));
      view.focus();
    },
    focus: () => view.focus(),
    destroy: () => view.destroy(),
  };
}

window.NibbleCM = { create };
