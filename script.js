const supplies = [
  {
    category: "養生",
    manufacturer: "ダイヤテックス",
    name: "パイオランテープ50mm x 25m",
    quantity: 1,
    unitOptions: ["箱"],
    defaultUnit: "箱"
  },
  {
    category: "養生",
    manufacturer: "Nitto",
    name: "ニトクロステープ茶色No.7503  30mm x 25m",
    quantity: 1,
    unitOptions: ["箱"],
    defaultUnit: "箱"
  },
  {
    category: "養生",
    manufacturer: "カモ井",
    name: "ルパン(24mm)",
    quantity: 1,
    unitOptions: ["箱", "パック"],
    defaultUnit: "箱"
  },
  {
    category: "養生",
    manufacturer: "カモ井",
    name: "ルパンクーペ(24mm)",
    quantity: 1,
    unitOptions: ["箱", "パック"],
    defaultUnit: "箱"
  },
  {
    category: "養生",
    manufacturer: "カモ井",
    name: "グレートサスケ(24mm)",
    quantity: 1,
    unitOptions: ["箱", "パック"],
    defaultUnit: "箱"
  },
  {
    category: "養生",
    manufacturer: "カモ井",
    name: "SR-100 シリコーンテープ(18mm)",
    quantity: 1,
    unitOptions: ["箱", "パック"],
    defaultUnit: "箱"
  },
  {
    category: "養生",
    manufacturer: "スコッチ",
    name: "マスキングテープ 99BB",
    quantity: 1,
    unitOptions: ["箱", "パック"],
    defaultUnit: "箱"
  },
  {
    category: "養生",
    manufacturer: "スコッチ",
    name: "マスキングテープ 80S",
    quantity: 1,
    unitOptions: ["箱", "パック"],
    defaultUnit: "箱"
  },
  {
    category: "養生",
    manufacturer: "大塚刷毛",
    name: "コロナマスカー(ミニタイプ25m) 300mm",
    quantity: 1,
    unitOptions: ["箱"],
    defaultUnit: "箱"
  },
  {
    category: "養生",
    manufacturer: "大塚刷毛",
    name: "コロナマスカー(ミニタイプ25m) 550mm",
    quantity: 1,
    unitOptions: ["箱"],
    defaultUnit: "箱"
  },
  {
    category: "養生",
    manufacturer: "大塚刷毛",
    name: "コロナマスカー(ミニタイプ25m) 1100mm",
    quantity: 1,
    unitOptions: ["箱"],
    defaultUnit: "箱"
  },
  {
    category: "容器",
    manufacturer: "大塚刷毛",
    name: "さげっと用 内容器凹凸",
    quantity: 1,
    unitOptions: ["箱"],
    defaultUnit: "箱"
  },
  {
    category: "容器",
    manufacturer: "大塚刷毛",
    name: "タッチアップセパレート容器 ハーフ",
    quantity: 1,
    unitOptions: ["箱"],
    defaultUnit: "箱"
  },
  {
    category: "容器",
    manufacturer: "大塚刷毛",
    name: "タッチアップセパレート容器 クォーター",
    quantity: 1,
    unitOptions: ["箱"],
    defaultUnit: "箱"
  },
  {
    category: "容器",
    manufacturer: "大塚刷毛",
    name: "一斗缶内容器",
    quantity: 1,
    unitOptions: ["箱"],
    defaultUnit: "箱"
  },
  {
    category: "容器",
    manufacturer: "大塚刷毛",
    name: "ローラーバケットSXタイプ内容器",
    quantity: 1,
    unitOptions: ["箱"],
    defaultUnit: "箱"
  },
  {
    category: "容器",
    manufacturer: "大塚刷毛",
    name: "らくらくカートリッジ1型",
    quantity: 1,
    unitOptions: ["箱"],
    defaultUnit: "箱"
  },
  {
    category: "容器",
    manufacturer: "大塚刷毛",
    name: "らくらくカートリッジ3型",
    quantity: 1,
    unitOptions: ["箱"],
    defaultUnit: "箱"
  },
  {
    category: "刷毛",
    manufacturer: "大塚刷毛",
    name: "豚毛金巻 8号",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "刷毛",
    manufacturer: "大塚刷毛",
    name: "BKラスターN短柄 1.5インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "刷毛",
    manufacturer: "大塚刷毛",
    name: "BKラスターN短柄 2インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "刷毛",
    manufacturer: "大塚刷毛",
    name: "BKラスターN短柄 2.5インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "ローラー",
    manufacturer: "大塚刷毛",
    name: "スカーレットEX(25mm) 6インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "ローラー",
    manufacturer: "大塚刷毛",
    name: "スカーレットEX(20mm) 6インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "ローラー",
    manufacturer: "大塚刷毛",
    name: "スカーレットEX(20mm) 3インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "ローラー",
    manufacturer: "大塚刷毛",
    name: "ツイスト(18mm) 6インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "ローラー",
    manufacturer: "大塚刷毛",
    name: "ツイスト(18mm) 4インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "ローラー",
    manufacturer: "大塚刷毛",
    name: "ツイスト(18mm) 3インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "ローラー",
    manufacturer: "大塚刷毛",
    name: "スクリュー(21mm) 6インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "ローラー",
    manufacturer: "大塚刷毛",
    name: "スクリュー(21mm) 4インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "ローラー",
    manufacturer: "大塚刷毛",
    name: "Sky(13mm) 6インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "ローラー",
    manufacturer: "大塚刷毛",
    name: "Sky(13mm) 4インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "ローラー",
    manufacturer: "大塚刷毛",
    name: "Sky(13mm) 3インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "ローラー",
    manufacturer: "大塚刷毛",
    name: "Micro ACE(13mm) 6インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "ローラー",
    manufacturer: "大塚刷毛",
    name: "Micro ACE(13mm) 4インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  },
  {
    category: "ローラー",
    manufacturer: "大塚刷毛",
    name: "Micro ACE(13mm) 3インチ",
    quantity: 1,
    unitOptions: ["箱", "袋"],
    defaultUnit: "箱"
  }
];

const paints = [
  {
    category: "塗料",
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
    category: "塗料",
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
    category: "塗料",
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
    category: "塗料",
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
    category: "塗料",
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
    category: "塗料",
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
    category: "塗料",
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
    category: "塗料",
    manufacturer: "関西ペイント",
    name: "ザウルスEX II",
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
    category: "塗料",
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
    category: "塗料",
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
    category: "塗料",
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
    category: "塗料",
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
const STAFF_NAMES = ["高崎", "上田", "石澤", "栗原", "齊藤", "ウンス", "滝本", "山下", "藤ノ木", "福王寺", "大浦"];
const PLACEHOLDER_TEXT = "(選択した材料がここに表示されます)";
const DEFAULT_TABS    = ["養生", "容器", "刷毛", "ローラー", "塗料"];

/* ── Storage helper ───────────────────────── */

const storage = {
  load(key, fallback = []) {
    try {
      const v = localStorage.getItem(key);
      return v ? JSON.parse(v) : fallback;
    } catch { return fallback; }
  },
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

/* ── App state ────────────────────────────── */

const appState = {
  activeTab:         "養生",
  tabs:              [...DEFAULT_TABS],
  selectedStaffName: "藤ノ木",
  selectedLocation:  "新座倉庫入れ",
  selectedSiteName:  "なし",
  selectedAddress:   "",
  registeredSites:   [],
  customItems:       [],
  deletedItemKeys:   [],
  selectedItems:     {}
};

const saveRegisteredSites  = () => storage.save("registeredSites",  appState.registeredSites);
const saveCustomItems      = () => storage.save("customItems",       appState.customItems);
const saveDeletedItemKeys  = () => storage.save("deletedItemKeys",   appState.deletedItemKeys);
const saveTabs             = () => storage.save("appTabs",           appState.tabs);

function itemKey(manufacturer, name) {
  return `${manufacturer}||${name}`;
}

/* ── DOM references ───────────────────────── */

const makersContainer       = document.getElementById("makersContainer");
const resultText            = document.getElementById("resultText");
const searchInput           = document.getElementById("searchInput");
const copyBtn               = document.getElementById("copyBtn");
const resetBtn              = document.getElementById("resetBtn");
const clearSearchBtn        = document.getElementById("clearSearchBtn");
const staffSelect           = document.getElementById("staffSelect");
const locationSelect        = document.getElementById("locationSelect");
const siteNameInput         = document.getElementById("siteNameInput");
const siteComboboxBtn       = document.getElementById("siteComboboxBtn");
const siteDropdown          = document.getElementById("siteDropdown");
const siteCombobox          = document.getElementById("siteCombobox");
const addressField          = document.getElementById("addressField");
const addressInput          = document.getElementById("addressInput");
const tabsContainer         = document.getElementById("tabsContainer");
const siteModal             = document.getElementById("siteModal");
const openSiteModalBtn      = document.getElementById("openSiteModalBtn");
const closeModalBtn         = document.getElementById("closeModalBtn");
const siteList              = document.getElementById("siteList");
const newSiteNameInput      = document.getElementById("newSiteNameInput");
const newSiteAddressInput   = document.getElementById("newSiteAddressInput");
const addSiteBtn            = document.getElementById("addSiteBtn");
const tabModal              = document.getElementById("tabModal");
const openTabModalBtn       = document.getElementById("openTabModalBtn");
const closeTabModalBtn      = document.getElementById("closeTabModalBtn");
const tabList               = document.getElementById("tabList");
const newTabNameInput       = document.getElementById("newTabNameInput");
const addTabBtn             = document.getElementById("addTabBtn");
const itemModal             = document.getElementById("itemModal");
const openItemModalBtn      = document.getElementById("openItemModalBtn");
const closeItemModalBtn     = document.getElementById("closeItemModalBtn");
const itemList              = document.getElementById("itemList");
const itemListCategoryFilter= document.getElementById("itemListCategoryFilter");
const newItemCategory       = document.getElementById("newItemCategory");
const newItemMaker          = document.getElementById("newItemMaker");
const newItemName           = document.getElementById("newItemName");
const newItemUnits          = document.getElementById("newItemUnits");
const newItemCapacities     = document.getElementById("newItemCapacities");
const newItemColorMode      = document.getElementById("newItemColorMode");
const newItemDefaultColorCode = document.getElementById("newItemDefaultColorCode");
const newItemColorNames     = document.getElementById("newItemColorNames");
const newItemGlosses        = document.getElementById("newItemGlosses");
const addItemBtn            = document.getElementById("addItemBtn");
const scrollToBottomBtn     = document.getElementById("scrollToBottomBtn");

/* ── Generic modal helpers ────────────────── */

function openModalEl(el, onOpen) {
  el.style.display = "flex";
  document.body.style.overflow = "hidden";
  onOpen?.();
}

function closeModalEl(el, onClose) {
  el.style.display = "none";
  document.body.style.overflow = "";
  onClose?.();
}

/* ── Toast & Confirm ──────────────────────── */

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
}

function showConfirm(message, onOk) {
  const modal     = document.getElementById("confirmModal");
  const okBtn     = document.getElementById("confirmOkBtn");
  const cancelBtn = document.getElementById("confirmCancelBtn");

  document.getElementById("confirmMessage").textContent = message;
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";

  function cleanup() {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }

  okBtn    .addEventListener("click", () => { cleanup(); onOk(); },  { once: true });
  cancelBtn.addEventListener("click", cleanup,                        { once: true });
  modal    .addEventListener("click", (e) => { if (e.target === modal) cleanup(); }, { once: true });
}

/* ── Tabs ─────────────────────────────────── */

function renderTabs() {
  tabsContainer.innerHTML = "";
  appState.tabs.forEach(tabName => {
    const btn = document.createElement("button");
    btn.className = `tab-btn${tabName === appState.activeTab ? " active" : ""}`;
    btn.type = "button";
    btn.dataset.tab = tabName;
    btn.textContent = tabName;
    btn.addEventListener("click", () => {
      appState.activeTab = tabName;
      renderTabs();
      render();
    });
    tabsContainer.appendChild(btn);
  });
}

/* ── Tab modal ────────────────────────────── */

function openTabModal()  { openModalEl(tabModal, renderTabList); }
function closeTabModal() { closeModalEl(tabModal, () => { newTabNameInput.value = ""; }); }

function renderTabList() {
  if (appState.tabs.length === 0) {
    tabList.innerHTML = '<div class="site-list-empty">タブがありません</div>';
    return;
  }
  tabList.innerHTML = "";
  appState.tabs.forEach((tabName, index) => {
    const item = document.createElement("div");
    item.className = "site-list-item";
    item.innerHTML = `
      <div class="site-list-info">
        <div class="site-list-name">${tabName}</div>
      </div>
      <button class="site-delete-btn tab-delete-btn" type="button" data-index="${index}">削除</button>
    `;
    tabList.appendChild(item);
  });

  tabList.querySelectorAll(".tab-delete-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx  = Number(btn.dataset.index);
      const name = appState.tabs[idx];
      showConfirm(`タブ「${name}」を削除してよろしいですか？`, () => {
        appState.tabs.splice(idx, 1);
        if (appState.activeTab === name) appState.activeTab = appState.tabs[0] || "";
        saveTabs();
        renderTabs();
        render();
        renderTabList();
      });
    });
  });
}

