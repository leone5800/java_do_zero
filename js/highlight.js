// Mini highlighter de sintaxe para Java, sem nenhuma dependência externa.
// Ele varre o código como texto e coloca cada trecho (comentário, string,
// palavra-chave, tipo, número...) dentro de um <span> com a classe certa.

const JAVA_KEYWORDS = new Set([
  "public", "private", "protected", "static", "final", "class", "interface",
  "extends", "implements", "return", "if", "else", "for", "while", "do",
  "switch", "case", "break", "continue", "new", "this", "super", "void",
  "import", "package", "try", "catch", "finally", "throw", "throws",
]);

const JAVA_TYPES = new Set([
  "int", "double", "float", "long", "boolean", "char", "byte", "short",
  "String", "System", "Object", "Integer", "Double", "Boolean", "Scanner",
  "ArrayList", "List", "Math",
]);

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function highlightJava(code) {
  const tokenPattern =
    /(\/\/.*$)|("(?:[^"\\]|\\.)*")|('(?:[^'\\]|\\.)*')|(\b\d+(?:\.\d+)?\b)|(\b[A-Za-z_][A-Za-z0-9_]*\b)/gm;

  let result = "";
  let lastIndex = 0;
  let match;

  while ((match = tokenPattern.exec(code)) !== null) {
    result += escapeHtml(code.slice(lastIndex, match.index));
    const [full, comment, dstr, sstr, num, word] = match;

    if (comment) {
      result += `<span class="tok-com">${escapeHtml(comment)}</span>`;
    } else if (dstr || sstr) {
      result += `<span class="tok-str">${escapeHtml(dstr || sstr)}</span>`;
    } else if (num) {
      result += `<span class="tok-num">${escapeHtml(num)}</span>`;
    } else if (word) {
      if (JAVA_KEYWORDS.has(word)) {
        result += `<span class="tok-kw">${word}</span>`;
      } else if (JAVA_TYPES.has(word)) {
        result += `<span class="tok-type">${word}</span>`;
      } else {
        result += word;
      }
    }
    lastIndex = tokenPattern.lastIndex;
  }
  result += escapeHtml(code.slice(lastIndex));
  return result;
}

function highlightAllConsoles(root = document) {
  root.querySelectorAll("pre[data-lang='java']").forEach((pre) => {
    const raw = pre.textContent;
    pre.innerHTML = `<code>${highlightJava(raw)}</code>`;
  });
}

document.addEventListener("DOMContentLoaded", () => highlightAllConsoles());
