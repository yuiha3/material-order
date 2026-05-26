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

const DEFAULT_TABS = ["養生", "容器", "刷毛", "ローラー", "塗料"];

const appState = {
  activeTab: "養生",
  tabs: [...DEFAULT_TABS],
  selectedStaffName: "藤ノ木",
  selectedLocation: "新座倉庫入れ",
  selectedSiteName: "なし",
  selectedAddress: "",
  registeredSites: [],
  customItems: [],
  deletedItemKeys: [],
  selectedItems: {}
};

function loadRegisteredSites() {
  try {
    const saved = localStorage.getItem("registeredSites");
    if (saved) appState.registeredSites = JSON.parse(saved);
  } catch { appState.registeredSites = []; }
}

function saveRegisteredSites() {
  localStorage.setItem("registeredSites", JSON.stringify(appState.registeredSites));
}

function loadCustomItems() {
  try {
    const saved = localStorage.getItem("customItems");
    if (saved) appState.customItems = JSON.parse(saved);
  } catch { appState.customItems = []; }
}

function saveCustomItems() {
  localStorage.setItem("customItems", JSON.stringify(appState.customItems));
}

function loadDeletedItemKeys() {
  try {
    const saved = localStorage.getItem("deletedItemKeys");
    if (saved) appState.deletedItemKeys = JSON.parse(saved);
  } catch { appState.deletedItemKeys = []; }
}

function saveDeletedItemKeys() {
  localStorage.setItem("deletedItemKeys", JSON.stringify(appState.deletedItemKeys));
}

function itemKey(manufacturer, name) {
  return `${manufacturer}||${name}`;
}

function loadTabs() {
  try {
    const saved = localStorage.getItem("appTabs");
    if (saved) appState.tabs = JSON.parse(saved);
  } catch { appState.tabs = [...DEFAULT_TABS]; }
}

function saveTabs() {
  localStorage.setItem("appTabs", JSON.stringify(appState.tabs));
}