function addTab() {
  const name = newTabNameInput.value.trim();
  if (!name) return;
  if (appState.tabs.includes(name)) { showToast(`「${name}」は既に存在します`); return; }
  appState.tabs.push(name);
  saveTabs();
  renderTabs();
  renderTabList();
  newTabNameInput.value = "";
  showToast(`タブ「${name}」を追加しました`);
}

/* ── Item modal ───────────────────────────── */

function parseCSV(str) {
  return str.split(",").map(s => s.trim()).filter(Boolean);
}

function openItemModal() {
  openModalEl(itemModal, () => {
    populateItemCategorySelects();
    renderItemModalList(itemListCategoryFilter.value);
  });
}

function closeItemModal() { closeModalEl(itemModal, resetItemForm); }

function resetItemForm() {
  [newItemMaker, newItemName, newItemUnits, newItemCapacities,
   newItemDefaultColorCode, newItemColorNames, newItemGlosses]
    .forEach(el => { el.value = ""; });
  newItemColorMode.value = "none";
  updateColorFields();
}

function populateItemCategorySelects() {
  const options = appState.tabs.map(t => `<option value="${t}">${t}</option>`).join("");
  newItemCategory.innerHTML = options;
  itemListCategoryFilter.innerHTML = `<option value="">全カテゴリ</option>` + options;
}

