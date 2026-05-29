import { useEffect } from 'react';

export function isEditableTarget(target) {
  const element = target?.nodeType === Node.ELEMENT_NODE ? target : target?.parentElement;

  if (!element) {
    return false;
  }

  return Boolean(element.closest('input, textarea, select, [contenteditable="true"]'));
}

function warnBlockedAction() {
  console.warn('Content protection is enabled for Rithika Hub.');
}

function isBlockedShortcut(event) {
  const key = event.key.toLowerCase();
  const hasModifier = event.ctrlKey || event.metaKey;

  if (key === 'f12') {
    return true;
  }

  if (hasModifier && ['u', 's'].includes(key)) {
    return true;
  }

  return hasModifier && event.shiftKey && ['i', 'j', 'c'].includes(key);
}

export default function useContentProtection() {
  useEffect(() => {
    function blockOutsideEditable(event) {
      if (isEditableTarget(event.target)) {
        return;
      }

      event.preventDefault();
      warnBlockedAction();
    }

    function handleKeyDown(event) {
      if (isEditableTarget(event.target) || !isBlockedShortcut(event)) {
        return;
      }

      event.preventDefault();
      warnBlockedAction();
    }

    document.addEventListener('contextmenu', blockOutsideEditable, true);
    document.addEventListener('dragstart', blockOutsideEditable, true);
    document.addEventListener('copy', blockOutsideEditable, true);
    document.addEventListener('cut', blockOutsideEditable, true);
    document.addEventListener('keydown', handleKeyDown, true);

    return () => {
      document.removeEventListener('contextmenu', blockOutsideEditable, true);
      document.removeEventListener('dragstart', blockOutsideEditable, true);
      document.removeEventListener('copy', blockOutsideEditable, true);
      document.removeEventListener('cut', blockOutsideEditable, true);
      document.removeEventListener('keydown', handleKeyDown, true);
    };
  }, []);
}
