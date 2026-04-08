const MATERIALS = {
  "ダイヤテックス": [
    "パイオランテープ50mm x 25m",
  ],
  "Nitto": [
    "ニトクロステープ茶色No.7503  30mm x 25m",
  ],
  "カモ井": [
    "ルパン(24mm)",
    "ルパンクーペ(24mm)",
    "グレートサスケ(24mm)",
    "SR-100 シリコーンテープ(18mm)",
  ],
  "スコッチ": [
    "マスキングテープ 99BB",
    "マスキングテープ 80S",
  ],
  "大塚刷毛(マスカー・容器)": [
    "コロナマスカー(ミニタイプ25m) 300mm",
    "コロナマスカー(ミニタイプ25m) 550mm",
    "コロナマスカー(ミニタイプ25m) 1100mm",
    "さげっと用 内容器凹凸",
    "タッチアップセパレート容器 ハーフ",
    "タッチアップセパレート容器 クォーター",
    "一斗缶内容器",
    "ローラーバケットSXタイプ内容器",
    "らくらくカートリッジ1型",
    "らくらくカートリッジ2型",
    "らくらくカートリッジ3型",
    "豚毛金巻 8号",
    "BKラスターN短柄 1.5インチ",
    "BKラスターN短柄 2インチ",
    "BKラスターN短柄 2.5インチ",
    "BKラスターN短柄 3インチ",
  ],
  "大塚刷毛(ローラー)": [
    "スカーレットEX(25mm) 6インチ",
    "スカーレットEX(20mm) 6インチ",
    "スカーレットEX(20mm) 3インチ",
    "ツイスト(18mm) 6インチ",
    "ツイスト(18mm) 4インチ",
    "ツイスト(18mm) 3インチ",
    "スクリュー(21mm) 6インチ",
    "スクリュー(21mm) 4インチ",
    "Sky(13mm) 6インチ",
    "Sky(13mm) 4インチ",
    "Sky(13mm) 3インチ",
    "Micro ACE(13mm) 6インチ",
    "Micro ACE(13mm) 4インチ",
    "Micro ACE(13mm) 3インチ",
  ],
  "関西ペイント": [
    "アレスホルダーHG 16kg",
    "アレスホルダーダイナミックフィラー 16kg",
    "アレスダイナミックプラサフII 16kg",
    "アレスダイナミックTOP",
    "セラMレタン",
    "セラMシリコン",
    "スーパーザウルスII",
  ],
  "エスケー化研": [
    "水性ミラクシーラーエコ",
    "水性エコファイン",
  ],
  "日本ペイン": [
    "水性ケンエース",
    "水性ケンエースグロス",
  ],
};

const DISPLAY_MAKER_NAMES = {
  "大塚刷毛(マスカー・容器)": "大塚刷毛",
  "大塚刷毛(ローラー)": "大塚刷毛",
};

const UNITS = ["箱", "袋", "缶"];
const SIZES = ["16kg", "4kg"];
const SHEENS = ["艶あり", "7分艶", "半艶", "3分艶", "艶なし"];
const ECOFINE_SHEENS = ["艶あり", "半艶", "3分艶", "艶なし"];
const KENACE_GLOSS_SHEENS = ["艶あり", "7分艶", "半艶", "3分艶"];
const ZAURUS_COLORS = ["白", "グレー", "赤さび", "黒さび"];
const SK_MIRACLE_COLORS = ["クリヤー", "ホワイト"];

const SPECIAL_PAINT_ITEMS = new Set([
  "アレスダイナミックTOP",
  "セラMレタン",
  "セラMシリコン",
]);

const ECOFINE_ITEMS = new Set(["水性エコファイン"]);
const RUST_PAINT_ITEMS = new Set(["スーパーザウルスII"]);
const SK_COLOR_ITEMS = new Set(["水性ミラクシーラーエコ"]);
const KENACE_FIXED_ITEMS = new Set(["水性ケンエース"]);
const KENACE_GLOSS_ITEMS = new Set(["水性ケンエースグロス"]);

const STAFF_NAMES = ["高崎", "上田", "石澤", "栗原", "齊藤", "ウンス", "滝本", "山下", "藤ノ木", "福王寺", "大浦"];
let selectedStaffName = "藤ノ木";