function updateColorFields() {
  const mode = newItemColorMode.value;
  document.querySelectorAll(".item-color-code-field").forEach(el => {
    el.style.display = mode === "code" ? "" : "none";
  });
  document.querySelectorAll(".item-color-name-field").forEach(el => {
    el.style.display = mode === "name" ? "" : "none";
  });
}

function renderItemModalList(filterCategory = "") {
  const allItems = [
    ...[...supplies, ...paints].map(i => ({ ...i, isCustom: false })),
    ...appState.customItems.map(i => ({ ...i, isCustom: true }))
  ].filter(i => !filterCategory || i.category === filterCategory);

  if (allItems.length === 0) {
    itemList.innerHTML = '<div class="site-list-empty">該当する材料がありません</div>';
    return;
  }

  const groups = allItems.reduce((acc, item) => {
    (acc[item.category] ??= []).push(item);
    return acc;
  }, {});

  itemList.innerHTML = "";
  Object.entries(groups).forEach(([category, categoryItems]) => {
    const groupEl = document.createElement("div");
    groupEl.className = "item-list-group";
    groupEl.innerHTML = `<div class="item-list-group-label">${category}</div>`;

    categoryItems.forEach(item => {
      const key       = itemKey(item.manufacturer, item.name);
      const isDeleted = !item.isCustom && appState.deletedItemKeys.includes(key);
      const row = document.createElement("div");
      row.className = `site-list-item item-list-row${isDeleted ? " item-deleted" : ""}`;
      row.innerHTML = `
        <div class="site-list-info">
          <div class="site-list-name">
            ${item.name}
            <span class="item-badge ${item.isCustom ? "item-badge-custom" : "item-badge-builtin"}">
              ${item.isCustom ? "カスタム" : "標準"}
            </span>
            ${isDeleted ? '<span class="item-badge item-badge-deleted">削除済</span>' : ""}
          </div>
          <div class="site-list-address">${item.manufacturer}</div>
        </div>
        <div class="item-list-actions">
          ${isDeleted
            ? `<button class="restore-item-btn site-delete-btn restore-btn" data-key="${key}">復元</button>`
            : `<button class="delete-item-btn site-delete-btn" data-key="${key}" data-custom="${item.isCustom}" data-name="${item.name}">削除</button>`
          }
        </div>
      `;
      groupEl.appendChild(row);
    });
    itemList.appendChild(groupEl);
  });

  itemList.querySelectorAll(".delete-item-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const { key, custom: isCustomRaw, name } = btn.dataset;
      const isCustom = isCustomRaw === "true";
      showConfirm(`「${name}」を削除してよろしいですか？`, () => {
        if (isCustom) {
          appState.customItems = appState.customItems.filter(
            i => itemKey(i.manufacturer, i.name) !== key
          );
          saveCustomItems();
        } else {
          if (!appState.deletedItemKeys.includes(key)) appState.deletedItemKeys.push(key);
          saveDeletedItemKeys();
        }
        render();
        renderItemModalList(itemListCategoryFilter.value);
      });
    });
  });

  itemList.querySelectorAll(".restore-item-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      appState.deletedItemKeys = appState.deletedItemKeys.filter(k => k !== btn.dataset.key);
      saveDeletedItemKeys();
      render();
      renderItemModalList(itemListCategoryFilter.value);
      showToast("材料を復元しました");
    });
  });
}

