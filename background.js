var contextMenuConfig = [
  {
    id: 'xdddd-generator-context-menu',
    title: 'XD',
    contexts: ['editable']
  },
  {
    id: 'xdddd-generator-context-menu-item-1',
    title: 'XD',
    parentId: 'xdddd-generator-context-menu',
    contexts: ['editable']
  },
  {
    id: 'xdddd-generator-context-menu-item-2',
    title: 'XDDDDD',
    parentId: 'xdddd-generator-context-menu',
    contexts: ['editable']
  },
  {
    id: 'xdddd-generator-context-menu-item-3',
    title: 'XDDDDDDDDDDDDDD',
    parentId: 'xdddd-generator-context-menu',
    contexts: ['editable']
  },
  {
    id: 'xdddd-generator-context-menu-item-4',
    title: 'XDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD',
    parentId: 'xdddd-generator-context-menu',
    contexts: ['editable']
  }
]
contextMenuConfig.forEach(function(config) {
  chrome.contextMenus.create(config)
})
chrome.contextMenus.onClicked.addListener(function(info) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {menuItemId: info.menuItemId});
  });
})
