import * as _tiptap_extension_horizontal_rule from '@tiptap/extension-horizontal-rule';
import * as tiptap_extension_auto_joiner from 'tiptap-extension-auto-joiner';
import * as tiptap_markdown from 'tiptap-markdown';
import * as _tiptap_extension_highlight from '@tiptap/extension-highlight';
import * as _tiptap_extension_color from '@tiptap/extension-color';
import * as _tiptap_extension_text_style from '@tiptap/extension-text-style';
import * as _tiptap_extension_underline from '@tiptap/extension-underline';
import * as _tiptap_core from '@tiptap/core';
import { Mark, Editor, Extension, Range } from '@tiptap/core';
export { InputRule } from '@tiptap/core';
import * as _tiptap_extension_placeholder from '@tiptap/extension-placeholder';
export { default as StarterKit } from '@tiptap/starter-kit';
export { default as TiptapLink } from '@tiptap/extension-link';
import * as _tiptap_extension_image from '@tiptap/extension-image';
export { default as TiptapImage } from '@tiptap/extension-image';
export { TaskItem } from '@tiptap/extension-task-item';
export { TaskList } from '@tiptap/extension-task-list';
import { FC, ReactNode } from 'react';

declare const UpdatedImage: _tiptap_core.Node<_tiptap_extension_image.ImageOptions, any>;

declare const ImageResizer: FC;

interface AIHighlightOptions {
    HTMLAttributes: Record<string, any>;
}
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        AIHighlight: {
            /**
             * Set a AIHighlight mark
             */
            setAIHighlight: (attributes?: {
                color: string;
            }) => ReturnType;
            /**
             * Toggle a AIHighlight mark
             */
            toggleAIHighlight: (attributes?: {
                color: string;
            }) => ReturnType;
            /**
             * Unset a AIHighlight mark
             */
            unsetAIHighlight: () => ReturnType;
        };
    }
}
declare const inputRegex: RegExp;
declare const pasteRegex: RegExp;
declare const AIHighlight: Mark<AIHighlightOptions, any>;
declare const removeAIHighlight: (editor: Editor) => void;
declare const addAIHighlight: (editor: Editor, color?: string) => void;

declare const Command: Extension<any, any>;
declare const renderItems: () => {
    onStart: (props: {
        editor: Editor;
        clientRect: DOMRect;
    }) => false | undefined;
    onUpdate: (props: {
        editor: Editor;
        clientRect: DOMRect;
    }) => void;
    onKeyDown: (props: {
        event: KeyboardEvent;
    }) => any;
    onExit: () => void;
};
interface SuggestionItem {
    title: string;
    description: string;
    icon: ReactNode;
    searchTerms?: string[];
    command?: (props: {
        editor: Editor;
        range: Range;
    }) => void;
}
declare const createSuggestionItems: (items: SuggestionItem[]) => SuggestionItem[];
declare const handleCommandNavigation: (event: KeyboardEvent) => true | undefined;

declare const getPrevText: (editor: Editor, { chars, offset, }: {
    chars: number;
    offset?: number | undefined;
}) => any;

declare const PlaceholderExtension: _tiptap_core.Extension<_tiptap_extension_placeholder.PlaceholderOptions, any>;
declare const simpleExtensions: readonly [_tiptap_core.Mark<_tiptap_extension_underline.UnderlineOptions, any>, _tiptap_core.Mark<_tiptap_extension_text_style.TextStyleOptions, any>, _tiptap_core.Extension<_tiptap_extension_color.ColorOptions, any>, _tiptap_core.Mark<_tiptap_extension_highlight.HighlightOptions, any>, _tiptap_core.Extension<tiptap_markdown.MarkdownOptions, tiptap_markdown.MarkdownStorage>, _tiptap_core.Extension<any, any>, _tiptap_core.Extension<any, any>, _tiptap_core.Extension<tiptap_extension_auto_joiner.AutoJoinerOptions, any>];
declare const Horizontal: _tiptap_core.Node<_tiptap_extension_horizontal_rule.HorizontalRuleOptions, any>;

export { AIHighlight, type AIHighlightOptions, Command, Horizontal as HorizontalRule, ImageResizer, PlaceholderExtension as Placeholder, type SuggestionItem, UpdatedImage, addAIHighlight, createSuggestionItems, getPrevText, handleCommandNavigation, inputRegex, pasteRegex, removeAIHighlight, renderItems, simpleExtensions };