const PLACEHOLDER_TEXT = "(選択した材料がここに表示されます)";
const TAB_CONFIG = {
  "資材": ["ダイヤテックス", "Nitto", "カモ井", "スコッチ", "大塚刷毛(マスカー・容器)", "大塚刷毛(ローラー)"],
  "塗装": ["関西ペイント", "エスケー化研", "日本ペイン"],
  "シール": [],
  "防水": [],
};

let activeTab = "資材";
const selectedItems = {};

const makersContainer = document.getElementById("makersContainer");
const resultText = document.getElementById("resultText");
const selectedCountEl = document.getElementById("selectedCount");
const makerCountEl = document.getElementById("makerCount");
const previewMeta = document.getElementById("previewMeta");
const searchInput = document.getElementById("searchInput");
const copyBtn = document.getElementById("copyBtn");
const resetBtn = document.getElementById("resetBtn");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const staffSelect = document.getElementById("staffSelect");
const tabButtons = document.querySelectorAll(".tab-btn");

function getHeaderText() {
  return `お世話になります。
4Uの${selectedStaffName}です。
下記の注文を新座倉庫入れでお願いいたします。`;
}

function defaultUnitForMaker(maker) {
  return ["関西ペイント", "エスケー化研", "日本ペイン"].includes(maker) ? "缶" : "箱";
}

function isSpecialItem(item) {
  return SPECIAL_PAINT_ITEMS.has(item);
}

function isEcofineItem(item) {
  return ECOFINE_ITEMS.has(item);
}

function isRustItem(item) {
  return RUST_PAINT_ITEMS.has(item);
}

function isSkColorItem(item) {
  return SK_COLOR_ITEMS.has(item);
}

function isKenaceFixedItem(item) {
  return KENACE_FIXED_ITEMS.has(item);
}

function isKenaceGlossItem(item) {
  return KENACE_GLOSS_ITEMS.has(item);
}

function isAnySizeColorSheenItem(item) {
  return (
    isSpecialItem(item) ||
    isEcofineItem(item) ||
    isKenaceFixedItem(item) ||
    isKenaceGlossItem(item)
  );
}

function defaultSheenForItem(item) {
  if (isKenaceFixedItem(item)) return "艶なし";
  if (isKenaceGlossItem(item)) return "艶あり";
  if (isEcofineItem(item)) return "艶あり";
  return "艶あり";
}

function sheenValuesForItem(item) {
  if (isKenaceFixedItem(item)) return ["艶なし"];
  if (isKenaceGlossItem(item)) return KENACE_GLOSS_SHEENS;
  if (isEcofineItem(item)) return ECOFINE_SHEENS;
  return SHEENS;
}

function defaultColorForItem(item) {
  if (isKenaceFixedItem(item) || isKenaceGlossItem(item)) return "N-90";
  return "";
}

function getDisplayMakerName(maker) {
  return DISPLAY_MAKER_NAMES[maker] || maker;
}

function createSelect(options, value, onChange) {
  const select = document.createElement("select");
  options.forEach(optionValue => {
    const option = document.createElement("option");
    option.value = optionValue;
    option.textContent = optionValue;
    if (optionValue === value) option.selected = true;
    select.appendChild(option);
  });
  select.addEventListener("change", onChange);
  return select;
}

function createInput(type, value, placeholder, onInput) {
  const input = document.createElement("input");
  input.type = type;
  input.value = value;
  input.placeholder = placeholder;
  input.addEventListener("input", onInput);
  return input;
}

function ensureSelectedDefaults(maker, item) {
  if (!selectedItems[item]) {
    selectedItems[item] = {
      qty: "1",
      unit: defaultUnitForMaker(maker),
    };

    if (isAnySizeColorSheenItem(item)) {
      selectedItems[item].size = "16kg";
      selectedItems[item].color = defaultColorForItem(item);
      selectedItems[item].sheen = defaultSheenForItem(item);
    }

    if (isRustItem(item)) {
      selectedItems[item].size = "16kg";
      selectedItems[item].rust_color = "白";
    }

    if (isSkColorItem(item)) {
      selectedItems[item].sk_color = "クリヤー";
    }
  }
}