function addItem() {
  const category  = newItemCategory.value;
  const manufacturer = newItemMaker.value.trim();
  const name      = newItemName.value.trim();
  const units     = parseCSV(newItemUnits.value);
  const capacities = parseCSV(newItemCapacities.value);
  const colorMode = newItemColorMode.value;
  const colorNames = parseCSV(newItemColorNames.value);
  const defaultColorCode = newItemDefaultColorCode.value.trim();
  const glosses   = parseCSV(newItemGlosses.value);

  if (!category || !manufacturer || !name || units.length === 0) {
    showToast("カテゴリ・メーカー・商品名・単位は必須です");
    return;
  }

  const existing = [...supplies, ...paints, ...appState.customItems];
  if (existing.some(i => i.manufacturer === manufacturer && i.name === name)) {
    showToast(`「${name}」は既に登録されています`);
    return;
  }

  appState.customItems.push({
    id: Date.now(),
    category, manufacturer, name,
    quantity: 1,
    unitOptions: units,
    defaultUnit: units[0],
    isCustom: true,
    ...(capacities.length > 0 && { capacityOptions: capacities, defaultCapacity: capacities[0] }),
    colorMode,
    colorNameOptions: colorNames,
    defaultColorName: colorNames[0] || "",
    colorCodeEnabled: colorMode === "code",
    defaultColorCode: colorMode === "code" ? defaultColorCode : "",
    glossOptions: glosses,
    defaultGloss: glosses[0] || ""
  });

  saveCustomItems();
  render();
  renderItemModalList(itemListCategoryFilter.value);
  resetItemForm();
  showToast(`「${name}」を追加しました`);
}

