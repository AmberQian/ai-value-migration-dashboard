const STORAGE_KEY = "avcm-live-dashboard-events";

const layerMeta = {
  "M-模型层": { code: "M", label: "模型层", sub: "商品化", className: "tag-m" },
  "A-应用/入口": { code: "A", label: "入口层", sub: "工作流", className: "tag-a" },
  "C-算力/能源": { code: "C", label: "算力层", sub: "上游", className: "tag-c" },
  "I-Agent基础设施": { code: "I", label: "Agent基建", sub: "卖铲子", className: "tag-i" },
  "S-主权AI": { code: "S", label: "主权AI", sub: "国家/安全", className: "tag-s" },
  "V-价值/信任锚": { code: "V", label: "信任锚", sub: "默认标准", className: "tag-v" },
  "D-DeAI对冲": { code: "D", label: "DeAI对冲", sub: "真实负载", className: "tag-d" },
};

const seedEvents = [
  {
    id: crypto.randomUUID(),
    date: "2026-06-17",
    time: "12:32",
    layer: "M-模型层",
    entity: "智谱 GLM-5.2",
    summary: "GLM-5.2 开源，agentic coding 能力与成本叙事冲击闭源溢价。",
    direction: "下降",
    evidence: "E-个人判断",
    status: "待验证",
    confidence: 3,
    impact: 5,
    source: "文章观察",
  },
  {
    id: crypto.randomUUID(),
    date: "2026-06-17",
    time: "11:58",
    layer: "C-算力/能源",
    entity: "xAI Colossus 2",
    summary: "算力扩建被视作上游租金继续抬升的信号。",
    direction: "上升",
    evidence: "C-单源",
    status: "待验证",
    confidence: 3,
    impact: 4,
    source: "文章观察",
  },
  {
    id: crypto.randomUUID(),
    date: "2026-06-17",
    time: "11:21",
    layer: "A-应用/入口",
    entity: "Cursor / SpaceX",
    summary: "收购传闻强化入口价值：工作流习惯比模型名更难迁移。",
    direction: "上升",
    evidence: "D-传闻",
    status: "待验证",
    confidence: 2,
    impact: 5,
    source: "传闻",
  },
  {
    id: crypto.randomUUID(),
    date: "2026-06-17",
    time: "10:47",
    layer: "A-应用/入口",
    entity: "ChatGPT / Grok / Cursor",
    summary: "用户真正付费的是嵌进日常工作的 UI、快捷键、记忆系统。",
    direction: "上升",
    evidence: "E-个人判断",
    status: "观察中",
    confidence: 4,
    impact: 5,
    source: "文章框架",
  },
  {
    id: crypto.randomUUID(),
    date: "2026-06-17",
    time: "09:32",
    layer: "I-Agent基础设施",
    entity: "TryArcade / NewCore / GoKiteAI",
    summary: "身份、支付、合规、观测性融资，验证 Agent 基建前置。",
    direction: "上升",
    evidence: "C-单源",
    status: "待验证",
    confidence: 3,
    impact: 4,
    source: "文章观察",
  },
  {
    id: crypto.randomUUID(),
    date: "2026-06-17",
    time: "08:55",
    layer: "S-主权AI",
    entity: "Grok / 国家安全体系",
    summary: "模型被纳入安全体系后，估值不再只是商业 DCF。",
    direction: "上升",
    evidence: "C-单源",
    status: "待验证",
    confidence: 2,
    impact: 4,
    source: "文章观察",
  },
  {
    id: crypto.randomUUID(),
    date: "2026-06-17",
    time: "07:44",
    layer: "V-价值/信任锚",
    entity: "OpenAI / Anthropic / DeepMind",
    summary: "前沿模型公司可能保留生态信任锚角色，而非消失。",
    direction: "待观察",
    evidence: "E-个人判断",
    status: "观察中",
    confidence: 3,
    impact: 3,
    source: "文章框架",
  },
  {
    id: crypto.randomUUID(),
    date: "2026-06-17",
    time: "06:18",
    layer: "M-模型层",
    entity: "DeepSeek / Llama / Qwen",
    summary: "开源序列持续把闭源细分能力白菜化，压低模型层定价。",
    direction: "下降",
    evidence: "E-个人判断",
    status: "观察中",
    confidence: 3,
    impact: 4,
    source: "文章框架",
  },
  {
    id: crypto.randomUUID(),
    date: "2026-06-22",
    time: "09:12",
    layer: "D-DeAI对冲",
    entity: "Akash / OpenRouter",
    summary: "去中心化算力市场已支撑约 1.7B tokens/day 级别吞吐，成本对冲从 PPT 进入真实负载验证。",
    direction: "上升",
    evidence: "C-单源",
    status: "待验证",
    confidence: 3,
    impact: 4,
    source: "用户补充",
  },
  {
    id: crypto.randomUUID(),
    date: "2026-06-22",
    time: "09:18",
    layer: "D-DeAI对冲",
    entity: "Darkbloom / EigenLayer",
    summary: "匿名推理与合规推理需求被真实 token 处理量验证，单月处理量超过 6 亿 token。",
    direction: "上升",
    evidence: "C-单源",
    status: "待验证",
    confidence: 3,
    impact: 4,
    source: "用户补充",
  },
  {
    id: crypto.randomUUID(),
    date: "2026-06-22",
    time: "09:24",
    layer: "D-DeAI对冲",
    entity: "Venice",
    summary: "约 7 亿美元市值的隐私 AI 平台体现主权/隐私推理需求韧性，是中心化 AI 的需求侧对冲。",
    direction: "上升",
    evidence: "C-单源",
    status: "待验证",
    confidence: 3,
    impact: 4,
    source: "用户补充",
  },
];