const makersContainer = document.getElementById("makersContainer");
const resultText = document.getElementById("resultText");
const searchInput = document.getElementById("searchInput");
const copyBtn = document.getElementById("copyBtn");
const resetBtn = document.getElementById("resetBtn");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const staffSelect = document.getElementById("staffSelect");
const locationSelect = document.getElementById("locationSelect");
const siteNameInput = document.getElementById("siteNameInput");
const siteComboboxBtn = document.getElementById("siteComboboxBtn");
const addressField = document.getElementById("addressField");
const addressInput = document.getElementById("addressInput");
const tabButtons = document.querySelectorAll(".tab-btn");
const tabsContainer = document.getElementById("tabsContainer");
const openTabModalBtn = document.getElementById("openTabModalBtn");
const closeTabModalBtn = document.getElementById("closeTabModalBtn");
const tabModal = document.getElementById("tabModal");
const tabList = document.getElementById("tabList");
const newTabNameInput = document.getElementById("newTabNameInput");
const addTabBtn = document.getElementById("addTabBtn");
const openItemModalBtn = document.getElementById("openItemModalBtn");
const closeItemModalBtn = document.getElementById("closeItemModalBtn");
const itemModal = document.getElementById("itemModal");
const itemList = document.getElementById("itemList");
const itemListCategoryFilter = document.getElementById("itemListCategoryFilter");
const newItemCategory = document.getElementById("newItemCategory");
const newItemMaker = document.getElementById("newItemMaker");
const newItemName = document.getElementById("newItemName");
const newItemUnits = document.getElementById("newItemUnits");
const newItemCapacities = document.getElementById("newItemCapacities");
const newItemColorMode = document.getElementById("newItemColorMode");
const newItemDefaultColorCode = document.getElementById("newItemDefaultColorCode");
const newItemColorNames = document.getElementById("newItemColorNames");
const newItemGlosses = document.getElementById("newItemGlosses");
const addItemBtn = document.getElementById("addItemBtn");
const scrollToBottomBtn = document.getElementById("scrollToBottomBtn");
const siteModal = document.getElementById("siteModal");
const openSiteModalBtn = document.getElementById("openSiteModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const siteList = document.getElementById("siteList");
const newSiteNameInput = document.getElementById("newSiteNameInput");
const newSiteAddressInput = document.getElementById("newSiteAddressInput");
const addSiteBtn = document.getElementById("addSiteBtn");

/* ── Tabs ─────────────────────────────────── */

function renderTabs() {
  tabsContainer.innerHTML = "";
  appState.tabs.forEach(tabName => {
    const btn = document.createElement("button");
    btn.className = "tab-btn" + (tabName === appState.activeTab ? " active" : "");
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

/* ── Tab Modal ────────────────────────────── */

function openTabModal() {
  renderTabList();
  tabModal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeTabModal() {
  tabModal.style.display = "none";
  document.body.style.overflow = "";
  newTabNameInput.value = "";
}

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
      const idx = Number(btn.dataset.index);
      const name = appState.tabs[idx];
      showConfirm(`タブ「${name}」を削除してよろしいですか？`, () => {
        appState.tabs.splice(idx, 1);
        if (appState.activeTab === name) {
          appState.activeTab = appState.tabs[0] || "";
        }
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
  if (appState.tabs.includes(name)) {
    showToast(`「${name}」は既に存在します`);
    return;
  }
  appState.tabs.push(name);
  saveTabs();
  renderTabs();
  renderTabList();
  newTabNameInput.value = "";
  showToast(`タブ「${name}」を追加しました`);
}

/* ── Item Modal ───────────────────────────── */

function parseCSV(str) {
  return str.split(",").map(s => s.trim()).filter(Boolean);
}

function openItemModal() {
  populateItemCategorySelects();
  renderItemList(itemListCategoryFilter.value);
  itemModal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeItemModal() {
  itemModal.style.display = "none";
  document.body.style.overflow = "";
  resetItemForm();
}

function resetItemForm() {
  newItemMaker.value = "";
  newItemName.value = "";
  newItemUnits.value = "";
  newItemCapacities.value = "";
  newItemColorMode.value = "none";
  newItemDefaultColorCode.value = "";
  newItemColorNames.value = "";
  newItemGlosses.value = "";
  updateColorFields();
}

function populateItemCategorySelects() {
  const options = appState.tabs.map(t =>
    `<option value="${t}">${t}</option>`
  ).join("");
  newItemCategory.innerHTML = options;
  itemListCategoryFilter.innerHTML =
    `<option value="">全カテゴリ</option>` + options;
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

function renderItemList(filterCategory = "") {
  const allBuiltin = [...supplies, ...paints];
  const allCustom = appState.customItems;

  let items = [
    ...allBuiltin.map(i => ({ ...i, isCustom: false })),
    ...allCustom.map(i => ({ ...i, isCustom: true }))
  ];

  if (filterCategory) {
    items = items.filter(i => i.category === filterCategory);
  }

  if (items.length === 0) {
    itemList.innerHTML = '<div class="site-list-empty">該当する材料がありません</div>';
    return;
  }

  const groups = {};
  items.forEach(item => {
    if (!groups[item.category]) groups[item.category] = [];
    groups[item.category].push(item);
  });

  itemList.innerHTML = "";
  Object.entries(groups).forEach(([category, categoryItems]) => {
    const groupEl = document.createElement("div");
    groupEl.className = "item-list-group";
    groupEl.innerHTML = `<div class="item-list-group-label">${category}</div>`;

    categoryItems.forEach(item => {
      const isDeleted = !item.isCustom &&
        appState.deletedItemKeys.includes(itemKey(item.manufacturer, item.name));
      const row = document.createElement("div");
      row.className = "site-list-item item-list-row" + (isDeleted ? " item-deleted" : "");
      row.innerHTML = `
        <div class="site-list-info">
          <div class="site-list-name">
            ${item.name}
            ${item.isCustom
              ? '<span class="item-badge item-badge-custom">カスタム</span>'
              : '<span class="item-badge item-badge-builtin">標準</span>'}
            ${isDeleted ? '<span class="item-badge item-badge-deleted">削除済</span>' : ""}
          </div>
          <div class="site-list-address">${item.manufacturer}</div>
        </div>
        <div class="item-list-actions">
          ${isDeleted
            ? `<button class="restore-item-btn site-delete-btn restore-btn" data-key="${itemKey(item.manufacturer, item.name)}">復元</button>`
            : `<button class="delete-item-btn site-delete-btn" data-key="${itemKey(item.manufacturer, item.name)}" data-custom="${item.isCustom}" data-name="${item.name}">削除</button>`
          }
        </div>
      `;
      groupEl.appendChild(row);
    });
    itemList.appendChild(groupEl);
  });

  itemList.querySelectorAll(".delete-item-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.key;
      const isCustom = btn.dataset.custom === "true";
      const name = btn.dataset.name;
      showConfirm(`「${name}」を削除してよろしいですか？`, () => {
        if (isCustom) {
          appState.customItems = appState.customItems.filter(
            i => itemKey(i.manufacturer, i.name) !== key
          );
          saveCustomItems();
        } else {
          if (!appState.deletedItemKeys.includes(key)) {
            appState.deletedItemKeys.push(key);
          }
          saveDeletedItemKeys();
        }
        render();
        renderItemList(itemListCategoryFilter.value);
      });
    });
  });

  itemList.querySelectorAll(".restore-item-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.key;
      appState.deletedItemKeys = appState.deletedItemKeys.filter(k => k !== key);
      saveDeletedItemKeys();
      render();
      renderItemList(itemListCategoryFilter.value);
      showToast("材料を復元しました");
    });
  });
}

function addItem() {
  const category = newItemCategory.value;
  const manufacturer = newItemMaker.value.trim();
  const name = newItemName.value.trim();
  const units = parseCSV(newItemUnits.value);
  const capacities = parseCSV(newItemCapacities.value);
  const colorMode = newItemColorMode.value;
  const colorNames = parseCSV(newItemColorNames.value);
  const defaultColorCode = newItemDefaultColorCode.value.trim();
  const glosses = parseCSV(newItemGlosses.value);

  if (!category || !manufacturer || !name || units.length === 0) {
    showToast("カテゴリ・メーカー・商品名・単位は必須です");
    return;
  }

  const existing = [...supplies, ...paints, ...appState.customItems];
  if (existing.some(i => i.manufacturer === manufacturer && i.name === name)) {
    showToast(`「${name}」は既に登録されています`);
    return;
  }

  const newItem = {
    id: Date.now(),
    category,
    manufacturer,
    name,
    quantity: 1,
    unitOptions: units,
    defaultUnit: units[0],
    isCustom: true,
    ...(capacities.length > 0 && {
      capacityOptions: capacities,
      defaultCapacity: capacities[0]
    }),
    colorMode,
    colorNameOptions: colorNames,
    defaultColorName: colorNames[0] || "",
    colorCodeEnabled: colorMode === "code",
    defaultColorCode: colorMode === "code" ? defaultColorCode : "",
    glossOptions: glosses,
    defaultGloss: glosses[0] || ""
  };

  appState.customItems.push(newItem);
  saveCustomItems();
  render();
  renderItemList(itemListCategoryFilter.value);
  resetItemForm();
  showToast(`「${name}」を追加しました`);
}

/* ── Combobox ─────────────────────────────── */

function getComboboxOptions() {
  return ["なし", ...appState.registeredSites.map(s => s.name)];
}

function renderComboboxDropdown(filter = "") {
  const dropdown = document.getElementById("siteDropdown");
  const options = getComboboxOptions().filter(name =>
    filter === "" || name.toLowerCase().includes(filter.toLowerCase())
  );

  dropdown.innerHTML = "";
  if (options.length === 0) {
    const empty = document.createElement("div");
    empty.className = "combobox-empty";
    empty.textContent = "候補がありません";
    dropdown.appendChild(empty);
    return;
  }

  options.forEach(name => {
    const item = document.createElement("div");
    item.className = "combobox-option";
    if (name === siteNameInput.value) item.classList.add("selected");
    item.textContent = name;
    item.addEventListener("mousedown", (e) => {
      e.preventDefault();
      selectComboboxOption(name);
    });
    dropdown.appendChild(item);
  });
}

function openCombobox() {
  const dropdown = document.getElementById("siteDropdown");
  renderComboboxDropdown();
  dropdown.style.display = "block";
  document.getElementById("siteCombobox").classList.add("open");
}

function closeCombobox() {
  const dropdown = document.getElementById("siteDropdown");
  dropdown.style.display = "none";
  document.getElementById("siteCombobox").classList.remove("open");
}

function selectComboboxOption(name) {
  siteNameInput.value = name;
  appState.selectedSiteName = name;
  closeCombobox();
  autoFillAddress(name);
  refreshPreview();
}

function updateSiteDatalist() {
  // Re-render dropdown if open
  const dropdown = document.getElementById("siteDropdown");
  if (dropdown && dropdown.style.display === "block") {
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

/* ── Modal ────────────────────────────────── */

function openModal() {
  renderSiteList();
  siteModal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  siteModal.style.display = "none";
  document.body.style.overflow = "";
  newSiteNameInput.value = "";
  newSiteAddressInput.value = "";
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
      const idx = Number(btn.dataset.index);
      const siteName = appState.registeredSites[idx].name;
      showConfirm(`「${siteName}」を削除してよろしいですか？`, () => {
        appState.registeredSites.splice(idx, 1);
        saveRegisteredSites();
        updateSiteDatalist();
        renderSiteList();
      });
    });
  });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
}

