// @ts-nocheck
import { translateLegacyRuntime } from "@/data/legacy-english";
class HuffmanNode {
  constructor(char, freq, left = null, right = null, content = null) {
    this.char = char;
    this.freq = freq;
    this.left = left;
    this.right = right;
    this.content = content || (char !== null ? char : `Freq: ${freq}`);
    this.x = 0;
    this.y = 0;
    this.width = 0;
  }
}
let appState = {
  currentStep: 0,
  stepHistory: [],
  totalChars: 0,
  huffmanCodes: {}
};
const NODE_WIDTH_LEAF = 90;
const NODE_WIDTH_INTERNAL = 120;
const VERTICAL_SPACING = 140;
const HORIZONTAL_LEAF_SPACING = 120;
function deepCloneNode(node) {
  if (!node) return null;
  const clone = new HuffmanNode(node.char, node.freq, deepCloneNode(node.left), deepCloneNode(node.right), node.content);
  return clone;
}
function deepCloneNodeList(nodes) {
  return nodes.map(node => deepCloneNode(node));
}
function initializeHuffman() {
  const textInput = document.getElementById("textInput").value;
  const frequencies = calculateFrequencies(textInput);
  const totalChars = Object.values(frequencies).reduce((sum, freq) => sum + freq, 0);
  if (totalChars === 0) {
    displayMessage(translateLegacyRuntime("legacy.ae55ffb5e97304f8"), "red");
    document.getElementById("stepControls").classList.add("hidden");
    return;
  }
  appState.totalChars = totalChars;
  appState.stepHistory = buildStepHistory(frequencies);
  appState.currentStep = 0;
  document.getElementById("finalCodesArea").classList.add("hidden");
  document.getElementById("stepControls").classList.remove("hidden");
  nextStep();
  displayMessage(translateLegacyRuntime("legacy.3e3412484400984d"), "green");
}
function calculateFrequencies(text) {
  const freq = {};
  const lowerText = text.toLowerCase();
  const chars = lowerText.match(/[a-z]/g) || [];
  for (const char of chars) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}