const thesis = [
  ["M-模型层", "模型层正在加速商品化", "开源追平细分能力后，单项能力价格可能在 18 个月内大幅下行。"],
  ["A-应用/入口", "入口层捕获用户时间与心智", "Cursor 这类工具的护城河来自工作流肌肉记忆，而不是某个模型。"],
  ["C-算力/能源", "算力/能源成为稀缺资产", "训练与推理需求将长期推高芯片、电力和数据中心的战略权重。"],
  ["I-Agent基础设施", "Agent 基建先于爆发覆盖", "身份、支付、合规、观测性会在 Agent 真正爆发前先铺好水电煤。"],
  ["S-主权AI", "主权 AI 成为国家级资产", "安全体系接入会引入非商业定价，传统 DCF 解释力下降。"],
  ["D-DeAI对冲", "DeAI 进入真实负载验证阶段", "成本、隐私和主权推理需求开始用 token 吞吐量证明，而不只是靠叙事融资。"],
];

const syntheticSignals = [
  ["M-模型层", "开源模型价格追踪", "同等编码任务 API 成本继续下降，模型层溢价承压。", "下降", "B-多源交叉", "观察中", 4, 4],
  ["A-应用/入口", "企业 IDE 席位续费", "团队续费率提高，入口层工作流黏性增强。", "上升", "C-单源", "观察中", 3, 5],
  ["C-算力/能源", "数据中心电力协议", "长期电力采购扩张，算力上游租金继续被定价。", "上升", "C-单源", "待验证", 3, 4],
  ["I-Agent基础设施", "Agent 权限管理 SDK", "企业系统接入数量上升，卖铲子逻辑继续成立。", "上升", "B-多源交叉", "观察中", 4, 4],
  ["S-主权AI", "政府模型采购", "公共部门采购条款强调安全、可控和本地部署。", "上升", "A-已证实", "已验证", 4, 4],
  ["D-DeAI对冲", "匿名推理吞吐", "隐私推理网络吞吐提升，DeAI 对中心化 AI 形成结构性对冲。", "上升", "C-单源", "待验证", 3, 4],
];

const hedgeMetrics = [
  {
    title: "成本对冲端",
    entity: "Akash / OpenRouter",
    metric: "1.7B",
    unit: "tokens/day",
    copy: "去中心化算力若能继续压低延迟，就有机会成为企业推理成本的外部价格锚。",
  },
  {
    title: "主权/隐私对冲端",
    entity: "Darkbloom / EigenLayer",
    metric: "600M+",
    unit: "tokens/month",
    copy: "匿名推理和合规推理的需求不再只是概念，已经出现可观察的真实负载。",
  },
  {
    title: "隐私入口资产",
    entity: "Venice",
    metric: "$700M",
    unit: "market cap",
    copy: "隐私 AI 入口的估值说明，用户愿意为非中心化、非默认云路径支付期权溢价。",
  },
];

let events = loadEvents();
let timer = null;