function toggleItemSelection(maker, item) {
  if (selectedItems[item]) {
    delete selectedItems[item];
  } else {
    ensureSelectedDefaults(maker, item);
  }
  render();
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

function buildOrderLines() {
  const grouped = {};

  Object.entries(MATERIALS).forEach(([maker, items]) => {
    const displayMaker = getDisplayMakerName(maker);
    if (!grouped[displayMaker]) grouped[displayMaker] = [];

    items.forEach(item => {
      if (!selectedItems[item]) return;
      const data = selectedItems[item];
      const parts = [item];

      if (isAnySizeColorSheenItem(item)) {
        if (data.size) parts.push(data.size);
        if (data.color) parts.push(`色番:${data.color}`);
        if (data.sheen) parts.push(data.sheen);
      } else if (isRustItem(item)) {
        if (data.size) parts.push(data.size);
        if (data.rust_color) parts.push(data.rust_color);
      } else if (isSkColorItem(item)) {
        parts.push("15kg");
        if (data.sk_color) parts.push(data.sk_color);
      }

      let line = parts.join(" ");
      if (data.qty) line += `  ${data.qty}${data.unit}`;
      grouped[displayMaker].push(line);
    });
  });

  const ordered = [];
  const added = new Set();

  Object.keys(MATERIALS).forEach(maker => {
    const displayMaker = getDisplayMakerName(maker);
    if (added.has(displayMaker)) return;
    if (grouped[displayMaker] && grouped[displayMaker].length) {
      ordered.push(displayMaker);
      ordered.push(...grouped[displayMaker]);
      ordered.push("");
      added.add(displayMaker);
    }
  });

  if (ordered.length && ordered[ordered.length - 1] === "") {
    ordered.pop();
  }

  return ordered;
}

function updatePreview() {
  const ordered = buildOrderLines();
  const count = Object.keys(selectedItems).length;
  const selectedMakerCount = new Set(
    Object.entries(MATERIALS)
      .filter(([, items]) => items.some(item => selectedItems[item]))
      .map(([maker]) => getDisplayMakerName(maker))
  ).size;

  selectedCountEl.textContent = String(count);
  makerCountEl.textContent = String(selectedMakerCount);

  if (!ordered.length) {
    resultText.value = PLACEHOLDER_TEXT;
    previewMeta.textContent = "未選択";
  } else {
    resultText.value = `${getHeaderText()}\n\n${ordered.join("\n")}`;
    previewMeta.textContent = `${count}件選択中`;
  }
}

function buildItemCard(maker, item) {
  const isSelected = Boolean(selectedItems[item]);
  const card = document.createElement("div");
  card.className = `item-card${isSelected ? " selected" : ""}`;

  const top = document.createElement("div");
  top.className = "item-top";

  const toggle = document.createElement("div");
  toggle.className = "select-toggle";
  toggle.addEventListener("click", () => toggleItemSelection(maker, item));

  const check = document.createElement("div");
  check.className = "check";
  check.textContent = "✓";

  const textWrap = document.createElement("div");
  textWrap.style.minWidth = "0";

  const itemName = document.createElement("div");
  itemName.className = "item-name";
  itemName.textContent = item;

  const makerName = document.createElement("div");
  makerName.className = "mini-maker";
  makerName.textContent = getDisplayMakerName(maker);

  textWrap.appendChild(itemName);
  textWrap.appendChild(makerName);
  toggle.appendChild(check);
  toggle.appendChild(textWrap);
  top.appendChild(toggle);
  card.appendChild(top);

  if (isSelected) {
    const controls = document.createElement("div");
    controls.className = "controls";
    const data = selectedItems[item];

    const qtyInput = createInput("number", data.qty || "1", "数量", (e) => {
      selectedItems[item].qty = e.target.value.replace(/[^0-9]/g, "");
      e.target.value = selectedItems[item].qty;
      updatePreview();
    });
    qtyInput.min = "0";
    qtyInput.inputMode = "numeric";
    controls.appendChild(buildControlField("数量", qtyInput));

    const unitSelect = createSelect(UNITS, data.unit, (e) => {
      selectedItems[item].unit = e.target.value;
      updatePreview();
    });
    controls.appendChild(buildControlField("単位", unitSelect));

    if (isAnySizeColorSheenItem(item)) {
      const sizeSelect = createSelect(SIZES, data.size || "16kg", (e) => {
        selectedItems[item].size = e.target.value;
        updatePreview();
      });
      controls.appendChild(buildControlField("容量", sizeSelect));

      const colorInput = createInput("text", data.color || "", "色番", (e) => {
        selectedItems[item].color = e.target.value.trim();
        updatePreview();
      });
      controls.appendChild(buildControlField("色番", colorInput));

      const sheenSelect = createSelect(
        sheenValuesForItem(item),
        data.sheen || defaultSheenForItem(item),
        (e) => {
          selectedItems[item].sheen = e.target.value;
          updatePreview();
        }
      );
      controls.appendChild(buildControlField("艶", sheenSelect));
    } else if (isRustItem(item)) {
      const sizeSelect = createSelect(SIZES, data.size || "16kg", (e) => {
        selectedItems[item].size = e.target.value;
        updatePreview();
      });
      controls.appendChild(buildControlField("容量", sizeSelect));

      const rustSelect = createSelect(ZAURUS_COLORS, data.rust_color || "白", (e) => {
        selectedItems[item].rust_color = e.target.value;
        updatePreview();
      });
      controls.appendChild(buildControlField("色", rustSelect));
    } else if (isSkColorItem(item)) {
      const fixedWeight = createInput("text", "15kg", "", () => {});
      fixedWeight.disabled = true;
      controls.appendChild(buildControlField("容量", fixedWeight));

      const skSelect = createSelect(SK_MIRACLE_COLORS, data.sk_color || "クリヤー", (e) => {
        selectedItems[item].sk_color = e.target.value;
        updatePreview();
      });
      controls.appendChild(buildControlField("色", skSelect));
    }

    card.appendChild(controls);
  }

  return card;
}

function render() {
  const keyword = searchInput.value.trim().toLowerCase();
  makersContainer.innerHTML = "";

  const allowedMakers = TAB_CONFIG[activeTab] || [];
  let anyVisible = false;

  Object.entries(MATERIALS).forEach(([maker, items]) => {
    if (!allowedMakers.includes(maker)) return;

    const filteredItems = items.filter(item => {
      const target = `${maker} ${item}`.toLowerCase();
      return !keyword || target.includes(keyword);
    });

    if (!filteredItems.length) return;
    anyVisible = true;

    const section = document.createElement("section");
    section.className = "maker-section";

    const header = document.createElement("div");
    header.className = "maker-header";

    const title = document.createElement("div");
    title.className = "maker-title";
    title.textContent = maker;

    const count = document.createElement("div");
    count.className = "maker-count";
    const selectedCount = filteredItems.filter(item => selectedItems[item]).length;
    count.textContent = `${selectedCount}/${filteredItems.length}`;

    header.appendChild(title);
    header.appendChild(count);
    section.appendChild(header);

    const itemsWrap = document.createElement("div");
    itemsWrap.className = "items";
    filteredItems.forEach(item => itemsWrap.appendChild(buildItemCard(maker, item)));
    section.appendChild(itemsWrap);
    makersContainer.appendChild(section);
  });

  if (!anyVisible) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = `${activeTab}タブには表示できる項目がありません。`;
    makersContainer.appendChild(empty);
  }

  updatePreview();
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
  } catch (error) {
    resultText.focus();
    resultText.select();
    document.execCommand("copy");
  }
}

function resetAll() {
  Object.keys(selectedItems).forEach(key => delete selectedItems[key]);
  render();
}

STAFF_NAMES.forEach(name => {
  const option = document.createElement("option");
  option.value = name;
  option.textContent = name;
  if (name === selectedStaffName) option.selected = true;
  staffSelect.appendChild(option);
});

staffSelect.addEventListener("change", (e) => {
  selectedStaffName = e.target.value;
  updatePreview();
});

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    activeTab = btn.dataset.tab;
    tabButtons.forEach(x => x.classList.remove("active"));
    btn.classList.add("active");
    render();
  });
});

searchInput.addEventListener("input", render);
copyBtn.addEventListener("click", copyResult);
resetBtn.addEventListener("click", resetAll);

clearSearchBtn.addEventListener("click", () => {
  searchInput.value = "";
  render();
});

resultText.value = PLACEHOLDER_TEXT;
render();