function showConfirm(message, onOk) {
  const modal = document.getElementById("confirmModal");
  document.getElementById("confirmMessage").textContent = message;
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";

  const okBtn = document.getElementById("confirmOkBtn");
  const cancelBtn = document.getElementById("confirmCancelBtn");

  function cleanup() {
    modal.style.display = "none";
    document.body.style.overflow = "";
    okBtn.replaceWith(okBtn.cloneNode(true));
    cancelBtn.replaceWith(cancelBtn.cloneNode(true));
  }

  document.getElementById("confirmOkBtn").addEventListener("click", () => {
    cleanup();
    onOk();
  });

  document.getElementById("confirmCancelBtn").addEventListener("click", cleanup);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) cleanup();
  }, { once: true });
}

function addSite() {
  const name = newSiteNameInput.value.trim();
  const address = newSiteAddressInput.value.trim();
  if (!name || !address) return;
  if (appState.registeredSites.some(s => s.name === name)) {
    alert(`「${name}」はすでに登録されています。`);
    return;
  }
  appState.registeredSites.push({ name, address });
  saveRegisteredSites();
  updateSiteDatalist();
  newSiteNameInput.value = "";
  newSiteAddressInput.value = "";
  renderSiteList();
  showToast(`「${name}」を登録しました`);
}