/* ── Site combobox ────────────────────────── */

function renderComboboxDropdown(filter = "") {
  const options = ["なし", ...appState.registeredSites.map(s => s.name)]
    .filter(name => !filter || name.toLowerCase().includes(filter.toLowerCase()));

  if (options.length === 0) {
    siteDropdown.innerHTML = '<div class="combobox-empty">候補がありません</div>';
    return;
  }

  siteDropdown.innerHTML = "";
  options.forEach(name => {
    const item = document.createElement("div");
    item.className = `combobox-option${name === siteNameInput.value ? " selected" : ""}`;
    item.textContent = name;
    item.addEventListener("mousedown", (e) => {
      e.preventDefault();
      selectComboboxOption(name);
    });
    siteDropdown.appendChild(item);
  });
}

function openCombobox() {
  siteDropdown.style.display = "block";
  siteCombobox.classList.add("open");
}

function closeCombobox() {
  siteDropdown.style.display = "none";
  siteCombobox.classList.remove("open");
}

function selectComboboxOption(name) {
  siteNameInput.value = name;
  appState.selectedSiteName = name;
  closeCombobox();
  autoFillAddress(name);
  refreshPreview();
}

function syncCombobox() {
  if (siteDropdown.style.display === "block") {
    renderComboboxDropdown(siteNameInput.value);
  }
}

function autoFillAddress(siteName) {
  const match = appState.registeredSites.find(s => s.name === siteName);
  if (match) {
    addressInput.value = match.address;
    appState.selectedAddress = match.address;
    refreshPreview();
  }
}

/* ── Site modal ───────────────────────────── */

function openModal()  { openModalEl(siteModal, renderSiteList); }
function closeModal() {
  closeModalEl(siteModal, () => {
    newSiteNameInput.value = "";
    newSiteAddressInput.value = "";
  });
}

function renderSiteList() {
  if (appState.registeredSites.length === 0) {
    siteList.innerHTML = '<div class="site-list-empty">まだ登録された現場はありません</div>';
    return;
  }
  siteList.innerHTML = "";
  appState.registeredSites.forEach((site, index) => {
    const item = document.createElement("div");
    item.className = "site-list-item";
    item.innerHTML = `
      <div class="site-list-info">
        <div class="site-list-name">${site.name}</div>
        <div class="site-list-address">${site.address}</div>
      </div>
      <button class="site-delete-btn" type="button" data-index="${index}">削除</button>
    `;
    siteList.appendChild(item);
  });

  siteList.querySelectorAll(".site-delete-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx      = Number(btn.dataset.index);
      const siteName = appState.registeredSites[idx].name;
      showConfirm(`「${siteName}」を削除してよろしいですか？`, () => {
        appState.registeredSites.splice(idx, 1);
        saveRegisteredSites();
        syncCombobox();
        renderSiteList();
      });
    });
  });
}

function addSite() {
  const name    = newSiteNameInput.value.trim();
  const address = newSiteAddressInput.value.trim();
  if (!name || !address) return;
  if (appState.registeredSites.some(s => s.name === name)) {
    showToast(`「${name}」はすでに登録されています`);
    return;
  }
  appState.registeredSites.push({ name, address });
  saveRegisteredSites();
  syncCombobox();
  newSiteNameInput.value = "";
  newSiteAddressInput.value = "";
  renderSiteList();
  showToast(`「${name}」を登録しました`);
}