const els = {
  layerChecks: () => [...document.querySelectorAll("[data-layer]")],
  statusChecks: () => [...document.querySelectorAll("[data-status]")],
  evidenceFilter: document.querySelector("#evidenceFilter"),
  windowFilter: document.querySelector("#windowFilter"),
  searchInput: document.querySelector("#searchInput"),
  refreshRate: document.querySelector("#refreshRate"),
  autoRefresh: document.querySelector("#autoRefresh"),
  lastUpdated: document.querySelector("#lastUpdated"),
  chart: document.querySelector("#layerChart"),
  hedgeList: document.querySelector("#hedgeList"),
  migrationMap: document.querySelector("#migrationMap"),
  rows: document.querySelector("#eventRows"),
  thesisList: document.querySelector("#thesisList"),
  tableSummary: document.querySelector("#tableSummary"),
  dialog: document.querySelector("#signalDialog"),
  form: document.querySelector("#signalForm"),
};

function loadEvents() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!Array.isArray(saved) || !saved.length) return seedEvents;
    const savedKeys = new Set(saved.map((event) => `${event.layer}|${event.entity}|${event.summary}`));
    const missingSeeds = seedEvents.filter((event) => !savedKeys.has(`${event.layer}|${event.entity}|${event.summary}`));
    return [...missingSeeds, ...saved];
  } catch {
    return seedEvents;
  }
}

function saveEvents() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
}

function nowParts() {
  const now = new Date();
  return {
    date: now.toISOString().slice(0, 10),
    time: now.toTimeString().slice(0, 5),
    stamp: now.toLocaleString("zh-CN", {
      hour12: false,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }),
  };
}

function activeFilters() {
  return {
    layers: new Set(els.layerChecks().filter((x) => x.checked).map((x) => x.dataset.layer)),
    statuses: new Set(els.statusChecks().filter((x) => x.checked).map((x) => x.dataset.status)),
    evidence: els.evidenceFilter.value,
    window: els.windowFilter.value,
    search: els.searchInput.value.trim().toLowerCase(),
  };
}

function filteredEvents() {
  const filters = activeFilters();
  const minDate = filters.window === "all"
    ? null
    : new Date(Date.now() - Number(filters.window) * 24 * 60 * 60 * 1000);

  return events.filter((event) => {
    const searchable = `${event.entity} ${event.summary} ${event.source} ${event.layer}`.toLowerCase();
    const evidenceCode = event.evidence.slice(0, 1);
    return filters.layers.has(event.layer)
      && filters.statuses.has(event.status)
      && (filters.evidence === "all" || evidenceCode === filters.evidence)
      && (!minDate || new Date(event.date) >= minDate)
      && (!filters.search || searchable.includes(filters.search));
  }).sort((a, b) => `${b.date} ${b.time}`.localeCompare(`${a.date} ${a.time}`));
}

function avg(values) {
  if (!values.length) return 0;
  return values.reduce((sum, value) => sum + Number(value || 0), 0) / values.length;
}

function layerStats(list) {
  return Object.keys(layerMeta).map((layer) => {
    const items = list.filter((event) => event.layer === layer);
    return {
      layer,
      count: items.length,
      avgImpact: avg(items.map((event) => event.impact)),
      avgConfidence: avg(items.map((event) => event.confidence)),
    };
  });
}

function render() {
  const list = filteredEvents();
  const stats = layerStats(list);
  const highImpact = list.filter((event) => Number(event.impact) >= 4).length;
  const pending = list.filter((event) => event.status === "待验证" || event.evidence.startsWith("D")).length;
  const avgImpact = avg(list.map((event) => event.impact));
  const hot = [...stats].sort((a, b) => b.avgImpact - a.avgImpact || b.count - a.count)[0];

  document.querySelector("#kpiTotal").textContent = events.length;
  document.querySelector("#kpiTotalSub").textContent = `筛选后 ${list.length}`;
  document.querySelector("#kpiHighImpact").textContent = highImpact;
  document.querySelector("#kpiPending").textContent = pending;
  document.querySelector("#kpiAvg").textContent = avgImpact.toFixed(2);
  document.querySelector("#kpiHotLayer").textContent = hot?.count ? layerMeta[hot.layer].label : "--";
  document.querySelector("#kpiHotScore").textContent = hot?.count ? `均分 ${hot.avgImpact.toFixed(1)}` : "等待信号";
  els.lastUpdated.textContent = `${nowParts().stamp} CST`;
  els.tableSummary.textContent = `当前 ${list.length} 条信号，来自 ${events.length} 条总记录`;

  renderChart(stats);
  renderThesis(list);
  renderHedgeMetrics(list);
  renderMigrationMap(stats);
  renderRows(list);
}