function getBuiltinItemsForCategory(category) {
  const all = [...supplies, ...paints];
  return all
    .filter(item => item.category === category)
    .filter(item => !appState.deletedItemKeys.includes(itemKey(item.manufacturer, item.name)));
}

function getItemsByTab(tabName) {
  const builtin = getBuiltinItemsForCategory(tabName);
  const custom = appState.customItems.filter(item => item.category === tabName);
  return [...builtin, ...custom];
}

function getHeaderText() {
  return `お世話になります。
4Uの${appState.selectedStaffName}です。
下記の注文を${appState.selectedLocation}でお願いいたします。`;
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

    let line = "・" + parts.join(" ");
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

function updateCopyButtonState() {
  const isOnsite = appState.selectedLocation === "現場入れ";
  const hasValidSiteName = appState.selectedSiteName.trim() !== "" && appState.selectedSiteName.trim() !== "なし";
  const hasAddress = appState.selectedAddress.trim().length > 0;
  copyBtn.disabled = isOnsite && !(hasValidSiteName && hasAddress);
  copyBtn.style.opacity = copyBtn.disabled ? "0.45" : "";
  copyBtn.style.cursor = copyBtn.disabled ? "not-allowed" : "";
}

function refreshPreview() {
  const ordered = buildOrderLines();

  let suffix = "";
  if (appState.selectedSiteName && appState.selectedSiteName !== "なし") {
    suffix += `\n\n\n現場名：${appState.selectedSiteName}`;
    if (appState.selectedLocation === "現場入れ" && appState.selectedAddress.trim()) {
      suffix += `\n現場住所：${appState.selectedAddress.trim()}`;
    }
  } else if (appState.selectedLocation === "現場入れ" && appState.selectedAddress.trim()) {
    suffix += `\n\n\n現場住所：${appState.selectedAddress.trim()}`;
  }

  if (!ordered.length) {
    resultText.value = PLACEHOLDER_TEXT;
  } else {
    resultText.value = `${getHeaderText()}\n\n${ordered.join("\n")}${suffix}`;
  }

  updateCopyButtonState();
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
  if (copyBtn.disabled) return;
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

locationSelect.addEventListener("change", (e) => {
  appState.selectedLocation = e.target.value;
  const isOnsite = e.target.value === "現場入れ";
  addressField.style.display = isOnsite ? "grid" : "none";
  const siteRequiredBadge = document.querySelector(".site-required-badge");
  if (siteRequiredBadge) siteRequiredBadge.style.display = isOnsite ? "inline-block" : "none";
  if (!isOnsite) {
    appState.selectedAddress = "";
    addressInput.value = "";
  }
  refreshPreview();
});

siteNameInput.addEventListener("input", (e) => {
  appState.selectedSiteName = e.target.value;
  renderComboboxDropdown(e.target.value);
  document.getElementById("siteDropdown").style.display = "block";
  document.getElementById("siteCombobox").classList.add("open");
  refreshPreview();
});

siteNameInput.addEventListener("focus", () => {
  openCombobox();
});

siteNameInput.addEventListener("blur", () => {
  // Delay to allow mousedown on option to fire first
  setTimeout(closeCombobox, 150);
});

siteComboboxBtn.addEventListener("click", () => {
  const dropdown = document.getElementById("siteDropdown");
  if (dropdown.style.display === "block") {
    closeCombobox();
  } else {
    siteNameInput.focus();
    openCombobox();
  }
});

siteNameInput.addEventListener("change", (e) => {
  autoFillAddress(e.target.value);
});

openSiteModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
siteModal.addEventListener("click", (e) => {
  if (e.target === siteModal) closeModal();
});
addSiteBtn.addEventListener("click", addSite);
newSiteAddressInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addSite();
});

addressInput.addEventListener("input", (e) => {
  appState.selectedAddress = e.target.value;
  refreshPreview();
});

openItemModalBtn.addEventListener("click", openItemModal);
closeItemModalBtn.addEventListener("click", closeItemModal);
itemModal.addEventListener("click", (e) => { if (e.target === itemModal) closeItemModal(); });
addItemBtn.addEventListener("click", addItem);
newItemColorMode.addEventListener("change", updateColorFields);
itemListCategoryFilter.addEventListener("change", () => renderItemList(itemListCategoryFilter.value));
newItemName.addEventListener("keydown", (e) => { if (e.key === "Enter") addItem(); });

openTabModalBtn.addEventListener("click", openTabModal);
closeTabModalBtn.addEventListener("click", closeTabModal);
tabModal.addEventListener("click", (e) => { if (e.target === tabModal) closeTabModal(); });
addTabBtn.addEventListener("click", addTab);
newTabNameInput.addEventListener("keydown", (e) => { if (e.key === "Enter") addTab(); });

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

loadRegisteredSites();
loadCustomItems();
loadDeletedItemKeys();
loadTabs();
updateSiteDatalist();
renderTabs();
resultText.value = PLACEHOLDER_TEXT;
render();
updateScrollButtonVisibility();
