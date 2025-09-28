// Полностью отключаем все консольные логи в development
if (process.env.NODE_ENV === 'development') {
  const noop = () => {};
  
  // Переопределяем все методы console
  console.log = noop;
  console.warn = noop;
  console.error = noop;
  console.info = noop;
  console.debug = noop;
  console.trace = noop;
  console.group = noop;
  console.groupCollapsed = noop;
  console.groupEnd = noop;
  console.table = noop;
  console.time = noop;
  console.timeEnd = noop;
  console.count = noop;
  console.countReset = noop;
  console.assert = noop;
  console.clear = noop;
  
  // Отключаем window.onerror
  if (typeof window !== 'undefined') {
    window.onerror = null;
    window.onunhandledrejection = null;
    
    // Переопределяем addEventListener для error событий
    const originalAddEventListener = window.addEventListener;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    window.addEventListener = function(type: string, listener: any, options?: any) {
      if (type === 'error' || type === 'unhandledrejection') {
        return;
      }
      return originalAddEventListener.call(this, type, listener, options);
    };
  }
}