function renderChart(stats) {
  const max = 5;
  els.chart.innerHTML = stats.map((item) => {
    const meta = layerMeta[item.layer];
    const height = item.count ? Math.max(6, (item.avgImpact / max) * 100) : 3;
    return `
      <div class="bar-item">
        <div class="bar" data-score="${item.count ? item.avgImpact.toFixed(1) : "0.0"}" style="height:${height}%"></div>
        <div class="bar-label"><span class="tag ${meta.className}">${meta.code}</span> ${meta.label}</div>
        <div class="bar-sub">${meta.sub} · ${item.count} 条</div>
      </div>
    `;
  }).join("");
}

function renderHedgeMetrics(list) {
  const hedgeEvents = list.filter((event) => event.layer === "D-DeAI对冲");
  const avgScore = avg(hedgeEvents.map((event) => event.impact * event.confidence / 5));
  els.hedgeList.innerHTML = hedgeMetrics.map((metric) => `
    <article class="hedge-card">
      <span>${metric.title}</span>
      <strong>${metric.metric}</strong>
      <small>${metric.unit}</small>
      <h3>${metric.entity}</h3>
      <p>${metric.copy}</p>
    </article>
  `).join("");
  document.querySelector("#hedgeSummary").textContent =
    `当前 ${hedgeEvents.length} 条 DeAI 信号，负载强度均分 ${avgScore ? avgScore.toFixed(1) : "0.0"}`;
}

function renderMigrationMap(stats) {
  const byLayer = new Map(stats.map((item) => [item.layer, item]));
  const nodes = [
    ["M-模型层", "模型层", "前沿溢价下行", 50, 44],
    ["C-算力/能源", "算力/能源", "上游租金", 24, 20],
    ["A-应用/入口", "入口/工作流", "用户时间", 76, 20],
    ["I-Agent基础设施", "Agent基建", "水电煤", 24, 72],
    ["S-主权AI", "主权AI", "安全定价", 76, 72],
    ["D-DeAI对冲", "DeAI对冲", "成本/隐私", 50, 88],
  ];
  const lines = [
    [50, 44, 24, 20],
    [50, 44, 76, 20],
    [50, 44, 24, 72],
    [50, 44, 76, 72],
    [50, 44, 50, 88],
  ];
  const lineMarkup = lines.map(([x1, y1, x2, y2]) => (
    `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" marker-end="url(#arrow)" />`
  )).join("");
  const nodeMarkup = nodes.map(([layer, title, sub, x, y]) => {
    const meta = layerMeta[layer];
    const stat = byLayer.get(layer);
    const score = stat?.count ? stat.avgImpact.toFixed(1) : "0.0";
    return `
      <g class="map-node ${meta.className}" transform="translate(${x} ${y})">
        <circle r="9"></circle>
        <text class="map-code" y="4">${meta.code}</text>
        <text class="map-title" x="13" y="-3">${title}</text>
        <text class="map-sub" x="13" y="10">${sub} · ${score}</text>
      </g>
    `;
  }).join("");
  els.migrationMap.innerHTML = `
    <svg viewBox="0 0 100 105" role="img" aria-label="AI价值迁徙流向图">
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z"></path>
        </marker>
      </defs>
      <g class="migration-lines">${lineMarkup}</g>
      ${nodeMarkup}
    </svg>
  `;
}

function renderThesis(list) {
  els.thesisList.innerHTML = thesis.map(([layer, title, copy]) => {
    const meta = layerMeta[layer];
    const related = list.filter((event) => event.layer === layer);
    const score = avg(related.map((event) => event.confidence / 5 * event.impact / 5));
    const impact = related.some((event) => event.impact >= 4) ? "高影响" : "观察中";
    return `
      <article class="thesis">
        <span class="tag ${meta.className}">${meta.code}</span>
        <div>
          <h3>${title}</h3>
          <p>${copy}</p>
          <p>置信度：${score ? score.toFixed(2) : "0.00"} · 关联信号 ${related.length}</p>
        </div>
        <span class="impact-pill">${impact}</span>
      </article>
    `;
  }).join("");
}