function buildStepHistory(frequencies) {
  const history = [];
  const initialNodes = [];
  for (const char in frequencies) {
    initialNodes.push(new HuffmanNode(char, frequencies[char], null, null, char));
  }
  if (initialNodes.length === 1) {
    const singleNode = initialNodes[0];
    const root = new HuffmanNode(null, singleNode.freq, singleNode, null, singleNode.char);
    history.push({
      step: 1,
      title: translateLegacyRuntime(`الخطوة 1: حساب تكرار الأحرف (تم العثور على حرف واحد فقط '${singleNode.char}')`, "legacy.eaa1dec5582e00f1", "\u0627\u0644\u062E\u0637\u0648\u0629 1: \u062D\u0633\u0627\u0628 \u062A\u0643\u0631\u0627\u0631 \u0627\u0644\u0623\u062D\u0631\u0641 (\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u062D\u0631\u0641 \u0648\u0627\u062D\u062F \u0641\u0642\u0637 '${singleNode.char}')"),
      nodes: deepCloneNodeList(initialNodes),
      root: null,
      merged: [],
      isFinal: false
    });
    history.push({
      step: 2,
      title: translateLegacyRuntime(`الخطوة 2: اكتمال الشجرة (حالة الحرف الواحد). الرمز هو '0'.`, "legacy.4ea06319592f1b55", "\u0627\u0644\u062E\u0637\u0648\u0629 2: \u0627\u0643\u062A\u0645\u0627\u0644 \u0627\u0644\u0634\u062C\u0631\u0629 (\u062D\u0627\u0644\u0629 \u0627\u0644\u062D\u0631\u0641 \u0627\u0644\u0648\u0627\u062D\u062F). \u0627\u0644\u0631\u0645\u0632 \u0647\u0648 '0'."),
      nodes: [root],
      root: root,
      merged: [],
      isFinal: true
    });
    appState.huffmanCodes = {};
    generateCodes(root, "");
    return history;
  }
  history.push({
    step: 1,
    title: translateLegacyRuntime("legacy.5d3dc8014ddc6791"),
    nodes: deepCloneNodeList(initialNodes),
    root: null,
    merged: [],
    isFinal: false
  });
  let nodes = deepCloneNodeList(initialNodes);
  nodes.sort((a, b) => a.freq - b.freq || (a.content > b.content ? 1 : -1));
  history.push({
    step: 2,
    title: translateLegacyRuntime("legacy.97b8b2acea437d17"),
    nodes: deepCloneNodeList(nodes),
    root: null,
    merged: [],
    isFinal: false
  });
  let stepCount = 3;
  while (nodes.length > 1) {
    const left = nodes.shift();
    const right = nodes.shift();
    const parent = new HuffmanNode(null, left.freq + right.freq, left, right, `(${left.content}, ${right.content})`);
    let inserted = false;
    for (let i = 0; i < nodes.length; i++) {
      if (parent.freq < nodes[i].freq || parent.freq === nodes[i].freq && parent.content < nodes[i].content) {
        nodes.splice(i, 0, parent);
        inserted = true;
        break;
      }
    }
    if (!inserted) {
      nodes.push(parent);
    }
    const leftLabel = left.char ? `'${left.char}'` : `(${left.content})`;
    const rightLabel = right.char ? `'${right.char}'` : `(${right.content})`;
    const title = translateLegacyRuntime(`الخطوة ${stepCount}: دمج العقدتين الأصغر (${leftLabel} و ${rightLabel}) لتكوين عقدة جديدة بالتكرار ${parent.freq.toLocaleString("ar-EG")}`, "legacy.3407b38d6154de14", "\u0627\u0644\u062E\u0637\u0648\u0629 ${stepCount}: \u062F\u0645\u062C \u0627\u0644\u0639\u0642\u062F\u062A\u064A\u0646 \u0627\u0644\u0623\u0635\u063A\u0631 (${leftLabel} \u0648 ${rightLabel}) \u0644\u062A\u0643\u0648\u064A\u0646 \u0639\u0642\u062F\u0629 \u062C\u062F\u064A\u062F\u0629 \u0628\u0627\u0644\u062A\u0643\u0631\u0627\u0631 ${parent.freq.toLocaleString(\"ar-EG\")}");
    history.push({
      step: stepCount,
      title: title,
      nodes: deepCloneNodeList(nodes),
      root: parent,
      merged: [{
        content: parent.content,
        freq: parent.freq
      }],
      isFinal: false
    });
    stepCount++;
  }
  const finalStepIndex = history.length - 1;
  history[finalStepIndex].title = translateLegacyRuntime(`الخطوة ${stepCount - 1}: اكتمال شجرة هوفمان (الجذر النهائي). انظر الرموز أدناه.`, "legacy.f0ac0991b8a2a58c", "\u0627\u0644\u062E\u0637\u0648\u0629 ${stepCount - 1}: \u0627\u0643\u062A\u0645\u0627\u0644 \u0634\u062C\u0631\u0629 \u0647\u0648\u0641\u0645\u0627\u0646 (\u0627\u0644\u062C\u0630\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A). \u0627\u0646\u0638\u0631 \u0627\u0644\u0631\u0645\u0648\u0632 \u0623\u062F\u0646\u0627\u0647.");
  history[finalStepIndex].isFinal = true;
  appState.huffmanCodes = {};
  generateCodes(history[finalStepIndex].root, "");
  return history;
}
function toggleMenu() {
  document.getElementById("mobile-menu").classList.toggle("hidden");
}
function prevStep() {
  if (appState.currentStep > 1) {
    appState.currentStep--;
    updateUI();
  }
}
function nextStep() {
  if (appState.currentStep < appState.stepHistory.length) {
    appState.currentStep++;
    updateUI();
  }
}
function updateUI() {
  const stepIndex = appState.currentStep - 1;
  const history = appState.stepHistory[stepIndex];
  if (!history) return;
  document.getElementById("stepIndicator").textContent = `${appState.currentStep} / ${appState.stepHistory.length}`;
  document.getElementById("stepTitle").textContent = history.title;
  document.getElementById("prevBtn").disabled = appState.currentStep === 1;
  document.getElementById("nextBtn").disabled = appState.currentStep === appState.stepHistory.length;
  displayCombinedTable(history);
  if (history.root) {
    drawHuffmanTree(history.root);
  } else {
    drawInitialNodes(history.nodes);
  }
  if (history.isFinal) {
    displayFinalMetrics();
    document.getElementById("finalCodesArea").classList.remove("hidden");
  } else {
    document.getElementById("finalCodesArea").classList.add("hidden");
  }
}
function displayCombinedTable(history) {
  const tableBody = document.getElementById("combinedTableBody");
  tableBody.innerHTML = "";
  let displayNodes = history.nodes;
  if (displayNodes.length === 0) {
    tableBody.innerHTML = translateLegacyRuntime("legacy.9822fbf4ed284fb2");
    return;
  }
  const newlyMergedContent = history.step > 2 ? history.merged[0].content : null;
  displayNodes.forEach(node => {
    const isLeaf = node.char !== null;
    const type = isLeaf ? translateLegacyRuntime("legacy.d0471e4a7a91b8b5") : translateLegacyRuntime("legacy.2ab8218af3921f2f");
    let isMergedHighlight = false;
    if (newlyMergedContent && node.content === newlyMergedContent) {
      isMergedHighlight = true;
    }
    const row = document.createElement("tr");
    row.className = `bg-white border-b hover:bg-gray-50 ${isMergedHighlight ? "highlighted-row" : ""}`;
    const contentDisplay = isLeaf ? `'${node.content}'` : node.content;
    row.innerHTML = `
      <td class="px-3 py-2 text-center text-sm font-mono char-display">${contentDisplay}</td>
      <td class="px-3 py-2 text-center font-mono">${node.freq.toLocaleString("ar-EG")}</td>
      <td class="px-3 py-2 text-center text-sm font-semibold text-gray-600">${type}</td>
    `;
    tableBody.appendChild(row);
  });
}
function displayFinalMetrics() {
  const initialNodes = appState.stepHistory[0].nodes;
  const metrics = calculateMetrics(initialNodes);
  document.getElementById("avgCodeLength").textContent = metrics.avgCodeLength.toFixed(3);
  const tableBody = document.getElementById("finalCodesTableBody");
  tableBody.innerHTML = "";
  const sortedChars = initialNodes.sort((a, b) => b.freq - a.freq);
  let calculationStepsHtml = `$$ \\frac{1}{${appState.totalChars.toLocaleString("ar-EG")}} \\times \\left[ `;
  let firstTerm = true;
  sortedChars.forEach(node => {
    const char = node.char;
    const freq = node.freq;
    const code = appState.huffmanCodes[char];
    const codeLength = code ? code.length : 0;
    const row = document.createElement("tr");
    row.className = `bg-white border-b hover:bg-green-50`;
    row.innerHTML = `
      <td class="px-3 py-2 text-center font-bold char-display">'${char}'</td>
      <td class="px-3 py-2 text-center font-mono">${freq.toLocaleString("ar-EG")}</td>
      <td class="px-3 py-2 text-center font-mono text-green-700 char-display">${code}</td>
      <td class="px-3 py-2 text-center font-mono">${codeLength}</td>
    `;
    tableBody.appendChild(row);
    if (!firstTerm) {
      calculationStepsHtml += " + ";
    }
    calculationStepsHtml += `(${freq.toLocaleString("ar-EG")} \\times ${codeLength})`;
    firstTerm = false;
  });
  calculationStepsHtml += translateLegacyRuntime(` \\right] = \\frac{${metrics.totalBits.toLocaleString("ar-EG")}}{${appState.totalChars.toLocaleString("ar-EG")}} = ${metrics.avgCodeLength.toFixed(3)} \\text{ بت/حرف} $$`, "legacy.8752cc27a9056a87", " \\\\right] = \\\\frac{${metrics.totalBits.toLocaleString(\"ar-EG\")}}{${appState.totalChars.toLocaleString(\"ar-EG\")}} = ${metrics.avgCodeLength.toFixed(3)} \\\\text{ \u0628\u062A/\u062D\u0631\u0641} $$");
  document.getElementById("calculationSteps").innerHTML = calculationStepsHtml;
}
function calculateMetrics(initialNodes) {
  let totalCompressedBits = 0;
  let totalFrequency = appState.totalChars;
  initialNodes.forEach(node => {
    const char = node.char;
    const freq = node.freq;
    const code = appState.huffmanCodes[char];
    const codeLength = code ? code.length : 0;
    totalCompressedBits += freq * codeLength;
  });
  const avgCodeLength = totalFrequency > 0 ? totalCompressedBits / totalFrequency : 0;
  return {
    avgCodeLength,
    totalBits: totalCompressedBits
  };
}
function generateCodes(node, code) {
  if (!node) return;
  if (node.char !== null) {
    appState.huffmanCodes[node.char] = code || "0";
    return;
  }
  if (node.left) {
    generateCodes(node.left, code + "0");
  }
  if (node.right) {
    generateCodes(node.right, code + "1");
  }
}
function scaleTreeToFit(container) {
  const treeContent = container.querySelector(".tree-content");
  if (!treeContent) return;
  const treeWidth = parseFloat(treeContent.style.width) || treeContent.scrollWidth;
  const buffer = 20;
  const maxWidth = container.clientWidth - buffer;
  const scale = Math.min(1, maxWidth / treeWidth);
  if (scale < 1) {
    treeContent.style.transform = `scale(${scale})`;
    treeContent.style.transformOrigin = "top right";
    container.style.overflow = "hidden";
    container.style.height = `${(parseFloat(treeContent.style.height) || 300) * scale + buffer}px`;
  } else {
    treeContent.style.transform = "none";
    container.style.height = `${(parseFloat(treeContent.style.height) || 300) + buffer}px`;
  }
}
function drawInitialNodes(nodes) {
  const container = document.getElementById("treeVisualization");
  if (!container) return;
  container.innerHTML = "";
  if (nodes.length === 0) {
    container.innerHTML = translateLegacyRuntime("legacy.d26c6e9c648cc2ef");
    return;
  }
  const wrapper = document.createElement("div");
  wrapper.className = "tree-content";
  wrapper.style.position = "relative";
  wrapper.style.direction = "ltr";
  const requiredWidth = nodes.length * HORIZONTAL_LEAF_SPACING + 50;
  wrapper.style.width = `${requiredWidth}px`;
  wrapper.style.height = `${NODE_WIDTH_LEAF + 50}px`;
  let currentX = 25;
  nodes.forEach(node => {
    const nodeElement = document.createElement("div");
    nodeElement.className = `node leaf`;
    nodeElement.style.width = `${NODE_WIDTH_LEAF}px`;
    nodeElement.style.height = `${NODE_WIDTH_LEAF}px`;
    nodeElement.style.top = `20px`;
    nodeElement.style.left = `${currentX}px`;
    nodeElement.innerHTML = `<span class="node-char char-display">'${node.content}'</span><span class="node-freq">${node.freq.toLocaleString("ar-EG")}</span>`;
    wrapper.appendChild(nodeElement);
    currentX += HORIZONTAL_LEAF_SPACING;
  });
  container.appendChild(wrapper);
  scaleTreeToFit(container);
}
function drawHuffmanTree(root) {
  const container = document.getElementById("treeVisualization");
  if (!container) return;
  container.innerHTML = "";
  const wrapper = document.createElement("div");
  wrapper.className = "tree-content";
  wrapper.style.position = "relative";
  wrapper.style.direction = "ltr";
  const {
    width: totalWidth
  } = layoutAndPosition(root, 0, 0);
  const wrapperWidth = totalWidth + NODE_WIDTH_INTERNAL + 50;
  wrapper.style.width = `${wrapperWidth}px`;
  const offsetX = (wrapperWidth - totalWidth) / 2;
  layoutAndPosition(root, 0, offsetX);
  renderNodesAndConnections(root, wrapper);
  let maxDepth = 0;
  const nodesList = [];
  collectNodes(root, nodesList, 0);
  maxDepth = nodesList.reduce((max, node) => Math.max(max, node.y / VERTICAL_SPACING), 0);
  wrapper.style.height = `${(maxDepth + 1) * VERTICAL_SPACING + 50}px`;
  container.appendChild(wrapper);
  scaleTreeToFit(container);
}
function layoutAndPosition(node, depth, minX) {
  if (!node) return {
    width: 0,
    center: minX
  };
  const currentNodeWidth = node.char !== null ? NODE_WIDTH_LEAF : NODE_WIDTH_INTERNAL;
  node.y = depth * VERTICAL_SPACING;
  if (node.char !== null) {
    node.width = HORIZONTAL_LEAF_SPACING;
    node.x = minX + node.width / 2;
    return {
      width: node.width,
      center: node.x
    };
  }
  const leftResult = layoutAndPosition(node.left, depth + 1, minX);
  const rightStartX = minX + leftResult.width;
  const rightResult = layoutAndPosition(node.right, depth + 1, rightStartX);
  const totalWidth = leftResult.width + rightResult.width;
  node.width = totalWidth;
  node.x = minX + totalWidth / 2;
  return {
    width: totalWidth,
    center: node.x
  };
}
function collectNodes(node, list, depth) {
  if (node) {
    list.push(node);
    collectNodes(node.left, list, depth + 1);
    collectNodes(node.right, list, depth + 1);
  }
}
function renderNodesAndConnections(node, container) {
  if (!node) return;
  const nodeElement = document.createElement("div");
  const isLeaf = node.char !== null;
  const currentNodeWidth = isLeaf ? NODE_WIDTH_LEAF : NODE_WIDTH_INTERNAL;
  const currentNodeHeight = isLeaf ? NODE_WIDTH_LEAF : NODE_WIDTH_INTERNAL;
  nodeElement.className = `node ${isLeaf ? "leaf" : "internal"}`;
  nodeElement.style.width = `${currentNodeWidth}px`;
  nodeElement.style.height = `${currentNodeHeight}px`;
  nodeElement.style.top = `${node.y}px`;
  nodeElement.style.left = `${node.x - currentNodeWidth / 2}px`;
  const charDisplay = isLeaf ? `'${node.content}'` : node.content;
  nodeElement.innerHTML = `<span class="node-char char-display">${charDisplay}</span><span class="node-freq text-xs font-mono">${node.freq.toLocaleString("ar-EG")}</span>`;
  nodeElement.style.direction = "ltr";
  container.appendChild(nodeElement);
  if (node.left) {
    drawConnection(container, node, node.left, "0", currentNodeWidth);
    renderNodesAndConnections(node.left, container);
  }
  if (node.right) {
    drawConnection(container, node, node.right, "1", currentNodeWidth);
    renderNodesAndConnections(node.right, container);
  }
}
function drawConnection(container, parent, child, label, parentNodeSize) {
  const startX = parent.x;
  const startY = parent.y + parentNodeSize / 2;
  const endX = child.x;
  const childNodeSize = child.char !== null ? NODE_WIDTH_LEAF : NODE_WIDTH_INTERNAL;
  const endY = child.y + childNodeSize / 2;
  const radius = parentNodeSize / 2;
  const endRadius = childNodeSize / 2;
  const angleRad = Math.atan2(endY - startY, endX - startX);
  const startX_Adj = startX + radius * Math.cos(angleRad);
  const startY_Adj = startY + radius * Math.sin(angleRad);
  const endX_Adj = endX - endRadius * Math.cos(angleRad);
  const endY_Adj = endY - endRadius * Math.sin(angleRad);
  const dx = endX_Adj - startX_Adj;
  const dy = endY_Adj - startY_Adj;
  const length = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx);
  const connection = document.createElement("div");
  connection.className = "connection";
  connection.style.width = `${length}px`;
  connection.style.top = `${startY_Adj}px`;
  connection.style.left = `${startX_Adj}px`;
  connection.style.transform = `rotate(${angle}rad)`;
  container.appendChild(connection);
  const labelElement = document.createElement("div");
  labelElement.className = "connection-label char-display";
  const labelX = startX_Adj + dx / 2;
  const labelY = startY_Adj + dy / 2 + (label === "0" ? 0 : 0);
  labelElement.style.top = `${labelY}px`;
  labelElement.style.left = `${labelX}px`;
  labelElement.textContent = label;
  labelElement.style.direction = "ltr";
  container.appendChild(labelElement);
}
function displayMessage(message, type) {
  console.log(`[${type}]: ${message}`);
}
document.addEventListener("DOMContentLoaded", initializeHuffman);
Object.assign(window, {
  deepCloneNode: deepCloneNode,
  deepCloneNodeList: deepCloneNodeList,
  initializeHuffman: initializeHuffman,
  calculateFrequencies: calculateFrequencies,
  buildStepHistory: buildStepHistory,
  toggleMenu: toggleMenu,
  prevStep: prevStep,
  nextStep: nextStep,
  updateUI: updateUI,
  displayCombinedTable: displayCombinedTable,
  displayFinalMetrics: displayFinalMetrics,
  calculateMetrics: calculateMetrics,
  generateCodes: generateCodes,
  scaleTreeToFit: scaleTreeToFit,
  drawInitialNodes: drawInitialNodes,
  drawHuffmanTree: drawHuffmanTree,
  layoutAndPosition: layoutAndPosition,
  collectNodes: collectNodes,
  renderNodesAndConnections: renderNodesAndConnections,
  drawConnection: drawConnection,
  displayMessage: displayMessage
});
export { deepCloneNode, deepCloneNodeList, initializeHuffman, calculateFrequencies, buildStepHistory, toggleMenu, prevStep, nextStep, updateUI, displayCombinedTable, displayFinalMetrics, calculateMetrics, generateCodes, scaleTreeToFit, drawInitialNodes, drawHuffmanTree, layoutAndPosition, collectNodes, renderNodesAndConnections, drawConnection, displayMessage };
