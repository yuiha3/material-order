const supplies = [
  {
    category: "資材",
    manufacturer: "ダイヤテックス",
    name: "パイオランテープ50mm x 25m",
    quantity: 1,
    unitOptions: ["箱"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "Nitto",
    name: "ニトクロステープ茶色No.7503  30mm x 25m",
    quantity: 1,
    unitOptions: ["箱"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "カモ井",
    name: "ルパン(24mm)",
    quantity: 1,
    unitOptions: ["箱", "パック"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "カモ井",
    name: "ルパンクーペ(24mm)",
    quantity: 1,
    unitOptions: ["箱", "パック"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "カモ井",
    name: "グレートサスケ(24mm)",
    quantity: 1,
    unitOptions: ["箱", "パック"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "カモ井",
    name: "SR-100 シリコーンテープ(18mm)",
    quantity: 1,
    unitOptions: ["箱", "パック"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "スコッチ",
    name: "マスキングテープ 99BB",
    quantity: 1,
    unitOptions: ["箱", "パック"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "スコッチ",
    name: "マスキングテープ 80S",
    quantity: 1,
    unitOptions: ["箱", "パック"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "大塚刷毛",
    name: "コロナマスカー(ミニタイプ25m) 300mm",
    quantity: 1,
    unitOptions: ["箱"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "大塚刷毛",
    name: "コロナマスカー(ミニタイプ25m) 550mm",
    quantity: 1,
    unitOptions: ["箱"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "大塚刷毛",
    name: "コロナマスカー(ミニタイプ25m) 1100mm",
    quantity: 1,
    unitOptions: ["箱"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "大塚刷毛",
    name: "さげっと用 内容器凹凸",
    quantity: 1,
    unitOptions: ["箱"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "大塚刷毛",
    name: "タッチアップセパレート容器 ハーフ",
    quantity: 1,
    unitOptions: ["箱"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "大塚刷毛",
    name: "タッチアップセパレート容器 クォーター",
    quantity: 1,
    unitOptions: ["箱"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "大塚刷毛",
    name: "一斗缶内容器",
    quantity: 1,
    unitOptions: ["箱"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "大塚刷毛",
    name: "ローラーバケットSXタイプ内容器",
    quantity: 1,
    unitOptions: ["箱"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "大塚刷毛",
    name: "らくらくカートリッジ1型",
    quantity: 1,
    unitOptions: ["箱"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "大塚刷毛",
    name: "らくらくカートリッジ3型",
    quantity: 1,
    unitOptions: ["箱"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "大塚刷毛",
    name: "豚毛金巻 8号",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "大塚刷毛",
    name: "BKラスターN短柄 1.5インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "大塚刷毛",
    name: "BKラスターN短柄 2インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "大塚刷毛",
    name: "BKラスターN短柄 2.5インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "大塚刷毛",
    name: "スカーレットEX(25mm) 6インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "大塚刷毛",
    name: "スカーレットEX(20mm) 6インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "大塚刷毛",
    name: "スカーレットEX(20mm) 3インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "大塚刷毛",
    name: "ツイスト(18mm) 6インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "大塚刷毛",
    name: "ツイスト(18mm) 4インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "大塚刷毛",
    name: "ツイスト(18mm) 3インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "大塚刷毛",
    name: "スクリュー(21mm) 6インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "大塚刷毛",
    name: "スクリュー(21mm) 4インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "大塚刷毛",
    name: "Sky(13mm) 6インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "大塚刷毛",
    name: "Sky(13mm) 4インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "大塚刷毛",
    name: "Sky(13mm) 3インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "大塚刷毛",
    name: "Micro ACE(13mm) 6インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "大塚刷毛",
    name: "Micro ACE(13mm) 4インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "資材",
    manufacturer: "大塚刷毛",
    name: "Micro ACE(13mm) 3インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  }
];

const paints = [
  {
    category: "塗装",
    manufacturer: "関西ペイント",
    name: "アレスホルダーHG",
    capacityOptions: ["16kg"],
    defaultCapacity: "16kg",
    quantity: 1,
    unitOptions: ["缶"],
    defaultUnit: "缶",
    colorMode: "none",
    colorNameOptions: [],
    defaultColorName: "",
    colorCodeEnabled: false,
    defaultColorCode: "",
    glossOptions: [],
    defaultGloss: ""
  },
  {
    category: "塗装",
    manufacturer: "関西ペイント",
    name: "アレスダイナミックフィラー",
    capacityOptions: ["16kg"],
    defaultCapacity: "16kg",
    quantity: 1,
    unitOptions: ["缶"],
    defaultUnit: "缶",
    colorMode: "none",
    colorNameOptions: [],
    defaultColorName: "",
    colorCodeEnabled: false,
    defaultColorCode: "",
    glossOptions: [],
    defaultGloss: ""
  },
  {
    category: "塗装",
    manufacturer: "関西ペイント",
    name: "アレスダイナミックプラサフII",
    capacityOptions: ["16kg"],
    defaultCapacity: "16kg",
    quantity: 1,
    unitOptions: ["缶"],
    defaultUnit: "缶",
    colorMode: "none",
    colorNameOptions: [],
    defaultColorName: "",
    colorCodeEnabled: false,
    defaultColorCode: "",
    glossOptions: [],
    defaultGloss: ""
  },
  {
    category: "塗装",
    manufacturer: "関西ペイント",
    name: "アレスダイナミックTOP",
    capacityOptions: ["16kg", "4kg"],
    defaultCapacity: "16kg",
    quantity: 1,
    unitOptions: ["缶"],
    defaultUnit: "缶",
    colorMode: "code",
    colorNameOptions: [],
    defaultColorName: "",
    colorCodeEnabled: true,
    defaultColorCode: "",
    glossOptions: ["艶あり", "7分艶", "半艶", "3分艶", "艶なし"],
    defaultGloss: "艶あり"
  },
  {
    category: "塗装",
    manufacturer: "関西ペイント",
    name: "セラMレタン",
    capacityOptions: ["16kg", "4kg"],
    defaultCapacity: "16kg",
    quantity: 1,
    unitOptions: ["缶"],
    defaultUnit: "缶",
    colorMode: "code",
    colorNameOptions: [],
    defaultColorName: "",
    colorCodeEnabled: true,
    defaultColorCode: "",
    glossOptions: ["艶あり", "7分艶", "半艶", "3分艶", "艶なし"],
    defaultGloss: "艶あり"
  },
  {
    category: "塗装",
    manufacturer: "関西ペイント",
    name: "セラMシリコン",
    capacityOptions: ["16kg", "4kg"],
    defaultCapacity: "16kg",
    quantity: 1,
    unitOptions: ["缶"],
    defaultUnit: "缶",
    colorMode: "code",
    colorNameOptions: [],
    defaultColorName: "",
    colorCodeEnabled: true,
    defaultColorCode: "",
    glossOptions: ["艶あり", "7分艶", "半艶", "3分艶", "艶なし"],
    defaultGloss: "艶あり"
  },
  {
    category: "塗装",
    manufacturer: "関西ペイント",
    name: "スーパーザウルスII",
    capacityOptions: ["16kg", "4kg"],
    defaultCapacity: "16kg",
    quantity: 1,
    unitOptions: ["缶"],
    defaultUnit: "缶",
    colorMode: "name",
    colorNameOptions: ["白", "グレー", "赤さび", "黒さび"],
    defaultColorName: "白",
    colorCodeEnabled: false,
    defaultColorCode: "",
    glossOptions: [],
    defaultGloss: ""
  },
  {
    category: "塗装",
    manufacturer: "エスケー化研",
    name: "水性ミラクシーラーエコ",
    capacityOptions: ["15kg"],
    defaultCapacity: "15kg",
    quantity: 1,
    unitOptions: ["缶"],
    defaultUnit: "缶",
    colorMode: "name",
    colorNameOptions: ["クリヤー", "ホワイト"],
    defaultColorName: "クリヤー",
    colorCodeEnabled: false,
    defaultColorCode: "",
    glossOptions: [],
    defaultGloss: ""
  },
  {
    category: "塗装",
    manufacturer: "エスケー化研",
    name: "水性エコファイン",
    capacityOptions: ["16kg", "4kg"],
    defaultCapacity: "16kg",
    quantity: 1,
    unitOptions: ["缶"],
    defaultUnit: "缶",
    colorMode: "code",
    colorNameOptions: [],
    defaultColorName: "",
    colorCodeEnabled: true,
    defaultColorCode: "",
    glossOptions: ["艶あり", "半艶", "3分艶", "艶なし"],
    defaultGloss: "艶あり"
  },
  {
    category: "塗装",
    manufacturer: "日本ペイント",
    name: "水性ケンエース",
    capacityOptions: ["16kg", "4kg"],
    defaultCapacity: "16kg",
    quantity: 1,
    unitOptions: ["缶"],
    defaultUnit: "缶",
    colorMode: "code",
    colorNameOptions: [],
    defaultColorName: "",
    colorCodeEnabled: true,
    defaultColorCode: "N-90",
    glossOptions: ["艶なし"],
    defaultGloss: "艶なし"
  },
  {
    category: "塗装",
    manufacturer: "日本ペイント",
    name: "水性ケンエースグロス",
    capacityOptions: ["16kg", "4kg"],
    defaultCapacity: "16kg",
    quantity: 1,
    unitOptions: ["缶"],
    defaultUnit: "缶",
    colorMode: "code",
    colorNameOptions: [],
    defaultColorName: "",
    colorCodeEnabled: true,
    defaultColorCode: "N-90",
    glossOptions: ["艶あり", "7分艶", "半艶", "3分艶"],
    defaultGloss: "艶あり"
  }
];

const sealants = [];
const waterproofs = [];

const STAFF_NAMES = ["山下", "藤ノ木", "高崎"];
const PLACEHOLDER_TEXT = "(選択した材料がここに表示されます)";

const appState = {
  activeTab: "資材",
  selectedStaffName: "山下",
  selectedItems: {}
};

const makersContainer = document.getElementById("makersContainer");
const resultText = document.getElementById("resultText");
const selectedCountEl = document.getElementById("selectedCount");
const previewMeta = document.getElementById("previewMeta");
const searchInput = document.getElementById("searchInput");
const copyBtn = document.getElementById("copyBtn");
const resetBtn = document.getElementById("resetBtn");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const staffSelect = document.getElementById("staffSelect");
const tabButtons = document.querySelectorAll(".tab-btn");
const scrollToBottomBtn = document.getElementById("scrollToBottomBtn");

function getItemsByTab(tabName) {
  switch (tabName) {
    case "資材":
      return supplies;
    case "塗装":
      return paints;
    case "シール":
      return sealants;
    case "防水":
      return waterproofs;
    default:
      return [];
  }
}

function getHeaderText() {
  return `お世話になります。
4Uの${appState.selectedStaffName}です。
下記の注文を新座倉庫入れでお願いいたします。`;
}

function createInitialSelection(item) {
  return {
    manufacturer: item.manufacturer,
    name: item.name,
    quantity: item.quantity ?? 1,
    unit: item.defaultUnit ?? "",
    capacity: item.defaultCapacity ?? "",
    colorName: item.defaultColorName ?? "",
    colorCode: item.defaultColorCode ?? "",
    gloss: item.defaultGloss ?? ""
  };
}

function toggleItemSelection(item) {
  if (appState.selectedItems[item.name]) {
    delete appState.selectedItems[item.name];
  } else {
    appState.selectedItems[item.name] = createInitialSelection(item);
  }
  render();
}

function groupByManufacturer(items) {
  const grouped = {};
  items.forEach(item => {
    if (!grouped[item.manufacturer]) {
      grouped[item.manufacturer] = [];
    }
    grouped[item.manufacturer].push(item);
  });
  return grouped;
}

function createSelect(options, value, onChange, disabled = false) {
  const select = document.createElement("select");

  options.forEach(optionValue => {
    const option = document.createElement("option");
    option.value = optionValue;
    option.textContent = optionValue;
    if (optionValue === value) option.selected = true;
    select.appendChild(option);
  });

  select.disabled = disabled;

  select.addEventListener("change", (e) => {
    e.stopPropagation();
    onChange(e);
    refreshPreview();
  });

  select.addEventListener("click", (e) => e.stopPropagation());

  return select;
}

function createInput(type, value, placeholder, onInput, disabled = false) {
  const input = document.createElement("input");
  input.type = type;
  input.value = value;
  input.placeholder = placeholder;
  input.disabled = disabled;

  input.addEventListener("input", (e) => {
    e.stopPropagation();
    onInput(e);
    refreshPreview();
  });

  input.addEventListener("click", (e) => e.stopPropagation());

  return input;
}

function buildControlField(labelText, control) {
  const wrap = document.createElement("div");
  wrap.className = "field";

  const label = document.createElement("label");
  label.textContent = labelText;

  wrap.appendChild(label);
  wrap.appendChild(control);

  return wrap;
}

function buildSupplyControls(item, selected) {
  const controls = document.createElement("div");
  controls.className = "controls";

  const row = document.createElement("div");
  row.className = "inline-pair";

  const quantityControl = createInput("number", selected.quantity, "数量", (e) => {
    selected.quantity = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = selected.quantity;
  });
  quantityControl.min = "0";
  quantityControl.inputMode = "numeric";

  const unitControl = createSelect(item.unitOptions, selected.unit, (e) => {
    selected.unit = e.target.value;
  });

  row.appendChild(buildControlField("数量", quantityControl));
  row.appendChild(buildControlField("単位", unitControl));
  controls.appendChild(row);

  return controls;
}

function buildPaintControls(item, selected) {
  const controls = document.createElement("div");
  controls.className = "controls";

  const topRow = document.createElement("div");
  topRow.className = "inline-triple";

  const capacityControl =
    item.capacityOptions.length === 1
      ? createInput("text", item.capacityOptions[0], "", () => {}, true)
      : createSelect(item.capacityOptions, selected.capacity, (e) => {
          selected.capacity = e.target.value;
        });

  const quantityControl = createInput("number", selected.quantity, "数量", (e) => {
    selected.quantity = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = selected.quantity;
  });
  quantityControl.min = "0";
  quantityControl.inputMode = "numeric";

  const unitControl = createSelect(item.unitOptions, selected.unit, (e) => {
    selected.unit = e.target.value;
  });

  topRow.appendChild(buildControlField("容量", capacityControl));
  topRow.appendChild(buildControlField("数量", quantityControl));
  topRow.appendChild(buildControlField("単位", unitControl));
  controls.appendChild(topRow);

  const secondRow = document.createElement("div");
  secondRow.className = "inline-pair";

  if (item.colorMode === "code") {
    const colorCodeInput = createInput("text", selected.colorCode, "色番", (e) => {
      selected.colorCode = e.target.value.trim();
    });
    secondRow.appendChild(buildControlField("色番", colorCodeInput));
  }

  if (item.colorMode === "name") {
    const colorNameSelect = createSelect(item.colorNameOptions, selected.colorName, (e) => {
      selected.colorName = e.target.value;
    });
    secondRow.appendChild(buildControlField("色", colorNameSelect));
  }

  if (item.glossOptions.length > 0) {
    const glossSelect = createSelect(item.glossOptions, selected.gloss, (e) => {
      selected.gloss = e.target.value;
    });
    secondRow.appendChild(buildControlField("艶", glossSelect));
  }

  if (secondRow.children.length > 0) {
    controls.appendChild(secondRow);
  }

  return controls;
}

function buildItemCard(item) {
  const isSelected = Boolean(appState.selectedItems[item.name]);
  const selected = appState.selectedItems[item.name];

  const card = document.createElement("div");
  card.className = `item-card${isSelected ? " selected" : ""}`;

  const top = document.createElement("div");
  top.className = "item-top";

  const toggle = document.createElement("div");
  toggle.className = "select-toggle";
  toggle.addEventListener("click", () => {
    toggleItemSelection(item);
  });

  const check = document.createElement("div");
  check.className = "check";
  check.textContent = "✓";

  const textWrap = document.createElement("div");
  textWrap.style.minWidth = "0";

  const itemName = document.createElement("div");
  itemName.className = "item-name";
  itemName.textContent = item.name;

  const makerName = document.createElement("div");
  makerName.className = "mini-maker";
  makerName.textContent = item.manufacturer;

  textWrap.appendChild(itemName);
  textWrap.appendChild(makerName);
  toggle.appendChild(check);
  toggle.appendChild(textWrap);
  top.appendChild(toggle);
  card.appendChild(top);

  if (isSelected) {
    if (item.category === "塗装") {
      card.appendChild(buildPaintControls(item, selected));
    } else {
      card.appendChild(buildSupplyControls(item, selected));
    }
  }

  return card;
}

function renderItemList(items) {
  makersContainer.innerHTML = "";

  const grouped = groupByManufacturer(items);
  const manufacturers = Object.keys(grouped);

  if (manufacturers.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = `${appState.activeTab}タブには表示できる項目がありません。`;
    makersContainer.appendChild(empty);
    return;
  }

  manufacturers.forEach((manufacturer) => {
    const section = document.createElement("section");
    section.className = "maker-section";

    const header = document.createElement("div");
    header.className = "maker-header";

    const title = document.createElement("div");
    title.className = "maker-title";
    title.textContent = manufacturer;

    const count = document.createElement("div");
    count.className = "maker-count";
    const selectedCount = grouped[manufacturer].filter(item => appState.selectedItems[item.name]).length;
    count.textContent = `${selectedCount}/${grouped[manufacturer].length}`;

    header.appendChild(title);
    header.appendChild(count);
    section.appendChild(header);

    const itemsWrap = document.createElement("div");
    itemsWrap.className = "items";

    grouped[manufacturer].forEach((item) => {
      itemsWrap.appendChild(buildItemCard(item));
    });

    section.appendChild(itemsWrap);
    makersContainer.appendChild(section);
  });
}

function buildOrderLines() {
  const grouped = {};

  Object.values(appState.selectedItems).forEach((selected) => {
    if (!grouped[selected.manufacturer]) {
      grouped[selected.manufacturer] = [];
    }

    const parts = [selected.name];

    if (selected.capacity) parts.push(selected.capacity);
    if (selected.colorName) parts.push(selected.colorName);
    if (selected.colorCode) parts.push(`色番:${selected.colorCode}`);
    if (selected.gloss) parts.push(selected.gloss);

    let line = parts.join(" ");
    line += `  ${selected.quantity}${selected.unit}`;

    grouped[selected.manufacturer].push(line);
  });

  const lines = [];

  Object.keys(grouped).forEach((manufacturer) => {
    lines.push(manufacturer);
    lines.push(...grouped[manufacturer]);
    lines.push("");
  });

  if (lines.length && lines[lines.length - 1] === "") {
    lines.pop();
  }

  return lines;
}

function refreshPreview() {
  const ordered = buildOrderLines();
  const count = Object.keys(appState.selectedItems).length;

  selectedCountEl.textContent = String(count);

  if (!ordered.length) {
    resultText.value = PLACEHOLDER_TEXT;
    previewMeta.textContent = "未選択";
  } else {
    resultText.value = `${getHeaderText()}\n\n${ordered.join("\n")}`;
    previewMeta.textContent = `${count}件選択中`;
  }
}

function render() {
  const items = getItemsByTab(appState.activeTab);
  const keyword = searchInput.value.trim().toLowerCase();

  const filteredItems = items.filter((item) => {
    return `${item.manufacturer} ${item.name}`.toLowerCase().includes(keyword);
  });

  renderItemList(filteredItems);
  refreshPreview();
}

async function copyResult() {
  const value = resultText.value;
  if (!value || value === PLACEHOLDER_TEXT) return;

  try {
    await navigator.clipboard.writeText(value);
    const original = copyBtn.textContent;
    copyBtn.textContent = "コピーしました";
    copyBtn.classList.add("success");
    setTimeout(() => {
      copyBtn.textContent = original;
      copyBtn.classList.remove("success");
    }, 1400);
  } catch {
    resultText.focus();
    resultText.select();
    document.execCommand("copy");
  }
}

function resetAll() {
  appState.selectedItems = {};
  render();
}

function updateScrollButtonVisibility() {
  if (!scrollToBottomBtn) return;

  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;

  if (scrollTop + windowHeight >= fullHeight - 80) {
    scrollToBottomBtn.classList.add("hidden");
  } else {
    scrollToBottomBtn.classList.remove("hidden");
  }
}

STAFF_NAMES.forEach((name) => {
  const option = document.createElement("option");
  option.value = name;
  option.textContent = name;
  if (name === appState.selectedStaffName) option.selected = true;
  staffSelect.appendChild(option);
});

staffSelect.addEventListener("change", (e) => {
  appState.selectedStaffName = e.target.value;
  refreshPreview();
});

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    appState.activeTab = btn.dataset.tab;
    tabButtons.forEach((x) => x.classList.remove("active"));
    btn.classList.add("active");
    render();
  });
});

searchInput.addEventListener("input", render);

clearSearchBtn.addEventListener("click", () => {
  searchInput.value = "";
  render();
});

copyBtn.addEventListener("click", copyResult);
resetBtn.addEventListener("click", resetAll);

if (scrollToBottomBtn) {
  scrollToBottomBtn.addEventListener("click", () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  });

  window.addEventListener("scroll", updateScrollButtonVisibility);
  window.addEventListener("resize", updateScrollButtonVisibility);
}

resultText.value = PLACEHOLDER_TEXT;
render();
updateScrollButtonVisibility();
