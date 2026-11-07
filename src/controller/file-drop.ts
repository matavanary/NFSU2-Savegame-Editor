/**
 * Directive that handles drag-and-drop file upload.
 * Usage: `<div nfsu-file-drop="loadFile">...</div>`.
 */
export function nfsuFileDrop(): angular.IDirective {
  return {
    restrict: 'A',
    link(scope: angular.IScope, element: angular.IAugmentedJQuery, attrs: angular.IAttributes) {
      const rawScope = scope as unknown as { isDragging: boolean; [key: string]: unknown };
      const handlerName = attrs['nfsuFileDrop'] as string;

      element.on('dragover', (event: Event) => {
        event.preventDefault();
        event.stopPropagation();
        const dragEvent = event as DragEvent;
        if (dragEvent.dataTransfer) {
          dragEvent.dataTransfer.dropEffect = 'copy';
        }
        scope.$apply(() => {
          rawScope.isDragging = true;
        });
      });

      element.on('dragleave', (event: Event) => {
        event.preventDefault();
        event.stopPropagation();
        scope.$apply(() => {
          rawScope.isDragging = false;
        });
      });

      element.on('drop', (event: Event) => {
        event.preventDefault();
        event.stopPropagation();
        const dragEvent = event as DragEvent;
        const files = dragEvent.dataTransfer ? dragEvent.dataTransfer.files : null;
        scope.$apply(() => {
          rawScope.isDragging = false;
          if (files && files.length > 0) {
            const handler = rawScope[handlerName] as ((file: File | null) => void) | undefined;
            if (typeof handler === 'function') {
              handler(files[0]);
            }
          }
        });
      });
    },
  };
}
