window.addEventListener('contextmenu', function(e) {
  if (e.target.className.indexOf('xdddd-generator-extension') === -1) {
    e.target.classList.add('xdddd-generator-extension')
  }
})

chrome.runtime.onMessage.addListener(function(request) {
  var targetInput = document.getElementsByClassName('xdddd-generator-extension')[0]
  switch (request.menuItemId) {
  case 'xdddd-generator-context-menu-item-1':
    targetInput.value = 'XD'
    break
  case 'xdddd-generator-context-menu-item-2':
    targetInput.value = 'XDDDDD'
    break
  case 'xdddd-generator-context-menu-item-3':
    targetInput.value = 'XDDDDDDDDDDDDDD'
    break
  case 'xdddd-generator-context-menu-item-4':
    targetInput.value = 'XDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD'
    break
  }
  targetInput.classList.remove('xdddd-generator-extension')
})