/* ── Item data ────────────────────────────── */

function getBuiltinItemsForCategory(category) {
  return [...supplies, ...paints].filter(item =>
    item.category === category &&
    !appState.deletedItemKeys.includes(itemKey(item.manufacturer, item.name))
  );
}

function getItemsByTab(tabName) {
  return [
    ...getBuiltinItemsForCategory(tabName),
    ...appState.customItems.filter(i => i.category === tabName)
  ];
}

/* ── Item card controls ───────────────────── */

function createInitialSelection(item) {
  return {
    manufacturer: item.manufacturer,
    name:         item.name,
    quantity:     item.quantity     ?? 1,
    unit:         item.defaultUnit  ?? "",
    capacity:     item.defaultCapacity  ?? "",
    colorName:    item.defaultColorName ?? "",
    colorCode:    item.defaultColorCode ?? "",
    gloss:        item.defaultGloss     ?? ""
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

function createSelect(options, value, onChange, disabled = false) {
  const select = document.createElement("select");
  select.innerHTML = options.map(o =>
    `<option value="${o}"${o === value ? " selected" : ""}>${o}</option>`
  ).join("");
  select.disabled = disabled;
  select.addEventListener("change", (e) => { e.stopPropagation(); onChange(e); refreshPreview(); });
  select.addEventListener("click",  (e) => e.stopPropagation());
  return select;
}

function createInput(type, value, placeholder, onInput, disabled = false) {
  const input = document.createElement("input");
  Object.assign(input, { type, value, placeholder, disabled });
  input.addEventListener("input", (e) => { e.stopPropagation(); onInput(e); refreshPreview(); });
  input.addEventListener("click", (e) => e.stopPropagation());
  return input;
}

function buildControlField(labelText, control) {
  const wrap  = document.createElement("div");
  wrap.className = "field";
  const label = document.createElement("label");
  label.textContent = labelText;
  wrap.appendChild(label);
  wrap.appendChild(control);
  return wrap;
}

function buildQuantityUnitRow(selected, unitOptions, rowClass = "inline-pair") {
  const row = document.createElement("div");
  row.className = rowClass;

  const qty = createInput("number", selected.quantity, "数量", (e) => {
    selected.quantity = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = selected.quantity;
  });
  qty.min = "0";
  qty.inputMode = "numeric";

  row.appendChild(buildControlField("数量", qty));
  row.appendChild(buildControlField("単位", createSelect(unitOptions, selected.unit, (e) => {
    selected.unit = e.target.value;
  })));
  return row;
}

function buildItemControls(item, selected) {
  const controls       = document.createElement("div");
  controls.className   = "controls";
  const capacityOptions = item.capacityOptions || [];
  const unitOptions     = item.unitOptions     || ["缶"];
  const colorNameOptions= item.colorNameOptions|| [];
  const glossOptions    = item.glossOptions    || [];

  if (capacityOptions.length > 0) {
    const topRow = buildQuantityUnitRow(selected, unitOptions, "inline-triple");
    const capacityControl = capacityOptions.length === 1
      ? createInput("text", capacityOptions[0], "", () => {}, true)
      : createSelect(capacityOptions, selected.capacity, (e) => { selected.capacity = e.target.value; });
    topRow.prepend(buildControlField("容量", capacityControl));
    controls.appendChild(topRow);
  } else {
    controls.appendChild(buildQuantityUnitRow(selected, unitOptions));
  }

  const secondRow = document.createElement("div");
  secondRow.className = "inline-pair";

  if (item.colorMode === "code") {
    secondRow.appendChild(buildControlField("色番",
      createInput("text", selected.colorCode, "色番", (e) => { selected.colorCode = e.target.value.trim(); })
    ));
  }
  if (item.colorMode === "name" && colorNameOptions.length > 0) {
    secondRow.appendChild(buildControlField("色",
      createSelect(colorNameOptions, selected.colorName, (e) => { selected.colorName = e.target.value; })
    ));
  }
  if (glossOptions.length > 0) {
    secondRow.appendChild(buildControlField("艶",
      createSelect(glossOptions, selected.gloss, (e) => { selected.gloss = e.target.value; })
    ));
  }

  if (secondRow.children.length > 0) controls.appendChild(secondRow);
  return controls;
}

function buildItemCard(item) {
  const isSelected = Boolean(appState.selectedItems[item.name]);
  const selected   = appState.selectedItems[item.name];

  const card = document.createElement("div");
  card.className = `item-card${isSelected ? " selected" : ""}`;

  const toggle = document.createElement("div");
  toggle.className = "select-toggle";
  toggle.addEventListener("click", () => toggleItemSelection(item));

  const check = document.createElement("div");
  check.className = "check";
  check.textContent = "✓";

  const textWrap = document.createElement("div");
  textWrap.style.minWidth = "0";
  textWrap.innerHTML = `
    <div class="item-name">${item.name}</div>
    <div class="mini-maker">${item.manufacturer}</div>
  `;

  toggle.appendChild(check);
  toggle.appendChild(textWrap);

  const top = document.createElement("div");
  top.className = "item-top";
  top.appendChild(toggle);
  card.appendChild(top);

  if (isSelected) card.appendChild(buildItemControls(item, selected));

  return card;
}

/* ── Render ───────────────────────────────── */

function groupByManufacturer(items) {
  return items.reduce((acc, item) => {
    (acc[item.manufacturer] ??= []).push(item);
    return acc;
  }, {});
}

function renderMakers(items) {
  makersContainer.innerHTML = "";

  const grouped       = groupByManufacturer(items);
  const manufacturers = Object.keys(grouped);

  if (manufacturers.length === 0) {
    makersContainer.innerHTML = `<div class="empty">${appState.activeTab}タブには表示できる項目がありません。</div>`;
    return;
  }

  manufacturers.forEach(manufacturer => {
    const items = grouped[manufacturer];
    const selectedCount = items.filter(i => appState.selectedItems[i.name]).length;

    const section = document.createElement("section");
    section.className = "maker-section";
    section.innerHTML = `
      <div class="maker-header">
        <div class="maker-title">${manufacturer}</div>
        <div class="maker-count">${selectedCount}/${items.length}</div>
      </div>
    `;

    const itemsWrap = document.createElement("div");
    itemsWrap.className = "items";
    items.forEach(item => itemsWrap.appendChild(buildItemCard(item)));
    section.appendChild(itemsWrap);
    makersContainer.appendChild(section);
  });
}

function buildOrderLines() {
  const grouped = Object.values(appState.selectedItems).reduce((acc, sel) => {
    const parts = [sel.name];
    if (sel.capacity)  parts.push(sel.capacity);
    if (sel.colorName) parts.push(sel.colorName);
    if (sel.colorCode) parts.push(`色番:${sel.colorCode}`);
    if (sel.gloss)     parts.push(sel.gloss);
    const line = `・${parts.join(" ")}  ${sel.quantity}${sel.unit}`;
    (acc[sel.manufacturer] ??= []).push(line);
    return acc;
  }, {});

  const lines = [];
  Object.entries(grouped).forEach(([mfr, items]) => {
    lines.push(mfr, ...items, "");
  });
  if (lines.at(-1) === "") lines.pop();
  return lines;
}

function buildSuffix() {
  const siteName = appState.selectedSiteName?.trim();
  const hasSite  = siteName && siteName !== "なし";
  const address  = appState.selectedAddress.trim();
  const hasAddr  = appState.selectedLocation === "現場入れ" && address;
  if (!hasSite && !hasAddr) return "";
  const parts = [];
  if (hasSite) parts.push(`現場名：${siteName}`);
  if (hasAddr) parts.push(`現場住所：${address}`);
  return "\n\n\n" + parts.join("\n");
}

function getHeaderText() {
  return `お世話になります。\n4Uの${appState.selectedStaffName}です。\n下記の注文を${appState.selectedLocation}でお願いいたします。`;
}

function updateCopyButtonState() {
  const isOnsite = appState.selectedLocation === "現場入れ";
  const valid    = appState.selectedSiteName?.trim() && appState.selectedSiteName.trim() !== "なし";
  const hasAddr  = appState.selectedAddress.trim().length > 0;
  copyBtn.disabled     = isOnsite && !(valid && hasAddr);
  copyBtn.style.opacity = copyBtn.disabled ? "0.45" : "";
  copyBtn.style.cursor  = copyBtn.disabled ? "not-allowed" : "";
}

function refreshPreview() {
  const ordered = buildOrderLines();
  resultText.value = ordered.length
    ? `${getHeaderText()}\n\n${ordered.join("\n")}${buildSuffix()}`
    : PLACEHOLDER_TEXT;
  updateCopyButtonState();
}

function render() {
  const keyword = searchInput.value.trim().toLowerCase();
  const items   = getItemsByTab(appState.activeTab).filter(item =>
    `${item.manufacturer} ${item.name}`.toLowerCase().includes(keyword)
  );
  renderMakers(items);
  refreshPreview();
}

/* ── Copy & Reset ─────────────────────────── */

async function copyResult() {
  if (copyBtn.disabled) return;
  const value = resultText.value;
  if (!value || value === PLACEHOLDER_TEXT) return;
  try {
    await navigator.clipboard.writeText(value);
    const orig = copyBtn.textContent;
    copyBtn.textContent = "コピーしました";
    copyBtn.classList.add("success");
    setTimeout(() => { copyBtn.textContent = orig; copyBtn.classList.remove("success"); }, 1400);
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

/* ── Scroll button ────────────────────────── */

function updateScrollButtonVisibility() {
  if (!scrollToBottomBtn) return;
  const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 80;
  scrollToBottomBtn.classList.toggle("hidden", atBottom);
}

/* ── Event listeners ──────────────────────── */

staffSelect.innerHTML = STAFF_NAMES.map(name =>
  `<option value="${name}"${name === appState.selectedStaffName ? " selected" : ""}>${name}</option>`
).join("");

staffSelect.addEventListener("change", (e) => {
  appState.selectedStaffName = e.target.value;
  refreshPreview();
});

locationSelect.addEventListener("change", (e) => {
  appState.selectedLocation = e.target.value;
  const isOnsite = e.target.value === "現場入れ";
  addressField.style.display = isOnsite ? "grid" : "none";
  const badge = document.querySelector(".site-required-badge");
  if (badge) badge.style.display = isOnsite ? "inline-block" : "none";
  if (!isOnsite) { appState.selectedAddress = ""; addressInput.value = ""; }
  refreshPreview();
});

siteNameInput.addEventListener("input", (e) => {
  appState.selectedSiteName = e.target.value;
  renderComboboxDropdown(e.target.value);
  openCombobox();
  refreshPreview();
});

siteNameInput.addEventListener("focus", () => {
  renderComboboxDropdown(siteNameInput.value);
  openCombobox();
});

siteNameInput.addEventListener("blur",   () => setTimeout(closeCombobox, 150));
siteNameInput.addEventListener("change", (e) => autoFillAddress(e.target.value));

siteComboboxBtn.addEventListener("click", () => {
  if (siteDropdown.style.display === "block") {
    closeCombobox();
  } else {
    renderComboboxDropdown(siteNameInput.value);
    siteNameInput.focus();
    openCombobox();
  }
});

openSiteModalBtn .addEventListener("click", openModal);
closeModalBtn    .addEventListener("click", closeModal);
siteModal        .addEventListener("click", (e) => { if (e.target === siteModal) closeModal(); });
addSiteBtn       .addEventListener("click", addSite);
newSiteAddressInput.addEventListener("keydown", (e) => { if (e.key === "Enter") addSite(); });

addressInput.addEventListener("input", (e) => {
  appState.selectedAddress = e.target.value;
  refreshPreview();
});

openItemModalBtn .addEventListener("click", openItemModal);
closeItemModalBtn.addEventListener("click", closeItemModal);
itemModal        .addEventListener("click", (e) => { if (e.target === itemModal) closeItemModal(); });
addItemBtn       .addEventListener("click", addItem);
newItemColorMode .addEventListener("change", updateColorFields);
itemListCategoryFilter.addEventListener("change", () => renderItemModalList(itemListCategoryFilter.value));
newItemName      .addEventListener("keydown", (e) => { if (e.key === "Enter") addItem(); });

openTabModalBtn .addEventListener("click", openTabModal);
closeTabModalBtn.addEventListener("click", closeTabModal);
tabModal        .addEventListener("click", (e) => { if (e.target === tabModal) closeTabModal(); });
addTabBtn       .addEventListener("click", addTab);
newTabNameInput .addEventListener("keydown", (e) => { if (e.key === "Enter") addTab(); });

searchInput .addEventListener("input", render);
clearSearchBtn.addEventListener("click", () => { searchInput.value = ""; render(); });
copyBtn     .addEventListener("click", copyResult);
resetBtn    .addEventListener("click", resetAll);

if (scrollToBottomBtn) {
  scrollToBottomBtn.addEventListener("click", () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  });
  window.addEventListener("scroll", updateScrollButtonVisibility);
  window.addEventListener("resize", updateScrollButtonVisibility);
}

/* ── Init ─────────────────────────────────── */

appState.registeredSites = storage.load("registeredSites");
appState.customItems     = storage.load("customItems");
appState.deletedItemKeys = storage.load("deletedItemKeys");
appState.tabs            = storage.load("appTabs", [...DEFAULT_TABS]);

renderTabs();
resultText.value = PLACEHOLDER_TEXT;
render();
updateScrollButtonVisibility();
