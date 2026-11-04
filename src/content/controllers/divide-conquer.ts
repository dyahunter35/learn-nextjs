// @ts-nocheck
import { translateLegacyRuntime } from "@/data/legacy-english";
let currentArray = [];
let arrayContainer, stepsLog, statusMessage, nodeCountBadge, treeContainer;
let currentStepIndex = -1;
let simulationSteps = [];
let isFinished = false;
let treeData = null;
const OP_DIVIDE = 'divide';
const OP_COMPARE = 'compare';
const OP_PLACE = 'place';
const OP_MERGE = 'merge';
const OP_DONE = 'done';
window.onload = function () {
  arrayContainer = document.getElementById('arrayContainer');
  stepsLog = document.getElementById('stepsLog');
  statusMessage = document.getElementById('statusMessage');
  nodeCountBadge = document.getElementById('nodeCountBadge');
  treeContainer = document.getElementById('treeContainer');
  resetSimulation(false);
};
function generateMergeSortSteps(arr) {
  const steps = [];
  const workingArray = arr.slice();
  const n = arr.length;
  steps.push({
    type: OP_DIVIDE,
    left: 0,
    right: n - 1,
    mid: -1,
    leftArr: [],
    rightArr: [],
    array: workingArray.slice(),
    depth: 0,
    highlightRange: [0, n - 1],
    message: translateLegacyRuntime(`🔄 بدء خوارزمية دمج الترتيب على المصفوفة: [${workingArray.join(', ')}]`, "legacy.54872f0c7140bcf9", "\uD83D\uDD04 \u0628\u062F\u0621 \u062E\u0648\u0627\u0631\u0632\u0645\u064A\u0629 \u062F\u0645\u062C \u0627\u0644\u062A\u0631\u062A\u064A\u0628 \u0639\u0644\u0649 \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0629: [${workingArray.join(', ')}]"),
    logOp: translateLegacyRuntime("legacy.bca1544d642e51b5"),
    logLeft: '\u2014',
    logRight: '\u2014',
    logResult: `[${workingArray.join(', ')}]`
  });
  function mergeSort(l, r, depth) {
    if (l >= r) return;
    const mid = Math.floor((l + r) / 2);
    const leftArr = workingArray.slice(l, mid + 1);
    const rightArr = workingArray.slice(mid + 1, r + 1);
    steps.push({
      type: OP_DIVIDE,
      left: l,
      right: r,
      mid: mid,
      leftArr: leftArr,
      rightArr: rightArr,
      array: workingArray.slice(),
      depth: depth,
      highlightRange: [l, r],
      message: translateLegacyRuntime(`تقسيم [${l}..${r}] -> النصف الأيسر [${l}..${mid}]: [${leftArr.join(', ')}] | النصف الأيمن [${mid + 1}..${r}]: [${rightArr.join(', ')}]`, "legacy.d99fa33e93fd85be", "\u062A\u0642\u0633\u064A\u0645 [${l}..${r}] -> \u0627\u0644\u0646\u0635\u0641 \u0627\u0644\u0623\u064A\u0633\u0631 [${l}..${mid}]: [${leftArr.join(', ')}] | \u0627\u0644\u0646\u0635\u0641 \u0627\u0644\u0623\u064A\u0645\u0646 [${mid + 1}..${r}]: [${rightArr.join(', ')}]"),
      logOp: translateLegacyRuntime("legacy.a3a5b897ed29a32e"),
      logLeft: `[${leftArr.join(', ')}]`,
      logRight: `[${rightArr.join(', ')}]`,
      logResult: '\u2014'
    });
    mergeSort(l, mid, depth + 1);
    mergeSort(mid + 1, r, depth + 1);
    const leftSorted = workingArray.slice(l, mid + 1);
    const rightSorted = workingArray.slice(mid + 1, r + 1);
    const merged = [];
    let i = 0,
      j = 0,
      k = l;
    while (i < leftSorted.length && j < rightSorted.length) {
      steps.push({
        type: OP_COMPARE,
        left: l,
        right: r,
        mid: mid,
        leftArr: leftSorted,
        rightArr: rightSorted,
        mergedSoFar: merged.slice(),
        compareI: i,
        compareJ: j,
        compareLeftVal: leftSorted[i],
        compareRightVal: rightSorted[j],
        array: workingArray.slice(),
        depth: depth,
        highlightRange: [l, r],
        message: translateLegacyRuntime(`مقارنة: ${leftSorted[i]} > ${rightSorted[j]}؟`, "legacy.dfeafc113ab98722", "\u0645\u0642\u0627\u0631\u0646\u0629: ${leftSorted[i]} > ${rightSorted[j]}\u061F"),
        logOp: translateLegacyRuntime("legacy.0c25cf3fa1d4b308"),
        logLeft: `[${leftSorted.join(', ')}]`,
        logRight: `[${rightSorted.join(', ')}]`,
        logResult: `[${merged.join(', ')}${merged.length ? ', ' : ''}${leftSorted[i]}? ${rightSorted[j]}?]`
      });
      if (leftSorted[i] <= rightSorted[j]) {
        merged.push(leftSorted[i]);
        workingArray[k++] = leftSorted[i++];
        steps.push({
          type: OP_PLACE,
          left: l,
          right: r,
          mid: mid,
          leftArr: leftSorted,
          rightArr: rightSorted,
          mergedSoFar: merged.slice(),
          placedValue: merged[merged.length - 1],
          array: workingArray.slice(),
          depth: depth,
          highlightRange: [l, r],
          message: translateLegacyRuntime(`وضع ${merged[merged.length - 1]} (من النصف الأيسر)`, "legacy.de9744400eda7f54", "\u0648\u0636\u0639 ${merged[merged.length - 1]} (\u0645\u0646 \u0627\u0644\u0646\u0635\u0641 \u0627\u0644\u0623\u064A\u0633\u0631)"),
          logOp: translateLegacyRuntime("legacy.115c2bbb71d94ab8"),
          logLeft: `[${leftSorted.join(', ')}]`,
          logRight: `[${rightSorted.join(', ')}]`,
          logResult: `[${merged.join(', ')}]`,
          fromLeft: true
        });
      } else {
        merged.push(rightSorted[j]);
        workingArray[k++] = rightSorted[j++];
        steps.push({
          type: OP_PLACE,
          left: l,
          right: r,
          mid: mid,
          leftArr: leftSorted,
          rightArr: rightSorted,
          mergedSoFar: merged.slice(),
          placedValue: merged[merged.length - 1],
          array: workingArray.slice(),
          depth: depth,
          highlightRange: [l, r],
          message: translateLegacyRuntime(`وضع ${merged[merged.length - 1]} (من النصف الأيمن)`, "legacy.c872aedfc64691c8", "\u0648\u0636\u0639 ${merged[merged.length - 1]} (\u0645\u0646 \u0627\u0644\u0646\u0635\u0641 \u0627\u0644\u0623\u064A\u0645\u0646)"),
          logOp: translateLegacyRuntime("legacy.9dedaefbfd86d5f4"),
          logLeft: `[${leftSorted.join(', ')}]`,
          logRight: `[${rightSorted.join(', ')}]`,
          logResult: `[${merged.join(', ')}]`,
          fromLeft: false
        });
      }
    }
    while (i < leftSorted.length) {
      merged.push(leftSorted[i]);
      workingArray[k++] = leftSorted[i++];
      steps.push({
        type: OP_PLACE,
        left: l,
        right: r,
        mid: mid,
        leftArr: leftSorted,
        rightArr: rightSorted,
        mergedSoFar: merged.slice(),
        placedValue: merged[merged.length - 1],
        array: workingArray.slice(),
        depth: depth,
        highlightRange: [l, r],
        message: translateLegacyRuntime(`وضع ${merged[merged.length - 1]} (المتبقي من الأيسر)`, "legacy.db17349aa479d75f", "\u0648\u0636\u0639 ${merged[merged.length - 1]} (\u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0645\u0646 \u0627\u0644\u0623\u064A\u0633\u0631)"),
        logOp: translateLegacyRuntime("legacy.115c2bbb71d94ab8"),
        logLeft: `[${leftSorted.join(', ')}]`,
        logRight: `[${rightSorted.join(', ')}]`,
        logResult: `[${merged.join(', ')}]`,
        fromLeft: true
      });
    }
    while (j < rightSorted.length) {
      merged.push(rightSorted[j]);
      workingArray[k++] = rightSorted[j++];
      steps.push({
        type: OP_PLACE,
        left: l,
        right: r,
        mid: mid,
        leftArr: leftSorted,
        rightArr: rightSorted,
        mergedSoFar: merged.slice(),
        placedValue: merged[merged.length - 1],
        array: workingArray.slice(),
        depth: depth,
        highlightRange: [l, r],
        message: translateLegacyRuntime(`وضع ${merged[merged.length - 1]} (المتبقي من الأيمن)`, "legacy.79dcd47700a47644", "\u0648\u0636\u0639 ${merged[merged.length - 1]} (\u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0645\u0646 \u0627\u0644\u0623\u064A\u0645\u0646)"),
        logOp: translateLegacyRuntime("legacy.9dedaefbfd86d5f4"),
        logLeft: `[${leftSorted.join(', ')}]`,
        logRight: `[${rightSorted.join(', ')}]`,
        logResult: `[${merged.join(', ')}]`,
        fromLeft: false
      });
    }
    steps.push({
      type: OP_MERGE,
      left: l,
      right: r,
      mid: mid,
      leftArr: leftSorted,
      rightArr: rightSorted,
      mergedArr: merged,
      array: workingArray.slice(),
      depth: depth,
      highlightRange: [l, r],
      message: translateLegacyRuntime(`دمج [${l}..${r}]: [${merged.join(', ')}]`, "legacy.5bf012ce1fe96169", "\u062F\u0645\u062C [${l}..${r}]: [${merged.join(', ')}]"),
      logOp: translateLegacyRuntime("legacy.248f36310927d33a"),
      logLeft: `[${leftSorted.join(', ')}]`,
      logRight: `[${rightSorted.join(', ')}]`,
      logResult: `[${merged.join(', ')}]`
    });
  }
  mergeSort(0, n - 1, 0);
  steps.push({
    type: OP_DONE,
    left: 0,
    right: n - 1,
    mid: -1,
    leftArr: [],
    rightArr: [],
    array: workingArray.slice(),
    depth: 0,
    highlightRange: [0, n - 1],
    message: translateLegacyRuntime(`\u2705 تم ترتيب المصفوفة بالكامل: [${workingArray.join(', ')}]`, "legacy.24c40b21c0ca8b1f", "\\u2705 \u062A\u0645 \u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644: [${workingArray.join(', ')}]"),
    logOp: translateLegacyRuntime("legacy.3cb0fb8eee75ebca"),
    logLeft: '\u2014',
    logRight: '\u2014',
    logResult: `[${workingArray.join(', ')}]`
  });
  return steps;
}
function buildTreeData(arr) {
  function build(l, r) {
    const mid = Math.floor((l + r) / 2);
    const children = [];
    if (l < r) {
      children.push(build(l, mid));
      children.push(build(mid + 1, r));
    }
    return {
      range: [l, r],
      label: l === r ? `[${l}]` : `[${l}..${r}]`,
      children: children,
      isLeaf: l === r
    };
  }
  if (!arr || arr.length === 0) return null;
  return build(0, arr.length - 1);
}
function renderArray(step) {
  if (!arrayContainer) return;
  arrayContainer.innerHTML = '';
  const arr = step.array || [];
  const l = step.highlightRange ? step.highlightRange[0] : 0;
  const r = step.highlightRange ? step.highlightRange[1] : arr.length - 1;
  const mid = step.mid;
  const type = step.type;
  const wrapper = document.createElement('div');
  wrapper.className = 'dc-container';
  arr.forEach((val, idx) => {
    const node = document.createElement('div');
    node.className = 'dc-node';
    let cssClass = 'dc-node-default';
    if (idx < l || idx > r) {
      cssClass = 'dc-node-inactive';
    } else if (type === OP_DONE) {
      cssClass = 'dc-node-done';
    } else if (type === OP_DIVIDE && idx >= l && idx <= r) {
      if (mid >= 0 && idx <= mid) {
        cssClass = 'dc-node-dividing';
      } else if (mid >= 0) {
        cssClass = 'dc-node-dividing';
        node.style.background = 'linear-gradient(135deg, #38bdf8, #0284c7)';
      } else {
        cssClass = 'dc-node-dividing';
      }
    } else if (type === OP_COMPARE) {
      const mergedCount = step.mergedSoFar ? step.mergedSoFar.length : 0;
      const leftLen = step.leftArr ? step.leftArr.length : 0;
      if (idx < l) {
        cssClass = 'dc-node-inactive';
      } else if (idx >= l && idx < l + mergedCount) {
        cssClass = 'dc-node-merged';
      } else if (idx >= l + mergedCount && idx <= r) {
        if (mid >= 0 && idx <= mid) {
          if (step.compareI !== undefined && idx === l + step.compareI) {
            cssClass = 'dc-node-comparing';
          } else {
            cssClass = 'dc-node-dividing';
            node.style.background = 'linear-gradient(135deg, #60a5fa, #3b82f6)';
          }
        } else {
          if (step.compareJ !== undefined && idx === l + leftLen + step.compareJ) {
            cssClass = 'dc-node-comparing';
          } else {
            cssClass = 'dc-node-dividing';
            node.style.background = 'linear-gradient(135deg, #38bdf8, #0284c7)';
          }
        }
      } else {
        cssClass = 'dc-node-inactive';
      }
    } else if (type === OP_PLACE) {
      const mergedCount = step.mergedSoFar ? step.mergedSoFar.length : 0;
      if (idx < l) {
        cssClass = 'dc-node-inactive';
      } else if (idx >= l && idx < l + mergedCount) {
        if (idx === l + mergedCount - 1) {
          cssClass = 'dc-node-placed';
        } else {
          cssClass = 'dc-node-merged';
        }
      } else if (idx >= l + mergedCount && idx <= r) {
        if (mid >= 0 && idx <= mid) {
          cssClass = 'dc-node-dividing';
          node.style.background = 'linear-gradient(135deg, #60a5fa, #3b82f6)';
        } else {
          cssClass = 'dc-node-dividing';
          node.style.background = 'linear-gradient(135deg, #38bdf8, #0284c7)';
        }
      } else {
        cssClass = 'dc-node-inactive';
      }
    } else if (type === OP_MERGE) {
      if (idx >= l && idx <= r) {
        cssClass = 'dc-node-merged';
      } else {
        cssClass = 'dc-node-inactive';
      }
    }
    node.classList.add(cssClass);
    node.style.animationDelay = `${idx * 0.05}s`;
    const valSpan = document.createElement('span');
    valSpan.className = 'dc-value';
    valSpan.textContent = val;
    node.appendChild(valSpan);
    const idxSpan = document.createElement('span');
    idxSpan.className = 'dc-index';
    idxSpan.textContent = `[${idx}]`;
    node.appendChild(idxSpan);
    wrapper.appendChild(node);
    if (idx < arr.length - 1) {
      const conn = document.createElement('div');
      conn.className = 'dc-connector';
      const line = document.createElement('div');
      line.className = 'arrow-line';
      conn.appendChild(line);
      wrapper.appendChild(conn);
    }
  });
  arrayContainer.appendChild(wrapper);
  if (type === OP_DIVIDE && mid >= 0 && step.leftArr && step.rightArr && step.leftArr.length > 0 && step.rightArr.length > 0) {
    const branchDiv = document.createElement('div');
    branchDiv.className = 'dc-branch-container';
    const leftDiv = document.createElement('div');
    leftDiv.className = 'dc-half dc-half-left';
    const leftLabel = document.createElement('span');
    leftLabel.className = 'dc-half-label';
    leftLabel.textContent = translateLegacyRuntime(`النصف الأيسر [${step.left}..${step.mid}]`, "legacy.485def33af2c291e", "\u0627\u0644\u0646\u0635\u0641 \u0627\u0644\u0623\u064A\u0633\u0631 [${step.left}..${step.mid}]");
    leftDiv.appendChild(leftLabel);
    step.leftArr.forEach(v => {
      const n = document.createElement('div');
      n.className = 'dc-node dc-node-dividing';
      n.style.margin = '2px';
      n.style.minWidth = '32px';
      n.style.height = '32px';
      n.style.fontSize = '0.75rem';
      const s = document.createElement('span');
      s.className = 'dc-value';
      s.textContent = v;
      n.appendChild(s);
      leftDiv.appendChild(n);
    });
    branchDiv.appendChild(leftDiv);
    const rightDiv = document.createElement('div');
    rightDiv.className = 'dc-half dc-half-right';
    const rightLabel = document.createElement('span');
    rightLabel.className = 'dc-half-label';
    rightLabel.textContent = translateLegacyRuntime(`النصف الأيمن [${step.mid + 1}..${step.right}]`, "legacy.3e4bd1b5ca8dff9d", "\u0627\u0644\u0646\u0635\u0641 \u0627\u0644\u0623\u064A\u0645\u0646 [${step.mid + 1}..${step.right}]");
    rightDiv.appendChild(rightLabel);
    step.rightArr.forEach(v => {
      const n = document.createElement('div');
      n.className = 'dc-node dc-node-dividing';
      n.style.margin = '2px';
      n.style.minWidth = '32px';
      n.style.height = '32px';
      n.style.fontSize = '0.75rem';
      n.style.background = 'linear-gradient(135deg, #38bdf8, #0284c7)';
      const s = document.createElement('span');
      s.className = 'dc-value';
      s.textContent = v;
      n.appendChild(s);
      rightDiv.appendChild(n);
    });
    branchDiv.appendChild(rightDiv);
    arrayContainer.appendChild(branchDiv);
  }
  if ((type === OP_COMPARE || type === OP_PLACE || type === OP_MERGE) && step.leftArr && step.rightArr) {
    renderMergeArea(step, type);
  }
  if (nodeCountBadge) {
    nodeCountBadge.textContent = translateLegacyRuntime(`${arr.length} عناصر`, "legacy.2fcc38fe5aa21862", "${arr.length} \u0639\u0646\u0627\u0635\u0631");
  }
}
function renderMergeArea(step, type) {
  const ma = document.createElement('div');
  ma.className = 'dc-merge-area';
  const row1 = document.createElement('div');
  row1.className = 'dc-merge-row';
  const lbl1 = document.createElement('span');
  lbl1.className = 'dc-merge-row-label';
  lbl1.textContent = translateLegacyRuntime("legacy.3c146be9cd325f8e");
  row1.appendChild(lbl1);
  step.leftArr.forEach((v, i) => {
    const n = document.createElement('div');
    const isComparing = type === OP_COMPARE && step.compareI !== undefined && i === step.compareI;
    n.className = 'dc-node';
    n.style.minWidth = '32px';
    n.style.height = '32px';
    n.style.fontSize = '0.75rem';
    n.style.margin = '2px';
    n.classList.add(isComparing ? 'dc-node-comparing' : 'dc-node-dividing');
    const s = document.createElement('span');
    s.className = 'dc-value';
    s.textContent = v;
    n.appendChild(s);
    row1.appendChild(n);
    if (i < step.leftArr.length - 1) {
      const sp = document.createElement('span');
      sp.className = 'dc-merge-arrow';
      sp.textContent = '\u2190';
      sp.style.fontSize = '0.7rem';
      row1.appendChild(sp);
    }
  });
  ma.appendChild(row1);
  const rowArrow = document.createElement('div');
  rowArrow.className = 'dc-merge-row';
  rowArrow.style.justifyContent = 'center';
  rowArrow.style.color = '#94a3b8';
  rowArrow.style.fontSize = '1.2rem';
  rowArrow.textContent = '\u2193';
  ma.appendChild(rowArrow);
  const row2 = document.createElement('div');
  row2.className = 'dc-merge-row';
  const lbl2 = document.createElement('span');
  lbl2.className = 'dc-merge-row-label';
  lbl2.textContent = translateLegacyRuntime("legacy.c8c529135cdc57d4");
  row2.appendChild(lbl2);
  step.rightArr.forEach((v, i) => {
    const n = document.createElement('div');
    const isComparing = type === OP_COMPARE && step.compareJ !== undefined && i === step.compareJ;
    n.className = 'dc-node';
    n.style.minWidth = '32px';
    n.style.height = '32px';
    n.style.fontSize = '0.75rem';
    n.style.margin = '2px';
    n.classList.add(isComparing ? 'dc-node-comparing' : 'dc-node-dividing');
    n.style.background = isComparing ? 'linear-gradient(135deg, #fbbf24, #f59e0b)' : 'linear-gradient(135deg, #38bdf8, #0284c7)';
    const s = document.createElement('span');
    s.className = 'dc-value';
    s.textContent = v;
    n.appendChild(s);
    row2.appendChild(n);
    if (i < step.rightArr.length - 1) {
      const sp = document.createElement('span');
      sp.className = 'dc-merge-arrow';
      sp.textContent = '\u2190';
      sp.style.fontSize = '0.7rem';
      row2.appendChild(sp);
    }
  });
  ma.appendChild(row2);
  const mergedData = step.mergedSoFar || step.mergedArr;
  if (mergedData) {
    const rowArrow2 = document.createElement('div');
    rowArrow2.className = 'dc-merge-row';
    rowArrow2.style.justifyContent = 'center';
    rowArrow2.style.color = '#94a3b8';
    rowArrow2.style.fontSize = '1.2rem';
    rowArrow2.textContent = '\u2193';
    ma.appendChild(rowArrow2);
    const row3 = document.createElement('div');
    row3.className = 'dc-merge-row';
    const lbl3 = document.createElement('span');
    lbl3.className = 'dc-merge-row-label';
    lbl3.textContent = translateLegacyRuntime("legacy.35bd60466e07c887");
    row3.appendChild(lbl3);
    mergedData.forEach((v, i) => {
      const n = document.createElement('div');
      n.className = 'dc-node';
      n.style.minWidth = '32px';
      n.style.height = '32px';
      n.style.fontSize = '0.75rem';
      n.style.margin = '2px';
      const isLast = type === OP_PLACE && i === mergedData.length - 1;
      n.classList.add(isLast ? 'dc-node-placed' : 'dc-node-merged');
      if (!isLast) {
        n.style.animation = 'mergeIn 0.4s ease';
      }
      const s = document.createElement('span');
      s.className = 'dc-value';
      s.textContent = v;
      n.appendChild(s);
      row3.appendChild(n);
      if (i < mergedData.length - 1) {
        const sp = document.createElement('span');
        sp.className = 'dc-merge-arrow';
        sp.textContent = '\u2190';
        sp.style.fontSize = '0.7rem';
        row3.appendChild(sp);
      }
    });
    ma.appendChild(row3);
  }
  arrayContainer.appendChild(ma);
}
function renderTree(steps, activeIdx) {
  if (!treeContainer) return;
  treeContainer.innerHTML = '';
  if (!treeData) return;
  const activeStep = activeIdx >= 0 && activeIdx < steps.length ? steps[activeIdx] : null;
  const svgNS = 'http://www.w3.org/2000/svg';
  const treeHeight = 600;
  const treeWidth = 400;
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', `0 0 ${treeWidth} ${treeHeight}`);
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '100%');
  svg.style.minHeight = '350px';
  svg.style.direction = 'ltr';
  const nodeRadius = 22;
  function getActiveStatus(range) {
    if (!activeStep) return 'none';
    const [al, ar] = [activeStep.left, activeStep.right];
    if (al === range[0] && ar === range[1]) {
      if (activeStep.type === OP_DIVIDE) return 'active';
      if (activeStep.type === OP_COMPARE || activeStep.type === OP_PLACE) return 'merge-active';
      if (activeStep.type === OP_MERGE) return 'done';
      return 'active';
    }
    if (activeStep.type === OP_DONE) return 'done';
    const found = steps.findIndex(s => s.left === range[0] && s.right === range[1] && (s.type === OP_DIVIDE || s.type === OP_MERGE));
    if (found >= 0 && found < activeIdx) return 'done';
    return 'none';
  }
  function drawNode(node, x, y, level) {
    const status = getActiveStatus(node.range);
    let fillColor = '#6366f1';
    if (status === 'active') fillColor = '#f59e0b';else if (status === 'merge-active') fillColor = '#8b5cf6';else if (status === 'done') fillColor = '#10b981';
    if (node.isLeaf) {
      const g = document.createElementNS(svgNS, 'g');
      const circle = document.createElementNS(svgNS, 'circle');
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', y);
      circle.setAttribute('r', nodeRadius);
      circle.setAttribute('fill', fillColor);
      circle.setAttribute('stroke', status === 'active' || status === 'merge-active' ? '#fbbf24' : '#c7d2fe');
      circle.setAttribute('stroke-width', status === 'active' || status === 'merge-active' ? '3' : '1');
      g.appendChild(circle);
      if (status === 'active' || status === 'merge-active') {
        const glow = document.createElementNS(svgNS, 'circle');
        glow.setAttribute('cx', x);
        glow.setAttribute('cy', y);
        glow.setAttribute('r', nodeRadius + 4);
        glow.setAttribute('fill', 'none');
        glow.setAttribute('stroke', fillColor);
        glow.setAttribute('stroke-width', '2');
        glow.setAttribute('opacity', '0.5');
        g.appendChild(glow);
      }
      const text = document.createElementNS(svgNS, 'text');
      text.setAttribute('x', x);
      text.setAttribute('y', y + 1);
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('dominant-baseline', 'central');
      text.setAttribute('fill', 'white');
      text.setAttribute('font-size', '10');
      text.setAttribute('font-weight', '700');
      text.setAttribute('font-family', 'Cairo, sans-serif');
      text.textContent = node.label;
      g.appendChild(text);
      svg.appendChild(g);
      return;
    }
    const childWidth = 280 / Math.pow(2, level);
    const childGap = Math.max(childWidth, 36);
    const leftX = x - childGap / 2;
    const rightX = x + childGap / 2;
    const childY = y + 60;
    const lineL = document.createElementNS(svgNS, 'line');
    lineL.setAttribute('x1', x);
    lineL.setAttribute('y1', y + nodeRadius / 2);
    lineL.setAttribute('x2', leftX);
    lineL.setAttribute('y2', childY - nodeRadius / 2);
    lineL.setAttribute('class', 'dc-tree-branch-line');
    svg.appendChild(lineL);
    const lineR = document.createElementNS(svgNS, 'line');
    lineR.setAttribute('x1', x);
    lineR.setAttribute('y1', y + nodeRadius / 2);
    lineR.setAttribute('x2', rightX);
    lineR.setAttribute('y2', childY - nodeRadius / 2);
    lineR.setAttribute('class', 'dc-tree-branch-line');
    svg.appendChild(lineR);
    if (node.children[0]) drawNode(node.children[0], leftX, childY, level + 1);
    if (node.children[1]) drawNode(node.children[1], rightX, childY, level + 1);
    const g = document.createElementNS(svgNS, 'g');
    const rect = document.createElementNS(svgNS, 'rect');
    rect.setAttribute('x', x - nodeRadius - 8);
    rect.setAttribute('y', y - nodeRadius / 2);
    rect.setAttribute('width', (nodeRadius + 8) * 2);
    rect.setAttribute('height', nodeRadius);
    rect.setAttribute('rx', '8');
    rect.setAttribute('fill', fillColor);
    rect.setAttribute('stroke', status === 'active' || status === 'merge-active' ? '#fbbf24' : '#c7d2fe');
    rect.setAttribute('stroke-width', status === 'active' || status === 'merge-active' ? '3' : '1');
    g.appendChild(rect);
    const text = document.createElementNS(svgNS, 'text');
    text.setAttribute('x', x);
    text.setAttribute('y', y + 1);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('dominant-baseline', 'central');
    text.setAttribute('fill', 'white');
    text.setAttribute('font-size', '10');
    text.setAttribute('font-weight', '700');
    text.setAttribute('font-family', 'Cairo, sans-serif');
    text.textContent = node.label;
    g.appendChild(text);
    svg.appendChild(g);
  }
  if (treeData) {
    drawNode(treeData, treeWidth / 2, 30, 0);
  }
  treeContainer.appendChild(svg);
}
function startSimulation() {
  const input = document.getElementById('arrayInput');
  if (!input) return;
  const val = input.value.trim();
  if (isFinished) {
    resetSimulation(true);
    return;
  }
  if (simulationSteps.length > 0) {
    nextStep();
    return;
  }
  let arr;
  try {
    arr = val.split(',').map(n => {
      const num = parseInt(n.trim());
      if (isNaN(num)) throw new Error('non-numeric');
      return num;
    });
  } catch (e) {
    showMessage(translateLegacyRuntime("legacy.9e488dcf6a21db6c"), 'error');
    return;
  }
  if (arr.length < 2) {
    showMessage(translateLegacyRuntime("legacy.57f7e5e826fc1279"), 'error');
    return;
  }
  if (arr.length > 20) {
    showMessage(translateLegacyRuntime("legacy.9bac2a01a2ad34db"), 'error');
    return;
  }
  currentArray = arr.slice();
  isFinished = false;
  currentStepIndex = -1;
  simulationSteps = generateMergeSortSteps(arr.slice());
  treeData = buildTreeData(arr);
  showMessage(translateLegacyRuntime(`\u{1F50D} بدء محاكاة دمج الترتيب على [${arr.join(', ')}]`, "legacy.decaa97ff434b383", "\\u{1F50D} \u0628\u062F\u0621 \u0645\u062D\u0627\u0643\u0627\u0629 \u062F\u0645\u062C \u0627\u0644\u062A\u0631\u062A\u064A\u0628 \u0639\u0644\u0649 [${arr.join(', ')}]"), 'info');
  nextStep();
}
function nextStep() {
  if (currentStepIndex < simulationSteps.length - 1) {
    currentStepIndex++;
    updateVisualization();
    const btn = document.getElementById('nextButton');
    if (btn) {
      btn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        btn.style.transform = '';
      }, 150);
    }
  }
}
function previousStep() {
  if (currentStepIndex > 0) {
    currentStepIndex--;
    updateVisualization();
    const btn = document.getElementById('prevButton');
    if (btn) {
      btn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        btn.style.transform = '';
      }, 150);
    }
  }
}
function resetSimulation(clearMessage = true) {
  currentStepIndex = -1;
  simulationSteps = [];
  isFinished = false;
  treeData = null;
  if (stepsLog) stepsLog.innerHTML = '';
  if (treeContainer) treeContainer.innerHTML = '';
  const input = document.getElementById('arrayInput');
  const val = input ? input.value.trim() : '38,27,43,3,9,82,10';
  let arr;
  try {
    arr = val.split(',').map(n => {
      const num = parseInt(n.trim());
      if (isNaN(num)) throw new Error('non-numeric');
      return num;
    });
  } catch (e) {
    arr = [38, 27, 43, 3, 9, 82, 10];
  }
  currentArray = arr.slice();
  if (nodeCountBadge) {
    nodeCountBadge.textContent = translateLegacyRuntime(`${arr.length} عناصر`, "legacy.2fcc38fe5aa21862", "${arr.length} \u0639\u0646\u0627\u0635\u0631");
  }
  renderArray({
    type: OP_DIVIDE,
    array: arr,
    highlightRange: [0, arr.length - 1],
    left: 0,
    right: arr.length - 1,
    mid: -1,
    leftArr: [],
    rightArr: []
  });
  if (clearMessage) {
    showMessage(translateLegacyRuntime("legacy.731a32faccd0b15a"), 'info');
  }
  updateControlButtons();
}
function updateVisualization() {
  if (currentStepIndex >= 0 && currentStepIndex < simulationSteps.length) {
    const step = simulationSteps[currentStepIndex];
    renderArray(step);
    renderTree(simulationSteps, currentStepIndex);
    updateStepLog();
    if (step.message) {
      const msgType = step.type === OP_DONE ? 'success' : 'info';
      showMessage(step.message, msgType);
    }
    isFinished = currentStepIndex === simulationSteps.length - 1;
  }
  updateControlButtons();
}
function updateStepLog() {
  if (!stepsLog) return;
  const headers = ['#', translateLegacyRuntime("legacy.1937a4fdfca8818c"), translateLegacyRuntime("legacy.2dd5270828b4eee7"), translateLegacyRuntime("legacy.de01789e0a8a5eb1"), translateLegacyRuntime("legacy.3c64ba0afab6c4a8")];
  let tableHTML = `
    <div class="overflow-x-auto rounded-xl border border-gray-200">
      <table class="steps-table">
        <thead><tr>`;
  headers.forEach(h => {
    tableHTML += `<th>${h}</th>`;
  });
  tableHTML += `</tr></thead><tbody>`;
  const displaySteps = simulationSteps.filter(s => s.logOp);
  for (let i = displaySteps.length - 1; i >= 0; i--) {
    const step = displaySteps[i];
    const actualIdx = simulationSteps.indexOf(step);
    const rowClass = actualIdx === currentStepIndex ? 'current-step' : '';
    let opClass = '';
    if (step.type === OP_DIVIDE) opClass = 'op-divide';else if (step.type === OP_COMPARE) opClass = 'op-compare';else if (step.type === OP_PLACE) opClass = 'op-place';else if (step.type === OP_MERGE || step.type === OP_DONE) opClass = 'op-merge';
    tableHTML += `<tr class="${rowClass}">
      <td class="font-bold text-indigo-600">${i + 1}</td>
      <td class="${opClass}">${step.logOp}</td>
      <td class="ltr-cell">${step.logLeft || '\u2014'}</td>
      <td class="ltr-cell">${step.logRight || '\u2014'}</td>
      <td class="ltr-cell">${step.logResult || '\u2014'}</td>
    </tr>`;
  }
  tableHTML += '</tbody></table></div>';
  stepsLog.innerHTML = tableHTML;
}
function showMessage(msg, type) {
  if (!statusMessage) return;
  statusMessage.textContent = msg;
  statusMessage.className = 'status-message ' + type;
}
function updateControlButtons() {
  const nextBtn = document.getElementById('nextButton');
  const prevBtn = document.getElementById('prevButton');
  const startBtn = document.getElementById('startButton');
  if (nextBtn) {
    nextBtn.disabled = isFinished || currentStepIndex >= simulationSteps.length - 1;
  }
  if (prevBtn) {
    prevBtn.disabled = currentStepIndex <= 0;
  }
  if (startBtn) {
    startBtn.disabled = isFinished;
    if (currentStepIndex === -1 && !isFinished) {
      startBtn.textContent = translateLegacyRuntime("legacy.a8094f238fe603c2");
    } else if (isFinished) {
      startBtn.textContent = translateLegacyRuntime("legacy.678b717ab14a2572");
      if (nextBtn) nextBtn.disabled = true;
    } else {
      startBtn.textContent = translateLegacyRuntime("legacy.5eaaff812af33515");
    }
  }
}
Object.assign(window, {
  generateMergeSortSteps: generateMergeSortSteps,
  buildTreeData: buildTreeData,
  renderArray: renderArray,
  renderMergeArea: renderMergeArea,
  renderTree: renderTree,
  startSimulation: startSimulation,
  nextStep: nextStep,
  previousStep: previousStep,
  resetSimulation: resetSimulation,
  updateVisualization: updateVisualization,
  updateStepLog: updateStepLog,
  showMessage: showMessage,
  updateControlButtons: updateControlButtons
});
export { generateMergeSortSteps, buildTreeData, renderArray, renderMergeArea, renderTree, startSimulation, nextStep, previousStep, resetSimulation, updateVisualization, updateStepLog, showMessage, updateControlButtons };