function renderRows(list) {
  els.rows.innerHTML = list.map((event) => {
    const meta = layerMeta[event.layer];
    return `
      <tr>
        <td>${event.date}<br><span class="muted">${event.time}</span></td>
        <td><span class="tag ${meta.className}">${meta.code}</span> ${meta.label}</td>
        <td><strong>${escapeHtml(event.entity)}</strong><br><span class="muted">${escapeHtml(event.source || "")}</span></td>
        <td>${escapeHtml(event.summary)}</td>
        <td><span class="direction ${event.direction === "下降" ? "down" : "up"}">${event.direction}</span></td>
        <td>${event.evidence}</td>
        <td><span class="status ${statusClass(event.status)}">${event.status}</span></td>
        <td>${event.confidence}</td>
        <td>${scoreCells(event.impact)} <span class="muted">${Number(event.impact).toFixed(1)}</span></td>
      </tr>
    `;
  }).join("");
}

function statusClass(status) {
  return {
    "已验证": "ok",
    "待验证": "pending",
    "观察中": "watch",
    "已失效": "dead",
  }[status] || "watch";
}

function scoreCells(score) {
  return `<span class="score-cells">${[1, 2, 3, 4, 5].map((n) => `<span class="${n <= score ? "on" : ""}"></span>`).join("")}</span>`;
}

function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;",
  })[char]);
}

function addSyntheticSignal() {
  const parts = nowParts();
  const pick = syntheticSignals[Math.floor(Math.random() * syntheticSignals.length)];
  events.unshift({
    id: crypto.randomUUID(),
    date: parts.date,
    time: parts.time,
    layer: pick[0],
    entity: pick[1],
    summary: pick[2],
    direction: pick[3],
    evidence: pick[4],
    status: pick[5],
    confidence: pick[6],
    impact: pick[7],
    source: "模拟信号",
  });
  saveEvents();
  render();
}

function scheduleRefresh() {
  clearInterval(timer);
  if (!els.autoRefresh.checked) return;
  timer = setInterval(() => {
    els.lastUpdated.textContent = `${nowParts().stamp} CST`;
  }, Number(els.refreshRate.value) * 1000);
}

function exportCsv() {
  const header = ["日期", "时间", "层级", "实体/事件", "信号摘要", "方向", "证据", "状态", "信心", "影响", "来源"];
  const rows = filteredEvents().map((event) => [
    event.date,
    event.time,
    event.layer,
    event.entity,
    event.summary,
    event.direction,
    event.evidence,
    event.status,
    event.confidence,
    event.impact,
    event.source,
  ]);
  const csv = [header, ...rows]
    .map((row) => row.map((cell) => `"${String(cell ?? "").replaceAll("\"", "\"\"")}"`).join(","))
    .join("\n");
  const blob = new Blob([`\ufeff${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `avcm-signals-${nowParts().date}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function wireEvents() {
  [...document.querySelectorAll("input, select")].forEach((control) => {
    control.addEventListener("input", () => {
      render();
      scheduleRefresh();
    });
  });
  document.querySelector("#clearFilters").addEventListener("click", () => {
    els.layerChecks().forEach((x) => { x.checked = true; });
    els.statusChecks().forEach((x) => { x.checked = true; });
    els.evidenceFilter.value = "all";
    els.windowFilter.value = "all";
    els.searchInput.value = "";
    render();
  });
  document.querySelector("#seedSignal").addEventListener("click", addSyntheticSignal);
  document.querySelector("#exportCsv").addEventListener("click", exportCsv);
  document.querySelector("#resetData").addEventListener("click", () => {
    events = seedEvents.map((event) => ({ ...event, id: crypto.randomUUID() }));
    saveEvents();
    render();
  });
  document.querySelector("#addSignalBtn").addEventListener("click", () => {
    els.form.reset();
    els.form.elements.date.value = nowParts().date;
    els.dialog.showModal();
  });
  els.form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(els.form);
    events.unshift({
      id: crypto.randomUUID(),
      date: data.get("date"),
      time: nowParts().time,
      layer: data.get("layer"),
      entity: data.get("entity"),
      summary: data.get("summary"),
      direction: data.get("direction"),
      evidence: data.get("evidence"),
      status: data.get("status"),
      confidence: Number(data.get("confidence")),
      impact: Number(data.get("impact")),
      source: data.get("source"),
    });
    saveEvents();
    els.dialog.close();
    render();
  });
}

wireEvents();
render();
scheduleRefresh();
