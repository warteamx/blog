import type { Root } from 'mdast';

const FILENAME_PATTERN = /(?:filename|title)="([^"]+)"/;

type ContentNode = {
  type?: string;
  meta?: string;
  data?: {
    hProperties?: Record<string, string>;
  };
  children?: ContentNode[];
};

function visitCodeBlocks(node: ContentNode, onCodeBlock: (node: ContentNode) => void) {
  if (node.type === 'code') {
    onCodeBlock(node);
  }

  node.children?.forEach((child) => visitCodeBlocks(child, onCodeBlock));
}

export function remarkCodeFilename() {
  return (tree: Root) => {
    visitCodeBlocks(tree as ContentNode, (node) => {
      const filename = node.meta?.match(FILENAME_PATTERN)?.[1];

      if (!filename) {
        return;
      }

      node.data ??= {};
      node.data.hProperties = {
        ...(node.data.hProperties ?? {}),
        'data-filename': filename,
      };
    });
  };
}
